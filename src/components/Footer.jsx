import React from "react";
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
  FaGlobe
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT SECTION */}
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <h3 className="footer-company">MyCompany</h3>
        <p className="footer-tagline">
          Empowering employees with simplicity & efficiency.
        </p>

        {/* Contact Info */}
        <div className="footer-contact">
          <p><FaEnvelope /> support@mycompany.com</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaMapMarkerAlt /> Delhi, India</p>
        </div>
      </div>

      {/* MIDDLE LINKS SECTION */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Departments</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* SOCIAL SECTION */}
      <div className="footer-social">
        <h4>Connect With Us</h4>

        <div className="social-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
        </div>

        <p className="footer-website">
          <FaGlobe /> www.mycompany.com
        </p>

        <p className="footer-copy">© 2025 MyCompany. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
