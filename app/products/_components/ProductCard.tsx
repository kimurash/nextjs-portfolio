"use client";

import Image from "next/image";
import { useState } from "react";
import { technologies } from "../constants";
import type { Product } from "../types";
import ProductModal from "./ProductModal";

interface Props {
	product: Product;
}

const ProductCard = ({ product }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<button
				className="
					bg-white rounded-lg shadow-lg overflow-hidden 
					hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-[1.02] 
					border border-gray-200 
					max-w-sm mx-auto md:mx-0 
					cursor-pointer w-full text-left
				"
				onClick={openModal}
				type="button"
			>
				<div className="relative overflow-hidden border-b-2 border-gray-200">
					<Image
						src={product.images[0]}
						alt={product.title}
						width={760}
						height={460}
						className="w-full h-48 object-cover"
					/>
				</div>
				<div className="p-3">
					<h5 className="text-lg font-semibold text-gray-800 mb-2">
						{product.title}
					</h5>
					<div className="flex flex-wrap gap-1.5">
						{product.technologies.map((techKey) => {
							const tech = technologies[techKey];
							return (
								<span
									key={techKey}
									className={`px-3 py-1 text-[0.85rem] border rounded-full ${tech.textColor} ${tech.borderColor}`}
								>
									{tech.name}
								</span>
							);
						})}
					</div>
				</div>
			</button>

			<ProductModal
				product={product}
				isOpen={isModalOpen}
				onClose={closeModal}
			/>
		</>
	);
};

export default ProductCard;
