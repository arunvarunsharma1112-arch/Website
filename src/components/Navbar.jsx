import React from "react";
import { motion } from "framer-motion";
import "../styles/navbar.css";

/**
 * Navbar
 * props:
 *  - brand: string (center brand text)
 *  - visible: boolean (when true, animate down)
 */
export default function Navbar({ brand = "My Awesome Brand", visible = true }) {
  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -90, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -90, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0.9, 0.2, 1] }}
      aria-label="Main navigation"
    >
      <div className="site-nav__inner">
        <div className="site-nav__left" aria-hidden>
          {/* Instagram */}
          <a className="icon-btn" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>

          {/* Facebook */}
          <a className="icon-btn" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 3h3v4h-3v14h-4V7H9V4h2V2.5C11 1.7 11.7 1 12.6 1h1.8V3z" fill="currentColor"/>
            </svg>
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
    </motion.nav>
  );
}
