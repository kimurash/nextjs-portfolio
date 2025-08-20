import { CertificationCardBody } from "./CertificationCardBody";
import { CertificationCardHeader } from "./CertificationCardHeader";
import type { Certification } from "./types";

type Props = {
	certification: Certification;
};

export const CertificationCard = ({ certification }: Props) => {
	return (
		<div className="relative w-[380px] h-[220px] bg-gray-100 rounded-xl shadow-2xl border-2 border-gray-300 overflow-hidden transition-all hover:transform hover:-translate-y-2">
			<CertificationCardHeader
				title={certification.title}
				color={certification.color}
			/>
			<CertificationCardBody certification={certification} />
		</div>
	);
};
