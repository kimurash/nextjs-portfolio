"use client";

import { Mail } from "lucide-react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
	// biome-ignore lint/style/noNonNullAssertion: negligence
	const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

	return (
		<div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-16 mb-30 pt-8">
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-bold text-gray-900">
					<Mail className="inline mr-2 mb-1" size={35} />
					Contact
				</h1>
			</div>
			<GoogleReCaptchaProvider reCaptchaKey={reCaptchaSiteKey}>
				<ContactForm />
			</GoogleReCaptchaProvider>
		</div>
	);
};

export default ContactPage;
