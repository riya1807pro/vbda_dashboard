import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { name, role, company, achievement } = await req.json();

  const prompt = `Write a warm, professional invitation for ${name}, a ${role} at ${company}, highlighting their recent achievement: ${achievement}.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  const emailText = completion.choices[0].message.content;
  return NextResponse.json({ email: emailText });
}
