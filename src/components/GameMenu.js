function GameMenu({ scrollTo }) {
  const items = [
    { label: "ABOUT", id: "home" },
    { label: "TECH STACK", id: "stack" },
    { label: "RESUME", action: "resume" },
    { label: "PROJECTS", id: "projects" },
    { label: "CONTACT", id: "contact" }
  ];

  function handleClick(item) {
    if (item.action === "resume") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Jay_Gajjar_Resume.pdf";
      link.click();
    } else {
      scrollTo(item.id);
    }
  }

  return (
    <div className="game-menu">
      {items.map((item, i) => (
        <div
          key={i}
          className="game-menu-item"
          onClick={() => handleClick(item)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default GameMenu;
