import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { CVViewerModal } from './components/CVViewerModal';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 font-sans selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* Cinematic Preloader */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* Custom Smooth Cursor */}
      <CustomCursor />

      {/* Floating Glass Navbar */}
      <Navbar
        onOpenCVModal={() => setIsCVModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenCVModal={() => setIsCVModalOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <Marquee />

        <About
          onOpenCVModal={() => setIsCVModalOpen(true)}
        />

        <Projects />

        <Awards />

        <Skills />

        <Contact />
      </main>

      {/* Cinematic Footer */}
      <Footer
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Terminal CLI Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* PDF CV Viewer & Downloader Modal */}
      <CVViewerModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

    </div>
  );
}
