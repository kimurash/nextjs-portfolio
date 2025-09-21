interface Props {
	productId: string;
	descriptions: string[];
}

const ProductDescription = ({ productId, descriptions }: Props) => {
	return (
		<div className="space-y-3">
			{descriptions.map((description) => (
				<p
					key={`${productId}-description-${description}`}
					className="text-gray-800 leading-relaxed"
				>
					{description}
				</p>
			))}
		</div>
	);
};

export default ProductDescription;
