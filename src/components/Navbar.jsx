// src/components/Navbar.jsx
import React from "react";
import "../styles/navbar.css";

export default function Navbar({ brand = "My Awesome Brand", visible = true }) {
  // visible prop only toggles a class; it's optional for debug
  return (
    <nav className={`site-nav ${visible ? "site-nav--visible" : "site-nav--hidden"}`} aria-label="Main navigation">
      <div className="site-nav__inner">
        <div className="site-nav__left" aria-hidden>
          <a className="icon-btn" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
           instagram     
          </a>
          <a className="icon-btn" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            facebook
          </a>
        </div>

        <div className="site-nav__center">
          <a className="site-nav__brand" href="/" aria-label={`Go to ${brand} homepage`}>
            {brand}
          </a>
        </div>

        <div className="site-nav__right">
          <a className="shop-cta" href="/shop" aria-label="Shop here">Shop Here</a>
        </div>
      </div>
    </nav>
  );
}
