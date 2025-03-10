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
  privacyPolicy: z.coerce.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーに同意の上、送信してください。",
  })
});
