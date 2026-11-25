import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Play } from 'lucide-react';
import { PERSONAL_DATA, PROJECTS, ACHIEVEMENTS, EDUCATIONS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">Estiak Bin Tanvir Terminal v1.0.0 [UIU CSE Edition]</p>
          <p className="text-slate-400">Type <span className="text-amber-400 font-semibold">'help'</span> to view available commands.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-xs font-mono">
            <p className="text-cyan-400 font-semibold mb-1">Available CLI Commands:</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">bio</span> - Professional summary & CGPA</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">projects</span> - Academic & Web projects</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">awards</span> - UIU CSE Project Show trophies</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">skills</span> - Full stack technical skills</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">education</span> - UIU & Cadet College details</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">contact</span> - Email, phone & location</p>
            <p><span className="text-emerald-400 w-24 inline-block font-bold">clear</span> - Clear terminal output</p>
          </div>
        );
        break;

      case 'bio':
      case 'summary':
        output = (
          <div className="space-y-2 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">{PERSONAL_DATA.name} | {PERSONAL_DATA.title}</p>
            <p className="text-slate-400">CGPA: <strong className="text-white">{PERSONAL_DATA.cgpa}</strong> ({PERSONAL_DATA.university})</p>
            <p className="leading-relaxed">{PERSONAL_DATA.summary}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-3 text-xs text-slate-300 font-mono">
            {PROJECTS.map((p, idx) => (
              <div key={idx} className="border-l-2 border-cyan-500 pl-3 space-y-1">
                <p className="font-bold text-cyan-400">{p.title} <span className="text-slate-500">[{p.category}]</span></p>
                <p className="text-slate-400">{p.description}</p>
                <p className="text-emerald-400">Stack: {p.techStack.join(' · ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'awards':
        output = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p className="text-amber-400 font-bold">UIU CSE Project Show Achievements:</p>
            {ACHIEVEMENTS.map((a, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-amber-400">🏆</span>
                <span className="font-bold text-white">{a.title}</span>
                <span className="text-slate-500">({a.term})</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            <p><strong className="text-cyan-400">Programming & Web:</strong> HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, PHP</p>
            <p><strong className="text-cyan-400">Databases:</strong> MySQL, MongoDB, Mongoose</p>
            <p><strong className="text-cyan-400">UI/UX & Tools:</strong> Figma, Adobe Illustrator, Git, GitHub, Jira, Google Sheets, Canva</p>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            {EDUCATIONS.map((e, idx) => (
              <div key={idx} className="space-y-0.5">
                <p className="font-bold text-cyan-400">{e.degree} - {e.institution}</p>
                <p className="text-emerald-400">{e.grade} | {e.period}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p>Email: <a href={`mailto:${PERSONAL_DATA.email}`} className="text-cyan-400 underline">{PERSONAL_DATA.email}</a></p>
            <p>Phone: <span className="text-emerald-400">{PERSONAL_DATA.phone}</span></p>
            <p>Location: <span className="text-slate-400">{PERSONAL_DATA.location}</span></p>
            <p>GitHub: <a href={PERSONAL_DATA.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_DATA.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs font-mono">
            Command not recognized: '{cmd}'. Type 'help' for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              estiak@uiu-cse:~ $
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 text-slate-200">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-cyan-400">estiak@uiu:~$</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              <div className="pl-3">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Form */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-t border-slate-800">
          <span className="text-cyan-400 font-mono text-xs font-bold">estiak@uiu:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'awards', 'skills', 'bio'..."
            className="flex-1 bg-transparent text-xs font-mono text-white focus:outline-none placeholder-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded bg-cyan-600 text-slate-950 font-bold hover:bg-cyan-500 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
