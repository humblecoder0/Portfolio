"use client";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";
import Signature from "./Signature";
import { ArrowUpRightIcon } from "./Icons";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Expertise" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = ["hero", "projects", "about", "skills", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const passed = sections.filter(
        (section) => section.getBoundingClientRect().top <= 180,
      );
      const current = passed[passed.length - 1];
      setActive(current ? `#${current.id}` : "");
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const media = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    media.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header ref={header} className="site-header">
      <nav aria-label="Primary" className="container-content nav-inner">
        <a href="#hero" className="brand" onClick={() => setOpen(false)}>
          <Signature />
          <span className="sr-only">{profile.name}, home</span>
        </a>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
          onBlur={(event) => {
            if (!header.current?.contains(event.relatedTarget)) setOpen(false);
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <span className="nav-indicator" aria-hidden="true" />
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRightIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
