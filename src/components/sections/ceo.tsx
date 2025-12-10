"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Code2, Users, Briefcase, Award, TrendingUp } from "lucide-react";

export function CEO() {
  return (
    <section id="ceo" className="py-20 relative overflow-hidden bg-secondary/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: CEO Image Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group order-2 lg:order-1"
          >
            {/* Background decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            
            {/* Main Image Container - Square */}
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/50 to-background border border-white/10 shadow-2xl">
              {/* Decorative tech icons background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 right-8 text-primary">
                  <Code2 className="h-16 w-16" />
                </div>
                <div className="absolute bottom-12 left-8 text-accent">
                  <Users className="h-12 w-12" />
                </div>
                <div className="absolute top-1/2 right-12 text-primary">
                  <Briefcase className="h-10 w-10" />
                </div>
              </div>

              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              
              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/ceo-final.jpg"
                  alt="Adarsha K - CEO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/95 to-transparent p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-primary uppercase tracking-wider">Leadership</p>
                    <h4 className="font-bold text-foreground text-xl bg-clip-text text-transparent bg-[linear-gradient(110deg,#3b82f6,45%,#0ea5e9,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer">Adarsha K</h4>
                    <p className="text-xs text-muted-foreground">CEO & Lead Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase w-fit">
              <Briefcase className="h-4 w-4" />
              CEO of ShahiSolution
            </div>

            {/* Title Only */}
            <div>
              <p className="font-['var(--font-bebas)'] text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-medium uppercase tracking-wider bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                Vision-Driven Leader & Full-Stack Architect
              </p>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              Lead Architect behind ShahiSolution's innovative software products and learning programs. 
              Building modern tech solutions and empowering students to master software engineering in the tech world.
            </p>

            {/* Expert In - Skills Pills */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Engineering",
                  "Full-Stack Development", 
                  "MERN Stack",
                  "IT Project Management",
                  "System Architecture",
                  "Team Management",
                  "Training & Mentoring"
                ].map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-lg bg-background border border-white/10 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights - Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: <TrendingUp className="h-5 w-5" />, value: "Leader", label: "Tech Innovation" },
                { icon: <Briefcase className="h-5 w-5" />, value: "20+", label: "Real-World Projects" },
                { icon: <Users className="h-5 w-5" />, value: "50+", label: "Students Empowered" },
                { icon: <Award className="h-5 w-5" />, value: "Growing", label: "Top Tech Brand" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-secondary/30 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-2 mb-2 text-primary group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Company Focus */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                ShahiSolution Focus
              </h4>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Custom Software & Web Apps</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>MERN Stack Projects</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>E-commerce & CRM Systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Training Programs for Developers</span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <a
              href="mailto:adarshak.eng@gmail.com"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all w-fit group border-0"
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Contact CEO
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
