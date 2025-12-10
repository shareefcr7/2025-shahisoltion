"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Zap, Moon } from "lucide-react";

export const Starfield = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* 1. Deep Space Base Layer */}
      <div className="absolute inset-0 bg-[#05050a]" />

      {/* 2. Cinematic Drifting Background (Nebula, HUD, Shapes) */}
      <div className="absolute inset-[-50%] w-[200%] h-[200%] opacity-60 mix-blend-screen animate-drift-slow">
          <Image
          src="/images/deep-navy-cosmic.png"
          alt="Deep Navy Cosmic Background"
          fill
          priority
          className="object-cover opacity-60"
        />
      </div>

      {/* 3. LIVE Nebula Glows (Deep Blue & Cosmic Purple) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900/30 blur-[120px] rounded-full mix-blend-screen opacity-40 animate-nebula" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-900/30 blur-[120px] rounded-full mix-blend-screen opacity-40 animate-nebula" style={{ animationDirection: 'reverse' }} />

      {/* 4. Gradient Overlays for Depth - DARK BLUE UNIVERSE THEME */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]" />

      {/* 4. Animated Particles & Stars - "ALL SKY" DENSITY MODE */}
      <div className="stars-container absolute inset-0 mix-blend-screen">
        {/* Original Layers */}
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        
        {/* Extra Dense Layers (Rotated duplicates for "More Stars") */}
        <div id="stars" className="opacity-50" style={{ transform: 'rotate(90deg) scale(1.2)' }} />
        <div id="stars2" className="opacity-40" style={{ transform: 'rotate(180deg) scale(0.8)' }} />
        <div id="stars3" className="opacity-60" style={{ transform: 'rotate(270deg)' }} />
      </div>

      {/* 5. BROKEN MOON & DEBRIS (3D Animation) */}
      <div className="absolute top-20 right-20 opacity-40 mix-blend-screen animate-float-3d pointer-events-none z-[2]">
          <div className="relative">
             {/* The Moon */}
             <Moon className="w-32 h-32 text-blue-200 fill-blue-900/50 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
             {/* The "Cut" - Dark jagged overlay */}
             <div className="absolute top-1/2 left-0 w-full h-8 bg-[#020210] -rotate-12 blur-[1px] transform -translate-y-1/2" />
             <div className="absolute top-1/3 left-10 w-4 h-4 bg-blue-200 rounded-full blur-md animate-ping" />
          </div>
      </div>

      {/* 6. Spaceship Fleet - "ALL METHOD" ACTION (10 Ships + Crash) */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
          {/* --- ACTIVE FLEET (7 New + 2 Scouts) --- */}
          <div className="absolute -bottom-20 -left-20 animate-fly-ship text-white">
            <Rocket className="w-12 h-12 fill-primary/50 drop-shadow-[0_0_15px_rgba(59,130,246,1)]" />
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-transparent to-blue-400 blur-[2px]" />
          </div>
          {/* Scout 2 */}
          <div className="absolute top-1/3 -right-20 animate-fly-ship" style={{ animationDuration: '20s', animationDelay: '5s', animationDirection: 'reverse' }}>
             <Rocket className="w-8 h-8 fill-red-500/50 text-red-200 drop-shadow-[0_0_15px_rgba(239,68,68,1)] rotate-[-45deg]" />
             <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-t from-transparent to-red-500 blur-[1px]" />
          </div>
          {/* Scout 3 */}
          <div className="absolute -top-20 left-1/4 animate-fly-ship" style={{ animationDuration: '35s', animationDelay: '2s' }}>
             <Rocket className="w-6 h-6 fill-cyan-400/50 text-cyan-200 drop-shadow-[0_0_15px_rgba(34,211,238,1)]" />
          </div>
          {/* 7 NEW RANDOM SHIPS */}
          {[...Array(7)].map((_, i) => (
             <div key={`ship-${i}`} className="absolute animate-fly-ship inverted" style={{ 
                 top: `${Math.random() * 100}%`, 
                 left: i % 2 === 0 ? '-10%' : '110%',
                 animationDuration: `${15 + Math.random() * 20}s`,
                 animationDelay: `${Math.random() * 10}s`,
                 animationDirection: i % 2 === 0 ? 'normal' : 'reverse' // Cross traffic
             }}>
                 <Rocket className={`w-${4 + Math.random() * 4} h-${4 + Math.random() * 4} text-slate-300 fill-slate-500/30 opacity-60`} />
             </div>
          ))}

          {/* --- THE CRASH EVENT --- */}
          {/* The Kamikaze Ship */}
          <div className="absolute top-0 left-0 animate-crash-ship z-50">
             <Rocket className="w-10 h-10 fill-orange-500/80 text-white drop-shadow-[0_0_10px_rgba(249,115,22,1)] rotate-45" />
             <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-transparent to-orange-500 blur-[2px]" />
          </div>
          {/* The Explosion Visual (Synced with Crash) */}
          <div className="absolute top-0 left-0 animate-explosion z-50 mix-blend-screen">
             <div className="relative w-32 h-32">
                <Zap className="absolute inset-0 w-full h-full text-yellow-300 fill-orange-500 animate-pulse" />
                <div className="absolute inset-0 bg-orange-500/50 blur-[50px] rounded-full" />
                <div className="absolute inset-0 border-4 border-white/80 rounded-full animate-ping" />
             </div>
          </div>
      </div>

      {/* 7. Shooting Stars (13 Total - 7 More) */}
      <div className="shooting-stars absolute inset-0">
        {[...Array(13)].map((_, i) => (
            <div key={i} className={`shooting-star shooting-star-${i}`} />
        ))}
      </div>
      
       {/* 6. Cinematic Noise / Film Grain */}
       <div className="absolute inset-0 bg-transparent opacity-20 mix-blend-overlay" 
            style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E")' 
            }} 
       />
    </div>
  );
};
