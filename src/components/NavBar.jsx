import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<header>
			<nav className="px-4">
				<NavLink to="/">
					<img
						src="../public/assets/images/logo.png"
						alt="logo HoliFun"
						width="50"
						height="50"
						className="logo-desktop"
					/>
				</NavLink>
				<ul className="flex gap-16 pr-4 font-bold no-underline">
					<li className="no-underline">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`navlink ${isActive ? "is-active" : ""}`
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/page"
							className={({ isActive }) =>
								`navlink ${isActive ? "is-active" : ""}`
							}>
							Destinations
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`navlink ${isActive ? "is-active" : ""}`
							}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`navlink ${isActive ? "is-active" : ""}`
							}>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
