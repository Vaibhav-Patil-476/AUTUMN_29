import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <>
      <section className="sg-section">
        <div className="sg-card">

          {/* Logo */}
          <div className="sg-logo">
            <span className="sg-logo-name"><em>Autumn</em>_29</span>
            <span className="sg-logo-sub">Slow Fashion · Ethical Style</span>
          </div>

          <div className="sg-divider" />

          <h2 className="sg-heading">Create Account</h2>
          <p className="sg-subtext">Join the Autumn_29 family today</p>

          {/* Form */}
          <div className="sg-form">

            <div className="sg-row">
              <div className="sg-field">
                <label>First Name</label>
                <input className="sg-input" type="text" placeholder="Priya" />
              </div>
              <div className="sg-field">
                <label>Last Name</label>
                <input className="sg-input" type="text" placeholder="Sharma" />
              </div>
            </div>

            <div className="sg-field">
              <label>Email Address</label>
              <input className="sg-input" type="email" placeholder="you@example.com" />
            </div>

            <div className="sg-field">
              <label>Phone Number</label>
              <input className="sg-input" type="tel" placeholder="+91 98765 43210" />
            </div>

            <div className="sg-field">
              <label>Password</label>
              <input className="sg-input" type="password" placeholder="Create a strong password" />
            </div>

            <div className="sg-field">
              <label>Confirm Password</label>
              <input className="sg-input" type="password" placeholder="Repeat your password" />
            </div>

            <button className="sg-btn">Create Account →</button>

            <p className="sg-terms">
              By signing up you agree to our <em>Terms of Service</em> and <em>Privacy Policy</em>
            </p>

          </div>

          {/* Switch to Login */}
          <div className="sg-bottom">
            Already have an account?
            <button className="sg-link" onClick={() => navigate("/login")}>
              Sign in
            </button>
          </div>

        </div>
      </section>
    </>
  );
}