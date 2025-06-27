import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"></div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
