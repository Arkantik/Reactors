 import { useState, useEffect } from "react";
import { useNavigate,NavLink } from "react-router-dom";
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
      <NavLink to="/">
         <img src="/public/assets/images/logo.png" alt="logo HoliFun" width="50"
          height="30"
          className="logo-desktop" /> 
      </a>
      <form onSubmit={onSearch}>
        <label className="searchbar">
          <input
            type="text"
            placeholder=""
            name="search"
            onChange={onChange}
            value={recherche}
          />
        </label>
      </form>
      <nav>
      <ul className="navbar">
        <li>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/page">
            Page
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}
