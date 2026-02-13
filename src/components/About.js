

function About() {
  return (
    <div className="about-wrapper">
      
      {/* Photo box */}
      <div className="about-photo">
        {/* Replace src later */}
        <img src="/images/profile.jpeg" alt="Jay" />
      </div>

      {/* Text box */}
      <div className="about-card">
        <p className="about-text">
          I’m a BTech ICT student with a strong interest in problem-solving,
          software development, and building things that feel alive on the
          screen.
        </p>

        <p className="about-text">
          I enjoy working across the stack — from designing smooth user
          interfaces to writing efficient algorithms and exploring how systems
          work under the hood.
        </p>

        <p className="about-text">
          Currently, I’m focused on strengthening my foundations in data
          structures, algorithms, and modern web technologies while
          continuously experimenting with creative ideas.
        </p>
      </div>

    </div>
  );
}

export default About;
