"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { CircleCheck, CircleX, MailWarning } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { sendContactFormEmail } from "../actions";

const ContactForm = () => {
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	const { executeRecaptcha } = useGoogleReCaptcha();

	async function onSubmit(values: ContactFormValues) {
		if (!executeRecaptcha) {
			toast.error("reCAPTCHAが利用できません", {
				closeButton: true,
				icon: <CircleX size={22} className="text-red-500" />,
			});
			return;
		}

		const reCaptchaToken = await executeRecaptcha("contact_form_submit");
		const result = await sendContactFormEmail(values, reCaptchaToken);

		if (!result.success) {
			toast.error(result.error, {
				closeButton: true,
				icon: <MailWarning size={22} className="text-red-500" />,
			});
			return;
		}

		toast.success("お問い合わせが送信されました！", {
			closeButton: true,
			icon: <CircleCheck size={22} className="text-green-500" />,
		});
		form.reset();
	}

	return (
		<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg border p-8">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-base font-medium text-gray-800">
											お名前
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className="w-full border-2 border-gray-400 focus-visible:ring-2 focus-visible:ring-sky-500/50"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-base font-medium text-gray-800">
											メールアドレス
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className="w-full border-2 border-gray-400 focus-visible:ring-2 focus-visible:ring-sky-500/50"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base font-medium text-gray-800">
									件名
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className="w-full border-2 border-gray-400 focus-visible:ring-2 focus-visible:ring-sky-500/50"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base font-medium text-gray-800">
									お問い合わせ内容
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										rows={12}
										className="w-full border-2 border-gray-400 focus-visible:ring-2 focus-visible:ring-sky-500/50 resize-vertical min-h-[200px]"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="text-center pt-4">
						<Button
							type="submit"
							disabled={form.formState.isSubmitting}
							className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-6 px-12 rounded-md transition-colors duration-200 shadow-sm"
						>
							{form.formState.isSubmitting ? "送信中..." : "送信"}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default ContactForm;
