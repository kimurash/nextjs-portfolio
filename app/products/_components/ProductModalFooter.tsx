import Link from "next/link";
import type { ProductLink } from "../types";

interface Props {
	links: ProductLink[];
}

const ProductModalFooter = ({ links }: Props) => {
	if (links.length === 0) {
		return null;
	}

	return (
		<div className="flex justify-center gap-3 px-6 py-4 border-t border-gray-200">
			{links.map((link) => (
				<Link
					href={link.url}
					key={link.name}
					target="_blank"
					rel="noopener noreferrer"
				>
					<button
						type="button"
						className={`px-5 py-2 text-base font-medium text-white rounded-md ${link.backgroundColor} hover:opacity-80`}
					>
						{link.name}
					</button>
				</Link>
			))}
		</div>
	);
};

export default ProductModalFooter;
