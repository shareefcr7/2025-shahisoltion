"use client";

import React from "react";

export default function BackgroundVideo() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <div className="absolute inset-0 bg-[#05050a]" /> {/* Deep dark base */}
      
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video/poster.png"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 saturate-150 opacity-80"
      >
        <source src="/video/tech-sky.mp4" type="video/mp4" />
      </video>

      {/* Fallback Animation (Drifting Poster if video doesn't load/exist) */}
      <img 
        src="/video/poster.png" 
        alt="Background Texture" 
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 saturate-150 animate-drift-slow -z-10"
      />

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050a]/20 to-[#05050a]" />
    </div>
  );
}
