import type { Product } from "../types";
import ProductCarousel from "./ProductCarousel";
import ProductDescription from "./ProductDescription";

interface Props {
	product: Product;
}

const ProductModalBody = ({ product }: Props) => {
	return (
		<div className="p-6">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-7">
					<ProductCarousel productId={product.id} images={product.images} />
				</div>

				<div className="col-span-12 lg:col-span-5">
					<ProductDescription
						productId={product.id}
						paragraphs={product.description}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductModalBody;
