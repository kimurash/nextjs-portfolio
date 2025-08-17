import { CircleUser } from "lucide-react";
import Profile from "./Profile";
import SelfIntroduction from "./SelfIntroduction";
import SocialLinks from "./SocialLinks";

const AboutSection = () => {
	return (
		<section className="py-8">
			<div className="text-center mb-6">
				<h2 className="text-3xl font-bold text-gray-900">
					<CircleUser className="inline mr-2 mb-1" size={32} />
					About
				</h2>
			</div>
			<Profile />
			<SocialLinks />
			<SelfIntroduction />
		</section>
	);
};

export default AboutSection;
