import React from "react";
import "../styles/Departments.css";

import logo from "../assets/logo.jpg"; // using logo for everything
import Careers from "./Careers";
import Contact from "./Contact";
import About from "./About";

const Departments = () => {
  const departments = [
    { name: "Human Resources", image: logo, desc: "Employee wellbeing, hiring, culture, and compliance." },
    { name: "Information Technology", image: logo, desc: "Software, hardware, cybersecurity, and automation." },
    { name: "Finance & Accounts", image: logo, desc: "Budgeting, payroll, tax compliance, and audits." },
    { name: "Sales & Marketing", image: logo, desc: "Client acquisition, brand growth, and market strategy." },
  ];

  const teamMembers = [
    { name: "Aarav Patel", role: "HR Manager", photo: logo, dept: "Human Resources" },
    { name: "Sneha Mukherjee", role: "Software Engineer", photo: logo, dept: "Information Technology" },
    { name: "Rohit Kumar", role: "Account Executive", photo: logo, dept: "Finance & Accounts" },
    { name: "Diya Sharma", role: "Marketing Lead", photo: logo, dept: "Sales & Marketing" },
  ];

  return (
    <div className="departments-page">
      {/* TITLE SECTION */}
      <section className="dept-header">
        <h1>Our Departments</h1>
        <p className="dept-sub">
          A closer look at the teams that drive innovation, growth, and excellence across MyCompany.
        </p>
      </section>

      {/* DEPARTMENTS GRID */}
      <section className="dept-grid-section">
        <h2 className="section-title">Departments</h2>

        <div className="dept-grid">
          {departments.map((dept, index) => (
            <div className="dept-card hover-tilt" key={index}>
              <img src={dept.image} alt={dept.name} className="dept-img" />
              <h3>{dept.name}</h3>
              <p>{dept.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-section">
        <h2 className="section-title">Team & Key Members</h2>

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
    </div>
  );
};

export default Departments;
