import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	const [recherche, setRecherche] = useState("");

	function onChange(e) {
		setRecherche(e.target.value);
	}
	const navigate = useNavigate();

	function onSearch(e) {
		e.preventDefault(); /** Evite le rechargement de la page */
		navigate(`/search/${recherche}`);
	}

	return (
		<header>
			{/* <form onSubmit={onSearch}>
				<label className="searchbar">
					<input
						type="text"
						placeholder=""
						name="search"
						onChange={onChange}
						value={recherche}
					/>
				</label>
			</form> */}
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
				<ul className="flex gap-16 pr-4 font-bold">
					<li>
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
					<li>
						<NavLink
							to="/page"
							className={({ isActive }) =>
								`navlink ${isActive ? "is-active" : ""}`
							}>
							Page
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
