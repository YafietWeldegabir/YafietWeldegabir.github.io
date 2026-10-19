import { profile } from '../data.js'

export default function Hero({ theme }) {
  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-copy">
          {theme === 'light' ? (
            <div className="hero-light">
              <div className="prompt">
                $ whoami<span className="cursor"></span>
              </div>
              <h1>{profile.name}</h1>
              <p className="role">
                Full Stack Java Developer with {profile.experienceYears} building high-performing
                backend and full-stack applications for top-tier financial institutions. Based in{' '}
                {profile.location}.
              </p>
            </div>
          ) : (
            <div className="hero-dark">
              <div className="editor">
                <div className="editor-bar">
                  <span className="dot r"></span>
                  <span className="dot y"></span>
                  <span className="dot g"></span>
                  <span className="filename">profile.js</span>
                </div>
                <div className="editor-body">
                  <div className="gutter">
                    1<br />2<br />3<br />4<br />5<br />6<br />7
                  </div>
                  <div className="code">
                    <span className="k">const</span> engineer = {'{'}
                    <br />
                    {'  '}name: <span className="s">"{profile.name}"</span>,
                    <br />
                    {'  '}role: <span className="s">"{profile.role}"</span>,
                    <br />
                    {'  '}focus: <span className="s">"{profile.focus}"</span>,
                    <br />
                    {'  '}experience: <span className="s">"{profile.experienceYears}"</span>,
                    <br />
                    {'  '}location: <span className="s">"{profile.location}"</span>,{' '}
                    <span className="c">// open to remote</span>
                    <br />
                    {'};'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hero-portrait" aria-label="Profile picture">
          <img src="/profile.jpg" alt={`${profile.name} profile`} />
        </div>
      </div>

      <div className="hero-actions">
        <a className="btn primary" href="cv.pdf" download>
          Download CV
        </a>
        <a className="btn ghost" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
        <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
