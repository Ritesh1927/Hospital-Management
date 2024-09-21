import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import "./Navbar.css";
import Logo from "../assets/Icons/hospital-logo.webp";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className="logo-container">
              <img src={Logo} alt="" />
            </div>

            {/* <i className="fas fa-code"></i> */}
            <span className="icon">{/* <CodeIcon /> */}</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button className="appoitnment-btn">Get Appoitnment </button>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <IoCloseCircle />{" "}
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
