"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Mail } from "lucide-react";
import Link from "next/link";
import { Starfield } from "@/components/ui/starfield";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 !bg-transparent">
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 text-center lg:text-left"
          >
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-primary">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="h-4 w-4" />
              </span>
              Launch Your Tech Career
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl xl:text-7xl">
              <span className="bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                Building Future
              </span>
              <span className="block mt-2 bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                Software Engineers
              </span>
              <span className="text-2xl lg:text-4xl block mt-4 font-normal bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                & Real-World Solutions.
              </span>
            </h1>
            
            <p className="mx-auto lg:mx-0 max-w-xl text-lg text-muted-foreground">
              Master the MERN Stack with project-based training, 1:1 mentorship, 
              and career guidance. Or let us build your next premium software product.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <Button size="lg" className="gap-2 text-lg h-12 px-8 bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] border-0" asChild>
                <Link href="#contact">
                  Start Learning <Code2 className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="gap-2 text-lg h-12 px-8 bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] border-0" asChild>
                <Link href="mailto:rshahi.eng@gmail.com">
                  Contact CEO <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="relative mx-auto lg:ml-auto"
          >
            {/* Abstract Tech Illustration Placeholder using CSS/Divs */}
            {/* Abstract Tech Illustration - NEW Quantum Visual */}
            <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-float group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay z-10" />
               <Image 
                  src="/images/hero-visual.png" 
                  alt="Future Software Engineering" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover animate-breathe"
                  priority
               />
               
               {/* Overlay Content (Optional: Keeping the code snippet style but as an overlay on the image) */}
               <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10 transform translate-y-2 opacity-90">
                  <div className="flex gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-xs text-blue-300">
                    <span className="text-purple-400">await</span> <span className="text-yellow-300">career</span>.<span className="text-blue-400">transform</span>(<span className="text-green-400">"NextLevel"</span>);
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
