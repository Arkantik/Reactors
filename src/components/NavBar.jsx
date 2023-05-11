// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <a href="/">
         <img src="/public/assets/images/logo.png" alt="logo HoliFun" /> 
      </a>
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
  );
}
