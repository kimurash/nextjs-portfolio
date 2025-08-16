import { X } from "lucide-react";
import Link from "next/link";

interface Props {
	navLinks: Array<{ href: string; label: string }>;
	isOpen: boolean;
	onClose: () => void;
}

const NavigationMenuDrawer = ({ navLinks, isOpen, onClose }: Props) => {
	return (
		<div
			className={
				// biome-ignore lint: preference
				`fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-sm shadow-xl z-50 transform transition-transform duration-500 ease-in-out md:hidden
				${isOpen ? "translate-x-0" : "translate-x-full"}`
			}
		>
			<div className="flex items-center justify-end p-6">
				<button
					type="button"
					onClick={onClose}
					className="text-gray-700 hover:text-gray-500"
					aria-label="メニューを閉じる"
				>
					<X className="h-8 w-8" />
				</button>
			</div>

			<div className="p-6">
				<nav className="space-y-4">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="block text-gray-700 hover:text-blue-500 rounded-lg px-3 py-2 text-lg font-medium transition-colors"
							onClick={onClose}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
};

export default NavigationMenuDrawer;
