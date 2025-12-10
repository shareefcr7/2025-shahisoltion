"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "The internship at DEVEPOS HUB wasn't just about coding; it was a full immersion into the software engineering lifecycle. Working on live client projects refined my problem-solving skills and gave me the confidence to deliver production-grade applications. It truly bridged the gap between academic theory and industry reality.",
    name: "Shareef",
    role: "Software Engineer",
    image: "/images/student-1.jpg"
  },
  {
    text: "I started with zero experience, but the structured MERN stack training changed everything. The mentorship was personalized and intense, focusing on best practices and modern architecture. Today, I can build scalable web applications from scratch, thanks to the solid foundation built here.",
    name: "Rasha",
    role: "MERN Stack Developer",
    image: "/images/student-2.jpg"
  },
  {
    text: "A seamless transition from a student to a professional developer. The curriculum is constantly updated with the latest tech trends. The hands-on experience with real-world scenarios, debugging complex issues, and collaborating in a team environment prepared me perfectly for my current role.",
    name: "Marshook Ali",
    role: "Frontend Developer",
    image: "/images/student-3.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/10">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-['var(--font-bebas)'] text-4xl sm:text-6xl font-bold uppercase tracking-wider mb-6 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Student Success Stories</h2>
          <p className="text-muted-foreground text-lg">Join 100+ students who have started their tech journey with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-secondary/10 border border-white/5 flex flex-col justify-between group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(2,132,199,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10 group-hover:text-primary/30 transition-colors" />
              <p className="text-muted-foreground mb-8 relative z-10 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 group-hover:border-primary transition-colors">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-['var(--font-bebas)'] text-2xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">{t.name}</h4>
                  <span className="text-sm text-primary font-medium">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
