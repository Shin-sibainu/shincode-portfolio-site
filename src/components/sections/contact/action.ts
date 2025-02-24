"use server"

import { parseWithZod } from "@conform-to/zod";
import { contactSchema } from "./contact-schema";
import { Resend } from 'resend';
import { ContactEmailTemplate } from "./EmailTemplate";

type FormState = {
  status?: 'success' | 'error';
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined');
}

export async function sendContactForm(_prevState: FormState | undefined, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    const validatedData = submission.value;
    
    // メール送信
    await resend.emails.send({
      from: 'お問い合わせフォーム <onboarding@resend.dev>',
      to: [''],
      subject: 'shinCodeポートフォリオサイトからお問い合わせがありました',
      react: ContactEmailTemplate({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        inquiryType: validatedData.inquiryType,
        message: validatedData.message
      })
    });

    return { status: 'success' } as FormState;
  } catch (error) {
    return submission.reply({
      formErrors: ['送信に失敗しました。しばらく経ってから再度お試しください。']
    });
  }
}