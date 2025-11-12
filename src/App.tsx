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
      {!loaded && (
        <Preloader
          brand={BRAND}
          typingSpeed={60}
          pauseAfter={600}
          onDone={() => setLoaded(true)}
        />
      )}

      <Navbar brand={BRAND} visible={loaded} />

      <div className={`app ${loaded ? "app--loaded" : "app--hidden"}`}>
        <SectionHero brand={BRAND} />
      </div>
    </>
  );
}
