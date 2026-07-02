import { profile, socials } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import { Reveal, RevealItem } from "./motion/Reveal";
import { SocialIcon, ArrowUpRightIcon } from "./Icons";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900/60 px-6 py-16 text-center hairline sm:px-12">
            {/* soft glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/10 blur-[100px]"
            />

            <SectionHeading
              eyebrow="Contact"
              title="Let's build something"
            />
            <RevealItem as="p">
              <span className="mx-auto -mt-6 block max-w-md text-lg leading-relaxed text-zinc-400">
                Have a project in mind, or just want to say hello? My inbox is
                always open.
              </span>
            </RevealItem>

            <RevealItem>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-200 hover:bg-accent-soft hover:shadow-[0_0_30px_-6px] hover:shadow-accent/60"
              >
                {profile.email}
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </RevealItem>

            <RevealItem>
              <ul className="mt-10 flex items-center justify-center gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.icon === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 hairline transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5 hover:text-zinc-100"
                    >
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-zinc-400">Next.js</span> &amp;{" "}
            <span className="text-zinc-400">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
