import { z } from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, { message: "お名前を入力してください" })
		.max(30, { message: "お名前は30文字以内で入力してください" }),
	email: z
		// biome-ignore format: preference
		.email({ message: "有効なメールアドレスを入力してください" }),
	subject: z
		.string()
		.min(1, { message: "件名を入力してください" })
		.max(100, { message: "件名は100文字以内で入力してください" }),
	message: z
		.string()
		.min(1, { message: "お問い合わせ内容を入力してください" })
		.max(500, { message: "お問い合わせ内容は500文字以内で入力してください" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
