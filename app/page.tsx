"use client";

import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Distinctive, responsive websites designed around your brand and business goals.",
  },
  {
    number: "02",
    title: "E-commerce Experiences",
    description:
      "Thoughtful online shopping experiences built to make discovery effortless.",
  },
  {
    number: "03",
    title: "UI / UX Design",
    description:
      "Beautiful interfaces that make digital experiences feel natural and intuitive.",
  },
  {
  number: "04",
  title: "App Development",
  description:
    "Modern mobile applications designed to make your ideas accessible, useful, and memorable.",
},
{
  number: "05",
  title: "Website Redesign",
  description:
    "Transform an outdated digital presence into something fresh and memorable.",
},
   
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        scrollable > 0 ? window.scrollY / scrollable : 0
      );
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-label, .service-card, .about-content, .footer-main"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <nav className="navbar">
        <a href="#home" className="brand" aria-label="BloBuild home">
          BLO<span>BUILD</span><i>.</i>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a project <span>↗</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow" />
        <div className="hero-grid" />

        <div className="hero-topline">
          <span>INDEPENDENT DIGITAL STUDIO</span>
          <span>DESIGN · DEVELOPMENT · EXPERIENCE</span>
        </div>

        <div className="hero-content">
          <div className="eyebrow reveal">
            <span className="status-dot" />
            YOUR NEXT DIGITAL CHAPTER STARTS HERE
          </div>

          <h1 className="hero-title">
  WE BUILD
  <br />
  <span className="outline-text">WHAT&apos;S</span>
  <br />
  <span className="green-text">NEXT.</span>
