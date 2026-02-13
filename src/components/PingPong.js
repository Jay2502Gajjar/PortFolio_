import { useEffect, useRef, useState } from "react";

function PingPong() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Positions
    let playerY = canvas.height / 2 - 40;
    let enemyY = canvas.height / 2 - 40;

    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;

    // Speed (slow & playable)
    let vx = 2.5;
    let vy = 2;

    // Scores
    let playerScore = 0;
    let enemyScore = 0;

    let running = true;

    function resetBall(direction = 1) {
      ballX = canvas.width / 2;
      ballY = canvas.height / 2;
      vx = 2.5 * direction;
      vy = (Math.random() > 0.5 ? 1 : -1) * 2;
    }

    function drawScore() {
      ctx.font = "16px monospace";
      ctx.fillStyle = "#e5e7eb";
      ctx.fillText(`YOU: ${playerScore}`, 30, 30);
      ctx.fillText(`AI: ${enemyScore}`, canvas.width - 90, 30);
    }

    function loop() {
      if (!running) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw score
      drawScore();

      // Player paddle
      ctx.fillRect(20, playerY, 10, 80);

      // Enemy paddle
      ctx.fillRect(canvas.width - 30, enemyY, 10, 80);

      // Ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Move ball
      ballX += vx;
      ballY += vy;

      // Wall collision
      if (ballY <= 6 || ballY >= canvas.height - 6) {
        vy *= -1;
      }

      // Player collision
      if (
        ballX <= 36 &&
        ballY >= playerY &&
        ballY <= playerY + 80
      ) {
        vx *= -1;
      }

      // Enemy collision
      if (
        ballX >= canvas.width - 36 &&
        ballY >= enemyY &&
        ballY <= enemyY + 80
      ) {
        vx *= -1;
      }

      // 🧠 Enemy AI follows the ball
      const enemyCenter = enemyY + 40;
      const target = ballY - enemyCenter;

      enemyY += Math.sign(target) * Math.min(Math.abs(target), 3);

      enemyY = Math.max(0, Math.min(canvas.height - 80, enemyY));

      // Score handling
      if (ballX < 0) {
        enemyScore++;
        resetBall(1);
      }

      if (ballX > canvas.width) {
        playerScore++;
        resetBall(-1);
      }

      requestAnimationFrame(loop);
    }

    loop();

    function handleKey(e) {
      e.preventDefault();

      if (e.key === "ArrowUp") playerY -= 12;
      if (e.key === "ArrowDown") playerY += 12;

      playerY = Math.max(0, Math.min(canvas.height - 80, playerY));
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      running = false;
      window.removeEventListener("keydown", handleKey);
    };
  }, [active]);

  return (
    <>
      {/* PREVIEW ICON */}
      <div className="pong-wrapper" onClick={() => setActive(true)}>
        <div className="pong-icon">🕹️</div>
        <p className="pong-label">Mini Game (WIP)</p>
      </div>

      {/* FULL GAME */}
      {active && (
        <div className="pong-overlay">
          <button className="pong-close" onClick={() => setActive(false)}>
            ✕
          </button>

          <canvas
            ref={canvasRef}
            width="520"
            height="360"
            className="pong-canvas"
          />
        </div>
      )}
    </>
  );
}

export default PingPong;
