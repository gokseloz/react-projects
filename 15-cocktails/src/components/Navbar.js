import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaTimes, FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { isDark, setIsDark } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isDark && "navbar-dark"}`}>
      <div className="nav-center">
        <Link to="/">
          <img
            src={logo}
            alt="cocktail db logo"
            className={`logo ${isDark && "logo-dark"} `}
          />
        </Link>
        <div className="theme-icons" onClick={() => setIsDark(!isDark)}>
          {isDark ? <FiSun /> : <FiMoon />}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <FaBars
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        {isMenuOpen && (
          <ul
            className={`nav-links-mobile ${isDark && "nav-links-mobile-dark"} `}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <FaTimes
              className="close-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
