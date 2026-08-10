import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { CareerInterests } from "@/components/sections/CareerInterests";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <CareerInterests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
