import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";
import logo from "../assets/logo.jpg";
import About from "./About";
import Departments from "./Departments";
import Contact from "./Contact";

const Home = () => {
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
      if (emp < 250) emp++;
      if (dept < 7) dept++;
      if (exp < 10) exp++;
      if (proj < 120) proj++;
      if (succ < 98) succ++;

      setEmployeeCount(emp);
      setDeptCount(dept);
      setExpCount(exp);
      setProjectCount(proj);
      setSuccessCount(succ);

      if (
        emp === 250 &&
        dept === 7 &&
        exp === 10 &&
        proj === 120 &&
        succ === 98
      )
        clearInterval(interval);
    }, 14);

    return () => clearInterval(interval);
  }, []);

  // tiny, efficient mousemove parallax + 3D image tilt
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / width) * 2 - 1; // -1..1
      pointerRef.current.y = (e.clientY / height) * 2 - 1; // -1..1

      // Start RAF loop if not running
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }

      // Reset idle timer (stop RAF when user is idle)
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }, 200);
    };

    const onScroll = () => {
      // store scroll for parallax layers via CSS variable
      const scrollY = window.scrollY || window.pageYOffset;
      root.style.setProperty("--scroll-y", `${scrollY}px`);
    };

    const animate = () => {
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;

      // move background shapes slightly
      root.style.setProperty("--mx", (px * 12).toFixed(2) + "px");
      root.style.setProperty("--my", (py * 12).toFixed(2) + "px");

      // tilt the image a bit
      if (bannerImgRef.current) {
        const rotateY = px * 6; // degrees
        const rotateX = py * -6;
        bannerImgRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0) scale(1.02)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Start the loop once so UI has initial state; idle timer will stop it if no activity
    rafRef.current = requestAnimationFrame(animate);

    // cleanup
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
        idleTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="home-root">
      {/* decorative floating shapes (SVG + divs) */}
      <div className="floating-shape shape-a" aria-hidden />
      <div className="floating-shape shape-b" aria-hidden />
      <div className="floating-shape shape-c" aria-hidden />
      <svg className="bg-blob" viewBox="0 0 600 600" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#8be5ff" />
            <stop offset="1" stopColor="#65ffa7" />
          </linearGradient>
        </defs>
        <g transform="translate(300,300)">
          <path
            d="M120 -160C160 -120 200 -80 200 -20C200 40 160 100 120 140C80 180 40 200 -20 200C-80 200 -140 180 -170 140C-200 100 -200 40 -180 -20C-160 -80 -120 -120 -80 -160C-40 -200 20 -220 80 -200C140 -180 80 -200 120 -160Z"
            fill="url(#g1)"
            opacity="0.18"
          />
        </g>
      </svg>

      {/* ================ HERO BANNER ================ */}
      <section className="home-banner">
        <div className="banner-left">
          <h1>
            Welcome to <span>MyCompany</span>
          </h1>

          <p className="banner-subtext">
            A unified space where work flows effortlessly — crafted to empower
            employees, support collaboration, and unlock the full potential of
            every team.
          </p>

          <p className="banner-tagline">
            Because great companies aren’t built on processes… they’re built on
            people.
          </p>

          <div className="cta-row">
            <button className="cta primary">Open Portal</button>
            <button className="cta ghost">Learn More</button>
          </div>
        </div>

        <div className="banner-right">
          <img
            ref={bannerImgRef}
            src={logo}
            alt="Employee Portal"
            className="banner-image"
          />
        </div>
      </section>

      {/* ================ OVERVIEW SECTION ================ */}
      <section className="home-overview">
        <h2>Building a Better Workplace For Everyone</h2>

        <p className="overview-text">
          At MyCompany, we design solutions that let people focus on meaningful
          work—not paperwork. Our HRIS platform streamlines day-to-day
          operations, enhances employee engagement, and enables leadership to
          make smarter, faster, and data-driven decisions.
        </p>

        <p className="overview-text">
          Whether it’s automating attendance, simplifying payroll, or shaping the
          future of talent — we bring clarity, transparency, and elegance to
          every experience.
        </p>

        <p className="overview-highlight">
          When people thrive, organizations grow. And that’s exactly what we
          enable.
        </p>
      </section>

      {/* ================ STATS SECTION ================ */}
      <section className="home-stats">
        <div className="stat-box">
          <div className="stat-icon">👥</div>
          <h3>{employeeCount}+</h3>
          <p>Employees</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">🏢</div>
          <h3>{deptCount}+</h3>
          <p>Departments</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">⏳</div>
          <h3>{expCount}+ Years</h3>
          <p>Experience</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">🚀</div>
          <h3>{projectCount}+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <div className="stat-icon">⭐</div>
          <h3>{successCount}%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>
    <About/>
    <Departments/>
    <Contact/>
    </div>
    
  );
};

export default Home;
