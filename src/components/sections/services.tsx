"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { BookOpen, Code, Laptop, Users, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "MERN Stack Training",
    description: "Complete full-stack development course covering MongoDB, Express, React, and Node.js.",
    icon: <Code className="h-8 w-8 text-primary" />,
    type: "Education"
  },
  {
    title: "1:1 Mentorship",
    description: "Personalized guidance and doubt support to help you overcome coding blockers.",
    icon: <Users className="h-8 w-8 text-accent" />,
    type: "Education"
  },
  {
    title: "Web App Development",
    description: "Building scalable, high-performance web applications for businesses.",
    icon: <Laptop className="h-8 w-8 text-indigo-400" />,
    type: "Development"
  },
  {
    title: "Custom Software",
    description: "Tailored software solutions to streamline your business operations.",
    icon: <Briefcase className="h-8 w-8 text-green-400" />,
    type: "Development"
  },
  {
    title: "Interview Prep",
    description: "Mock interviews and technical prep to help you crack developer roles.",
    icon: <GraduationCap className="h-8 w-8 text-yellow-400" />,
    type: "Career"
  },
   {
    title: "Portfolio Guidance",
    description: "Helping you build a stunning portfolio that recruiters can't ignore.",
    icon: <BookOpen className="h-8 w-8 text-pink-400" />,
    type: "Career"
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['var(--font-bebas)'] text-4xl font-bold uppercase tracking-wider mb-4 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">What We Do</h2>
          <p className="text-muted-foreground">From comprehensive training to professional development services.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-secondary/30 border border-white/5 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                    <div className="mb-4 p-3 rounded-lg bg-background w-fit group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 w-fit rounded-full">
                        {service.type}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
            ))}
        </div>
      </Container>
    </section>
  );
}
