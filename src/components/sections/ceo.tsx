"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Code2, TrendingUp, Briefcase, Users, Award } from "lucide-react";

export function CPU() { // CEO Section
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black/40 to-black/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="font-['var(--font-bebas)'] text-4xl sm:text-5xl uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-lg">
                Leadership
            </h2>
        </motion.div>

        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Column: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full lg:w-[40%] flex justify-center h-fit"
            >
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                  src="/images/devopshub-ceo.jpg"
                  alt="Adarsha K - CEO of DEVEPOS HUB"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                 {/* Name Tag Overlay */}
                 <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-3xl font-bold text-white tracking-wide drop-shadow-md">Adarsha K</h3>
                    <p className="text-blue-300 font-medium tracking-wider uppercase text-sm">CEO of DEVEPOS HUB</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[60%] space-y-8"
            >
              <div className="space-y-4">
                <h2 className="font-['var(--font-bebas)'] text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-wide drop-shadow-lg bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                   VISION-DRIVEN <br/> LEADER & <br/> <span className="text-blue-500 text-transparent bg-clip-text bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] animate-shimmer bg-[length:200%_100%]">FULL-STACK</span> ARCHITECT
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                  As the <strong>CEO of DEVEPOS HUB</strong>, Adarsha K combines expertise in <strong>Software Engineering, Full-Stack Development, and MERN Stack</strong> to drive technical innovation.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                  Lead Architect behind DEVEPOS HUB Academy's innovative software products and learning programs. 
                  Building modern tech solutions and empowering students to master software engineering in the tech world.
                </p>
              </div>

              {/* Core Expertise */}
              <div className="space-y-4">
                 <div className="flex items-center gap-2 text-blue-400">
                    <Code2 className="h-6 w-6" />
                    <h3 className="font-['var(--font-bebas)'] text-3xl uppercase tracking-wider">CORE EXPERTISE</h3>
                 </div>
                 <div className="flex flex-wrap gap-3">
                    {["Software Engineering", "Full-Stack Development", "System Architecture", "Team Management", "Training & Mentoring"].map((item, i) => (
                        <span key={i} className="px-5 py-2.5 bg-white text-slate-900 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition-transform cursor-default">
                            {item}
                        </span>
                    ))}
                 </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <TrendingUp className="h-6 w-6 text-blue-400 mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">Leader</h4>
                    <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">TECH INNOVATION</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <Briefcase className="h-6 w-6 text-blue-400 mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">20+</h4>
                    <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">REAL-WORLD PROJECTS</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <Users className="h-6 w-6 text-blue-400 mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">50+</h4>
                    <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">STUDENTS EMPOWERED</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <Award className="h-6 w-6 text-blue-400 mb-3" />
                    <h4 className="text-2xl font-bold text-white mb-1">Growing</h4>
                    <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">TOP TECH BRAND</p>
                 </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-semibold tracking-wide w-full sm:w-auto shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="mailto:ceo@shahisolution.com">
                    Contact CEO
                    <Mail className="ml-2 h-5 w-5" />
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
