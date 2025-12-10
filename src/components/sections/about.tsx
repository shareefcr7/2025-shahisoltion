"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Real-world project-based teaching",
  "Career support & placement guidance",
  "Practical coding skills over theory",
  "Custom software development services"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-['var(--font-bebas)'] text-4xl sm:text-5xl uppercase tracking-wider mb-4 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
            More Than Just an Institute
          </h2>
          <p className="text-muted-foreground text-lg">
            ShahiSolution is a hybrid of a training institute and a software development company. 
            We bridge the gap between academic learning and industry demands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid gap-4 sm:grid-cols-2"
            >
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-white/5 hover:border-primary/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                    </div>
                ))}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 group animate-float shadow-2xl shadow-primary/10"
            >
               <Image 
                 src="/images/build-learn-grow-ai.png"
                 alt="Build Learn Grow - ShahiSolution"
                 fill
                 className="object-cover animate-breathe"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
               <div className="absolute bottom-0 left-0 right-0 p-8 text-center sm:text-left">
                   <p className="font-['var(--font-bebas)'] text-3xl sm:text-4xl font-bold text-white mb-2 uppercase tracking-wide bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Build. Learn. Grow.</p>
                   <p className="text-muted-foreground text-sm sm:text-base">We don't just teach code; we build software.</p>
               </div>
            </motion.div>
        </div>
      </Container>
    </section>
  );
}
