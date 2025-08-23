import { MAX_PROFICIENCY, proficiencyDescriptions } from "./constants";
import ProficiencyStars from "./ProficiencyStars";

const ProficiencyGuide = () => {
	return (
		<section className="mt-16">
			<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
				レベルの目安
			</h2>
			<div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 max-w-4xl mx-auto">
				<div className="space-y-3 overflow-x-auto">
					{proficiencyDescriptions.map((description, index) => (
						<div
							key={`level-${index}/${MAX_PROFICIENCY}}`}
							className="flex items-start space-x-2 min-w-max"
						>
							<div className="flex-shrink-0">
								<ProficiencyStars proficiency={index + 1} />
							</div>
							<span className="text-gray-700 flex-shrink-0">:</span>
							<span className="text-gray-700 flex-shrink-0">{description}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProficiencyGuide;
