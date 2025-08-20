import AboutSection from "./_components/about/AboutSection";
import CertificationSection from "./_components/certification/CertificationSection";
import ResumeSection from "./_components/resume/ResumeSection";

const AboutPage = () => {
	return (
		<div className="mx-auto px-8 sm:px-14 lg:px-16">
			<AboutSection />
			<ResumeSection />
			<CertificationSection />
			<div className="mt-50"></div>
		</div>
	);
};

export default AboutPage;
