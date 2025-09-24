import type { Certification } from "../types";
import { CertificationCardBody } from "./CertificationCardBody";
import { CertificationCardHeader } from "./CertificationCardHeader";

type Props = {
	certification: Certification;
};

export const CertificationCard = ({ certification }: Props) => {
	return (
		<div
			className="
			relative w-[380px] h-[220px] bg-gray-100 rounded-xl shadow-lg border-2 border-gray-300
			overflow-hidden
			transition-all duration-200 ease-out
			hover:shadow-xl
			hover:scale-[1.03]
			"
		>
			<CertificationCardHeader
				title={certification.title}
				color={certification.color}
			/>
			<CertificationCardBody certification={certification} />
		</div>
	);
};
