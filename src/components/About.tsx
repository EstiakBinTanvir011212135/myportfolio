import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Briefcase, CheckCircle, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_DATA, EDUCATIONS, EXPERIENCES, CORE_COMPETENCIES } from '../data/portfolioData';

interface AboutProps {
  onOpenCVModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCVModal }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'experience'>('overview');

  return (
    <section id="about" className="py-28 bg-[#07070a] text-white relative border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <span>// 01. BACKGROUND & EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Engineering Rigor with Cadet Discipline
          </h2>
          <p className="text-zinc-400 text-base font-sans">
            B.Sc. in Computer Science & Engineering from United International University with a CGPA of 3.69/4.00.
          </p>
        </div>

        {/* Interactive Segmented Control Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 p-1.5 glass-panel rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab('overview')}
              data-cursor="TAB"
              className={`px-6 py-2.5 text-xs font-space font-semibold rounded-xl transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Professional Summary
            </button>

            <button
              onClick={() => setActiveTab('education')}
              data-cursor="TAB"
              className={`px-6 py-2.5 text-xs font-space font-semibold rounded-xl transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Education Timeline
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              data-cursor="TAB"
              className={`px-6 py-2.5 text-xs font-space font-semibold rounded-xl transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Teaching Assistant
            </button>
          </div>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/10 space-y-6 shadow-2xl">
              <div className="flex items-center gap-3.5 border-b border-white/10 pb-4">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading">Estiak Bin Tanvir</h3>
                  <p className="text-xs font-mono text-cyan-400">Computer Science & Engineering Graduate</p>
                </div>
              </div>

              <p className="text-zinc-300 text-base leading-relaxed font-sans">
                {PERSONAL_DATA.summary}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenCVModal}
                  data-cursor="RESUME"
                  className="inline-flex items-center gap-2 text-xs font-space font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Inspect Official Curriculum Vitae (PDF)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-white/10 space-y-6 shadow-2xl">
              <h3 className="text-lg font-bold font-heading border-b border-white/10 pb-3">
                Core Competencies
              </h3>

              <div className="space-y-3">
                {CORE_COMPETENCIES.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{comp}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 space-y-1 font-mono">
                <p className="font-semibold text-white">Target Roles:</p>
                <p>Full-Stack Web Development, System Analysis & Design, Tech Operations & Project Coordination.</p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {EDUCATIONS.map((edu, idx) => (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl transition-all flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-xl font-bold font-heading text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="font-semibold text-white">{edu.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-cyan-400 font-bold">{edu.grade}</span>
                  </div>

                  <p className="text-sm text-zinc-300 pt-2 font-sans">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Experience */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            {EXPERIENCES.map((exp, idx) => (
              <div 
                key={idx}
                className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400">{exp.organization}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                    Key Responsibilities & Leadership:
                  </p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-zinc-300 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
