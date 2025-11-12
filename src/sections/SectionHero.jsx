import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/hero.css";

/**
 * Simple hero section
 * Props:
 *  - brand: string (text displayed faintly in background)
 */
export default function SectionHero({ brand = "My Awesome Brand" }) {
  const { scrollY } = useViewportScroll();
  // subtle parallax on background brand
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="hero" id="hero">
      {/* large faint background text */}
      <motion.div className="hero__bg" style={{ y }}>
        {brand}
      </motion.div>

      <div className="hero__content">
        <h1 className="hero__title">Welcome to {brand}</h1>
        <p className="hero__subtitle">
          Discover quality, creativity, and craftsmanship in every sip.
        </p>
        <a href="#shop" className="hero__cta">Shop Here</a>
      </div>
    </section>
  );
}
