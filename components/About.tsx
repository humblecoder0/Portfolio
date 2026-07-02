import { profile } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Reveal, RevealItem } from "./motion/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <SectionHeading eyebrow="About" title="A bit about me" />

          <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
            <div className="space-y-6">
              {profile.bio.map((paragraph, i) => (
                <RevealItem as="p" key={i}>
                  <span className="block text-lg leading-relaxed text-zinc-300">
                    {paragraph}
                  </span>
                </RevealItem>
              ))}
            </div>

            <RevealItem>
              <dl className="space-y-5 rounded-2xl bg-ink-900/60 p-6 hairline">
                <div>
                  <dt className="text-sm text-zinc-500">Currently</dt>
                  <dd className="mt-1 text-zinc-200">{profile.role}</dd>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <dt className="text-sm text-zinc-500">Based in</dt>
                  <dd className="mt-1 text-zinc-200">{profile.location}</dd>
                </div>
                <div className="h-px bg-white/5" />
                <div>
                  <dt className="text-sm text-zinc-500">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-accent-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
