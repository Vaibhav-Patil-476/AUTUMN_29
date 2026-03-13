import React from "react";
import "../cssComponents/Login.css";

function AdminLogin() {

  return (
    <section className="lg-section">

      <div className="lg-card">

        {/* Logo */}
        <div className="lg-logo">
          <span className="lg-logo-name"><em>Autumn</em>_29</span>
          <span className="lg-logo-sub">Admin Panel</span>
        </div>

        <div className="lg-divider"></div>

        <h2 className="lg-heading">Admin Login</h2>
        <p className="lg-subtext">Sign in to access the admin dashboard</p>

        {/* Form */}
        <div className="lg-form">

          <div className="lg-field">
            <label>Admin Email</label>
            <input
              className="lg-input"
              type="email"
              placeholder="admin@example.com"
            />
          </div>

          <div className="lg-field">
            <label>Password</label>
            <input
              className="lg-input"
              type="password"
              placeholder="Enter admin password"
            />
          </div>

          <button className="lg-btn">
            Login →
          </button>

        </div>

      </div>

    </section>
  );
}

export default AdminLogin;