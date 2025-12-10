"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";

export function Founder() {
  return (
    <section id="founder" className="py-20 relative overflow-hidden">
      <Container>
        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="relative w-full max-w-md aspect-[3/4] md:aspect-square lg:h-[500px] shrink-0"
           >
              <div className="absolute inset-0 bg-primary/20 rounded-2xl md:translate-x-4 md:translate-y-4 rounded-tr-[50px] rounded-bl-[50px]" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-muted rounded-tr-[50px] rounded-bl-[50px] shadow-2xl">
                 <Image
                    src="/images/founder.jpg"
                    alt="Shahi Rahman - Founder"
                    fill
                    className="object-cover"
                 />
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="flex flex-col gap-6"
           >
              <div>
                  <h2 className="font-['var(--font-bebas)'] text-4xl uppercase tracking-wider mb-2 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Meet the Founder</h2>
                  <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              
              <div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(110deg,#3b82f6,45%,#ffffff,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer">Shahi Rahman</h3>
                <p className="text-lg text-muted-foreground">Founder of ShahiSolution</p>
              </div>

              <div className="flex flex-wrap gap-3">
                 {["Software Engineering Educator", "MERN Stack Expert", "Mentored 100+ Students 👨‍🏫"].map((role, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
                        {role}
                    </span>
                 ))}
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-lg">
                "I believe in empowering the next generation of developers not just with tutorials, but with the mindset to build real solutions for real problems. Coding is the closest thing we have to superpowers."
              </blockquote>
           </motion.div>
        </div>
      </Container>
    </section>
  );
}
