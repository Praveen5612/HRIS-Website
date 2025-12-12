import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      
      {/* LEFT LOGO */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* CENTER CAPSULE MENU */}
      <ul className="nav-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        
      </ul>

      {/* RIGHT BUTTONS */}
      <div className="nav-actions">
        <Link to="/login" className="login-link">
          <button className="login-btn">Login</button>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
