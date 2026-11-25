import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('a, button, [data-cursor], input, textarea');
      if (interactiveEl) {
        setIsPointer(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 0.4 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />

      {/* Outer tracking ring / follower */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 flex items-center justify-center text-[10px] font-mono font-bold uppercase tracking-wider ${
          cursorText 
            ? 'w-20 h-20 bg-cyan-500 text-slate-950 font-bold -translate-x-10 -translate-y-10' 
            : isPointer 
              ? 'w-12 h-12 border border-cyan-400/80 bg-cyan-500/10 -translate-x-6 -translate-y-6' 
              : 'w-8 h-8 border border-zinc-600/60 -translate-x-4 -translate-y-4'
        }`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {cursorText && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
};
