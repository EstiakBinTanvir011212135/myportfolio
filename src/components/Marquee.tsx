import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "FULL-STACK WEB DEVELOPMENT",
    "SYSTEM ANALYSIS & DESIGN",
    "NODE.JS & EXPRESS",
    "UIU CSE GRADUATE",
    "MONGODB & MYSQL",
    "UI/UX FIGMA DESIGN",
    "UIU CSE CHAMPION",
    "TEACHING ASSISTANT"
  ];

  return (
    <div className="py-6 bg-[#09090e] border-y border-zinc-800/80 overflow-hidden select-none relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center mx-6 text-zinc-400 font-mono text-xs sm:text-sm tracking-widest font-bold">
            <span className="text-cyan-400 mr-3">✦</span>
            <span className="hover:text-white transition-colors cursor-default">{text}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};
