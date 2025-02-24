import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({
    required_error: "必須項目です。"
  }).min(1, "必須項目です。"),
  email: z.string({
    required_error: "必須項目です。"
  }).email("メールアドレス形式で入力してください。"),
  company: z.string().optional(),
  inquiryType: z.enum(['general', 'business'], {
    required_error: "必須項目です。",
  }),
  message: z.string({
    required_error: "必須項目です。"
  }).min(1, "必須項目です。"),
  privacyPolicy: z.literal(true, {
    required_error: "プライバシーポリシーに同意の上、送信してください。",
  }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>