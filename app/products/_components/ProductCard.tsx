import Image from "next/image";
import { technologies } from "../constants";
import type { Product } from "../types";

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-[1.02] border border-gray-200 max-w-sm mx-auto md:mx-0">
			<div className="relative overflow-hidden border-b-2 border-gray-200">
				<Image
					src={product.image}
					alt={product.title}
					width={400}
					height={300}
					className="w-full h-48 object-cover"
				/>
			</div>
			<div className="p-3">
				<h5 className="text-lg font-semibold text-gray-800 mb-2">
					{product.title}
				</h5>
				<div className="flex flex-wrap gap-2">
					{product.technologies.map((techKey) => {
						const tech = technologies[techKey];
						return (
							<span
								key={techKey}
								className={`px-3 py-1 text-sm border rounded-full ${tech.textColor} ${tech.borderColor}`}
							>
								{tech.name}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
