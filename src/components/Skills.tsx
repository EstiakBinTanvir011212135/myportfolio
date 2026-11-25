import React, { useState } from 'react';
import { Code2, Server, Layout, FileCode, Database, Layers, Figma, PenTool, GitBranch, Kanban, Table } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Figma': return <Figma className="w-5 h-5 text-cyan-400" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case 'Kanban': return <Kanban className="w-5 h-5 text-cyan-400" />;
      case 'Table': return <Table className="w-5 h-5 text-cyan-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-28 bg-[#07070a] text-white relative border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span>// 04. TECH STACK & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Skills & Software Tooling
          </h2>
          <p className="text-zinc-400 text-base font-sans">
            Proficiencies across front-end programming, back-end web frameworks, relational/NoSQL databases, and UI/UX design tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              data-cursor="CAT"
              className={`px-6 py-3 text-xs font-space font-semibold rounded-2xl transition-all ${
                activeCategoryIndex === idx
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold'
                  : 'glass-panel text-zinc-300 hover:text-white border border-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              data-cursor="SKILL"
              className="glass-panel glass-panel-hover rounded-3xl p-6 shadow-2xl transition-all border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-800">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-900 h-2.5 rounded-full overflow-hidden border border-zinc-800">
                <div
                  className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Complete Tech Inventory Marquee / Badge Cloud */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl glass-panel border border-white/10 text-center space-y-5 shadow-2xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            Complete Technology Inventory
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono">
            {["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "Mongoose", "Figma", "Adobe Illustrator", "Git", "GitHub", "Jira", "Google Sheets", "Canva", "Postman", "System Analysis"].map((tech, tIdx) => (
              <span 
                key={tIdx}
                className="px-3.5 py-2 rounded-xl bg-zinc-900/90 text-zinc-300 border border-zinc-800/80 hover:border-cyan-500/50 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
