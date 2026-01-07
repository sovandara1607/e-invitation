'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Traditional Khmer-style floral border - Top
const FloralBorderTop = () => (
  <svg viewBox="0 0 400 120" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A84B" />
        <stop offset="50%" stopColor="#F0D78C" />
        <stop offset="100%" stopColor="#D4A84B" />
      </linearGradient>
    </defs>
    
    {/* Center ornament */}
    <g fill="url(#goldGradient)">
      {/* Main center lotus/flower */}
      <ellipse cx="200" cy="60" rx="25" ry="15" opacity="0.9"/>
      <ellipse cx="200" cy="55" rx="18" ry="10" opacity="0.8"/>
      <circle cx="200" cy="50" r="8" opacity="1"/>
      
      {/* Petals radiating from center */}
      <ellipse cx="175" cy="55" rx="12" ry="8" transform="rotate(-30 175 55)" opacity="0.8"/>
      <ellipse cx="225" cy="55" rx="12" ry="8" transform="rotate(30 225 55)" opacity="0.8"/>
      <ellipse cx="165" cy="65" rx="10" ry="6" transform="rotate(-45 165 65)" opacity="0.7"/>
      <ellipse cx="235" cy="65" rx="10" ry="6" transform="rotate(45 235 65)" opacity="0.7"/>
      
      {/* Decorative curls - left side */}
      <path d="M155 60 Q140 50 125 55 Q110 60 100 50" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M100 50 Q90 45 85 55 Q80 65 70 60" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="130" cy="52" rx="8" ry="5" opacity="0.6"/>
      <ellipse cx="95" cy="48" rx="6" ry="4" opacity="0.5"/>
      <circle cx="70" cy="58" r="5" opacity="0.5"/>
      <path d="M60 55 Q45 50 35 60 Q25 70 20 65" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      
      {/* Decorative curls - right side (mirrored) */}
      <path d="M245 60 Q260 50 275 55 Q290 60 300 50" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M300 50 Q310 45 315 55 Q320 65 330 60" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="270" cy="52" rx="8" ry="5" opacity="0.6"/>
      <ellipse cx="305" cy="48" rx="6" ry="4" opacity="0.5"/>
      <circle cx="330" cy="58" r="5" opacity="0.5"/>
      <path d="M340 55 Q355 50 365 60 Q375 70 380 65" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      
      {/* Small decorative elements */}
      <circle cx="50" cy="70" r="3" opacity="0.4"/>
      <circle cx="350" cy="70" r="3" opacity="0.4"/>
      <circle cx="30" cy="75" r="2" opacity="0.3"/>
      <circle cx="370" cy="75" r="2" opacity="0.3"/>
      
      {/* Hanging elements from center */}
      <ellipse cx="200" cy="80" rx="6" ry="4" opacity="0.6"/>
      <ellipse cx="185" cy="85" rx="4" ry="3" opacity="0.5"/>
      <ellipse cx="215" cy="85" rx="4" ry="3" opacity="0.5"/>
      <circle cx="200" cy="95" r="3" opacity="0.4"/>
    </g>
  </svg>
);

