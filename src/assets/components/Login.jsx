import React from "react";
import { useNavigate } from "react-router-dom";
import "../cssComponents/Login.css"

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <section className="lg-section">
        <div className="lg-card">

          {/* Logo */}
          <div className="lg-logo">
            <span className="lg-logo-name"><em>Autumn</em>_29</span>
            <span className="lg-logo-sub">Slow Fashion · Ethical Style</span>
          </div>

          <div className="lg-divider" />

          <h2 className="lg-heading">Welcome Back</h2>
          <p className="lg-subtext">Sign in to your account to continue</p>

          {/* Form */}
          <div className="lg-form">

            <div className="lg-field">
              <label>Email Address</label>
              <input className="lg-input" type="email" placeholder="you@example.com" />
            </div>

            <div className="lg-field">
              <label>Password</label>
              <input className="lg-input" type="password" placeholder="Enter your password" />
            </div>

            <button className="lg-forgot">Forgot password?</button>

            <button className="lg-btn">Sign In →</button>

          </div>

          {/* Switch to Signup */}
          <div className="lg-bottom">
            Don't have an account?
            <button className="lg-link" onClick={() => navigate("/signup")}>
              Create one
            </button>
          </div>

        </div>
      </section>
    </>
  );
}