import NavigationMenuDrawer from "./NavigationMenuDrawer";
import NavigationMenuOverlay from "./NavigationMenuOverlay";

interface Props {
	navLinks: Array<{ href: string; label: string }>;
	isOpen: boolean;
	onClose: () => void;
}

const NavigationMenu = ({ navLinks, isOpen, onClose }: Props) => {
	return (
		<>
			<NavigationMenuOverlay isOpen={isOpen} onClose={onClose} />
			<NavigationMenuDrawer
				navLinks={navLinks}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	);
};

export default NavigationMenu;
