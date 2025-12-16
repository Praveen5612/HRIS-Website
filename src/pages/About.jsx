import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import logo from "../assets/logo.jpg";
import Departments from "./Departments";

const About = () => {
  const rootRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimeoutRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });

  // subtle parallax (unchanged logic)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      pointer.current.x = (e.clientX / w) * 2 - 1;
      pointer.current.y = (e.clientY / h) * 2 - 1;

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

    const animate = () => {
      const px = pointer.current.x;
      const py = pointer.current.y;

      if (root) {
        root.style.setProperty("--mx", `${(px * 18).toFixed(2)}px`);
        root.style.setProperty("--my", `${(py * 12).toFixed(2)}px`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  return (
    <div className="about-root" ref={rootRef}>
      {/* decorative blobs */}
      <div className="about-blob blob-left" aria-hidden />
      <div className="about-blob blob-right" aria-hidden />

      <div className="about-content">

        {/* 1. Company Journey */}
        <section className="about-section history">
          <div className="section-inner">
            <h2 className="section-title">Our Journey</h2>

            <div className="history-grid">
              <div className="history-card">
                <h3>Built for Modern Workforces</h3>
                <p>
                  MyCompany was founded with a clear mission: to simplify how
                  organizations manage people at scale. What began as a focused
                  solution for payroll and attendance evolved into a complete
                  HRIS platform designed for multi-company environments.
                </p>
              </div>

              <div className="history-card">
                <h3>Trusted Across Industries</h3>
                <p>
                  As organizations became more distributed and complex, we
                  partnered with businesses across industries to streamline HR
                  operations, ensure compliance, and improve employee experience
                  through reliable and secure systems.
                </p>
              </div>

              <div className="history-card">
                <h3>A Unified HR Platform</h3>
                <p>
                  Today, MyCompany powers employee portals for multiple
                  organizations—centralizing HR, payroll, attendance,
                  documents, and reporting into one scalable platform tailored
                  to each company’s structure.
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
                  To become the most trusted HR technology platform enabling
                  organizations to manage people effortlessly while empowering
                  employees with transparency and control over their work life.
                </p>
              </div>

              <div className="vm-card">
                <div className="vm-icon">⚙️</div>
                <h3>Our Mission</h3>
                <p>
                  To deliver secure, intuitive, and scalable HR solutions that
                  support multi-company operations, reduce administrative
                  complexity, and help teams focus on growth and impact.
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
                  <img src={logo} alt="Founder & CEO" />
                </div>
                <h4>Arjun Mehta</h4>
                <p className="leader-role">Founder & CEO</p>
                <p className="leader-bio">
                  Technology leader with over 15 years of experience building
                  enterprise platforms and guiding organizations through
                  digital transformation.
                </p>
              </article>

              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="CTO" />
                </div>
                <h4>Ananya Sharma</h4>
                <p className="leader-role">Chief Technology Officer</p>
                <p className="leader-bio">
                  Leads platform architecture, security, and scalability—ensuring
                  MyCompany delivers reliable systems for large, distributed
                  workforces.
                </p>
              </article>

              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="Head of People" />
                </div>
                <h4>Rahul Verma</h4>
                <p className="leader-role">Head of People & Culture</p>
                <p className="leader-bio">
                  Bridges technology and HR strategy to help organizations
                  build compliant, transparent, and employee-centric processes.
                </p>
              </article>

              <article className="leader-card hover-tilt">
                <div className="leader-photo">
                  <img src={logo} alt="Head of Operations" />
                </div>
                <h4>Neha Kapoor</h4>
                <p className="leader-role">Head of Operations</p>
                <p className="leader-bio">
                  Oversees operations and customer success, ensuring smooth
                  onboarding and consistent value delivery across all clients.
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
                <h4>Best HR Technology Platform — 2023</h4>
                <p>
                  Recognized for delivering scalable HR solutions supporting
                  multi-company workforce management.
                </p>
              </div>

              <div className="award-card">
                <div className="award-badge">🌍</div>
                <h4>Innovation in Workforce Management — 2022</h4>
                <p>
                  Awarded for advancing automation in payroll, attendance,
                  and employee lifecycle management.
                </p>
              </div>

              <div className="award-card">
                <div className="award-badge">⭐</div>
                <h4>Customer Satisfaction Excellence</h4>
                <p>
                  Highly rated by organizations for reliability, usability,
                  and long-term operational value.
                </p>
              </div>

              <div className="award-card">
                <div className="award-badge">🔒</div>
                <h4>Security & Compliance Certified</h4>
                <p>
                  Built with enterprise-grade security practices to protect
                  employee data and meet regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Departments />
      </div>
    </div>
  );
};

export default About;
