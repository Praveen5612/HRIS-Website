import React, { useState } from "react";
import "../styles/Careers.css";
import Contact from "./Contact";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedJob, setExpandedJob] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  const jobs = [
    {
      id: 1,
      title: "HR Executive",
      dept: "Human Resources",
      location: "Bangalore, India",
      type: "Full-time",
      exp: "1–3 years",
      expLevel: 1,
      desc:
        "Responsible for onboarding, employee engagement, documentation, and HR day-to-day operations."
    },
    {
      id: 2,
      title: "Software Engineer",
      dept: "Information Technology",
      location: "Remote / Hybrid",
      type: "Full-time",
      exp: "2–5 years",
      expLevel: 2,
      desc:
        "Build scalable systems, APIs, dashboards, and automation tools."
    },
    {
      id: 3,
      title: "Finance Associate",
      dept: "Finance & Accounts",
      location: "Hyderabad, India",
      type: "Full-time",
      exp: "1–2 years",
      expLevel: 1,
      desc:
        "Handle payroll, billing, budgeting, reconciliation and monthly financial operations."
    },
    {
      id: 4,
      title: "Marketing Specialist",
      dept: "Sales & Marketing",
      location: "Chennai, India",
      type: "Full-time",
      exp: "0–1 year",
      expLevel: 0,
      desc:
        "Assist with content creation, social media campaigns, branding and customer outreach."
    }
  ];

  /* FILTERING LOGIC */
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.dept.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExperience =
      experienceFilter === "" || job.expLevel === experienceFilter;

    return matchesSearch && matchesExperience;
  });

  const truncate = (text) => {
    if (text.length <= 120) return text;
    return text.substring(0, 120) + "...";
  };

  return (
    <div className="careers-page">

      {/* HEADER */}
      <section className="careers-header">
        <h1>Join Our Team</h1>
        <p>Explore open positions and grow your career with us.</p>

        {/* SEARCH BAR */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search job title or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* EXPERIENCE FILTERS */}
        <div className="filter-chips">
          <button
            className={experienceFilter === "" ? "chip active" : "chip"}
            onClick={() => setExperienceFilter("")}
          >
            All
          </button>

          <button
            className={experienceFilter === 0 ? "chip active" : "chip"}
            onClick={() => setExperienceFilter(0)}
          >
            Fresher (0–1)
          </button>

          <button
            className={experienceFilter === 1 ? "chip active" : "chip"}
            onClick={() => setExperienceFilter(1)}
          >
            1–2 years
          </button>

          <button
            className={experienceFilter === 2 ? "chip active" : "chip"}
            onClick={() => setExperienceFilter(2)}
          >
            2–5 years
          </button>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="job-list-section">
        <h2 className="section-title">Current Openings</h2>

        <div className="job-list-grid">
          {filteredJobs.length === 0 && (
            <p className="no-results">No jobs found.</p>
          )}

          {filteredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p className="job-dept">{job.dept}</p>

              <div className="job-tags">
                <span>{job.location}</span>
                <span>{job.type}</span>
                <span>{job.exp}</span>
              </div>

              <p className="job-desc">
                {expandedJob === job.id ? job.desc : truncate(job.desc)}
              </p>

              <button
                className="readmore-btn"
                onClick={() =>
                  setExpandedJob(expandedJob === job.id ? null : job.id)
                }
              >
                {expandedJob === job.id ? "Show Less" : "Read More"}
              </button>

              <div className="job-actions">
                <button
                  className="apply-btn"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLY FORM POPUP */}
      {selectedJob && (
        <div className="form-overlay">
          <div className="application-form">
            <h3>Apply for {selectedJob.title}</h3>

            <form>
              <label>Name</label>
              <input type="text" placeholder="Your full name" />

              <label>Email</label>
              <input type="email" placeholder="you@example.com" />

              <label>Phone</label>
              <input type="text" placeholder="+91 98765 43210" />

              <label>Upload Resume</label>
              <input type="file" />

              <label>Message</label>
              <textarea placeholder="Tell us about yourself..." />

              <button className="submit-btn">Submit Application</button>
            </form>

            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              ✖
            </button>
          </div>
        </div>
      )}
      <Contact/>
    </div>
  );
};

export default Careers;
