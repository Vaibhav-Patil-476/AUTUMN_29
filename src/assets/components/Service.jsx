import React from "react";
import "../cssComponents/Service.css"

function Services() {
  return (
    <>
      <section className="sv-section">

        {/* Header */}
        <div className="sv-header">
          <span className="sv-label">What We Offer</span>
          <h2 className="sv-heading">Crafted for your <em>comfort</em></h2>
        </div>

        {/* Cards */}
        <div className="sv-grid">

          <div className="sv-card">
            <span className="sv-icon">🚚</span>
            <h3 className="sv-card-title">Free Shipping</h3>
            <p className="sv-card-desc">Free delivery on all orders above ₹999, delivered within 3–5 days across India.</p>
          </div>

          <div className="sv-card">
            <span className="sv-icon">🔄</span>
            <h3 className="sv-card-title">Easy Returns</h3>
            <p className="sv-card-desc">7-day hassle-free returns. Not satisfied? We'll refund every rupee, no questions asked.</p>
          </div>

          <div className="sv-card">
            <span className="sv-icon">👗</span>
            <h3 className="sv-card-title">Weekly Drops</h3>
            <p className="sv-card-desc">New autumn styles arrive every week. Fresh looks, every time you visit.</p>
          </div>

          <div className="sv-card">
            <span className="sv-icon">🧵</span>
            <h3 className="sv-card-title">Quality Fabrics</h3>
            <p className="sv-card-desc">Natural, breathable fabrics from ethical suppliers. Built to last beyond one season.</p>
          </div>

          <div className="sv-card">
            <span className="sv-icon">💳</span>
            <h3 className="sv-card-title">Secure Payments</h3>
            <p className="sv-card-desc">UPI, cards, wallets — all 100% secure. Shop with complete peace of mind.</p>
          </div>

          <div className="sv-card">
            <span className="sv-icon">🎁</span>
            <h3 className="sv-card-title">Gift Wrapping</h3>
            <p className="sv-card-desc">Make it special. We'll wrap your order beautifully for the ones you love.</p>
          </div>

        </div>

        {/* Button */}
        <div className="sv-bottom">
          <button className="sv-btn">Shop the Collection →</button>
        </div>

      </section>
    </>
  );
}

export default Services;