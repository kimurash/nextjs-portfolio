import { Code } from "lucide-react";
import ProficiencyGuide from "./_components/ProficiencyGuide";
import SkillSection from "./_components/SkillSection";
import {
	databases,
	frameworks,
	infrastructures,
	languages,
	operatingSystems,
	tools,
} from "./constants";

const SkillsPage = () => {
	return (
		<div className="min-h-screen bg-blue-50">
			<div className="container mx-auto px-10 lg:px-24 py-8">
				<div className="mb-10 text-center">
					<h1 className="text-4xl font-bold text-gray-900">
						<Code className="inline mr-2 mb-1" size={35} />
						Skills
					</h1>
				</div>

				<div className="space-y-8">
					<SkillSection category="Operating System" skills={operatingSystems} />
					<SkillSection category="Language" skills={languages} />
					<SkillSection category="Library & Framework" skills={frameworks} />
					<SkillSection category="Database" skills={databases} />
					<SkillSection category="Infrastructure" skills={infrastructures} />
					<SkillSection category="Tool" skills={tools} />
				</div>

				<ProficiencyGuide />
			</div>
		</div>
	);
};

export default SkillsPage;
