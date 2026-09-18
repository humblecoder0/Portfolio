import { profile, socials } from "@/lib/content";
import Signature from "./Signature";
import { ArrowUpRightIcon } from "./Icons";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="contact-panel">
        <div className="container-content">
          <div className="contact-top">
            {profile.availability && (
              <p className="availability">
                <span />
                {profile.availability}
              </p>
            )}
          </div>
          <a className="contact-callout" href={`mailto:${profile.email}`}>
            <h2>
              Let’s make
              <br />
              <em>something great.</em>
            </h2>
            <span className="contact-arrow">
              <ArrowUpRightIcon />
            </span>
          </a>
          <div className="contact-bottom">
            <p>
              A new website, a fresh idea, or just a hello.
              <br />
              I’d love to hear from you.
            </p>
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email}
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container-content footer-bottom">
        <a href="#hero" className="brand">
          <Signature />
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </a>
        <div className="footer-links">
          {socials
            .filter((social) => social.icon !== "email")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
                <ArrowUpRightIcon />
              </a>
            ))}
          <a href="#hero">
            Back to top <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
