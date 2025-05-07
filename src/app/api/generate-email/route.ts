import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Resend } from 'resend';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { name, role, company, achievement, recipients } = await req.json();

  const prompt = `Write a warm, professional invitation for ${name}, a ${role} at ${company}, highlighting their recent achievement: ${achievement}.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });

  const emailText = completion.choices[0].message.content;

  // Send email using Resend
  try {
    await resend.emails.send({
      from: 'Riya Kaushik <your_verified@email.com>',      // use your verified sender here
      to: recipients.split(',').map((email: string) => email.trim()),
      subject: `Invitation for ${name}`,
      text: emailText!,
    });

    return NextResponse.json({ success: true, email: emailText });
  } catch (err) {
    console.error('Email send failed:', err);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
