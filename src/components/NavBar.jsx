import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav className="relative flex items-center justify-between px-4">
        <div className="z-50">
          <NavLink to="/">
            <img
              src="/assets/images/logo-2.png"
              alt="logo HoliFun"
              width="48"
              height="48"
              className="block"
              onClick={handleClick}
            />
          </NavLink>
        </div>
        <ul
          className={`gap-16 font-bold no-underline ${
            isMenuOpen
              ? "absolute left-0 top-0 z-20 flex h-[100vh] w-full flex-col items-center justify-center bg-cyan-600/95 text-neutral-50 backdrop-blur-lg"
              : "hidden pr-4 md:flex"
          }`}
        >
          <li className="no-underline">
            <NavLink
              to="/"
              onClick={handleClick}
              className={({ isActive }) =>
                `navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              onClick={handleClick}
              className={({ isActive }) =>
                `navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
              }
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleClick}
              className={({ isActive }) =>
                `navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleClick}
              className={({ isActive }) =>
                `navlink ${isActive && !isMenuOpen ? "is-active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <button type="button" className="z-50 md:hidden" onClick={handleClick}>
          <img
            src="/assets/icons/menu-hamburger-umbrella.svg"
            alt="menu hamburger"
            width="32"
            height="32"
          />
        </button>
      </nav>
    </header>
  );
}
