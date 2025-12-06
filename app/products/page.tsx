"use client";

import { capitalize } from "@/lib/utils";
import { AppWindow } from "lucide-react";
import { useState } from "react";
import ProductCard from "./_components/ProductCard";
import { productCategories, products } from "./constants";
import type { ProductCategory } from "./types";

const ProductsPage = () => {
	const [selectedCategory, setSelectedCategory] =
		useState<ProductCategory>("all");

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((product) => {
					return product.category.includes(selectedCategory);
				});

	return (
		<div className="min-h-screen bg-blue-50">
			<div className="container mx-auto px-10 lg:px-15 py-8">
				<div className="text-center mb-6">
					<h2 className="text-4xl font-bold text-gray-800">
						<AppWindow className="inline mr-2 mb-1" size={38} />
						Products
					</h2>
				</div>

				<div className="flex flex-wrap justify-center gap-4 mb-6">
					{productCategories.map((category) => (
						<button
							key={category}
							type="button"
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 text-xl font-medium transition-colors ${
								selectedCategory === category
									? "text-blue-600 border-b-2 border-blue-600"
									: "text-gray-600 hover:text-blue-600"
							}`}
						>
							{capitalize(category)}
						</button>
					))}
				</div>

				<div className="flex justify-center">
					<div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
						{filteredProducts.map((product) => (
							<div key={product.id} className="break-inside-avoid mb-6">
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
