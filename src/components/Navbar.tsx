import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenCVModal: () => void;
  onOpenTerminal: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCVModal,
  onOpenTerminal,
  isDarkMode,
  toggleDarkMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 30);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-4 left-0 right-0 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none"
      >
        <div className="pointer-events-auto glass-panel rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-2xl shadow-cyan-950/20 border border-white/10">
          
          {/* Brand Wordmark */}
          <a 
            href="#" 
            className="group flex items-center gap-2.5 text-white whitespace-nowrap shrink-0"
            data-cursor="HOME"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950 flex items-center justify-center font-heading text-base font-extrabold shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold tracking-wider text-sm sm:text-base">ESTIAK<span className="text-cyan-400">.DEV</span></span>
              <span className="text-[10px] font-mono text-zinc-400 -mt-1">UIU CSE GRADUATE</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                data-cursor="EXPLORE"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Utility Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenTerminal}
              title="Open CLI Terminal"
              data-cursor="CLI"
              className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 transition-all border border-zinc-800 flex items-center gap-1.5 text-xs font-mono"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>CLI</span>
            </button>

            <button
              onClick={toggleDarkMode}
              title="Toggle Theme"
              data-cursor="THEME"
              className="p-2.5 rounded-xl text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 transition-all border border-zinc-800"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            <button
              onClick={onOpenCVModal}
              data-cursor="RESUME"
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 font-space"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-zinc-300 bg-zinc-900 border border-zinc-800"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 bg-zinc-900 border border-zinc-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#07070a]/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:hidden"
          >
            <div className="flex justify-between items-center">
              <span className="font-heading font-bold text-white text-lg">ESTIAK.DEV</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-zinc-900 text-white border border-zinc-800"
              >
                <X className="w-6 h-6 text-cyan-400" />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-center my-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-heading font-bold text-zinc-200 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full py-3.5 rounded-xl bg-zinc-900 text-zinc-200 font-mono text-xs flex items-center justify-center gap-2 border border-zinc-800"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch CLI Terminal</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-space font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
