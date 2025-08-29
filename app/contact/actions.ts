"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { Resend } from "resend";
import ContactFormEmailTemplate from "./_components/ContactFormEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
// biome-ignore lint/style/noNonNullAssertion: negligence
const reCaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY!;

export async function sendContactFormEmail(
	formData: ContactFormValues,
	reCaptchaToken: string,
) {
	const reCaptchaVerified = await verifyReCaptcha(reCaptchaToken);

	if (!reCaptchaVerified) {
		return {
			success: false,
			error: "reCAPTCHAの検証に失敗しました",
		};
	}

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

async function verifyReCaptcha(reCaptchaToken: string) {
	const reCaptchaResponse = await fetch(
		"https://www.google.com/recaptcha/api/siteverify",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `secret=${encodeURIComponent(reCaptchaSecretKey)}&response=${encodeURIComponent(reCaptchaToken)}`,
		},
	);

	const reCaptchaResult = await reCaptchaResponse.json();

	if (!reCaptchaResult.success) {
		console.error(reCaptchaResult["error-codes"]);
	}

	return reCaptchaResult.success;
}
