import React from "react";
import "../cssComponents/Contact.css";

export default function Contact() {
  return (
    <section className="ct-section">

      {/* Floating Leaves */}
      <span className="leaf">🍂</span>
      <span className="leaf">🍁</span>
      <span className="leaf">🍂</span>
      <span className="leaf">🍁</span>

      {/* Header */}
      <div className="ct-header">
        <span className="ct-label">Get In Touch</span>
        <h2 className="ct-heading">We'd love to <em>hear</em> from you</h2>
        <p className="ct-subtext">
          Have a question about an order, a style, or just want to say hello? We're here for you.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="ct-wrapper">

        {/* Left — Store Info */}
        <div>

          <div className="ct-info-block">
            <h4 className="ct-info-title">📍 Our Studio</h4>
            <p className="ct-info-text">
              Autumn_29 Studio<br />
              Kolhapur, Maharashtra, India
            </p>
          </div>

          <div className="ct-divider" />

          <div className="ct-info-block">
            <h4 className="ct-info-title">📧 Email Us</h4>
            <p className="ct-info-text">
              hello@autumn29.in<br />
              We reply within 24 hours.
            </p>
          </div>

          <div className="ct-divider" />

          <div className="ct-info-block">
            <h4 className="ct-info-title">📞 Call Us</h4>
            <p className="ct-info-text">
              +91 98765 43210<br />
              Mon – Sat, 10am to 6pm
            </p>
          </div>

        </div>

        {/* Right — Contact Form */}
        <div className="ct-form">

          <div className="ct-row">
            <input
              className="ct-input"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="ct-input"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <input
            className="ct-input"
            type="text"
            placeholder="Subject"
          />

          <textarea
            className="ct-textarea"
            placeholder="Write your message here..."
          />

          <button className="ct-btn">Send Message →</button>

        </div>

      </div>

    </section>
  );
}