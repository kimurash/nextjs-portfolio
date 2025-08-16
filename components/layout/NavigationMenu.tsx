import NavigationMenuDrawer from "./NavigationMenuDrawer";
import NavigationMenuOverlay from "./NavigationMenuOverlay";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const NavigationMenu = ({ isOpen, onClose }: Props) => {
	return (
		<>
			<NavigationMenuOverlay isOpen={isOpen} onClose={onClose} />
			<NavigationMenuDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default NavigationMenu;
