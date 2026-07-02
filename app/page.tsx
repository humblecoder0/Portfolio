import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        {/* hairline divider between hero and the rest */}
        <div className="container-content">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
