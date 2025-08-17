import { SocialIcon } from "react-social-icons";

const SocialLinks = () => {
	return (
		<div className="flex justify-center my-6">
			<div className="flex space-x-4">
				<SocialIcon
					url="https://github.com/kimurash"
					target="_blank"
					rel="noopener noreferrer"
					fgColor="white"
					bgColor="#1f2937"
				/>
				<SocialIcon
					url="https://x.com/XeRn1227"
					target="_blank"
					rel="noopener noreferrer"
					fgColor="white"
					bgColor="#1f2937"
				/>
			</div>
		</div>
	);
};

export default SocialLinks;
