import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔐 INITIAL AUTH CHECK
  useEffect(() => {
    const session = localStorage.getItem("employee_session");
    setIsLoggedIn(Boolean(session));
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {/* NAVBAR */}
      {isLoggedIn && <Navbar onLogout={() => setIsLoggedIn(false)} />}

      {/* 🔥 REQUIRED WRAPPER FOR FIXED NAVBAR */}
      <div className={isLoggedIn ? "page-wrapper" : "auth-page page-wrapper"}>
        <Routes>
          {/* LOGIN */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={() => setIsLoggedIn(true)} />
              )
            }
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/departments"
            element={isLoggedIn ? <Departments /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/careers"
            element={isLoggedIn ? <Careers /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/contact"
            element={isLoggedIn ? <Contact /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </div>

      {/* FOOTER */}
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;
