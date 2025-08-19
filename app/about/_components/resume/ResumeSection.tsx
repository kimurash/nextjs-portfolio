import { FileText } from "lucide-react";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

const ResumeSection = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold text-gray-900">
						<FileText className="inline mr-2 mb-1" size={32} />
						Resume
					</h2>
				</div>
				<EducationHistory />
				<WorkHistory />
			</div>
		</section>
	);
};

export default ResumeSection;
