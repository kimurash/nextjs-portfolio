interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const NavigationMenuOverlay = ({ isOpen, onClose }: Props) => {
	if (!isOpen) return null;

	return (
		<button
			type="button"
			className="fixed inset-0 bg-gray-600 opacity-50 z-40 md:hidden"
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === "Escape") {
					onClose();
				}
			}}
			aria-label="メニューを閉じる"
		/>
	);
};

export default NavigationMenuOverlay;
