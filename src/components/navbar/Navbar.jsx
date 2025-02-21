import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <h1 className="logo">React 19</h1>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/">Todo</NavLink></li>
          <li><NavLink to="/hooks">Hooks</NavLink></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
