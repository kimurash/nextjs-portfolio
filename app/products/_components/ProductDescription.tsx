interface Props {
	productId: string;
	paragraphs: string[];
}

const ProductDescription = ({ productId, paragraphs }: Props) => {
	return (
		<div className="space-y-3">
			{paragraphs.map((paragraph, index) => (
				<p
					key={
						// biome-ignore lint/suspicious/noArrayIndexKey: negligence
						`${productId}-description-${index}`
					}
					className="text-gray-800"
				>
					{paragraph}
				</p>
			))}
		</div>
	);
};

export default ProductDescription;
