import Image from "next/image";
import type { Certification } from "../types";

type Props = {
	certification: Certification;
};

export const CertificationCardBody = ({ certification }: Props) => {
	const icon = certification.icon;

	return (
		<div className="p-4 mt-2 sm:p-5 h-[160px] flex items-start relative">
			<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md mr-3 sm:mr-4 flex-shrink-0 overflow-hidden bg-white">
				<Image
					src={icon.src}
					alt={icon.alt}
					width={icon.width}
					height={icon.height}
					className="w-full h-full object-contain"
				/>
			</div>
			<div className="flex-1 flex flex-col justify-start">
				<div className="text-sm text-gray-700 leading-relaxed">
					<div className="flex mb-1 sm:mb-1.5">
						<div className="w-16 sm:w-20 font-bold text-gray-600">発行者:</div>
						<div className="flex-1 text-gray-900">{certification.issuer}</div>
					</div>
					<div className="flex mb-1 sm:mb-1.5">
						<div className="w-16 sm:w-20 font-bold text-gray-600">取得日:</div>
						<div className="flex-1 text-gray-900">
							{certification.acquiredAt}
						</div>
					</div>
					<div className="flex mb-1 sm:mb-1.5">
						<div className="w-16 sm:w-20 font-bold text-gray-600">
							有効期限:
						</div>
						<div className="flex-1 text-gray-900">
							{certification.expiresAt ?? "---"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
