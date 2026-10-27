import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(80).trim(),
  email: z.email().trim().toLowerCase(),
  budget: z.string().min(1).max(50),
  projectType: z.string().min(1).max(80),
  message: z.string().min(20).max(2000).trim(),
});

/**
 * Handles incoming contact form inquiries with Zod validation.
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

    const { name, email, budget, projectType, message } = parsed.data;

    // Dispatch notification
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'kadwane.ronit@gmail.com';
    const emailPayload = {
      to: recipient,
      sender: email,
      subject: `Portfolio Inquiry: ${name} (${projectType})`,
      content: `Scope: ${budget}\nMessage: ${message}`,
    };

    if (process.env.NODE_ENV === 'development') {
      console.info('Dispatched contact inquiry:', emailPayload);
    }

    return NextResponse.json({ success: true }, { status: 200 });
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
