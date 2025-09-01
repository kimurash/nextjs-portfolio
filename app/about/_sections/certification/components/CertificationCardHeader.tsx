type Props = {
	title: string;
	color: string;
};

export const CertificationCardHeader = ({ title, color }: Props) => {
	return (
		<div className={`h-15 ${color} flex items-center justify-center relative`}>
			<div
				className="
				text-white text-lg font-bold text-center
				tracking-wide drop-shadow-md px-2"
			>
				{title}
			</div>
		</div>
	);
};
