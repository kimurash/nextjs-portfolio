import Image from "next/image";
import ProficiencyStars from "./ProficiencyStars";

interface Props {
	name: string;
	icon: string;
	proficiency: number;
	tags: string[];
}

const SkillCard = ({ name, icon, proficiency, tags }: Props) => {
	return (
		<div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-500 transition-all duration-200 w-64">
			<div className="flex items-start space-x-4 p-4">
				<div className="w-14 h-14 flex-shrink-0">
					<Image
						src={icon}
						alt={name}
						width={56}
						height={56}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="flex-1">
					<span className="font-medium text-gray-900 text-lg">{name}</span>
					<div>
						<ProficiencyStars proficiency={proficiency} />
					</div>
				</div>
			</div>

			<div className="border-t border-gray-200"></div>

			<div className="flex flex-wrap items-center gap-1 p-2 my-1">
				{tags.map((tag) => (
					<span
						key={`${name}-${tag}`}
						className="px-4 py-1 text-sm bg-gray-100 text-gray-800 rounded-full border border-gray-400"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default SkillCard;
