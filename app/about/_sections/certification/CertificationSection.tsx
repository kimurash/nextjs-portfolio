import { IdCard } from "lucide-react";
import { CertificationCard } from "./components/CertificationCard";
import { certifications } from "./constants";

export default function CertificationSection() {
	return (
		<section className="max-w-7xl mx-auto py-4">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold text-gray-900">
						<IdCard className="inline mr-2 mb-1" size={40} />
						Certification
					</h2>
				</div>

				<div
					className="
					grid grid-cols-1 lg:grid-cols-[repeat(2,auto)] xl:grid-cols-[repeat(3,auto)]
					gap-8 justify-center justify-items-center"
				>
					{certifications.map((certification) => (
						<CertificationCard
							key={certification.title}
							certification={certification}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
