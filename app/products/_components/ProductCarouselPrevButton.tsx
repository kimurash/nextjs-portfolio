import { ArrowLeft } from "lucide-react";

type Props = {
	onClick: () => void;
	disabled: boolean;
};

const ProductCarouselPrevButton: React.FC<Props> = ({ onClick, disabled }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			disabled={disabled}
			className="
				w-10 h-10 rounded-full 
				bg-gray-500 text-white 
				hover:bg-gray-400 
				disabled:bg-gray-300 disabled:cursor-not-allowed
				flex items-center justify-center
			"
		>
			<ArrowLeft size={26} />
		</button>
	);
};

export default ProductCarouselPrevButton;
