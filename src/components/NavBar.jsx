import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../public/assets/images/logo-2.png";
import mobileMenu from "../../public/assets/icons/menu-hamburger-umbrella.svg";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<header>
			<nav className="relative flex items-center justify-between px-4">
				<div className="z-50 flex items-center gap-4">
					<NavLink to="/holifun">
						<img
							src={Logo}
							alt="logo HoliFun"
							width="48"
							height="48"
							className="block"
							onClick={closeMenu}
						/>
					</NavLink>
					<h1 className="text-[#84e7eb]">HoliFun</h1>
				</div>
				<ul
					className={`gap-16 font-bold no-underline ${
						isMenuOpen
							? "absolute left-0 top-0 z-20 flex h-[100vh] w-full flex-col items-center justify-center bg-cyan-600/95 text-neutral-50 backdrop-blur-lg"
							: "hidden pr-4 md:flex"
					}`}>
					<li className="no-underline">
						<NavLink
							to="/holifun/"
							onClick={closeMenu}
							className={({ isActive }) =>
								`navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/holifun/destinations"
							onClick={closeMenu}
							className={({ isActive }) =>
								`navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
							}>
							Destinations
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/holifun/contact"
							onClick={closeMenu}
							className={({ isActive }) =>
								`navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
							}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/holifun/about"
							onClick={closeMenu}
							className={({ isActive }) =>
								`navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
							}>
							About
						</NavLink>
					</li>
				</ul>
				<button type="button" className="z-50 md:hidden" onClick={toggleMenu}>
					<img src={mobileMenu} alt="menu hamburger" width="32" height="32" />
				</button>
			</nav>
		</header>
	);
}
