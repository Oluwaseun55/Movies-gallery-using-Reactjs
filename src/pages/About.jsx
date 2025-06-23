import "../css/About.css";

function About() {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>Welcome to MovieHub 🎬</h1>
        <p>Your go-to place to explore the world of movies.</p>
      </header>

      <section className="about-intro">
        <div className="intro-text">
          <h2>About the App</h2>
          <p>
            <strong>MovieHub</strong> is a modern React-based movie browsing
            platform powered by the TMDB API. Discover popular films, search
            titles, explore trailers, cast, and get key movie information—all in
            one sleek interface.
          </p>
        </div>
        <div className="intro-image">
          <img src="https://i.imgur.com/d4r5XrA.png" alt="Movie app visual" />
        </div>
      </section>

      <section className="about-features">
        <h2>Key Features</h2>
        <ul>
          <li>🔍 Search movies by title</li>
          <li>🎬 View movie details, cast, release dates</li>
          <li>▶ Watch official trailers</li>
          <li>⬇ Simulated download feature</li>
          <li>❤️ Save favorites using React Context</li>
        </ul>
      </section>

      <section className="about-tech">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <span>React.js</span>
          <span>Axios</span>
          <span>React Router</span>
          <span>TMDB API</span>
          <span>CSS3</span>
        </div>
      </section>

      <section className="about-dev">
        <h2>About the Developer</h2>
        <p>
          <strong>Oluyinka Oluwaseun Emmanuel</strong> is a passionate and
          multi-skilled tech educator, full-stack web developer, and data
          scientist with over 5 years of experience. He holds a B.Tech in
          Computer Engineering from LAUTECH and has trained hundreds of students
          in computer fundamentals, programming, and emerging technologies.
        </p>
        <p>
          His work spans across government-supported school systems, fintech
          platforms like <strong>Arocketpay</strong>, and AI-powered language
          tools tailored for African languages. Oluwaseun is also known for
          organizing student tech bootcamps and serving in leadership roles
          during NYSC.
        </p>
        <p>
          He is passionate about digital inclusion and equipping the next
          generation with future-ready skills in AI, software development, and
          data analytics.
        </p>
        <p className="contact">
          📧{" "}
          <a href="mailto:oluyinkaoluwaseun6@gmail.com">
            oluyinkaoluwaseun6@gmail.com
          </a>{" "}
          &nbsp; | &nbsp; 🔗{" "}
          <a
            href="https://www.linkedin.com/in/oluyinka-oluwaseun-a31843187"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          &nbsp; | &nbsp; 💻{" "}
          <a
            href="https://github.com/Oluwaseun55"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
}

export default About;
