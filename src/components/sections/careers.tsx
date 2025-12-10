"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Laptop } from "lucide-react";
import Link from "next/link";

export function Careers() {
  return (
    <section id="careers" className="py-20 bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                    <Briefcase className="h-4 w-4" /> Career Opportunities
                </div>
                <h2 className="font-['var(--font-bebas)'] text-4xl sm:text-5xl font-bold uppercase tracking-wider mb-6 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                    Build Your Career with ShahiSolution
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                    We don't just train you; we prepare you for the industry. From internships to live projects, we provide the pathway to your first developer role.
                </p>

                <div className="space-y-6">
                    {[
                        { title: "Internship Opportunities", desc: "Work on real products and gain hands-on experience.", icon: <Laptop className="h-5 w-5 text-primary" /> },
                        { title: "Live Projects", desc: "Contribute to actual software being built for clients.", icon: <Briefcase className="h-5 w-5 text-accent" /> },
                        { title: "Career Guidance", desc: "Resume building, interview prep, and job referral support.", icon: <GraduationCap className="h-5 w-5 text-green-400" /> }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center border border-white/10">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                 
                <div className="mt-8">
                    <Button className="bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] border-0" asChild>
                        <Link href="#contact">Apply for Training & Internship</Link>
                    </Button>
                </div>
            </motion.div>

            <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="flex-1 relative"
            >
                {/* Visual Representation of Career Growth */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-4 sm:translate-y-8">
                         <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl animate-float">
                             <img src="/images/career-1.png" alt="Internship" className="w-full h-full object-cover animate-breathe" />
                         </div>
                         <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl group animate-float" style={{ animationDelay: "1s" }}>
                            <img src="/images/career-2.png" alt="Mentorship" className="w-full h-full object-cover opacity-60 animate-breathe" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                <span className="text-4xl font-bold text-white drop-shadow-lg">100+</span>
                                <span className="text-xs text-white/90 drop-shadow-md">Students Mentored</span>
                            </div>
                         </div>
                    </div>
                     <div className="space-y-4">
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                             <img src="/images/career-3.png" alt="Live Projects" className="w-full h-full object-cover animate-breathe" />
                        </div>
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl animate-float" style={{ animationDelay: "3s" }}>
                             <img src="/images/career-4.png" alt="Career Growth" className="w-full h-full object-cover animate-breathe" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </Container>
    </section>
  );
}
