import { X } from "lucide-react";

interface Props {
	title: string;
	modalId: string;
	onClose: () => void;
}

const ProductModalHeader = ({ title, modalId, onClose }: Props) => {
	return (
		<div className="flex items-center justify-between px-6 pt-3 pb-2 border-b border-gray-200">
			<h2 id={modalId} className="text-2xl font-semibold text-gray-800">
				{title}
			</h2>
			<button
				type="button"
				onClick={onClose}
				className="h-12 w-12 p-2 hover:bg-gray-100 rounded-md flex items-center justify-center"
			>
				<X size={32} />
			</button>
		</div>
	);
};

export default ProductModalHeader;
