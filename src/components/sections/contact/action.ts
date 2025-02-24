"use server"

import { parseWithZod } from "@conform-to/zod";
import { revalidatePath } from "next/cache";
import { contactSchema } from "./contact-schema";

type FormState = {
  message: string;
  status?: 'error' | 'success';
} | undefined;

export async function sendContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const submission = parseWithZod(formData, { schema: contactSchema });

  if (submission.status !== "success") {
    return {
      message: "入力内容に誤りがあります。",
      status: 'error'
    };
  }

  try {
    // ここで実際のデータ処理を行う
    // 例: データベースへの保存やメール送信など
    const validatedData = submission.value;
    
    revalidatePath("/");
    return {
      message: "送信が完了しました",
      status: 'success'
    };
  } catch (error) {
    return {
      message: "送信に失敗しました。しばらく経ってから再度お試しください。",
      status: 'error'
    };
  }
}