import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import SectionHero from "./sections/SectionHero";
import "./styles/globals.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const BRAND = "My Awesome Brand";

  return (
    <>
      {/* ✅ Preloader shows first */}
      {!loaded && (
        <Preloader
          brand={BRAND}
          typingSpeed={60}
          pauseAfter={600}
          onDone={() => setLoaded(true)}
        />
      )}

      {/* ✅ Navbar appears ONLY after preloader */}
      <Navbar brand={BRAND} visible={loaded} />

      {/* ✅ Main content */}
      <div className={`app ${loaded ? "app--loaded" : "app--hidden"}`}>
        <SectionHero brand={BRAND} />
      </div>
    </>
  );
}
