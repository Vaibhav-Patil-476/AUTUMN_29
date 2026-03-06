import React from "react";
import "../cssComponents/About.css";

export default function About() {
  return (
    <>
      <section className="ab-root">

        {/* HERO */}
        <div className="ab-hero">
          <div className="ab-hero-leaves">
            <span className="leaf">🍂</span>
            <span className="leaf">🍁</span>
            <span className="leaf">🍂</span>
            <span className="leaf">🍁</span>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="ab-hero-tag">Our Story</div>
            <h1>We are <em>Autumn_29</em></h1>
            <p className="ab-hero-sub">Clothes that feel like the season you never want to leave</p>
          </div>
        </div>

        {/* STORY */}
        <div className="ab-story">
          <div className="ab-story-img">
            <img
              src="https://images.unsplash.com/photo-1485518882345-15568b007407?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" style={{height:"600px"}}
              alt="Autumn_29 clothing"
            />
            <div className="ab-story-img-overlay" />
            <div className="ab-story-badge">Est. 2019</div>
          </div>

          <div className="ab-story-content">
            <p className="ab-section-label">Who We Are</p>
            <h2>Born from the warmth of <em>golden days</em></h2>
            <div className="ab-story-divider" />
            <p>
              Autumn_29 started with a simple obsession — the feeling of putting on the perfect coat
              on a crisp October morning. We wanted to bottle that warmth and turn it into a wardrobe.
            </p>
            <p>
              Every piece in our collection is thoughtfully designed around the palette, texture, and
              mood of the autumn season. Burnt oranges, foggy greys, deep rusts — clothing that makes
              you feel dressed even when you're just stepping out for coffee.
            </p>
            <p>
              We're a small team of designers who believe fashion should slow down, feel intentional,
              and last longer than a single trend cycle.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="ab-stats">

          <div className="ab-stat">
            <span className="ab-stat-num">2019</span>
            <span className="ab-stat-label">Founded</span>
          </div>

          <div className="ab-stat">
            <span className="ab-stat-num">4,800+</span>
            <span className="ab-stat-label">Happy Customers</span>
          </div>

          <div className="ab-stat">
            <span className="ab-stat-num">100%</span>
            <span className="ab-stat-label">Ethical Fabrics</span>
          </div>

          <div className="ab-stat">
            <span className="ab-stat-num">29</span>
            <span className="ab-stat-label">Signature Pieces</span>
          </div>

        </div>

        {/* VALUES */}
        <div className="ab-values">
          <div className="ab-values-header">
            <p className="ab-section-label" style={{ textAlign: "center" }}>What We Stand For</p>
            <h2>Designed with <em>intention</em></h2>
          </div>

          <div className="ab-values-grid">

            <div className="ab-value-card">
              <span className="ab-value-icon">🍂</span>
              <h3>Seasonal Soul</h3>
              <p>Every piece is inspired by the quiet drama of autumn — warm tones, rich textures, and the beauty of change.</p>
            </div>

            <div className="ab-value-card">
              <span className="ab-value-icon">🧵</span>
              <h3>Crafted Carefully</h3>
              <p>We work with ethical suppliers and natural fabrics. Slow fashion, made to last more than one season.</p>
            </div>

            <div className="ab-value-card">
              <span className="ab-value-icon">🌿</span>
              <h3>Conscious Choices</h3>
              <p>Minimal packaging, carbon-offset shipping, and a commitment to reducing waste in everything we do.</p>
            </div>

          </div>
        </div>

        {/* FOUNDER QUOTE */}
        <div className="ab-quote">
          <p className="ab-quote-text">
            "We didn't want to make <em>more clothes</em>. We wanted to make the{" "}
            <em>right clothes</em> — pieces that feel like coming home on a cold afternoon."
          </p>
          <p className="ab-quote-author">
            — Founder, <span>Autumn_29</span>
          </p>
        </div>

      </section>
    </>
  );
}