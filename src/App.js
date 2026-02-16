import { useState } from "react";


import BackgroundVideo from "./components/BackgroundVideo";
import Hero from "./components/h";
import About from "./components/About";
import Player from "./components/player";
import PingPong from "./components/PingPong";
import IntroOverlay from "./components/IntroOverlay";
import MainMenu from "./components/MainMenu";

import TypingTest from "./components/TypingTest";

import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

function App() {

  const [bgVideo, setBgVideo] = useState("/video/bg.mp4");
  const [showAbout, setShowAbout] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  

  

  return (
  <>
    {/* INTRO OVERLAY */}
    {!introDone && (
      <IntroOverlay
  onFinish={() => {
    setIntroDone(true);
  }}
/>

    )}

    {/* MAIN SITE */}
    {introDone && (
      <>
        {/* Floating pill navbar */}
       

        {/* Background video */}
        <BackgroundVideo video={bgVideo} />

        {/* Scrollable content */}
        <div className="page">

          {/* HERO SECTION */}
          <section id="home" className="hero-section">

  <div className="left-panel">
    <div className="mini-games">
      <PingPong />
      <TypingTest />
    </div>

    <MainMenu />
  </div>

  <Hero
    setBgVideo={setBgVideo}
    onDone={() => setShowAbout(true)}
  />

  <About show={showAbout} />
  <Player />

</section>


          {/* STACK */}
          <section id="stack">
            <Stack />
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <Projects />
          </section>

          {/* CONTACT */}
          <section id="contact" className="contact-section">
            <Contact />
          </section>

        </div>
      </>
    )}
  </>
);
}

export default App;
