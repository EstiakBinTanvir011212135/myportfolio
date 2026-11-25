import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, X, Sparkles, Activity, Bot, BookOpen, Heart } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'System Analysis' | 'Web Application'>('all');
  const [simulatedModule, setSimulatedModule] = useState<'chatbot' | 'habits' | 'library' | 'health'>('habits');

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-28 bg-[#07070a] text-white relative border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <span>// 02. SELECTED WORKS & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
              Academic & Full-Stack Systems
            </h2>
            <p className="text-zinc-400 text-base font-sans">
              Comprehensive system design architectures and web applications built during B.Sc. studies at UIU.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex items-center gap-1.5 p-1.5 glass-panel rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              data-cursor="FILTER"
              className={`px-4 py-2 text-xs font-space font-semibold rounded-xl transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('System Analysis')}
              data-cursor="FILTER"
              className={`px-4 py-2 text-xs font-space font-semibold rounded-xl transition-all ${
                activeTab === 'System Analysis'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              System Analysis
            </button>
            <button
              onClick={() => setActiveTab('Web Application')}
              data-cursor="FILTER"
              className={`px-4 py-2 text-xs font-space font-semibold rounded-xl transition-all ${
                activeTab === 'Web Application'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Web App
            </button>
          </div>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="VIEW"
              className={`group glass-panel glass-panel-hover rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col cursor-pointer border border-white/10 ${
                idx === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
              }`}
            >
              {/* Media Preview Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter saturate-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                  <span className="text-cyan-400">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <h3 className="text-2xl font-bold font-heading group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-mono">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="text-xs font-space font-semibold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect System Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    data-cursor="GITHUB"
                    className="p-2 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto">
          <div className="relative w-full max-w-4xl glass-panel rounded-3xl shadow-2xl overflow-hidden my-8 border border-white/15">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-zinc-900/80">
              <div>
                <span className="text-xs font-mono text-cyan-400">
                  {selectedProject.category} · {selectedProject.period}
                </span>
                <h3 className="text-2xl font-bold font-heading text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                data-cursor="CLOSE"
                className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
              
              <div className="rounded-2xl overflow-hidden aspect-video w-full bg-zinc-900 border border-white/10 shadow-lg">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400">
                  Role: <strong className="text-white">{selectedProject.role}</strong>
                </div>
                <p className="text-zinc-300 text-base leading-relaxed font-sans">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Kawan Interactive Simulator */}
              {selectedProject.id === 'kawan' && (
                <div className="p-6 rounded-2xl bg-zinc-900/90 border border-cyan-500/30 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Live Kawan Module Simulator
                    </span>
                    <span className="text-xs font-mono text-zinc-400">5 Integrated Modules</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => setSimulatedModule('habits')}
                      data-cursor="SIM"
                      className={`p-3 rounded-xl text-xs font-space font-medium border flex items-center justify-center gap-2 transition-all ${
                        simulatedModule === 'habits'
                          ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 border-transparent font-bold shadow-lg'
                          : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <Activity className="w-4 h-4" />
                      <span>Habits</span>
                    </button>

                    <button
                      onClick={() => setSimulatedModule('chatbot')}
                      data-cursor="SIM"
                      className={`p-3 rounded-xl text-xs font-space font-medium border flex items-center justify-center gap-2 transition-all ${
                        simulatedModule === 'chatbot'
                          ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 border-transparent font-bold shadow-lg'
                          : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <Bot className="w-4 h-4" />
                      <span>AI Chat</span>
                    </button>

                    <button
                      onClick={() => setSimulatedModule('library')}
                      data-cursor="SIM"
                      className={`p-3 rounded-xl text-xs font-space font-medium border flex items-center justify-center gap-2 transition-all ${
                        simulatedModule === 'library'
                          ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 border-transparent font-bold shadow-lg'
                          : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>E-Books</span>
                    </button>

                    <button
                      onClick={() => setSimulatedModule('health')}
                      data-cursor="SIM"
                      className={`p-3 rounded-xl text-xs font-space font-medium border flex items-center justify-center gap-2 transition-all ${
                        simulatedModule === 'health'
                          ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 border-transparent font-bold shadow-lg'
                          : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                      <span>Health</span>
                    </button>
                  </div>

                  <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs space-y-3 font-mono">
                    {simulatedModule === 'habits' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-white font-bold">
                          <span>Habit Streak: 14 Days 🔥</span>
                          <span className="text-cyan-400">80% Done</span>
                        </div>
                        <div className="space-y-1.5 pt-1">
                          <div className="p-2.5 rounded-lg bg-zinc-900 flex items-center justify-between text-zinc-300">
                            <span>Morning Deep Work (2 hrs)</span>
                            <span className="text-emerald-400 font-bold">✓ Completed</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-zinc-900 flex items-center justify-between text-zinc-300">
                            <span>System Architecture Review</span>
                            <span className="text-emerald-400 font-bold">✓ Completed</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {simulatedModule === 'chatbot' && (
                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-zinc-900 text-zinc-200">
                          <strong className="text-cyan-400">Kawan AI:</strong> "Hello Estiak. Ready to optimize your system modules today?"
                        </div>
                        <div className="p-3 rounded-xl bg-cyan-600/30 border border-cyan-500/40 text-white ml-6 text-right">
                          "Yes, reviewing React performance and database indexes."
                        </div>
                      </div>
                    )}

                    {simulatedModule === 'library' && (
                      <div className="space-y-2">
                        <p className="font-bold text-white">Active Reading: Clean Architecture (Robert C. Martin)</p>
                        <div className="w-full bg-zinc-900 h-2.5 rounded-full overflow-hidden border border-zinc-800">
                          <div className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-full w-[70%]" />
                        </div>
                        <p className="text-[11px] text-zinc-400">70% Completed · Chapter 14</p>
                      </div>
                    )}

                    {simulatedModule === 'health' && (
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                          <p className="text-zinc-400 text-[10px]">Water Intake</p>
                          <p className="font-bold text-white text-sm">2.4 L / 3.0 L</p>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                          <p className="text-zinc-400 text-[10px]">Meditation</p>
                          <p className="font-bold text-white text-sm">20 Mins</p>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                          <p className="text-zinc-400 text-[10px]">Sleep Score</p>
                          <p className="font-bold text-emerald-400 text-sm">92 / 100</p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              )}

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  Key System Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-zinc-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedProject.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 text-xs font-mono rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-5 border-t border-white/10 bg-zinc-900/80">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="inline-flex items-center gap-2 text-xs font-space font-semibold text-zinc-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                data-cursor="CLOSE"
                className="px-6 py-2.5 text-xs font-space font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-lg"
              >
                Close Modal
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
