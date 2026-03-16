import React, { useState } from "react";
import "../cssComponents/Login.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  let navigat = useNavigate();

  function handlelogin(e) {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigat("/admin");
    }
  }
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
            <input value={username} onChange={(e)=>setusername(e.target.value)}
              className="lg-input"
              type="text"
              placeholder="admin@example.com"
            />
          </div>

          <div className="lg-field">
            <label>Password</label>
            <input value={password} onChange={(e)=>setpassword(e.target.value)}
              className="lg-input"
              type="password"
              placeholder="Enter admin password"
            />
          </div>

          <button onClick={handlelogin} className="lg-btn">
            Login →
          </button>

        </div>

      </div>

    </section>
  );
}

export default AdminLogin;