// Traditional Khmer-style floral border - Bottom
const FloralBorderBottom = () => (
  <svg viewBox="0 0 400 120" className="w-full h-auto transform rotate-180" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A84B" />
        <stop offset="50%" stopColor="#F0D78C" />
        <stop offset="100%" stopColor="#D4A84B" />
      </linearGradient>
    </defs>
    
    <g fill="url(#goldGradient2)">
      <ellipse cx="200" cy="60" rx="25" ry="15" opacity="0.9"/>
      <ellipse cx="200" cy="55" rx="18" ry="10" opacity="0.8"/>
      <circle cx="200" cy="50" r="8" opacity="1"/>
      
      <ellipse cx="175" cy="55" rx="12" ry="8" transform="rotate(-30 175 55)" opacity="0.8"/>
      <ellipse cx="225" cy="55" rx="12" ry="8" transform="rotate(30 225 55)" opacity="0.8"/>
      <ellipse cx="165" cy="65" rx="10" ry="6" transform="rotate(-45 165 65)" opacity="0.7"/>
      <ellipse cx="235" cy="65" rx="10" ry="6" transform="rotate(45 235 65)" opacity="0.7"/>
      
      <path d="M155 60 Q140 50 125 55 Q110 60 100 50" stroke="url(#goldGradient2)" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M100 50 Q90 45 85 55 Q80 65 70 60" stroke="url(#goldGradient2)" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="130" cy="52" rx="8" ry="5" opacity="0.6"/>
      <ellipse cx="95" cy="48" rx="6" ry="4" opacity="0.5"/>
      <circle cx="70" cy="58" r="5" opacity="0.5"/>
      <path d="M60 55 Q45 50 35 60 Q25 70 20 65" stroke="url(#goldGradient2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      
      <path d="M245 60 Q260 50 275 55 Q290 60 300 50" stroke="url(#goldGradient2)" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M300 50 Q310 45 315 55 Q320 65 330 60" stroke="url(#goldGradient2)" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="270" cy="52" rx="8" ry="5" opacity="0.6"/>
      <ellipse cx="305" cy="48" rx="6" ry="4" opacity="0.5"/>
      <circle cx="330" cy="58" r="5" opacity="0.5"/>
      <path d="M340 55 Q355 50 365 60 Q375 70 380 65" stroke="url(#goldGradient2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      
      <circle cx="50" cy="70" r="3" opacity="0.4"/>
      <circle cx="350" cy="70" r="3" opacity="0.4"/>
      
      <ellipse cx="200" cy="80" rx="6" ry="4" opacity="0.6"/>
      <ellipse cx="185" cy="85" rx="4" ry="3" opacity="0.5"/>
      <ellipse cx="215" cy="85" rx="4" ry="3" opacity="0.5"/>
    </g>
  </svg>
);

// Gold ornamental divider
const GoldDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 20" className={`w-48 h-auto mx-auto ${className}`}>
    <defs>
      <linearGradient id="dividerGold" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="20%" stopColor="#D4A84B" />
        <stop offset="50%" stopColor="#F0D78C" />
        <stop offset="80%" stopColor="#D4A84B" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    <path d="M20 10 Q50 5 80 10 Q100 12 100 10 Q100 8 120 10 Q150 15 180 10" 
          stroke="url(#dividerGold)" strokeWidth="1.5" fill="none"/>
    <circle cx="100" cy="10" r="3" fill="#F0D78C"/>
    <circle cx="85" cy="10" r="1.5" fill="#D4A84B" opacity="0.7"/>
    <circle cx="115" cy="10" r="1.5" fill="#D4A84B" opacity="0.7"/>
  </svg>
);

// Side decorative elements
const SideOrnament = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`absolute top-1/2 -translate-y-1/2 ${side === 'left' ? 'left-2' : 'right-2'} hidden md:block`}>
    <svg viewBox="0 0 30 200" className={`w-6 h-48 ${side === 'right' ? 'transform scale-x-[-1]' : ''}`}>
      <defs>
        <linearGradient id={`sideGold${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A84B" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#F0D78C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4A84B" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path d="M15 20 Q25 40 15 60 Q5 80 15 100 Q25 120 15 140 Q5 160 15 180" 
            stroke={`url(#sideGold${side})`} strokeWidth="2" fill="none"/>
      <circle cx="15" cy="20" r="4" fill="#D4A84B" opacity="0.5"/>
      <circle cx="15" cy="100" r="5" fill="#F0D78C" opacity="0.6"/>
      <circle cx="15" cy="180" r="4" fill="#D4A84B" opacity="0.5"/>
    </svg>
  </div>
);

export default function WeddingInvitation() {
  const [showContact, setShowContact] = useState(false);

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A3D2E] via-[#0D4A38] to-[#0A3D2E] relative overflow-hidden">
      
      {/* Side ornaments */}
      <SideOrnament side="left" />
      <SideOrnament side="right" />

      {/* Main content container */}
      <div className="max-w-md mx-auto px-4 py-6 relative">
        
        {/* ===== TOP FLORAL BORDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FloralBorderTop />
        </motion.div>

        {/* ===== BLESSING TEXT ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mt-2 mb-4"
        >
          <p className="text-[#F0D78C] text-sm tracking-[0.2em] font-light">
            សូមគោរពអញ្ជើញ
          </p>
          <p className="text-[#D4A84B]/80 text-xs mt-1 tracking-wider">
            ចូលរួមពិធីមង្គលការ
          </p>
        </motion.div>

        {/* ===== COUPLE'S NAMES ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center my-6"
        >
          {/* Groom's name */}
          <h1 className="font-serif text-4xl md:text-5xl text-[#F0D78C] leading-tight tracking-wide"
              style={{ textShadow: '0 2px 10px rgba(212, 168, 75, 0.3)' }}>
            យូវ សុគ្រីវ
          </h1>
          
          {/* Ampersand ornament */}
          <div className="my-3 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A84B]"></div>
            <span className="text-[#F0D78C] text-3xl font-light">&</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A84B]"></div>
          </div>
          
          {/* Bride's name */}
          <h1 className="font-serif text-4xl md:text-5xl text-[#F0D78C] leading-tight tracking-wide"
              style={{ textShadow: '0 2px 10px rgba(212, 168, 75, 0.3)' }}>
            ជា ចំលើយ
          </h1>
        </motion.div>

        {/* ===== GOLD DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <GoldDivider />
        </motion.div>

        {/* ===== DATE CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center my-6"
        >
          <div className="inline-block border border-[#D4A84B]/40 rounded-lg px-8 py-4 bg-[#0A3D2E]/50">
            <p className="text-[#D4A84B]/80 text-xs tracking-[0.3em] uppercase mb-2">
              Save The Date
            </p>
            <p className="text-[#F0D78C] font-serif text-2xl md:text-3xl mb-1">
              ៥ ឧសភា ២០២៦
            </p>
            <p className="text-[#D4A84B]/70 text-sm">
              May 5th, 2026 • Tuesday
            </p>
          </div>
        </motion.div>

        {/* ===== EVENT DETAILS ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center mb-6"
        >
          <div className="space-y-3 text-[#E8F3EF]">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#D4A84B] text-lg">❖</span>
              <p className="text-sm">
                <span className="text-[#F0D78C]">ម៉ោង ៦:០០ ល្ងាច</span>
                <span className="text-[#D4A84B]/60 mx-2">|</span>
                <span>6:00 PM</span>
              </p>
              <span className="text-[#D4A84B] text-lg">❖</span>
            </div>
            
            <div>
              <p className="text-[#F0D78C] font-serif text-lg">Grand Ballroom Hotel</p>
              <p className="text-[#D4A84B]/70 text-sm">Phnom Penh, Cambodia</p>
            </div>
          </div>
        </motion.div>

        {/* ===== SMALL DIVIDER ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-2 my-4"
        >
          <div className="h-px w-8 bg-[#D4A84B]/40"></div>
          <span className="text-[#F0D78C] text-xs">✦</span>
          <div className="h-px w-8 bg-[#D4A84B]/40"></div>
        </motion.div>

        {/* ===== RSVP / CONTACT ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-center mb-6"
        >
          {!showContact ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowContact(true)}
              className="px-8 py-3 border border-[#D4A84B] text-[#F0D78C] rounded-full text-sm tracking-wider hover:bg-[#D4A84B]/10 transition-colors"
            >
              ទំនាក់ទំនង • RSVP
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="border border-[#D4A84B]/30 rounded-lg p-4 bg-[#0A3D2E]/50"
            >
              <p className="text-[#F0D78C] text-sm mb-3">សូមទំនាក់ទំនង</p>
              <div className="space-y-2 text-[#E8F3EF] text-sm">
                <p>
                  <span className="text-[#D4A84B]">☎</span> 012 345 678
                </p>
                <p>
                  <span className="text-[#D4A84B]">☎</span> 098 765 432
                </p>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="mt-3 text-[#D4A84B]/60 text-xs hover:text-[#D4A84B] transition-colors"
              >
                ✕ បិទ
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* ===== CLOSING MESSAGE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mb-4"
        >
          <p className="text-[#D4A84B]/70 text-xs italic">
            "សូមអរគុណសម្រាប់កិត្តិយសដ៏ខ្ពង់ខ្ពស់របស់លោកអ្នក"
          </p>
        </motion.div>

        {/* ===== BOTTOM FLORAL BORDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <FloralBorderBottom />
        </motion.div>

        {/* ===== HASHTAG ===== */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center text-[#D4A84B]/50 text-xs mt-4 tracking-wider"
        >
          #SokrivChamlei2026
        </motion.p>

      </div>
    </main>
  );
}
