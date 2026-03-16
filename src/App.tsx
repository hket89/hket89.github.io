import { profile } from './content/profile';
import './App.css';

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-name">{profile.name}</div>
            <div className="brand-title">{profile.title}</div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="section hero">
          <div className="container hero-inner">
            <div>
              <p className="eyebrow">
                {profile.title} · {profile.yearsOfExperience}
              </p>
              <h1>
                Building scalable systems,{' '}
                <span className="accent">from AWS to LLMs</span>.
              </h1>
              <p className="location">{profile.location}</p>
              <div className="summary">
                {profile.summary.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="hero-actions">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button primary"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2>Skills</h2>
            <div className="grid skills-grid">
              {profile.skillCategories.map((cat) => (
                <div key={cat.name} className="card">
                  <h3>{cat.name}</h3>
                  <div className="badges">
                    {cat.items.map((item) => (
                      <span key={item} className="badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2>Key Experience Highlights</h2>
            <div className="timeline">
              {profile.highlights.map((h) => (
                <article key={h.title} className="timeline-item">
                  <h3>{h.title}</h3>
                  <p>{h.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="grid projects-grid">
              {profile.projects.map((project) => (
                <article key={project.name} className="card project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="badges">
                    {project.techStack.map((t) => (
                      <span key={t} className="badge badge-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>
              The best way to reach me is via{' '}
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              . I am open to collaborating on projects involving AWS, event-driven
              systems, or AI/LLM applications.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React & Vite</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
