import SkillCard from "./SkillCard";
import type { TechnicalSkill } from "./types";

interface Props {
	category: string;
	skills: TechnicalSkill[];
}

const SkillSection = ({ category, skills }: Props) => {
	return (
		<section>
			<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
				{category}
			</h2>
			<div className="grid justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-start">
					{skills.map((skill) => (
						<SkillCard
							key={skill.name}
							name={skill.name}
							icon={skill.icon}
							proficiency={skill.proficiency}
							tags={skill.tags}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;
