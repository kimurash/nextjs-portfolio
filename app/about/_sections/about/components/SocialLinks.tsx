import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";

const SocialLinks = () => {
	return (
		<div className="flex justify-center my-6">
			<div className="flex space-x-4">
				<a
					href="https://github.com/kimurash"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHubプロフィールを開く"
					className="rounded-full bg-gray-800 p-2.5 text-white hover:bg-gray-700 transition flex items-center justify-center"
				>
					<FaGithub size={29} />
				</a>
				<a
					href="https://x.com/XeRn1227"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="X（旧Twitter）プロフィールを開く"
					className="rounded-full bg-gray-800 p-2.5 text-white hover:bg-gray-700 transition flex items-center justify-center"
				>
					<FaXTwitter size={28} />
				</a>
				<a
					href="https://zenn.dev/shunsei"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Zennプロフィールを開く"
					className="rounded-full bg-slate-200 p-2.5 text-[#3EA8FF] hover:bg-slate-300 border border-slate-300 transition"
				>
					<SiZenn size={28} color="#3EA8FF" />
				</a>
			</div>
		</div>
	);
};

export default SocialLinks;
