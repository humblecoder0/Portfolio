import { profile } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container-content about-grid">
        <SectionHeading title="Small studio energy. Big-picture thinking." />
        <div className="about-copy">
          <div className="bio">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="text-link">
            Get to know me <ArrowUpRightIcon />
          </a>
          <div className="about-facts">
            <div>
              <span>Based in</span>
              <p>{profile.location}</p>
            </div>
            <div>
              <span>My approach</span>
              <p>Design. Build. Refine.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
