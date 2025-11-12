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
    <></>
  );
}
