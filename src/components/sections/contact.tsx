"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
// Imports removed
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Inline simplistic Input/Textarea for speed if not created yet, or I'll create them in next step. 
// I'll create them inline here for now to avoid too many files, or better: use standard HTML with Tailwind classes.
// Actually, reusable components are better. I'll use standard HTML with Tailwind classes to keep it simple and robust.

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-6 bg-[linear-gradient(110deg,#ffffff,45%,#94a3b8,55%,#ffffff)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Whether you want to join our training or build a software solution, we are here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone / WhatsApp</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+917012313325" className="text-muted-foreground hover:text-primary transition-colors">
                        +91 70123 13325 (Call)
                    </a>
                    <a href="https://wa.me/917012313325" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 hover:text-green-400 font-medium transition-colors">
                        Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:rshahi.eng@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    rshahi.eng@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary/20 p-8 rounded-2xl border border-white/5"
          >
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+91..."
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us what you need..."
                />
              </div>

              <Button type="submit" className="w-full bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] animate-shimmer text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] border-0">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
