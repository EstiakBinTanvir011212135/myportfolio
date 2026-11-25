import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            onComplete();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#07070a] text-white p-8 select-none overflow-hidden"
        >
          {/* Top Row */}
          <div className="w-full flex justify-between items-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <span>[ SYSTEM INITIALIZATION ]</span>
            <span>UIU CSE · PORTFOLIO 2026</span>
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
                ESTIAK BIN TANVIR
              </h1>
              <p className="text-sm font-mono text-cyan-400 mt-2">
                Computer Science & Engineering Graduate
              </p>
            </motion.div>

            <div className="relative flex items-center justify-center">
              <span className="text-7xl sm:text-9xl font-extrabold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 tabular-nums">
                {Math.min(count, 100)}%
              </span>
            </div>
          </div>

          {/* Bottom Row Loading Bar */}
          <div className="w-full max-w-md space-y-2">
            <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full"
                style={{ width: `${Math.min(count, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>LOADING ASSETS & SHADERS</span>
              <span>READY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
