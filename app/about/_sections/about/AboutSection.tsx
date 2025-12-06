import { CircleUser } from "lucide-react";
import Profile from "./components/Profile";
import SelfIntroduction from "./components/SelfIntroduction";
import SocialLinks from "./components/SocialLinks";

const AboutSection = () => {
	return (
		<section className="py-8">
			<div className="text-center mb-6">
				<h2 className="text-4xl font-bold text-gray-900">
					<CircleUser className="inline mr-2 mb-1" size={40} />
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
