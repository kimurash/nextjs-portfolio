import { MAX_PROFICIENCY } from "./constants";

interface Props {
	proficiency: number;
}

const ProficiencyStars = ({ proficiency }: Props) => {
	return (
		<div className="flex items-center space-x-1">
			{Array.from({ length: MAX_PROFICIENCY }, (_, index) => (
				<span
					key={`star-${index}/${proficiency}`}
					className={
						index < proficiency
							? "text-yellow-400 text-lg"
							: "text-gray-300 text-lg"
					}
				>
					{index < proficiency ? "★" : "☆"}
				</span>
			))}
		</div>
	);
};

export default ProficiencyStars;
