"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Founder() {
  return (
    <section id="founder" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        {/* Main Card: Founder */}
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:w-[40%] flex justify-center"
            >
              <div className="relative w-[280px] sm:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <Image
                  src="/images/founder-sitting.jpg"
                  alt="Shahi Rahman - Founder"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[60%] text-center lg:text-left space-y-6"
            >
              <div className="space-y-2">
                <h2 className="font-['var(--font-bebas)'] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wider drop-shadow-lg bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                  SHAHI RAHMAN
                </h2>
                <h3 className="text-xl sm:text-2xl text-blue-400 font-semibold tracking-wide leading-relaxed">
                  Founder of ShahiSolution Project Management &amp; <br className="hidden lg:block"/> DEVEPOS HUB Academy
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                    {["Software Engineering Educator", "MERN Stack Expert", "Mentored 100+ Students 👨‍🏫"].map((role, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-200 text-sm font-medium">
                            {role}
                        </span>
                    ))}
                </div>
              </div>

              <div className="pt-2 space-y-6">
                 <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    A visionary leader dedicated to bridging the gap between academic theory and industry reality. 
                    With a primary focus on <strong>Project Management</strong>, Shahi Rahman empowers aspiring developers 
                    to not just write code, but to build scalable, real-world solutions that drive innovation.
                 </p>
                 
                 <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                    asChild
                 >
                    <Link href="/about">
                       Talk to Us
                    </Link>
                 </Button>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
