"use client";

import { useId, useRef } from "react";
import type { Product } from "../types";
import ProductModalBody from "./ProductModalBody";
import ProductModalFooter from "./ProductModalFooter";
import ProductModalHeader from "./ProductModalHeader";

interface Props {
	product: Product;
	isOpen: boolean;
	onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: Props) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const modalId = useId();

	return (
		<div
			className={`
				fixed inset-0 z-50 flex items-center justify-center px-4 
				transition-all duration-500 
				${
					isOpen
						? "visible bg-black/50 opacity-100"
						: "invisible bg-black/0 opacity-0"
				}
			`}
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === "Escape") {
					onClose();
				}
			}}
			role="dialog"
			aria-modal="true"
			aria-labelledby={modalId}
		>
			<div
				ref={modalRef}
				className={`
					bg-white rounded-lg shadow-xl 
					max-w-md lg:max-w-3xl w-full mx-4 
					transform transition-all duration-500 ease-out 
					${isOpen ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"}
				`}
				onClick={(e) => {
					e.stopPropagation();
				}}
				onKeyDown={(e) => {
					if (e.key === "Escape") {
						onClose();
					}
				}}
				role="dialog"
				tabIndex={-1}
			>
				<ProductModalHeader
					title={product.title}
					modalId={modalId}
					onClose={onClose}
				/>
				<ProductModalBody product={product} />
				<ProductModalFooter links={product.links} />
			</div>
		</div>
	);
};

export default ProductModal;
