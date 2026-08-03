import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { CareerInterests } from "@/components/sections/CareerInterests";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <About />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <Education />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <Experience />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <Projects />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <Skills />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <Certifications />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <CareerInterests />
        <div className="hairline mx-auto h-px max-w-6xl" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
