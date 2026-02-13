function Projects() {
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">Projects</h2>

      <div className="project-card">
  <div className="project-text">
    <h3>
      AI Game Boss (Still in Development)
    </h3>
    <p>
      An intelligent game boss powered by Q-learning and reinforcement learning.
      The decision-making logic and training pipeline are fully implemented in
      Python, allowing the boss to adapt dynamically to player behavior.
    </p>
    <p>
      Currently working on integrating the AI into an interactive game
      environment using React.js to visualize and control real-time gameplay.
    </p>
  </div>

  <div className="project-image">
    {/* AI boss preview */}
  </div>
</div>


      <div className="project-card">
        <div className="project-text">
          <h3>Mini Ping Pong Game</h3>
          <p>
            A browser-based mini game built using Canvas and JavaScript,
            featuring simple AI and smooth keyboard controls.
          </p>
        </div>
        <div className="project-image"></div>
      </div>

      <div className="project-card">
        <div className="project-text">
          <h3>Interactive Portfolio</h3>
          <p>
            A cinematic personal portfolio with animated backgrounds,
            interactive elements, and smooth user experience.
          </p>
        </div>
        <div className="project-image"></div>
      </div>
    </div>
  );
}

export default Projects;
