import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpEnabled, setOtpEnabled] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [timer, setTimer] = useState(0);

  // Timer Logic
  useEffect(() => {
    if (timer <= 0) return;
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleGetOtp = () => {
    if (!email || !password) {
      toast.error("Please enter email and password!");
      return;
    }

    toast.success("OTP sent successfully!");
    setOtpEnabled(true);
    setTimer(60); // 60 sec timer
  };

  const handleLogin = () => {
    if (!email || !password || !otp) {
      toast.error("Please fill all fields including OTP!");
      return;
    }

    toast.success("Login successful! Redirecting...");
    setTimeout(() => navigate("/careers"), 1500);
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />

        <h2>Employee Login</h2>
        <p className="subtitle">Access your work portal securely</p>

        {/* EMAIL */}
        <label>Email</label>
        <input
          type="email"
          placeholder="employee@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD + TOGGLE */}
        <label>Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="toggle-eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        {/* OTP FIELD */}
        <label>OTP</label>
        <input
          type="text"
          maxLength={6}
          placeholder="Enter OTP"
          value={otp}
          disabled={!otpEnabled}
          onChange={(e) => setOtp(e.target.value)}
          className={!otpEnabled ? "disabled" : ""}
        />

        {/* GET OTP + TIMER */}
        <button className="otp-btn" onClick={handleGetOtp} disabled={timer > 0}>
          {timer > 0 ? `Resend OTP in ${timer}s` : "Get OTP"}
        </button>

        {/* LOGIN BUTTON */}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
