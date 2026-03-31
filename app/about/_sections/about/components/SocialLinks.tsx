import type { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";

interface SocialLinkProps {
	href: string;
	ariaLabel: string;
	icon: ReactNode;
	className: string;
}

const socialLinks: SocialLinkProps[] = [
	{
		href: "https://github.com/kimurash",
		ariaLabel: "GitHubプロフィールを開く",
		icon: <FaGithub size={29} />,
		className: "bg-gray-800 text-white hover:bg-gray-700",
	},
	{
		href: "https://x.com/XeRn1227",
		ariaLabel: "X（旧Twitter）プロフィールを開く",
		icon: <FaXTwitter size={28} />,
		className: "bg-gray-800 text-white hover:bg-gray-700",
	},
	{
		href: "https://www.linkedin.com/in/shunsei-kimura/",
		ariaLabel: "LinkedInプロフィールを開く",
		icon: <FaLinkedin size={28} />,
		className: "bg-[#0B66C3] text-white hover:bg-[#006097]",
	},
	{
		href: "https://zenn.dev/shunsei",
		ariaLabel: "Zennプロフィールを開く",
		icon: <SiZenn size={28} />,
		className: "bg-slate-200 text-[#3EA8FF] hover:bg-slate-300 border border-slate-300",
	},
];

const SocialLinks = () => {
	const baseClassName =
		"rounded-full p-2.5 transition flex items-center justify-center";

	return (
		<div className="flex justify-center my-6">
			<div className="flex space-x-4">
				{socialLinks.map((link) => (
					<a
						key={link.href}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.ariaLabel}
						className={`${baseClassName} ${link.className}`}
					>
						{link.icon}
					</a>
				))}
			</div>
		</div>
	);
};

export default SocialLinks;
