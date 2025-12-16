import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo.jpg";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* LEFT */}
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <h3 className="footer-company">MyCompany</h3>
        <p className="footer-tagline">
          Empowering employees with simplicity & efficiency.
        </p>

        <div className="footer-contact">
          <p><FaEnvelope /> support@mycompany.com</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaMapMarkerAlt /> Delhi, India</p>
        </div>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* SOCIAL */}
      <div className="footer-social">
        <h4>Connect With Us</h4>

        <div className="social-icons">
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
        </div>

        <p className="footer-website">
          <FaGlobe /> www.mycompany.com
        </p>

        <p className="footer-copy">
          © 2025 MyCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
