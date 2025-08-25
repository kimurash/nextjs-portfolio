import { Mail } from "lucide-react";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
	return (
		<div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-16 mb-30 pt-8">
			<div className="mb-8 text-center">
				<h1 className="text-4xl font-bold text-gray-900">
					<Mail className="inline mr-2 mb-1" size={35} />
					Contact
				</h1>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
