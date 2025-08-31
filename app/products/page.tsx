import { AppWindow } from "lucide-react";
import ProductCard from "./_components/ProductCard";
import { products } from "./constants";

const ProductsPage = () => {
	return (
		<div className="min-h-screen bg-blue-50">
			<div className="container mx-auto px-10 lg:px-24 py-8">
				<div className="text-center mb-6">
					<h2 className="text-4xl font-bold text-gray-800">
						<AppWindow className="inline mr-2 mb-1" size={35} />
						Products
					</h2>
				</div>

				<ul className="flex flex-wrap justify-center gap-4 mb-6">
					<li className="cursor-pointer px-4 py-2 text-xl font-medium text-blue-600 border-b-2 border-blue-600">
						All
					</li>
					<li className="cursor-pointer px-4 py-2 text-xl font-medium text-gray-600 hover:text-blue-600 transition-colors">
						App
					</li>
					<li className="cursor-pointer px-4 py-2 text-xl font-medium text-gray-600 hover:text-blue-600 transition-colors">
						Bot
					</li>
				</ul>

				<div className="columns-1 md:columns-2 xl:columns-3 2xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
					{products.map((product) => (
						<div key={product.id} className="break-inside-avoid">
							<ProductCard product={product} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
