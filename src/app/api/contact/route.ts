import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(80).trim(),
  email: z.string().email().trim().toLowerCase(),
  budget: z.string().min(1).max(50),
  projectType: z.string().min(1).max(80),
  message: z.string().min(20).max(2000).trim(),
});

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

    // TODO: Replace this with your email provider (e.g., Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'ronit@example.com',
    //   subject: `New contact: ${name} — ${projectType}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Budget:</strong> ${budget}</p><p><strong>Type:</strong> ${projectType}</p>
    //          <p><strong>Message:</strong><br/>${message}</p>`,
    // });

    console.log('Contact form submission:', { name, email, budget, projectType, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
