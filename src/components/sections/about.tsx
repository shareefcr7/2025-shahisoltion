"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        {/* Main Card: About ShahiSolution */}
        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Image (Founder/Leader) */}
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
                  src="/images/shahi-rahman.jpg"
                  alt="Shahi Rahman - Founder"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <p className="text-white font-bold text-lg">Shahi Rahman</p>
                    <p className="text-blue-300 text-sm">Founder & CEO</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Company Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[60%] text-center lg:text-left space-y-6"
            >
              <div className="space-y-2">
                <h2 className="font-['var(--font-bebas)'] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wider drop-shadow-lg bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
                  About ShahiSolution
                </h2>
                <h3 className="text-xl sm:text-2xl text-blue-400 font-semibold tracking-wide">
                  Project Management & Venture Ecosystem
                </h3>
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Est. 2024 • Kerala, India
                </p>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ShahiSolution serves as the central <strong>Project Management Entity</strong>, 
                driving innovation and strategy for a diverse ecosystem of tech ventures. 
                Under the visionary leadership of Shahi Rahman, we bridge the gap between 
                education (DEVEPOS HUB Academy) and industry (Code Sair, Drocode, Drowmedia), 
                delivering cutting-edge software solutions and empowering the next generation of tech talent.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Ecosystem Grid */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <div className="text-center">
             <h3 className="text-2xl font-bold uppercase tracking-wide border-b border-white/10 pb-4 inline-block bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
               Project Management
             </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "ShahiSolution", 
                role: "Headquarters", 
                img: "/images/shahisolution-companies.png",
                highlight: "shadow-blue-900/20"
              },
              { 
                name: "Code Sair", 
                role: "IT Solutions", 
                img: "/images/code-sair-logo.png" 
              },
              { 
                name: "Drocode", 
                role: "Software & Branding", 
                img: "/images/drocode-logo.png" 
              },
              { 
                name: "DEVEPOS HUB Academy", 
                role: "Own Founder: Shahi Rahman", 
                img: "/images/devopshub-academy-logo.png",
                highlight: "shadow-purple-900/20"
              },
              { 
                name: "Drowmedia", 
                role: "Digital Marketing", 
                img: "/images/drowmedia-logo.png" 
              },
              { 
                name: "ProductionHouse", 
                role: "Media Production", 
                img: "/images/production-house-logo.png" 
              }
            ].map((venture, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col items-center text-center space-y-4 shadow-xl ${venture.highlight || ""}`}
              >
                 <div className="relative w-24 h-24 rounded-full bg-white/10 p-3 overflow-hidden border border-white/20">
                    <Image src={venture.img} alt={venture.name} fill className="object-cover" />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold text-white mb-1">{venture.name}</h4>
                   <p className="text-blue-400 text-sm font-medium">{venture.role}</p>
                 </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
