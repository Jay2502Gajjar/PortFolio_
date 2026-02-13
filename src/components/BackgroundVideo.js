import { useEffect, useRef, useState } from "react";

function BackgroundVideo({ video }) {
  const videoA = useRef(null);
  const videoB = useRef(null);
  const [active, setActive] = useState("A");

  useEffect(() => {
    const current = active === "A" ? videoA.current : videoB.current;
    const next = active === "A" ? videoB.current : videoA.current;

    if (!next) return;

    next.src = video;
    next.load();
    next.play().catch(() => {});
    next.classList.add("visible");
    current.classList.remove("visible");

    setActive(active === "A" ? "B" : "A");
  }, [video]);

  return (
    <>
      <video ref={videoA} className="bg-video visible" muted loop playsInline />
      <video ref={videoB} className="bg-video" muted loop playsInline />
    </>
  );
}

export default BackgroundVideo;
