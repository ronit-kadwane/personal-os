import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(80).trim(),
  email: z.email().trim().toLowerCase(),
  budget: z.string().min(1).max(50),
  projectType: z.string().min(1).max(80),
  message: z.string().min(20).max(2000).trim(),
});

type ContactPayload = z.infer<typeof contactSchema>;

/**
 * Escapes special HTML entities to prevent malformed tags in Telegram messages.
 *
 * @param text - Raw input string
 * @returns Escaped HTML string safe for Telegram parse_mode='HTML'
 */
function escapeTelegramHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Checks whether an environment variable is set and not a placeholder dummy value.
 *
 * @param val - Optional environment variable value
 * @returns True if configured with a real value, false otherwise
 */
function isConfigured(val?: string): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  return (
    trimmed.length > 0 &&
    !trimmed.includes('your_') &&
    !trimmed.includes('dummy_') &&
    !trimmed.includes('PLACEHOLDER')
  );
}

/**
 * Dispatches contact inquiry details to Telegram Bot API.
 *
 * @param payload - Validated contact inquiry data
 * @returns Object indicating dispatch result
 */
async function dispatchTelegramNotification(
  payload: ContactPayload,
): Promise<{ success: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!isConfigured(botToken) || !isConfigured(chatId)) {
    return { success: false, error: 'Telegram credentials unconfigured or placeholder' };
  }

  const messageText = [
    '🚀 <b>New Portfolio Inquiry</b>',
    '',
    `👤 <b>Name:</b> ${escapeTelegramHtml(payload.name)}`,
    `✉️ <b>Email:</b> ${escapeTelegramHtml(payload.email)}`,
    `💼 <b>Scope / Engagement:</b> ${escapeTelegramHtml(payload.budget)}`,
    `🛠 <b>Role / Type:</b> ${escapeTelegramHtml(payload.projectType)}`,
    '',
    '📝 <b>Message:</b>',
    `<code>${escapeTelegramHtml(payload.message)}</code>`,
  ].join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      const description = data.description || 'Unknown Telegram API error';
      console.error('Telegram dispatch failed:', description);
      return { success: false, error: description };
    }

    return { success: true };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : 'Network error';
    console.error('Telegram request error:', errorMsg);
    return { success: false, error: errorMsg };
  }
}

/**
 * Handles incoming contact form inquiries with Zod validation and Telegram Bot dispatch.
 *
 * @param request - NextRequest holding the contact form submission payload
 * @returns NextResponse with status confirmation or field validation errors
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const payload = parsed.data;

    // Check if Telegram notifications are configured
    const isTelegramActive =
      isConfigured(process.env.TELEGRAM_BOT_TOKEN) && isConfigured(process.env.TELEGRAM_CHAT_ID);

    if (isTelegramActive) {
      const result = await dispatchTelegramNotification(payload);
      if (!result.success) {
        return NextResponse.json(
          { error: 'Unable to deliver message at this time', details: result.error },
          { status: 502 },
        );
      }
    } else {
      // In development or when using placeholders, log payload to avoid dropping data
      console.info('Contact inquiry received (Telegram credentials pending):', {
        name: payload.name,
        email: payload.email,
        budget: payload.budget,
        projectType: payload.projectType,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true, delivered: isTelegramActive }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * Rejects GET requests to the contact endpoint.
 *
 * @returns NextResponse with a 405 Method Not Allowed error
 */
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
