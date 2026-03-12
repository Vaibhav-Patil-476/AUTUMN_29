import "../cssComponents/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        <div className="footer-flex">

          {/* LEFT SIDE */}
          <div className="footer-brand">
            {/* CENTER LOGO */}
            <div className="nav-item pe-5 me-5">
              <div className="ps-5 ms-5">


                <img
                  src="/assets/images/logo.png"
                  alt="AUTUMN_29 Logo"
                  width="80"
                  height="80"
                  className="d-block mx-auto"
                />
              </div>
            </div>
            <h3 className="footer-logo ps-5 ms-0">AUTUMN_29</h3>
            <p className="footer-tagline">
              Luxury fashion crafted with elegance and <div className="ms-4 ps-5">timeless design.
              </div>           </p>


          </div>

          {/* RIGHT SIDE */}
          <div className="footer-right">
            <div className="vaibhav">



              <h5>Quick Links</h5>
              <br />
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>

            </div>

            <div className="footer-col">
              <h5>Contact</h5><br />
              <ul>
                <li>Email: info@autumn29.com</li>
                <li>Phone: +91 8308002873</li>
                <li>Kolhapur, India</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} AUTUMN_29. All rights reserved.
      </div>
    </footer>
  );
}