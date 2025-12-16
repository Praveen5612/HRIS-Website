import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/logo.jpg";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();

  // COUNTERS
  const [employeeCount, setEmployeeCount] = useState(1);
  const [deptCount, setDeptCount] = useState(1);
  const [expCount, setExpCount] = useState(1);
  const [projectCount, setProjectCount] = useState(1);
  const [successCount, setSuccessCount] = useState(1);

  // refs for parallax / 3D
  const rootRef = useRef(null);
  const bannerImgRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  // counters
  useEffect(() => {
    let emp = 1,
      dept = 1,
      exp = 1,
      proj = 1,
      succ = 1;

    const interval = setInterval(() => {
      if (emp < 2500) emp++;
      if (dept < 50) dept++;
      if (exp < 15) exp++;
      if (proj < 500) proj++;
      if (succ < 99) succ++;

      setEmployeeCount(emp);
      setDeptCount(dept);
      setExpCount(exp);
      setProjectCount(proj);
      setSuccessCount(succ);

      if (
        emp === 2500 &&
        dept === 50 &&
        exp === 15 &&
        proj === 500 &&
        succ === 99
      )
        clearInterval(interval);
    }, 14);

    return () => clearInterval(interval);
  }, []);

  // parallax + 3D tilt
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / width) * 2 - 1;
      pointerRef.current.y = (e.clientY / height) * 2 - 1;

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }

      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }, 200);
    };

    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      root.style.setProperty("--scroll-y", `${scrollY}px`);
    };

    const animate = () => {
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;

      root.style.setProperty("--mx", (px * 12).toFixed(2) + "px");
      root.style.setProperty("--my", (py * 12).toFixed(2) + "px");

      if (bannerImgRef.current) {
        const rotateY = px * 6;
        const rotateX = py * -6;
        bannerImgRef.current.style.transform =
          `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="home-root">
      <div className="floating-shape shape-a" aria-hidden />
      <div className="floating-shape shape-b" aria-hidden />
      <div className="floating-shape shape-c" aria-hidden />

      

      {/* HERO */}
      <section className="home-banner">
        <div className="banner-left">
          <h1>
            Smart HRIS & Employee Portals for <span>Modern Organizations</span>
          </h1>

          <p className="banner-subtext">
            A centralized HRIS platform designed to manage employees, attendance,
            payroll, documents, and performance across multiple companies —
            securely, efficiently, and at scale.
          </p>

          <p className="banner-tagline">
            One platform. Multiple organizations. Complete workforce control.
          </p>

          <div className="cta-row">
            <button
              className="cta primary"
              onClick={() => navigate("/dashboard")}
            >
              Open Portal
            </button>
          </div>
        </div>

        <div className="banner-right">
          <img
            ref={bannerImgRef}
            src={logo}
            alt="HRIS Employee Portal"
            className="banner-image"
          />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="home-overview">
        <h2>One HR Platform. Many Companies.</h2>

        <p className="overview-text">
          Our HRIS solution empowers organizations to manage multiple companies,
          departments, and employee lifecycles from a single admin panel.
          Whether you’re handling onboarding, attendance tracking, payroll
          processing, or compliance — everything stays connected and consistent.
        </p>

        <p className="overview-text">
          Designed for HR teams, administrators, and employees alike, the
          platform delivers role-based access, real-time insights, and
          automation that reduces manual effort and operational overhead.
        </p>

        <p className="overview-highlight">
          Built to scale with your organizations — from startups to enterprises.
        </p>
      </section>

      {/* STATS */}
      <section className="home-stats">
        <div className="stat-box">
          <div className="stat-icon">👥</div>
          <h3>{employeeCount}+</h3>
          <p>Employees Managed</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">🏢</div>
          <h3>{deptCount}+</h3>
          <p>Departments & Units</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">⏳</div>
          <h3>{expCount}+ Years</h3>
          <p>HR Technology Expertise</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">🚀</div>
          <h3>{projectCount}+</h3>
          <p>Organizations Onboarded</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">⭐</div>
          <h3>{successCount}%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>

      <About />
    </div>
  );
};

export default Home;
