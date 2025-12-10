"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

// Video IDs extracted from user provided links:
// 1. DGQN9HbSBJI
// 2. DFKrlNMyNFi
// 3. DGKkofoSbA5

const reels = [
  "DFKrlNMyNFi",
  "DFW-yUTSO-T",
  "DGCnjVCyIe0"
];

export function Highlights() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />

      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium mb-4 animate-pulse">
             <Instagram className="h-4 w-4" /> Live from Instagram
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Life at ShahiSolution</h2>
          <p className="text-muted-foreground">Check out our latest training sessions, success stories, and tech tips.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {reels.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full max-w-[350px] aspect-[9/16] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black"
            >
              <iframe 
  src={`https://www.instagram.com/reel/${id}/embed`}
  className="w-full h-full"
  style={{ border: "none", overflow: "hidden" }}
  scrolling="no"
  allowTransparency
  allowFullScreen
></iframe>

            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
