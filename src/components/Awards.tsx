import React from 'react';
import { Trophy, Award, Medal, Cpu, CircuitBoard } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Awards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Award': return <Award className="w-6 h-6 text-amber-400" />;
      case 'Medal': return <Medal className="w-6 h-6 text-zinc-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'CircuitBoard': return <CircuitBoard className="w-6 h-6 text-zinc-400" />;
      default: return <Trophy className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="awards" className="py-28 bg-[#07070a] text-white relative border-b border-zinc-800/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span>// 03. HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            UIU CSE Project Show Awards
          </h2>
          <p className="text-zinc-400 text-base font-sans">
            Consistently recognized for excellence in hardware engineering, software development, poster presentation, and final year design.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              data-cursor="AWARD"
              className={`glass-panel glass-panel-hover rounded-3xl p-7 shadow-2xl transition-all duration-500 flex flex-col justify-between border ${
                item.type === 'Champion'
                  ? 'border-amber-500/30 bg-gradient-to-b from-amber-500/5 to-transparent'
                  : 'border-white/10'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                    item.type === 'Champion'
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'bg-zinc-900 border-zinc-800'
                  }`}>
                    {getIcon(item.icon)}
                  </div>

                  <span className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full ${
                    item.type === 'Champion'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                  }`}>
                    {item.type}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading text-white leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span>{item.event}</span>
                    <span aria-hidden="true" className="text-zinc-650">·</span>
                    <span>{item.term}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>United International University</span>
                <span className="font-bold text-white">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-14 p-8 rounded-3xl glass-panel border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-heading text-white">
              Proven Excellence Across 5 Academic Terms
            </h4>
            <p className="text-xs text-zinc-400 font-sans">
              3 Champion Trophies + 2 First Runner-up Awards from United International University CSE Department.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="px-4 py-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-2 font-bold">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>3x Champions</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-2 font-bold">
              <Medal className="w-4 h-4 text-zinc-400" />
              <span>2x Runners-up</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
