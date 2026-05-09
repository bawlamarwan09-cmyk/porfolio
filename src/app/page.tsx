import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <About />
      <TechStack />
      <Contact />
    </>
  );
}
