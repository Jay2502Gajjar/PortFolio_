function MainMenu() {

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  return (
    <div className="re4-menu">
      <div className="re4-item" onClick={() => scrollTo("home")}>
        ABOUT
      </div>

      <div className="re4-item" onClick={() => scrollTo("stack")}>
        TECH STACK
      </div>

      <div
        className="re4-item"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "Jay_Gajjar_Resume.pdf";
          link.click();
        }}
      >
        RESUME
      </div>

      <div className="re4-item" onClick={() => scrollTo("projects")}>
        PROJECTS
      </div>

      <div className="re4-item" onClick={() => scrollTo("contact")}>
        CONTACT
      </div>
    </div>
  );
}

export default MainMenu;
