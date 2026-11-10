import { useEffect, useState } from "react";

const appName = import.meta.env.VITE_APP_NAME || "Web Alpha";
const themeColor = import.meta.env.VITE_THEME_COLOR || "#00f0ff";

const features = [
  {
    number: "01",
    title: "Deploy at the speed of thought",
    description:
      "Ship updates in seconds with a streamlined pipeline built to keep your team in flow.",
    icon: (
      <>
        <path d="M12 3 4.5 13h6l-1 8 10-12h-6l1-6Z" />
      </>
    ),
  },
  {
    number: "02",
    title: "Scale without the guesswork",
    description:
      "Smart infrastructure adapts to your workload, so your product stays ready for what's next.",
    icon: (
      <>
        <path d="M4 17 10 11l4 4 6-8" />
        <path d="M14 7h6v6" />
      </>
    ),
  },
  {
    number: "03",
    title: "See the whole system",
    description:
      "A clear, real-time view of platform health helps your team make confident decisions.",
    icon: (
      <>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </>
    ),
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13m-5-5 5 5-5 5" />
    </svg>
  );
}

function App() {
  const [events, setEvents] = useState(12840);
  const [pingCount, setPingCount] = useState(0);

  useEffect(() => {
    const counterInterval = window.setInterval(() => {
      setEvents((currentEvents) => currentEvents + 1);
    }, 100);

    return () => window.clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    const pingInterval = window.setInterval(() => {
      setPingCount((currentPingCount) => currentPingCount + 1);
    }, 2000);

    return () => window.clearInterval(pingInterval);
  }, []);

  return (
    <div className="app-shell" style={{ "--theme-color": themeColor }}>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--cyan" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--purple" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label={`${appName} home`}>
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>{appName}</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="button button--small button--outline" href="#pricing">
            Get started <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <a className="announcement" href="#features">
              <span className="status-dot" />
              <span>Introducing the next generation platform</span>
              <ArrowIcon />
            </a>
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Infrastructure, reimagined
            </p>
            <h1>
              Build beyond
              <br />
              <span className="gradient-text">the limits.</span>
            </h1>
            <p className="hero-description">
              The foundation for ambitious teams to launch faster, scale
              smarter, and make the impossible feel inevitable.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#pricing">
                Deploy now <ArrowIcon />
              </a>
              <a className="button button--text" href="#features">
                Explore the platform <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>J</span>
                <span>M</span>
                <span>A</span>
                <span>+</span>
              </div>
              <p>
                <strong>2,400+</strong> teams are building with us
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Live platform activity">
            <div className="visual-orbit visual-orbit--outer" />
            <div className="visual-orbit visual-orbit--inner" />
            <div className="visual-core">
              <div className="core-ring">
                <span className="core-symbol">N</span>
              </div>
              <span className="core-caption">SYSTEM ONLINE</span>
            </div>
            <div className="orbit-node orbit-node--one">
              <span className="node-icon">01</span>
              <span>Compute</span>
            </div>
            <div className="orbit-node orbit-node--two">
              <span className="node-icon node-icon--purple">02</span>
              <span>Deploy</span>
            </div>
            <div className="orbit-node orbit-node--three">
              <span className="node-icon node-icon--blue">03</span>
              <span>Monitor</span>
            </div>
            <div className="visual-readout">
              <span className="readout-label">LIVE EVENTS</span>
              <strong>{events.toLocaleString("en-US")}</strong>
              <span className="readout-live">
                <span className="status-dot" /> Updating in real time
              </span>
            </div>
            <div className="visual-coordinate" aria-hidden="true">
              37.7749° N&nbsp; 122.4194° W
            </div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Platform highlights">
          <div className="container signal-strip-inner">
            <p>BUILT FOR WHAT'S NEXT</p>
            <div className="signal-item">
              <span className="signal-value">99.99%</span>
              <span>platform uptime</span>
            </div>
            <span className="signal-divider" />
            <div className="signal-item">
              <span className="signal-value">&lt; 40ms</span>
              <span>global response</span>
            </div>
            <span className="signal-divider" />
            <div className="signal-item">
              <span className="signal-value">24/7</span>
              <span>always in motion</span>
            </div>
          </div>
        </section>

        <section className="features-section container" id="features">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                One platform. More possibility.
              </p>
              <h2>
                Everything you need
                <br />
                <span className="muted-heading">to move at the edge.</span>
              </h2>
            </div>
            <p className="section-intro">
              Powerful building blocks, thoughtfully connected. Spend less
              time managing infrastructure and more time making an impact.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {feature.icon}
                    </svg>
                  </span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a className="feature-link" href="#pricing">
                  Explore feature <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section container" id="pricing">
          <div className="cta-panel">
            <div className="cta-decoration" aria-hidden="true" />
            <div className="cta-content">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Your next chapter starts here
              </p>
              <h2>
                Ready to build
                <br />
                <span className="gradient-text">what's next?</span>
              </h2>
              <p>
                Give your ideas infrastructure that can keep up. Start building
                with {appName} today.
              </p>
              <a className="button button--primary" href="#contact">
                Get started for free <ArrowIcon />
              </a>
            </div>
            <div className="cta-status">
              <span className="status-dot" />
              All systems operational
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>{appName}</span>
            </a>
            <p>Infrastructure for ideas that move the world forward.</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="mailto:hello@example.com">Contact</a>
          </div>
          <div className="footer-live">
            <span className="status-dot" />
            <span>Live connection</span>
            <span className="ping-count">{pingCount} pings</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {appName}. All rights reserved.</span>
          <span className="footer-note">Made for the next frontier.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
