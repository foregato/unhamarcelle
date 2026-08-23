import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses"; // novo — seção de cursos
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses /> {/* seção de cursos */}
      <Portfolio />
      <Testimonials /> {/* seção de feedback */}
      <Contact />
    </>
  );
}
