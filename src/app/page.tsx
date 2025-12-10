import { Hero } from "@/components/sections/hero";
import { Founder } from "@/components/sections/founder";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Highlights } from "@/components/sections/highlights";
import { Careers } from "@/components/sections/careers";
import { CPU as CEO } from "@/components/sections/ceo";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <Services />
      <Skills />
      <Highlights />
      <Careers />
      <CEO />
      <Testimonials />
      <Contact />
    </>
  );
}
