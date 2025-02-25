// /src/app/api/route.ts

import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, message: 'All fields are required!' }, { status: 400 });
  }

  const msg = {
    to: process.env.RECEIVER_EMAIL as string,
    from: process.env.SENDER_EMAIL as string,
    subject: `New message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
