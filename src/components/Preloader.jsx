import React, { useEffect, useState } from "react";
import "../styles/preloader.css";

export default function Preloader({
  brand = "Your Brand",
  typingSpeed = 80,    // ms per character
  pauseAfter = 700,    // ms to wait after typing completes
  onDone = () => {}
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < brand.length) {
      const t = setTimeout(() => setIndex(i => i + 1), typingSpeed);
      return () => clearTimeout(t);
    }

    // typed completely, pause, then fade out
    const pause = setTimeout(() => {
      setVisible(false);
      // wait for fade-out animation before calling onDone
      const afterFade = setTimeout(() => onDone(), 500);
      return () => clearTimeout(afterFade);
    }, pauseAfter);

    return () => clearTimeout(pause);
  }, [index, brand, typingSpeed, pauseAfter, onDone]);

  // show typed slice and a blinking cursor
  return (
    <div className={`preloader ${visible ? "preloader--visible" : "preloader--hidden"}`}>
      <div className="preloader__inner" aria-hidden="true">
        <span className="preloader__brand">{brand.slice(0, index)}</span>
        <span className="preloader__cursor" />
      </div>
    </div>
  );
}
