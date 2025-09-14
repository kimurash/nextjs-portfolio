import Image from "next/image";
import type { Product } from "../types";

interface Props {
	product: Product;
}

const ProductModalBody = ({ product }: Props) => {
	return (
		<div className="p-6">
			<div className="flex flex-col lg:flex-row gap-6">
				<div className="flex-shrink-0 mx-auto lg:mx-0">
					<Image
						src={product.image}
						alt={product.title}
						width={760}
						height={460}
						className="w-full max-w-sm lg:w-80 h-60 object-cover rounded-lg border border-gray-400"
					/>
				</div>
				<div className="flex-1 space-y-4">
					<div className="space-y-3">
						{product.description.map((desc, index) => (
							<p
								key={`description-${product.id}-${index}`}
								className="text-gray-800 leading-relaxed"
							>
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductModalBody;
