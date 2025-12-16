import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/Navbar.css";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  const session = JSON.parse(localStorage.getItem("employee_session"));

  const handleLogout = () => {
    localStorage.removeItem("employee_session");
    if (onLogout) onLogout();
    navigate("/login");
  };

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  if (!session) return null;

  return (
    <nav className="nav-wrapper">
      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* MENU */}
      <ul className="nav-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* PROFILE */}
      <div className="nav-actions">
        <div className="profile-wrapper" ref={dropdownRef}>
          <div
            className="profile-pill"
            onClick={() => setOpen(!open)}
          >
            <div className="avatar">
              {session.empId.slice(-2)}
            </div>
            <span className="emp-id">{session.empId}</span>
          </div>

          {open && (
            <div className="profile-dropdown">
              <p><strong>{session.empId}</strong></p>
              <p>{session.company}</p>
              <p className="email">{session.email}</p>
              <p className="time">
                Logged in: {new Date(session.loggedAt).toLocaleString()}
              </p>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
