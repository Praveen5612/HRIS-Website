import React, { useEffect, useRef } from "react";
import "../styles/About.css";
// import ceoImg from "../assets/ceo.jpg";
// import leader1 from "../assets/leader1.jpg";
// import leader2 from "../assets/leader2.jpg";
// import leader3 from "../assets/leader3.jpg";
import logo from "../assets/logo.jpg"
import Departments from "./Departments";
import Careers from "./Careers";
import Contact from "./Contact";

const About = () => {
  const rootRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });

  // small parallax for decorative shapes and subtle 3D on hoverable cards
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      pointer.current.x = (e.clientX / w) * 2 - 1;
      pointer.current.y = (e.clientY / h) * 2 - 1;

      // Start the RAF loop if not already running
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }

      // Reset idle timer so we stop the loop after inactivity
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      }, 200);
    };

    const animate = () => {
      const px = pointer.current.x;
      const py = pointer.current.y;

      // Only update CSS vars if root exists (defensive) and values changed
      if (root) {
        root.style.setProperty("--mx", `${(px * 18).toFixed(2)}px`);
        root.style.setProperty("--my", `${(py * 12).toFixed(2)}px`);
      }

      // Continue loop while rafRef is set; if it was cleared by the idle timer
      // we shouldn't restart it here — onMove will restart when needed.
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    // Start the loop once so UI has initial state (but allow idle logic to stop it)
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
        idleTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <div className="about-root" ref={rootRef}>
      {/* decorative blobs */}
      <div className="about-blob blob-left" aria-hidden />
      <div className="about-blob blob-right" aria-hidden />

      <div className="about-content">

        {/* 1. Company History */}
        <section className="about-section history">
          <div className="section-inner">
            <h2 className="section-title">Our Journey</h2>

            <div className="history-grid">
              <div className="history-card">
                <h3>Founded With Purpose</h3>
                <p>
                  MyCompany began with a simple idea: people-first HR technology.
                  We started as a small team solving payroll headaches — and quickly
                  expanded into a full HRIS that puts employees and managers first.
                </p>
              </div>

              <div className="history-card">
                <h3>Growth & Trust</h3>
                <p>
                  Over the years we partnered with startups and enterprises, refining
                  workflows and delivering measurable improvements in productivity,
                  compliance, and employee satisfaction.
                </p>
              </div>

              <div className="history-card">
                <h3>Today</h3>
                <p>
                  Today MyCompany supports multi-location workforces with secure,
                  scalable systems — helping leaders make data-driven decisions that
                  matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Vision & Mission */}
        <section className="about-section vision">
          <div className="vm-inner">
            <h2 className="section-title">Vision & Mission</h2>

            <div className="vm-cards">
              <div className="vm-card">
                <div className="vm-icon">🔭</div>
                <h3>Our Vision</h3>
                <p>
                  To create workplaces where every person feels seen, supported, and
                  empowered to do their best work.
                </p>
              </div>

              <div className="vm-card">
                <div className="vm-icon">⚙️</div>
                <h3>Our Mission</h3>
                <p>
                  Build elegant, secure, and intuitive HR tools that remove friction,
                  accelerate outcomes, and let teams focus on impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Leadership Team */}
        <section className="about-section leadership">
          <div className="section-inner">
            <h2 className="section-title">Leadership Team</h2>

            <div className="leaders-grid">
              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="CEO" />
                </div>
                <h4>Arjun Mehta</h4>
                <p className="leader-role">Founder & CEO</p>
                <p className="leader-bio">
                  Visionary leader with 15+ years in building enterprise software and
                  scaling teams across continents.
                </p>
              </article>

              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="CTO" />
                </div>
                <h4>Ananya Sharma</h4>
                <p className="leader-role">Chief Technology Officer</p>
                <p className="leader-bio">
                  Architect of resilient systems — leads engineering, platform, and
                  data privacy efforts.
                </p>
              </article>

              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="Head People" />
                </div>
                <h4>Rahul Verma</h4>
                <p className="leader-role">Head of People & Culture</p>
                <p className="leader-bio">
                  Builds people programs that blend empathy with measurable outcomes.
                </p>
              </article>

              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="Head Ops" />
                </div>
                <h4>Neha Kapoor</h4>
                <p className="leader-role">Head of Operations</p>
                <p className="leader-bio">
                  Operations strategist focused on scaling processes and delivering
                  consistent customer experience.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 4. Awards & Achievements */}
        <section className="about-section awards">
          <div className="section-inner">
            <h2 className="section-title">Awards & Achievements</h2>

            <div className="awards-grid">
              <div className="award-card">
                <div className="award-badge">🏆</div>
                <h4>Best HR Tech Startup — 2023</h4>
                <p>Recognized for innovation in HR automation and employee experience.</p>
              </div>

              <div className="award-card">
                <div className="award-badge">🌍</div>
                <h4>Global Innovation Award — 2022</h4>
                <p>Honored for scalable solutions that improved workforce efficiency.</p>
              </div>

              <div className="award-card">
                <div className="award-badge">⭐</div>
                <h4>Rated 4.9/5 by clients</h4>
                <p>High satisfaction across product, support, and outcomes.</p>
              </div>

              <div className="award-card">
                <div className="award-badge">🔒</div>
                <h4>Security & Privacy Certified</h4>
                <p>Certified standards for data protection and secure processing.</p>
              </div>
            </div>
          </div>
        </section>
        
      <Departments/>
      </div>
    </div>
  );
};

export default About;
