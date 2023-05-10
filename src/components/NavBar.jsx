// import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-around">
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