</h1>
          <div className="hero-bottom">
            <p>
              We turn ambitious ideas into distinctive digital experiences
              through thoughtful design and modern development.
            </p>

            <a href="#work" className="round-link">
              <span>EXPLORE OUR WORLD</span>
              <span className="round-arrow">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-orb" aria-hidden="true">
          <div className="orb-ring orb-ring-one" />
          <div className="orb-ring orb-ring-two" />
          <div className="orb-core" />
          <span className="orb-label">IDEAS → DIGITAL</span>
        </div>

        <div className="hero-index">
          <span>01 / 05</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="marquee" aria-label="Our philosophy">
        <div className="marquee-track">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              GOOD IDEAS DESERVE GREAT WEBSITES
              <i>✳</i>
              BUILT TO BE REMEMBERED
              <i>✳</i>
            </span>
          ))}
        </div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="section-label">
          <span>01 — THE INTRODUCTION</span>
          <span>MEET BLOBUILD</span>
        </div>

        <div className="intro-layout">
          <h2>
            DIGITAL IS
            <br />
            MORE THAN
            <br />
            <span className="green-text">A PRESENCE.</span>
          </h2>

          <div className="intro-copy">
            <div className="small-cross">✳</div>
            <p className="intro-lead">
              We believe every business has a story worth experiencing.
            </p>
            <p className="muted-copy">
              BloBuild is a digital studio focused on creating modern websites
              and thoughtful online experiences. We bring design and technology
              together to help ideas find their place in the digital world.
            </p>
            <a href="#services" className="text-link">
              DISCOVER WHAT WE DO <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-label">
          <span>02 — SELECTED CONCEPTS</span>
          <span>OUR CREATIVE PLAYGROUND</span>
        </div>

        <div className="work-heading">
          <h2>
            MADE TO
            <br />
            <span className="outline-text">STAND OUT.</span>
          </h2>
          <p>
            A glimpse into the digital experiences we can create.
            Explore our creative direction through concept projects.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card project-large">
            <div className="project-visual visual-one">
              <div className="mock-browser">
                <div className="browser-bar">
                  <span>● ● ●</span><span>FORMA / STUDIO</span><span>↗</span>
                </div>
                <div className="mock-content">
                  <span className="mock-kicker">CONCEPT 001 / CREATIVE</span>
                  <h3>Less ordinary.<br /><i>More you.</i></h3>
                  <div className="mock-shape" />
                  <span className="mock-button">DISCOVER THE DIFFERENCE ↗</span>
                </div>
              </div>
              <span className="concept-tag">SPECULATIVE CONCEPT</span>
            </div>
            <div className="project-info">
              <div><span>01 / BRAND EXPERIENCE</span><h3>FORMA Studio</h3></div>
              <span className="project-arrow">↗</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual visual-two">
              <div className="fashion-window">
                <span>OBJECTS FOR EVERYDAY LIFE</span>
                <div className="fashion-circle">O.</div>
                <h3>Live with<br />intention.</h3>
                <span className="fashion-bottom">OBJECTS / 2026</span>
              </div>
              <span className="concept-tag">SPECULATIVE CONCEPT</span>
            </div>
            <div className="project-info">
              <div><span>02 / E-COMMERCE</span><h3>Object House</h3></div>
              <span className="project-arrow">↗</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-visual visual-three">
              <div className="tech-window">
                <span>NEW PERSPECTIVES / 2026</span>
                <h3>THE FUTURE<br /><i>IS IN MOTION.</i></h3>
                <div className="tech-sphere" />
                <span className="tech-footer">EXPLORE WHAT&apos;S NEXT ↗</span>
              </div>
              <span className="concept-tag">SPECULATIVE CONCEPT</span>
            </div>
            <div className="project-info">
              <div><span>03 / DIGITAL EXPERIENCE</span><h3>Beyond Tomorrow</h3></div>
              <span className="project-arrow">↗</span>
            </div>
          </article>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-label">
          <span>03 — WHAT WE DO</span>
          <span>THOUGHTFUL BY DESIGN</span>
        </div>

        <div className="services-heading">
          <h2>
            SMALL DETAILS.
            <br />
            <span className="green-text">BIG IMPACT.</span>
          </h2>
          <p>
            The right combination of design, technology and purpose
            can change how people experience your business.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-label">
          <span>04 — HOW WE WORK</span>
          <span>IDEA TO EXPERIENCE</span>
        </div>

        <h2 className="process-heading">
          GOOD WORK IS
          <br />
          <span className="outline-text">NEVER AN ACCIDENT.</span>
        </h2>

        <div className="process-grid">
          {[
            ["01", "Discover", "First, we understand your vision, your audience and what success means to you."],
            ["02", "Design", "We shape the visual language and user experience around your goals."],
            ["03", "Develop", "We turn the approved direction into a responsive, functional experience."],
            ["04", "Launch", "We test the details and prepare your website for the world."],
          ].map(([number, title, description]) => (
            <article className="process-card" key={number}>
              <span>{number} / THE PROCESS</span>
              <div className="process-symbol">{number === "01" ? "◎" : number === "02" ? "✳" : number === "03" ? "⌘" : "↗"}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-glow" />
        <span className="statement-label">A DIFFERENT WAY TO THINK DIGITAL.</span>
        <h2>
          YOUR VISION.
          <br />
          <span className="green-text">OUR BUILD.</span>
        </h2>
        <p>Great things start with a conversation.</p>
        <a href="#contact" className="statement-button">
          LET&apos;S BUILD SOMETHING <span>↗</span>
        </a>
      </section>

      <footer className="footer section-pad" id="contact">
        <div className="section-label">
          <span>05 — YOUR NEXT CHAPTER</span>
          <span>THE FLOOR IS YOURS</span>
        </div>

        <div className="footer-main">
          <h2>
            HAVE AN
            <br />
            <span className="green-text">IDEA?</span>
          </h2>
          <div className="footer-contact">
            <p>
              Tell us what you&apos;re imagining. Let&apos;s explore
              what we can build together.
            </p>
            <a
              className="contact-button"
              href="mailto:blobuildweb@gmail.com?subject=Let's%20build%20something"
            >
              START A CONVERSATION <span>↗</span>
            </a>
            <div className="contact-note">
  <a href="tel:+919061500397">+91 90615 00397</a>
  <span> · </span>
  <a
    href="https://www.instagram.com/blobuild?rpxt=MWFmdGlzZ2MwdTNoYw=="
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram ↗
  </a>
</div>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#home" className="brand">
            BLO<span>BUILD</span><i>.</i>
          </a>
          <span>DESIGNED WITH INTENTION. BUILT WITH PURPOSE.</span>
          <a href="#home">BACK TO TOP ↑</a>
          <span>© 2026 BLOBUILD</span>
        </div>
      </footer>
    </main>
  );
}