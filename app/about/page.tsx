import AboutSection from "./_components/about/AboutSection";
import CertificationSection from "./_components/certification/CertificationSection";
import ResumeSection from "./_components/resume/ResumeSection";

const AboutPage = () => {
	return (
		<div className="max-w-5xl mx-auto px-8 sm:px-14 lg:px-16 mb-30">
			<AboutSection />
			<ResumeSection />
			<CertificationSection />
		</div>
	);
};

export default AboutPage;
