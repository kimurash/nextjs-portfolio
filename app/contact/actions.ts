"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { Resend } from "resend";
import ContactFormEmailTemplate from "./_components/ContactFormEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactFormEmail(formData: ContactFormValues) {
	const result = contactFormSchema.safeParse(formData);

	if (!result.success) {
		console.error(result.error.issues);
		return {
			success: false,
			error: "バリデーションエラー",
		};
	}

	const { name, email, subject, message } = result.data;

	const { data, error } = await resend.emails.send({
		from: "onboarding@resend.dev",
		// biome-ignore lint/style/noNonNullAssertion: negligence
		to: [process.env.CONTACT_FORM_RECIPIENT_EMAIL!],
		subject: "ポートフォリオサイトからのお問い合わせ",
		replyTo: email,
		react: ContactFormEmailTemplate({ name, email, subject, message }),
	});

	if (error) {
		console.error(error);
		return { success: false, error: "メールの送信に失敗しました" };
	}

	return { success: true, data };
}
