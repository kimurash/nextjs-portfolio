import type { CertificationCardHeaderColor } from "./types";

type Props = {
	title: string;
	color: CertificationCardHeaderColor;
};

const gradientColorClassMap = {
	blue: { from: "from-blue-800", to: "to-blue-500" },
	cyan: { from: "from-cyan-800", to: "to-cyan-500" },
	emerald: { from: "from-emerald-800", to: "to-emerald-500" },
	purple: { from: "from-purple-800", to: "to-purple-500" },
	yellow: { from: "from-yellow-600", to: "to-yellow-400" },
};

export const CertificationCardHeader = ({ title, color }: Props) => {
	const gradientColorClass = gradientColorClassMap[color];

	return (
		<div
			className={`h-15 bg-gradient-to-r ${gradientColorClass.from} ${gradientColorClass.to} flex items-center justify-center relative`}
		>
			<div className="text-white text-lg font-bold text-center tracking-wide drop-shadow-md px-2">
				{title}
			</div>
		</div>
	);
};
