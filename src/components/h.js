import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";


function Hero({ setBgVideo, onDone}) {
  
  const fullText = "Hi, I’m Jay";
  const [count, setCount] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
  const typing = setInterval(() => {
    setCount((prev) => {
      if (prev < fullText.length) return prev + 1;
      clearInterval(typing);
      setTimeout(() => {
        setShowSubtitle(true);
        onDone();
      }, 300);
      return prev;
    });
  }, 120);

  return () => clearInterval(typing);
}, [onDone]);


  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="typing">
          {fullText.slice(0, count)}
          <span className="cursor">|</span>
        </h1>

        {showSubtitle && (
          <>
            <p className="subtitle bullet-reveal">
              BTech ICT Student | Going Beyond
            </p>

            <SocialIcons setBgVideo={setBgVideo} />

          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
