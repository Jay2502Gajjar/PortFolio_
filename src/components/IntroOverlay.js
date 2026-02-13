import { useState } from "react";

function IntroOverlay({ onFinish }) {
  const [name, setName] = useState("");
  const [step, setStep] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    setStep(2);

    setTimeout(() => {
      onFinish(name);
    }, 1500);
  }

  return (
    <div className="intro-overlay">
      {step === 1 && (
        <form className="intro-box fade-in" onSubmit={handleSubmit}>
          <h1>ENTER YOUR NAME</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </form>
      )}

      {step === 2 && (
        <div className="intro-box fade-in">
          <h1>WELCOME, {name.toUpperCase()}</h1>
        </div>
      )}
    </div>
  );
}

export default IntroOverlay;
