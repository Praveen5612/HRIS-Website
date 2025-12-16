import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* SAME COMPANY LIST AS ADMIN */
const COMPANIES = [
  "Black Cube Technologies",
  "Acme Corp",
  "Innova Solutions",
  "NextGen Systems",
  "Demo Organization",
];

/* EMP ID NORMALIZER */
const normalizeEmpId = (value) => {
  if (!value) return "";
  if (/^EMP\d{3}$/i.test(value)) return value.toUpperCase();
  const digits = value.replace(/\D/g, "");
  return digits ? `EMP${digits.padStart(3, "0")}` : value;
};

const DEMO_OTP = "123456";

const EmployeeLogin = ({ onLogin }) => {
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [empIdInput, setEmpIdInput] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpEnabled, setOtpEnabled] = useState(false);
  const [timer, setTimer] = useState(0);

  /* OTP TIMER */
  useEffect(() => {
    if (timer <= 0) return;
    const t = setInterval(() => setTimer((v) => v - 1), 1000);
    return () => clearInterval(t);
  }, [timer]);

  const handleGetOtp = () => {
    if (!company || !empIdInput || !email) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("OTP sent (Demo OTP: 123456)");
    setOtpEnabled(true);
    setTimer(60);
  };

  const handleLogin = () => {
    if (otp !== DEMO_OTP) {
      toast.error("Invalid OTP");
      return;
    }

    const empId = normalizeEmpId(empIdInput);

    localStorage.setItem(
      "employee_session",
      JSON.stringify({
        company,
        empId,
        email,
        verified: true,
        loginType: "EMPLOYEE",
        loggedAt: new Date().toISOString(),
      })
    );

    if (onLogin) onLogin(); // 🔥 notify App.jsx

    toast.success("Login successful");
    navigate("/");
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />

        <h2>Employee Login</h2>
        <p className="subtitle">Temporary email & OTP access</p>

        <div className="demo-box">
          <p><strong>Demo Credentials</strong></p>
          <p>Company: <b>Any company</b></p>
          <p>Employee ID: <b>1 / emp5 / EMP007</b></p>
          <p>Email: <b>employee@company.com</b></p>
          <p>OTP: <b>123456</b></p>
        </div>

        <label>Company</label>
        <select value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="">Select Company</option>
          {COMPANIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <label>Employee ID</label>
        <input
          placeholder="EMP001 / 1 / emp5"
          value={empIdInput}
          onChange={(e) => setEmpIdInput(e.target.value)}
        />
        {empIdInput && (
          <small className="hint">
            Converted ID: <b>{normalizeEmpId(empIdInput)}</b>
          </small>
        )}

        <label>Email</label>
        <input
          type="email"
          placeholder="employee@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>OTP</label>
        <input
          placeholder="Enter OTP"
          value={otp}
          disabled={!otpEnabled}
          onChange={(e) => setOtp(e.target.value)}
          className={!otpEnabled ? "disabled" : ""}
        />

        <button
          className="otp-btn"
          onClick={handleGetOtp}
          disabled={timer > 0}
        >
          {timer > 0 ? `Resend OTP in ${timer}s` : "Get OTP"}
        </button>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default EmployeeLogin;
