import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Founder } from "@/components/sections/founder";
import { CEO } from "@/components/sections/ceo";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Careers } from "@/components/sections/careers";
import { Testimonials } from "@/components/sections/testimonials";
import { Highlights } from "@/components/sections/highlights";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <CEO />
      <About />
      <Services />
      <Skills />
      <Highlights />
      <Careers />
      <Testimonials />
      <Contact />
    </>
  );
}
