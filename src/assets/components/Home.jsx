import React from "react";
import "../cssComponents/Home.css";

function Home() {
  return (
    <>

      {/* ── CAROUSEL ── */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
              alt="First slide"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-caption-custom">
              <span className="hero-tag">New Arrival</span>
              <h1>Wear the <em>Season</em></h1>
              <p>Autumn tones. Timeless style.</p>
              <button className="hero-btn">Shop Now →</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
              alt="Second slide"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-caption-custom">
              <span className="hero-tag">Bestsellers</span>
              <h1>Crafted with <em>Care</em></h1>
              <p>Ethical fabrics. Slow fashion.</p>
              <button className="hero-btn">Explore →</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Third slide"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-caption-custom">
              <span className="hero-tag">Limited Edition</span>
              <h1>The <em>Autumn</em> Edit</h1>
              <p>29 signature pieces. One season.</p>
              <button className="hero-btn">View Collection →</button>
            </div>
          </div>

        </div>

        {/* Prev Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>FREE SHIPPING ABOVE ₹999</span>
          <span className="marquee-dot">🍂</span>
          <span>7-DAY EASY RETURNS</span>
          <span className="marquee-dot">🍂</span>
          <span>NEW DROPS EVERY WEEK</span>
          <span className="marquee-dot">🍂</span>
          <span>100% ETHICAL FABRICS</span>
          <span className="marquee-dot">🍂</span>
          <span>FREE SHIPPING ABOVE ₹999</span>
          <span className="marquee-dot">🍂</span>
          <span>7-DAY EASY RETURNS</span>
          <span className="marquee-dot">🍂</span>
          <span>NEW DROPS EVERY WEEK</span>
          <span className="marquee-dot">🍂</span>
          <span>100% ETHICAL FABRICS</span>
          <span className="marquee-dot">🍂</span>
        </div>
      </div>

      {/* ── CATEGORY STRIP ── */}
      <div className="category-section">
        <div className="category-header">
          <span className="category-label">Shop By Category</span>
          <h2 className="category-heading">Find Your <em>Style</em></h2>
        </div>
        <div className="category-grid">

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80" alt="Outerwear" />
            <div className="category-overlay">
              <h3>Outerwear</h3>
              <span>32 Pieces</span>
            </div>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80" alt="Knitwear" />
            <div className="category-overlay">
              <h3>Knitwear</h3>
              <span>48 Pieces</span>
            </div>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80" alt="Dresses" />
            <div className="category-overlay">
              <h3>Dresses</h3>
              <span>27 Pieces</span>
            </div>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&q=80" alt="Blazers" />
            <div className="category-overlay">
              <h3>Blazers</h3>
              <span>19 Pieces</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── WHY AUTUMN_29 ── */}
      <div className="why-section">
        <div className="why-inner">

          <div className="why-text">
            <span className="why-label">Why Autumn_29</span>
            <h2 className="why-heading">Fashion that <em>means</em> something</h2>
            <p className="why-desc">
              We believe every piece of clothing tells a story. Ours is about slowing down,
              choosing better, and dressing with intention. From harvest-toned knits to
              fog-grey coats — every item is made to last beyond the season.
            </p>
            <button className="why-btn">Our Story →</button>
          </div>

          <div className="why-img">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80" alt="Autumn_29 Story" />
            <div className="why-badge">Est. 2019</div>
          </div>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">

        <div className="stat-item">
          <span className="stat-num">4,800+</span>
          <span className="stat-label">Happy Customers</span>
        </div>

        <div className="stat-divider" />

        <div className="stat-item">
          <span className="stat-num">29</span>
          <span className="stat-label">Signature Pieces</span>
        </div>

        <div className="stat-divider" />

        <div className="stat-item">
          <span className="stat-num">100%</span>
          <span className="stat-label">Ethical Fabrics</span>
        </div>

        <div className="stat-divider" />

        <div className="stat-item">
          <span className="stat-num">7</span>
          <span className="stat-label">Day Easy Returns</span>
        </div>

      </div>

    </>
  );
}

export default Home;