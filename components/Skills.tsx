import { skills } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Reveal, RevealItem } from "./motion/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I work with"
            description="The stack I reach for to take an idea from sketch to shipped."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => (
              <RevealItem key={group.title}>
                <div className="h-full rounded-2xl bg-ink-900/60 p-6 hairline">
                  <h3 className="font-display text-base font-semibold text-zinc-100">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[15px] text-zinc-400"
                      >
                        <span
                          className="h-1 w-1 rounded-full bg-accent/70"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
