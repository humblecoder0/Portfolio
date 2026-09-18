import { skills } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-content expertise-grid">
        <SectionHeading
          title="From first idea to final detail."
          description="Design, development, and the creative thinking that connects them."
        />
        <div className="skill-list">
          {skills.map((group) => (
            <div className="skill-row" key={group.title}>
              <div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
