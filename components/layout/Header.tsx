"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import NavigationHeader from "./NavigationHeader";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/skills", label: "Skills" },
		{ href: "/products", label: "Products" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<>
			<header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
				<div className="max-w-7xl px-4 px-8">
					<div className="flex justify-between items-center h-20">
						<Logo />

						<NavigationHeader
							navLinks={navLinks}
							className="hidden md:flex space-x-5"
						/>

						<div className="md:hidden">
							<button
								type="button"
								onClick={toggleMenu}
								className="text-gray-900 hover:text-gray-500 focus:text-gray-500"
								aria-label="メニューを開く"
							>
								<Menu className="h-8 w-8 mt-2" />
							</button>
						</div>
					</div>
				</div>
			</header>

			<NavigationMenu
				isOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
			/>
		</>
	);
};

export default Header;
