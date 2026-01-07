'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

interface LandingCoverProps {
  onEnter: () => void;
}

// Pre-computed particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 5, top: 10 }, { left: 15, top: 85 }, { left: 25, top: 30 },
  { left: 35, top: 60 }, { left: 45, top: 15 }, { left: 55, top: 75 },
  { left: 65, top: 40 }, { left: 75, top: 90 }, { left: 85, top: 25 },
  { left: 95, top: 55 }, { left: 10, top: 45 }, { left: 20, top: 70 },
  { left: 30, top: 5 }, { left: 40, top: 95 }, { left: 50, top: 50 },
  { left: 60, top: 20 }, { left: 70, top: 65 }, { left: 80, top: 35 },
  { left: 90, top: 80 }, { left: 12, top: 55 },
];

const PARTICLE_DURATIONS = [3, 3.5, 4, 4.5, 5, 3.2, 3.8, 4.2, 4.8, 3.6, 4.4, 3.3, 4.1, 3.7, 4.6, 3.9, 4.3, 3.4, 4.7, 3.1];
const PARTICLE_DELAYS = [0, 0.5, 1, 1.5, 0.3, 0.8, 1.2, 0.2, 0.7, 1.8, 0.4, 0.9, 1.4, 0.6, 1.1, 1.6, 0.1, 1.3, 0.55, 1.7];

export default function LandingCover({ onEnter }: LandingCoverProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.1 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2f4427 0%, #1a2a15 50%, #2f4427 100%)',
      }}
    >
      {/* Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Royal Corner Decorations */}
      <div className="absolute top-0 left-0 w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40">
          <path d="M0,0 L100,0 L100,10 Q50,10 50,50 Q50,90 0,100 L0,0 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q30,5 30,30 Q30,55 5,70" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="15" cy="15" r="3" fill="currentColor"/>
          <circle cx="25" cy="25" r="2" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40">
          <path d="M0,0 L100,0 L100,10 Q50,10 50,50 Q50,90 0,100 L0,0 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q30,5 30,30 Q30,55 5,70" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="15" cy="15" r="3" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 -rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40">
          <path d="M0,0 L100,0 L100,10 Q50,10 50,50 Q50,90 0,100 L0,0 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q30,5 30,30 Q30,55 5,70" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="15" cy="15" r="3" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/40">
          <path d="M0,0 L100,0 L100,10 Q50,10 50,50 Q50,90 0,100 L0,0 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q30,5 30,30 Q30,55 5,70" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="15" cy="15" r="3" fill="currentColor"/>
        </svg>
      </div>

      {/* Lotus Flower Decorations */}
      <motion.div 
        className="absolute top-20 left-1/4"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 60" className="w-16 h-16 text-accent/30">
          <ellipse cx="30" cy="45" rx="8" ry="15" fill="currentColor"/>
          <ellipse cx="20" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(-30 20 40)"/>
          <ellipse cx="40" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(30 40 40)"/>
          <ellipse cx="15" cy="35" rx="5" ry="10" fill="currentColor" transform="rotate(-50 15 35)"/>
          <ellipse cx="45" cy="35" rx="5" ry="10" fill="currentColor" transform="rotate(50 45 35)"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-20 right-1/4"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 60" className="w-20 h-20 text-accent/20">
          <ellipse cx="30" cy="45" rx="8" ry="15" fill="currentColor"/>
          <ellipse cx="20" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(-30 20 40)"/>
          <ellipse cx="40" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(30 40 40)"/>
          <ellipse cx="15" cy="35" rx="5" ry="10" fill="currentColor" transform="rotate(-50 15 35)"/>
          <ellipse cx="45" cy="35" rx="5" ry="10" fill="currentColor" transform="rotate(50 45 35)"/>
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        {/* Decorative Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-accent/80 text-lg tracking-widest mb-4 khmer-text"
        >
          សួស្ដីសិរីមង្គល
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="khmer-title text-5xl md:text-7xl text-accent mb-4"
        >
          ពិធីភ្ជាប់ពាក្យ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="w-16 h-px bg-accent/50"></div>
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent">
            <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="w-16 h-px bg-accent/50"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-8"
        >
          <h2 className="khmer-title text-3xl md:text-4xl text-accent mb-2">ដូលីន ផានីរាជ</h2>
          <p className="text-accent text-2xl">&</p>
          <h2 className="khmer-title text-3xl md:text-4xl text-accent mt-2">ហុង ណាតា</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-accent/70 text-lg mb-12 khmer-text"
        >
          ថ្ងៃអាទិត្យ ទី១៤ ខែកុម្ភៈ ឆ្នាំ២០២៦
        </motion.p>

        {/* Decorative Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.7 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-12"
        />

        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(206, 179, 126, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnter}
          className="relative px-12 py-4 border-2 border-accent text-accent rounded-sm 
                     hover:bg-accent hover:text-primary transition-all duration-300
                     khmer-text text-lg tracking-wider overflow-hidden group"
        >
          <span className="relative z-10">បើកមើលសំបុត្រអញ្ជើញ</span>
          <motion.div
            className="absolute inset-0 bg-accent"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 0 }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 khmer-text">
            បើកមើលសំបុត្រអញ្ជើញ
          </span>
        </motion.button>

        {/* Tap instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ duration: 5, delay: 5, repeat: Infinity }}
          className="text-accent/50 text-sm mt-6 khmer-text"
        >
          ចុចដើម្បីបើកសំបុត្រអញ្ជើញ
        </motion.p>
      </div>

      {/* Floating particles - only render animations after mount to avoid hydration mismatch */}
      {isMounted && PARTICLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/30 rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          initial={{ opacity: 0.3, y: 0 }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: PARTICLE_DURATIONS[i],
            repeat: Infinity,
            delay: PARTICLE_DELAYS[i],
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
