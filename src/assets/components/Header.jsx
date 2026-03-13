import React from 'react'
import { Link } from 'react-router-dom'
import "../cssComponents/Header.css"

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <span className="leaf">🍂</span>
        <span className="leaf">🍁</span>
        <span className="leaf">🍁</span>
        <span className="leaf">🍁</span>
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

            <ul className="navbar-nav align-items-center gap-4">

              <li className="nav-item">
                <Link to="/" className="nav-link">HOME</Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">ABOUT</Link>
              </li>

              <li className="nav-item">
                <Link to="/gallery" className="nav-link">GALLERY</Link>
              </li>

              <li className="nav-item">
                <Link to="/service" className="nav-link">SERVICE</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">CONTACT</Link>
              </li>
              <li className="nav-item1">
                <Link to="/login" className="nav-link">LOGIN</Link>
              </li>
              {/* CENTER LOGO */}
              <li className="nav-item">
                <Link to="/" className="navbar-brand text-center">
                  <img
                    src="/assets/images/logo.png"
                    alt="AUTUMN_29 Logo"
                    width="80"
                    height="80"
                    className="d-block mx-auto"
                  />
                  <span className="fw-bold d-block">AUTUMN_29</span>
                </Link>
              </li>

              <li className="nav-item1">
                <Link to="/adminlogin" className="nav-link">ADMIN LOGIN</Link>
              </li>
              <li className="nav-item1">
                <Link to="/admindashbord" className="nav-link">ADMIN DashBord</Link>
              </li>
              <li className="nav-item1">
                <Link to="/allproducts" className="nav-link">All Products</Link>
              </li>

              <li className="nav-item1">
                <Link to="/addproduct" className="nav-link">Add Products</Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Header