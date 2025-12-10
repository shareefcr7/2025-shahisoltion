"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Database, Server, Layout, FileJson, Globe, Shield, Cloud, Terminal } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "MongoDB", icon: <Database className="text-green-500" />, href: "https://www.mongodb.com/" },
  { name: "Express.js", icon: <Server className="text-gray-400" />, href: "https://expressjs.com/" },
  { name: "React.js", icon: <Layout className="text-blue-400" />, href: "https://react.dev/" },
  { name: "Node.js", icon: <FileJson className="text-green-600" />, href: "https://nodejs.org/" },
  { name: "REST APIs", icon: <Globe className="text-purple-400" />, href: "https://restfulapi.net/" },
  { name: "Authentication", icon: <Shield className="text-yellow-400" />, href: "https://jwt.io/" },
  { name: "Deployment", icon: <Cloud className="text-cyan-400" />, href: "https://vercel.com/" },
  { name: "TypeScript", icon: <Terminal className="text-blue-500" />, href: "https://www.typescriptlang.org/" },
];

export function Skills() {
  return (
    <section className="py-20 bg-secondary/20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['var(--font-bebas)'] text-4xl font-bold uppercase tracking-wider mb-4 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Master the Modern Tech Stack</h2>
          <p className="text-muted-foreground">
            We focus on the most in-demand technologies in the industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Link key={index} href={skill.href} target="_blank" rel="noopener noreferrer" className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all group h-full cursor-pointer"
              >
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-lg bg-secondary/50 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                  <div className="h-8 w-8">
                      <div className="w-full h-full flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6">
                          {skill.icon}
                      </div>
                  </div>
                </div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
