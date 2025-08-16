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
					className="text-gray-700 hover:text-blue-500 px-3 py-2 text-xl font-medium transition-all relative group hover:-translate-y-0.5"
					onClick={onItemClick}
				>
					{link.label}
					<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
				</Link>
			))}
		</nav>
	);
};

export default NavigationHeader;
