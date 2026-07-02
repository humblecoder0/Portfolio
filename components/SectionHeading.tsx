import { RevealItem } from "./motion/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <RevealItem>
        <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
          <span className="h-px w-8 bg-accent/50" aria-hidden />
          {eyebrow}
        </p>
      </RevealItem>
      <RevealItem as="h2">
        <span className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </span>
      </RevealItem>
      {description && (
        <RevealItem as="p">
          <span className="mt-4 block text-lg leading-relaxed text-zinc-400">
            {description}
          </span>
        </RevealItem>
      )}
    </div>
  );
}
