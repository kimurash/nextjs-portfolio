import type { ContactFormValues } from "@/lib/schemas";
import {
	Body,
	Container,
	Head,
	Html,
	Tailwind,
	Text,
} from "@react-email/components";

interface Props extends ContactFormValues {}

const ContactFormEmailTemplate = ({ name, email, subject, message }: Props) => {
	return (
		<Html lang="ja">
			<Head />
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans">
					<Container className="border border-solid border-gray-300 rounded my-10 mx-auto p-5 w-[465px]">
						<Text className="text-black text-sm leading-6">
							下記の内容でお問い合わせがありました。
						</Text>

						<div className="my-4">
							<p className="text-sm leading-6 m-0">
								<strong>お名前:</strong>
							</p>
							<p className="text-sm leading-6 m-0">{name}</p>
						</div>

						<div className="my-4">
							<p className="text-sm leading-6 m-0">
								<strong>メールアドレス:</strong>
							</p>
							<p className="text-sm leading-6 m-0">{email}</p>
						</div>

						<div className="my-4">
							<p className="text-sm leading-6 m-0">
								<strong>件名:</strong>
							</p>
							<p className="text-sm leading-6 m-0">{subject}</p>
						</div>

						<div className="my-4">
							<p className="text-sm leading-6 m-0">
								<strong>お問い合わせ内容:</strong>
							</p>
							<p className="text-sm leading-6 m-0 whitespace-pre-wrap font-mono bg-gray-100 p-3 rounded-md">
								{message}
							</p>
						</div>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactFormEmailTemplate;
