import React from "react";
import "../cssComponents/Gallery.css";

export default function Gallery() {
  return (
    <section className="gl-section">

      {/* Header */}
      <div className="gl-header">
        <span className="gl-label">Our Collection</span>
        <h2 className="gl-heading">The <em>Autumn</em> Edit</h2>
        <p className="gl-subtext">A curated look at this season's finest pieces</p>
      </div>

      {/* Product Cards Grid */}
      <div className="gl-grid">

        {/* Card 1 */}
        <div className="gl-card">
          <div className="gl-card-img">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" alt="Amber Trench Coat" />
            <span className="gl-badge">New</span>
            <div className="gl-card-actions">
              <button className="gl-action-btn">Add to Cart</button>
            </div>
          </div>
          <div className="gl-card-info">
            <span className="gl-card-category">Outerwear</span>
            <h3 className="gl-card-name">Amber Trench Coat</h3>
            <p className="gl-card-price">₹4,999</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="gl-card">
          <div className="gl-card-img">
            <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" alt="Rust Knit Sweater" />
            <span className="gl-badge gl-badge-hot">Bestseller</span>
            <div className="gl-card-actions">
              <button className="gl-action-btn">Add to Cart</button>
            </div>
          </div>
          <div className="gl-card-info">
            <span className="gl-card-category">Knitwear</span>
            <h3 className="gl-card-name">Rust Knit Sweater</h3>
            <p className="gl-card-price">₹2,499</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="gl-card">
          <div className="gl-card-img">
            <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&q=80" alt="Fog Linen Blazer" />
            <span className="gl-badge">New</span>
            <div className="gl-card-actions">
              <button className="gl-action-btn">Add to Cart</button>
            </div>
          </div>
          <div className="gl-card-info">
            <span className="gl-card-category">Blazers</span>
            <h3 className="gl-card-name">Fog Linen Blazer</h3>
            <p className="gl-card-price">₹3,799</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="gl-card">
          <div className="gl-card-img">
            <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80" alt="Maple Midi Dress" />
            <span className="gl-badge gl-badge-sale">Sale</span>
            <div className="gl-card-actions">
              <button className="gl-action-btn">Add to Cart</button>
            </div>
          </div>
          <div className="gl-card-info">
            <span className="gl-card-category">Dresses</span>
            <h3 className="gl-card-name">Maple Midi Dress</h3>
            <div className="gl-card-price-row">
              <p className="gl-card-price">₹1,999</p>
              <p className="gl-card-price-old">₹2,799</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="gl-card">
          <div className="gl-card-img">
            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80" alt="Winter Wool Coat" />
            <span className="gl-badge">New</span>
            <div className="gl-card-actions">
              <button className="gl-action-btn">Add to Cart</button>
            </div>
          </div>
          <div className="gl-card-info">
            <span className="gl-card-category">Coats</span>
            <h3 className="gl-card-name">Winter Wool Coat</h3>
            <p className="gl-card-price">₹5,499</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="gl-card">
          <div className="gl-card-img">
            <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80" alt="Harvest Knit Cardigan" />
            <span className="gl-badge gl-badge-hot">Bestseller</span>
            <div className="gl-card-actions">
              <button className="gl-action-btn">Add to Cart</button>
            </div>
          </div>
          <div className="gl-card-info">
            <span className="gl-card-category">Knitwear</span>
            <h3 className="gl-card-name">Harvest Knit Cardigan</h3>
            <p className="gl-card-price">₹2,199</p>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="gl-bottom">
        <button className="gl-btn">View Full Collection →</button>
      </div>

    </section>
  );
}