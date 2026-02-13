import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function SocialIcons({ setBgVideo }) {
  const timeoutRef = useRef(null);
  const defaultVideo = "/video/bg.mp4";

  function handleEnter(video) {
    clearTimeout(timeoutRef.current);
    setBgVideo(video);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => {
      setBgVideo(defaultVideo);
    }, 2500);
  }

  function openLink(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="socials" onMouseLeave={handleLeave}>
      <div className="social-item" onMouseEnter={() => handleEnter("/video/github.mp4")} onClick={() => openLink("https://github.com")}>
        <FaGithub />
      </div>
      <div className="social-item" onMouseEnter={() => handleEnter("/video/leetcode.mp4")} onClick={() => openLink("https://leetcode.com")}>
        <SiLeetcode />
      </div>
      <div className="social-item" onMouseEnter={() => handleEnter("/video/codeforces.mp4")} onClick={() => openLink("https://codeforces.com")}>
        <SiCodeforces />
      </div>
      <div className="social-item" onMouseEnter={() => handleEnter("/video/linkedin.mp4")} onClick={() => openLink("https://linkedin.com")}>
        <FaLinkedin />
      </div>
      <div className="social-item" onMouseEnter={() => handleEnter("/video/instagram.mp4")} onClick={() => openLink("https://instagram.com")}>
        <FaInstagram />
      </div>
    </div>
  );
}

export default SocialIcons;
