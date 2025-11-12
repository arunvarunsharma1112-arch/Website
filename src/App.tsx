import React, { useState } from "react";
import Preloader from "./components/Preloader";
import "./styles/globals.css"; // your global styles

export default function App(){
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Preloader runs on initial mount. Once done it calls setLoaded(true) */}
      {!loaded && (
        <Preloader
          brand="My Awesome Brand"   // change your brand name here
          typingSpeed={70}
          pauseAfter={650}
          onDone={() => setLoaded(true)}
        />
      )}

      {/* Main app content - keep components in separate files */}
      <div className={`app ${loaded ? "app--loaded" : "app--hidden"}`}>
        {/* add more sections here */}
      </div>
    </>
  );
}
