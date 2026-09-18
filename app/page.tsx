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
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
