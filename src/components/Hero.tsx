import React from 'react';
import { FileText, Github, ChevronRight, GraduationCap, Award, MapPin, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';

interface HeroProps {
  onOpenCVModal: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onOpenTerminal }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#07070a] text-white">
      
      {/* Particle Constellation Background Canvas */}
      <HeroCanvas />

      {/* Radial Gradient Glow Meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-pink-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{PERSONAL_DATA.availability}</span>
            </motion.div>

            {/* Main Kinetic Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.05]">
                HI, I'M <span className="text-gradient-cinematic">{PERSONAL_DATA.shortName}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-space font-medium text-zinc-300">
                Computer Science & Engineering Graduate
              </p>
            </motion.div>

            {/* Summary description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base text-zinc-400 leading-relaxed max-w-2xl font-sans"
            >
              UIU Graduate (<strong className="text-white font-semibold">CGPA 3.69/4.00</strong>) & former Undergraduate Teaching Assistant. Specializing in <span className="text-cyan-400 font-medium">full-stack web apps</span>, <span className="text-cyan-400 font-medium">system analysis & design</span>, database architectures, and 3x UIU CSE Project Show Champion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                data-cursor="EXPLORE"
                className="px-7 py-4 text-sm font-space font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 rounded-2xl hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2 group"
              >
                <span>Explore Works</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCVModal}
                data-cursor="RESUME"
                className="px-7 py-4 text-sm font-space font-semibold text-white glass-panel hover:bg-zinc-800/80 rounded-2xl border border-zinc-700/80 transition-all flex items-center gap-2 shadow-lg"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View & Download CV</span>
              </button>

              <button
                onClick={onOpenTerminal}
                data-cursor="CLI"
                className="p-4 text-zinc-300 hover:text-white glass-panel rounded-2xl border border-zinc-700/80 transition-all shadow-lg"
                title="Launch CLI Terminal"
              >
                <Terminal className="w-5 h-5 text-cyan-400" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Cinematic 3D Tilt Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-3xl blur-xl opacity-40 animate-pulse-glow" />

              <div className="relative glass-panel rounded-3xl p-5 border border-white/10 shadow-2xl overflow-hidden group">
                
                {/* Photo container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                  <img
                    src={PERSONAL_DATA.avatarImage}
                    alt={PERSONAL_DATA.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Cinematic gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-heading font-extrabold text-xl tracking-tight">{PERSONAL_DATA.name}</p>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">B.Sc. CSE · UIU Graduate</p>
                  </div>
                </div>

                {/* Quick Info Badges */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-white font-bold">CGPA 3.69</p>
                      <p className="text-[10px] text-zinc-400">UIU Distinction</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-white font-bold">5 Trophies</p>
                      <p className="text-[10px] text-zinc-400">UIU Project Shows</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Full-Width 4-Column Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight tabular-nums">
              3.69<span className="text-sm font-normal text-zinc-400 font-mono">/4.00</span>
            </p>
            <p className="text-xs font-mono text-zinc-400">UIU B.Sc. in CSE CGPA</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-heading text-cyan-400 tracking-tight tabular-nums">
              5<span className="text-sm font-normal text-zinc-400 font-mono"> Trophies</span>
            </p>
            <p className="text-xs font-mono text-zinc-400">UIU CSE Project Show Awards</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight tabular-nums">
              5.00<span className="text-sm font-normal text-zinc-400 font-mono">/5.00</span>
            </p>
            <p className="text-xs font-mono text-zinc-400">HSC & SSC (Cadet College)</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold font-heading text-indigo-400 tracking-tight tabular-nums">
              TA<span className="text-sm font-normal text-zinc-400 font-mono"> Role</span>
            </p>
            <p className="text-xs font-mono text-zinc-400">Undergraduate Teaching Assistant</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
