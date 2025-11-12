import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../styles/hero.css";

export default function SectionHero({ brand = "My Brand" }) {
  // subtle parallax: map scroll to y translation
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 800], [0, -80]); // adjust values

  return (
    <section className="hero">
      {/* large faint background brand uses framer-motion translateY */}
      <motion.div className="hero__bg" style={{ y }}>
        {brand}
      </motion.div>

      <div className="hero__content">
        <h1 className="hero__title">Welcome to {brand}</h1>
        <p className="hero__subtitle">Refreshing parallax & cinematic entrance.</p>
        <a className="hero__cta" href="#about">Explore</a>
      </div>
    </section>
  );
}
