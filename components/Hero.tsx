import Image from "next/image";
import { profile, projects } from "@/lib/content";
import { ArrowDownIcon, ArrowUpRightIcon } from "./Icons";

export default function Hero() {
  const featured = projects[0];
  return (
    <section id="hero" className="hero">
      <div className="container-content">
        <div className="hero-topline">
          {profile.availability && (
            <p className="availability">
              <span />
              {profile.availability}
            </p>
          )}
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-intro">Hello, I’m {profile.name}.</p>
            <h1>
              Websites made
              <br />
              to <em>stand out.</em>
            </h1>
            <p className="hero-description">{profile.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <ArrowDownIcon />
              </a>
              <a href="#contact" className="text-link">
                Let’s talk <ArrowUpRightIcon />
              </a>
            </div>
          </div>
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-showcase"
            aria-label={`Explore ${featured.title} (opens in a new tab)`}
          >
            <div className="showcase-grid" aria-hidden="true" />
            <div className="showcase-window">
              <div className="showcase-toolbar" aria-hidden="true">
                <span className="showcase-controls">
                  <i />
                  <i />
                  <i />
                </span>
                <span>{new URL(featured.href).hostname}</span>
                <ArrowUpRightIcon />
              </div>
              <div className="showcase-image">
                <Image
                  src="/projects/aurelion-art.jpg"
                  alt="An otherworldly mountain city from the Aurelion project"
                  fill
                  priority
                  sizes="(max-width: 760px) 90vw, 48vw"
                />
                <div className="showcase-title" aria-hidden="true">
                  <p>
                    Where Myth
                    <br />
                    <em>Becomes Matter.</em>
                  </p>
                </div>
              </div>
              <div className="showcase-caption">
                <span>{featured.title}</span>
              </div>
            </div>
          </a>
        </div>
        <div className="hero-bottom">
          <p>
            Based in Leeds, UK <span>·</span> Building for everywhere.
          </p>
          <a href="#projects">
            Scroll to discover <ArrowDownIcon />
          </a>
        </div>
      </div>
      <div className="discipline-strip">
        <div className="container-content">
          <span>Thoughtful design</span>
          <span>Purposeful development</span>
          <span>Creative advertising</span>
        </div>
      </div>
    </section>
  );
}
