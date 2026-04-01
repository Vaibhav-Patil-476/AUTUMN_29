import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../cssComponents/Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [data, setdata] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setdata({ ...data, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let valid = true;

    if (data.email.trim() === "") {
      setEmailError("Please enter the email!");
      valid = false;
    } 
    else if (data.email.length < 3) {
      setEmailError("Please enter a valid email!");
      valid = false;
    } 
    else {
      setEmailError("");
    }

    if (data.password.trim() === "") {
      setPasswordError("Please enter the password!");
      valid = false;
    } 
    else if (data.password.length < 3) {
      setPasswordError("Password must be at least 3 characters!");
      valid = false;
    } 
    else {
      setPasswordError("");
    }

    if (valid) {
      console.log("Login Data :", data);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="lg-form">

        <section className="lg-section">
          <div className="lg-card">

            {/* Logo */}
            <div className="lg-logo">
              <span className="lg-logo-name"><em>Autumn</em>_29</span>
              <span className="lg-logo-sub">Slow Fashion · Ethical Style</span>
            </div>

            <div className="lg-divider"></div>

            <h2 className="lg-heading">Welcome Back</h2>
            <p className="lg-subtext">Sign in to your account to continue</p>

            <div className="lg-form">

              {/* Email */}
              <div className="lg-field">
                <label>Email Address <span className="text-danger">*</span></label>

                {emailError ? <span className='text-danger'>{emailError}</span>:""}

                <input
                  value={data.email}
                  onChange={handleChange}
                  className="lg-input"
                  type="text"
                  id="email"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div className="lg-field">
                <label>Password <span className="text-danger">*</span></label>

                {passwordError ? <span className='text-danger'>{passwordError}</span>:""}

                <input
                  value={data.password}
                  onChange={handleChange}
                  className="lg-input"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <button type="button" className="lg-forgot">
                Forgot password?
              </button>

              <button type="submit" className="lg-btn">
                Sign In →
              </button>

            </div>

            {/* Signup */}
            <div className="lg-bottom">
              Don't have an account?

              <button
                type="button"
                className="lg-link"
                onClick={() => navigate("/signup")}
              >
                Create one
              </button>
            </div>

          </div>
        </section>

      </form>
    </>
  );
}