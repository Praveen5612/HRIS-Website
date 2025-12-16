import React from "react";
import "../styles/Departments.css";

import logo from "../assets/logo.jpg";
import Careers from "./Careers";

const Departments = () => {
  const departments = [
    {
      name: "Human Resources",
      image: logo,
      desc:
        "Manages employee lifecycle, compliance, attendance, payroll coordination, and workplace culture across organizations."
    },
    {
      name: "Information Technology",
      image: logo,
      desc:
        "Builds and maintains secure platforms, integrations, automation tools, and infrastructure supporting multi-company operations."
    },
    {
      name: "Finance & Accounts",
      image: logo,
      desc:
        "Oversees payroll processing, statutory compliance, reporting, audits, and financial accuracy for client organizations."
    },
    {
      name: "Sales & Client Success",
      image: logo,
      desc:
        "Partners with companies to onboard, support, and scale HRIS adoption while ensuring long-term success."
    }
  ];

  const teamMembers = [
    {
      name: "Aarav Patel",
      role: "HR Operations Manager",
      photo: logo,
      dept: "Human Resources"
    },
    {
      name: "Sneha Mukherjee",
      role: "Platform Engineer",
      photo: logo,
      dept: "Information Technology"
    },
    {
      name: "Rohit Kumar",
      role: "Finance Controller",
      photo: logo,
      dept: "Finance & Accounts"
    },
    {
      name: "Diya Sharma",
      role: "Client Success Lead",
      photo: logo,
      dept: "Sales & Client Success"
    }
  ];

  return (
    <div className="departments-page">
      {/* HEADER */}
      <section className="dept-header">
        <h1>Departments & Teams</h1>
        <p className="dept-sub">
          Our HRIS platform is powered by cross-functional teams working together
          to deliver reliable, secure, and scalable employee solutions for
          organizations of all sizes.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section className="dept-grid-section">
        <h2 className="section-title">Core Departments</h2>

        <div className="dept-grid">
          {departments.map((dept, index) => (
            <div className="dept-card hover-tilt" key={index}>
              <img
                src={dept.image}
                alt={dept.name}
                className="dept-img"
              />
              <h3>{dept.name}</h3>
              <p>{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <h2 className="section-title">Key Team Members</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card hover-tilt" key={index}>
              <div className="team-photo">
                <img src={member.photo} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-dept">{member.dept}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTINUE FLOW */}
      <Careers />
    </div>
  );
};

export default Departments;
