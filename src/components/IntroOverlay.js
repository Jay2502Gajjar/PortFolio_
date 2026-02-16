import { useEffect } from "react";

function IntroOverlay({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="intro-overlay">
      <div className="intro-box fade-in">
        <h1>WELCOME</h1>
      </div>
    </div>
  );
}

export default IntroOverlay;
