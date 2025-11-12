import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

/**
 * Hero with 3 landscape cards (image, image, video)
 * Props:
 *  - brand: string
 *  - images: array of image paths (2 items) e.g. ["/assets/images/1.jpg","/assets/images/2.jpg"]
 *  - video: video path e.g. "/assets/videos/clip.mp4"
 */
export default function SectionHero({
  brand = "My Awesome Brand",
  images = ["/assets/images/left.jpg", "/assets/images/mid.jpg"],
  video = "/assets/videos/right.mp4",
}) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.55,
      },
    },
  };

  const card = {
    hidden: { y: -40, opacity: 0, scale: 0.98 },
    show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] } },
  };

  return (
    <section className="hero" id="hero">

      <div className="hero__content">

        {/* Cards row */}
        <motion.div
          className="hero__cards"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left image */}
          <motion.figure className="hero__card" variants={card}>
            <img
              src={images[0]}
              alt={`${brand} sample 1`}
              className="hero__media"
              loading="lazy"
            />
          </motion.figure>

          {/* Middle image */}
          <motion.figure className="hero__card" variants={card}>
            <img
              src={images[1]}
              alt={`${brand} sample 2`}
              className="hero__media"
              loading="lazy"
            />
          </motion.figure>

          {/* Right video */}
          <motion.figure className="hero__card hero__card--video" variants={card}>
            <video
              className="hero__media hero__video"
              src={video}
              poster={images[1]}
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
