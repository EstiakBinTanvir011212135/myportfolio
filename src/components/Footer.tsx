import React from 'react';
import { ArrowUp, Github, Mail, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050508] text-zinc-400 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xl font-bold font-heading text-white tracking-wider">
              ESTIAK BIN TANVIR
            </span>
            <p className="text-xs text-zinc-400 font-mono">
              B.Sc. in Computer Science & Engineering · UIU (CGPA 3.69/4.00)
            </p>
          </div>

          <div className="flex items-center gap-7 text-xs font-space font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#awards" className="hover:text-cyan-400 transition-colors">Awards</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button onClick={onOpenCVModal} className="text-cyan-400 hover:underline">
              Resume PDF
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="p-3 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              data-cursor="EMAIL"
              className="p-3 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="p-3 rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors font-bold shadow-lg shadow-cyan-500/20"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-2">
          <p>© {new Date().getFullYear()} Estiak Bin Tanvir. All rights reserved.</p>
          <p className="text-[11px]">Crafted with Cinematic Awwwards-Level Design & React</p>
        </div>

      </div>
    </footer>
  );
};
