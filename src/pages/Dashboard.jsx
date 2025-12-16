import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Employee Dashboard</h1>

        <p className="dashboard-subtitle">
          Welcome to your centralized employee workspace.
        </p>

        <div className="dashboard-info">
          <p>
            This dashboard will serve as the primary access point for all
            employee-related activities across your organization.
          </p>

          <p>
            The following modules will be available under{" "}
            <strong>Software Reports & Employee Services</strong>:
          </p>

          <ul className="dashboard-list">
            <li>Employee Profile & Personal Documents</li>
            <li>Attendance & Shift Reports</li>
            <li>Leave Management & History</li>
            <li>Payroll, Payslips & Salary Breakdown</li>
            <li>Performance & Appraisal Records</li>
            <li>Statutory Forms (EPF, ESIC, Form 16, etc.)</li>
            <li>Company Announcements & Notices</li>
            <li>Downloadable Software Reports</li>
          </ul>

          <div className="dashboard-note">
            🚧 This section is under active development.  
            All features will be enabled progressively.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
