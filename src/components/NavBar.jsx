 import { useState, useEffect } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  

  return (

    <header>
      <NavLink to="/">
         <img src="/public/assets/images/logo.png" alt="logo HoliFun" width="50"
          height="30"
          className="logo-desktop" /> 
      </NavLink>
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
          <NavLink className="navlink" to="/destinations">
            Destinations
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
}
