import Link from "next/link";

interface Props {
	navLinks: Array<{ href: string; label: string }>;
	className?: string;
	onItemClick?: () => void;
}

const NavigationHeader = ({ navLinks, className = "", onItemClick }: Props) => {
	return (
		<nav className={className}>
			{navLinks.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200"
					onClick={onItemClick}
				>
					{link.label}
				</Link>
			))}
		</nav>
	);
};

export default NavigationHeader;
