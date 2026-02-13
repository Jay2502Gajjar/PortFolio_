function Navbar() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="pill-nav">
      <button onClick={() => scrollTo("home")}>About</button>
      
      
      <button onClick={() => scrollTo("stack")}>Tech Stack</button>
      <button
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Jay_Gajjar_Resume.pdf";
      link.click();
    }}
  >
    Resume
  </button>
      <button onClick={() => scrollTo("projects")}>Projects</button>
      <button onClick={() => scrollTo("contact")}>Contact Me</button>
    </div>
  );
}

export default Navbar;
