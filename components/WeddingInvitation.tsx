'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaEnvelopeOpenText, FaHeart, FaPhone, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

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
    <g fill="url(#goldGradient)">
      <ellipse cx="200" cy="60" rx="25" ry="15" opacity="0.9"/>
      <ellipse cx="200" cy="55" rx="18" ry="10" opacity="0.8"/>
      <circle cx="200" cy="50" r="8" opacity="1"/>
      <ellipse cx="175" cy="55" rx="12" ry="8" transform="rotate(-30 175 55)" opacity="0.8"/>
      <ellipse cx="225" cy="55" rx="12" ry="8" transform="rotate(30 225 55)" opacity="0.8"/>
      <ellipse cx="165" cy="65" rx="10" ry="6" transform="rotate(-45 165 65)" opacity="0.7"/>
      <ellipse cx="235" cy="65" rx="10" ry="6" transform="rotate(45 235 65)" opacity="0.7"/>
      <path d="M155 60 Q140 50 125 55 Q110 60 100 50" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M100 50 Q90 45 85 55 Q80 65 70 60" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="130" cy="52" rx="8" ry="5" opacity="0.6"/>
      <ellipse cx="95" cy="48" rx="6" ry="4" opacity="0.5"/>
      <circle cx="70" cy="58" r="5" opacity="0.5"/>
      <path d="M60 55 Q45 50 35 60 Q25 70 20 65" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M245 60 Q260 50 275 55 Q290 60 300 50" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.8"/>
      <path d="M300 50 Q310 45 315 55 Q320 65 330 60" stroke="url(#goldGradient)" strokeWidth="2" fill="none" opacity="0.7"/>
      <ellipse cx="270" cy="52" rx="8" ry="5" opacity="0.6"/>
      <ellipse cx="305" cy="48" rx="6" ry="4" opacity="0.5"/>
      <circle cx="330" cy="58" r="5" opacity="0.5"/>
      <path d="M340 55 Q355 50 365 60 Q375 70 380 65" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <circle cx="50" cy="70" r="3" opacity="0.4"/>
      <circle cx="350" cy="70" r="3" opacity="0.4"/>
      <circle cx="30" cy="75" r="2" opacity="0.3"/>
      <circle cx="370" cy="75" r="2" opacity="0.3"/>
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

const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent"></div>
    <span className="text-[#F0D78C] text-lg drop-shadow-lg">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent via-[#D4A84B] to-transparent"></div>
  </div>
);

const RoyalDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-2 ${className}`}>
    <span className="text-[#F0D78C]">◆</span>
    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4A84B]"></div>
    <span className="text-[#D4A84B] text-xs">✦</span>
    <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4A84B]"></div>
    <span className="text-[#F0D78C]">◆</span>
  </div>
);

const SectionTitle = ({ khmer }: { khmer: string }) => (
  <div className="text-center mb-8">
    <h2 className="font-moul text-2xl md:text-3xl text-[#F0D78C] mb-3 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(212, 168, 75, 0.4)' }}>{khmer}</h2>
    <RoyalDivider className="mt-3" />
  </div>
);

const MusicControl = ({ isMuted, onToggle }: { isMuted: boolean; onToggle: () => void }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.3 }}
    onClick={onToggle}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#F0D78C] to-[#D4A84B] text-[#0A3D2E] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all"
    aria-label={isMuted ? 'បើកសំឡេង' : 'បិទសំឡេង'}
  >
    {isMuted ? <FaVolumeMute className="text-lg" /> : <FaVolumeUp className="text-lg" />}
  </motion.button>
);

const SideOrnament = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`fixed top-1/2 -translate-y-1/2 ${side === 'left' ? 'left-0' : 'right-0'} hidden md:block z-10 opacity-30`}>
    <svg width="60" height="300" viewBox="0 0 60 300">
      <defs>
        <linearGradient id={`sideGold${side}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A84B" />
          <stop offset="50%" stopColor="#F0D78C" />
          <stop offset="100%" stopColor="#D4A84B" />
        </linearGradient>
      </defs>
      <path d="M30 0 Q20 50 30 100 Q40 150 30 200 Q20 250 30 300" stroke={`url(#sideGold${side})`} strokeWidth="2" fill="none" />
      <circle cx="30" cy="50" r="8" fill={`url(#sideGold${side})`} />
      <circle cx="30" cy="150" r="8" fill={`url(#sideGold${side})`} />
      <circle cx="30" cy="250" r="8" fill={`url(#sideGold${side})`} />
    </svg>
  </div>
);

const LandingPage = ({ onOpen, guestName }: { onOpen: () => void; guestName: string | null }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen bg-gradient-to-b from-[#0A3D2E] via-[#0D4A38] to-[#0A3D2E] flex flex-col items-center justify-center px-4 relative overflow-hidden"
  >
    <div className="fixed inset-0 pointer-events-none opacity-5">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A84B] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A84B] rounded-full blur-3xl"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-center z-10"
    >
      <FloralBorderTop />
    </motion.div>

    {/* Guest Name Greeting */}
    {guestName && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center z-10 mb-4"
      >
        <p className="text-[#D4A84B]/70 text-sm tracking-wider mb-1">សូមគោរពអញ្ជើញ</p>
        <p className="font-moul text-xl md:text-2xl text-[#F0D78C] drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(212, 168, 75, 0.4)' }}>
          {guestName}
        </p>
        <GoldDivider className="mt-4" />
      </motion.div>
    )}

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="text-center my-8 z-10"
    >
      <p className="font-moul text-[#D4A84B]/80 text-xs tracking-[0.3em] mb-4">សូមអញ្ជើញចូលរួម</p>
      <h1 className="font-moul text-4xl md:text-5xl text-[#F0D78C] mb-2 drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(212, 168, 75, 0.5)' }}>
        យូវ សុគ្រីវ
      </h1>
      <div className="flex items-center justify-center gap-4 my-4">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4A84B]"></div>
        <FaHeart className="text-[#F0D78C] text-lg animate-pulse" />
        <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4A84B]"></div>
      </div>
      <h1 className="font-moul text-4xl md:text-5xl text-[#F0D78C] drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(212, 168, 75, 0.5)' }}>
        ជា ចំលើយ
      </h1>
      <p className="font-moul text-[#D4A84B]/70 text-sm mt-8 font-semibold tracking-wide">៥ ឧសភា ២០២៦</p>
    </motion.div>

    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onOpen}
      className="flex items-center gap-3 px-10 py-5 border-2 border-[#F0D78C] text-[#F0D78C] rounded-full hover:bg-gradient-to-r hover:from-[#D4A84B] hover:to-[#F0D78C] hover:text-[#0A3D2E] transition-all shadow-xl hover:shadow-2xl font-semibold z-10"
    >
      <FaEnvelopeOpenText className="text-lg" />
      <span className="font-moul">បើកលិខិតអញ្ជើញ</span>
    </motion.button>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="font-moul text-[#D4A84B] text-xs mt-6 font-semibold tracking-widest z-10"
    >
      ចុចដើម្បីបើកលិខិតអញ្ជើញ
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="mt-8 z-10"
    >
      <FloralBorderBottom />
    </motion.div>
  </motion.div>
);

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [guestName, setGuestName] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const searchParams = useSearchParams();

  // Read guest name from URL parameter
  useEffect(() => {
    const guest = searchParams.get('guest');
    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
  }, [searchParams]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        console.log('Audio autoplay was prevented:', error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/beautiful-in-white.mp3"
        loop
        preload="auto"
        muted
      />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <LandingPage key="landing" onOpen={handleOpenInvitation} guestName={guestName} />
        ) : (
          <motion.main
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-gradient-to-b from-[#0A3D2E] via-[#0D4A38] to-[#0A3D2E] relative overflow-hidden"
          >
            <div className="fixed inset-0 pointer-events-none opacity-5">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A84B] rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A84B] rounded-full blur-3xl"></div>
            </div>

            <MusicControl isMuted={isMuted} onToggle={toggleMute} />
            
            <SideOrnament side="left" />
            <SideOrnament side="right" />

            <div className="max-w-lg mx-auto px-4 py-8 relative z-10">
              
              {/* Guest Greeting */}
              {guestName && (
                <motion.div {...fadeInUp} className="text-center mb-8">
                  <div className="inline-block border border-[#D4A84B]/40 rounded-xl px-8 py-4 bg-gradient-to-r from-[#0A3D2E]/50 to-[#0D4A38]/50">
                    <p className="text-[#D4A84B]/70 text-sm tracking-wider mb-1">ជូនចំពោះ</p>
                    <p className="font-moul text-2xl text-[#F0D78C] drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(212, 168, 75, 0.4)' }}>
                      {guestName}
                    </p>
                  </div>
                </motion.div>
              )}

              <section id="hero" className="mb-12">
                <motion.div {...fadeInUp}><FloralBorderTop /></motion.div>
                <motion.div {...fadeInUp} className="text-center my-6">
                  <p className="font-moul text-[#D4A84B]/80 text-xs tracking-[0.3em] mb-2">សូមគោរពអញ្ជើញឱ្យចូលរួម</p>
                  <p className="font-moul text-[#F0D78C] text-sm mb-4">ពិធីមង្គលការ</p>
                  <h1 className="font-moul text-5xl md:text-6xl text-[#F0D78C] leading-tight drop-shadow-xl" style={{ textShadow: '0 6px 16px rgba(212, 168, 75, 0.5)' }}>
                    យូវ សុគ្រីវ
                  </h1>
                  <div className="flex items-center justify-center gap-6 my-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4A84B]"></div>
                    <span className="text-[#F0D78C] text-3xl drop-shadow-lg">💎</span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4A84B]"></div>
                  </div>
                  <h1 className="font-moul text-5xl md:text-6xl text-[#F0D78C] leading-tight drop-shadow-xl" style={{ textShadow: '0 6px 16px rgba(212, 168, 75, 0.5)' }}>
                    ជា ចំលើយ
                  </h1>
                </motion.div>
                <motion.div {...fadeInUp}><GoldDivider className="my-6" /></motion.div>
              </section>

              <motion.section {...fadeInUp} id="date" className="mb-12">
                <SectionTitle khmer="កាលបរិច្ឆេទពិធីមង្គលការ" />
                <div className="text-center">
                  <div className="inline-block border-2 border-[#D4A84B] rounded-2xl px-10 py-8 bg-gradient-to-b from-[#0A3D2E]/70 to-[#0D4A38]/70 shadow-2xl" style={{ boxShadow: '0 8px 32px rgba(212, 168, 75, 0.2)' }}>
                    <FaCalendarAlt className="text-[#F0D78C] text-3xl mx-auto mb-4" />
                    <p className="font-moul text-3xl md:text-4xl text-[#F0D78C] mb-3 drop-shadow-lg">៥ ឧសភា ២០២៦</p>
                    <p className="font-moul text-[#D4A84B]/80 text-sm font-semibold tracking-wide">ថ្ងៃអង្គារ ៥ ឧសភា ឆ្នាំ ២០២៦</p>
                  </div>
                </div>
              </motion.section>

              <motion.section {...fadeInUp} id="details" className="mb-12">
                <SectionTitle khmer="ព័ត៌មានលម្អិតពិធីមង្គលការ" />
                <div className="space-y-5">
                  <div className="flex items-center gap-5 p-6 border border-[#D4A84B]/40 rounded-2xl bg-gradient-to-r from-[#0A3D2E]/50 to-[#0D4A38]/50 shadow-lg hover:shadow-xl hover:border-[#D4A84B]/60 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4A84B]/30 to-[#D4A84B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-[#F0D78C] text-lg" />
                    </div>
                    <div>
                      <p className="font-moul text-[#F0D78C] text-lg drop-shadow-lg">ម៉ោង ៦:០០ ល្ងាច</p>
                      <p className="font-moul text-[#D4A84B]/70 text-sm font-semibold">សម្រាប់ពិធីការ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 p-6 border border-[#D4A84B]/40 rounded-2xl bg-gradient-to-r from-[#0A3D2E]/50 to-[#0D4A38]/50 shadow-lg hover:shadow-xl hover:border-[#D4A84B]/60 transition-all">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#D4A84B]/30 to-[#D4A84B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-[#F0D78C] text-lg" />
                    </div>
                    <div>
                      <p className="font-moul text-[#F0D78C] text-lg drop-shadow-lg">សណ្ឋាគារ ភ្នំពេញ</p>
                      <p className="font-moul text-[#D4A84B]/70 text-sm font-semibold">បាល់រូមធំ ភ្នំពេញ</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section {...fadeInUp} id="timeline" className="mb-12">
                <SectionTitle khmer="កម្មវិធីពិធីមង្គលការ" />
                <div className="relative pl-8">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-[#D4A84B]/30"></div>
                  {[
                    { time: "៥:៣០", period: "ល្ងាច", event: "ទទួលភ្ញៀវ" },
                    { time: "៦:០០", period: "ល្ងាច", event: "ពិធីការ" },
                    { time: "៧:០០", period: "ល្ងាច", event: "ពិធីជប់លៀង" },
                    { time: "៩:០០", period: "ល្ងាច", event: "រាំរបាំ" },
                  ].map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="relative mb-6 last:mb-0">
                      <div className="absolute -left-5 w-4 h-4 bg-[#D4A84B] rounded-full border-2 border-[#0A3D2E]"></div>
                      <div className="bg-gradient-to-r from-[#0A3D2E]/50 to-[#0D4A38]/50 border border-[#D4A84B]/30 rounded-xl p-5 hover:border-[#D4A84B]/60 transition-all shadow-md">
                        <p className="font-moul text-[#D4A84B]/80 text-xs font-semibold mb-2 tracking-wide">{item.time} {item.period}</p>
                        <p className="font-moul text-[#F0D78C] text-lg drop-shadow-lg">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              <motion.section {...fadeInUp} id="location" className="mb-12">
                <SectionTitle khmer="ទីតាំងពិធីមង្គលការ" />
                <div className="rounded-xl overflow-hidden border-2 border-[#D4A84B]/30 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7548898657825!2d104.91997081152027!3d11.568271988571532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x2b11895b7c9e5871!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1704672000000!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ទីតាំងពិធីមង្គលការ"
                    className="grayscale-[30%]"
                  ></iframe>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  href="https://maps.google.com/?q=Phnom+Penh+Cambodia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 border border-[#D4A84B]/40 rounded-full text-[#F0D78C] text-sm hover:bg-[#D4A84B]/10 transition-colors"
                >
                  <FaMapMarkerAlt />
                  <span className="font-moul">បើកផែនទីទីតាំង</span>
                </motion.a>
              </motion.section>

              <motion.section {...fadeInUp} id="rsvp" className="mb-12">
                <SectionTitle khmer="ទំនាក់ទំនងរបស់យើងខ្ញុំ" />
                {!showContact ? (
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.98 }} 
                    onClick={() => setShowContact(true)} 
                    className="font-moul w-full py-5 bg-gradient-to-r from-[#D4A84B] via-[#F0D78C] to-[#D4A84B] text-[#0A3D2E] rounded-xl tracking-wide font-semibold hover:shadow-2xl transition-all shadow-lg"
                  >
                    បង្ហាញលេខទូរស័ព្ទ
                  </motion.button>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    className="border border-[#D4A84B]/40 rounded-xl p-8 bg-gradient-to-b from-[#0A3D2E]/70 to-[#0D4A38]/70 shadow-lg"
                  >
                    <p className="font-moul text-[#F0D78C] text-center mb-6 text-lg drop-shadow-lg">សូមទំនាក់ទំនង</p>
                    <div className="space-y-4">
                      <a href="tel:012345678" className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#D4A84B]/15 to-[#D4A84B]/5 rounded-lg hover:from-[#D4A84B]/25 hover:to-[#D4A84B]/15 transition-all border border-[#D4A84B]/20 hover:border-[#D4A84B]/40">
                        <FaPhone className="text-[#F0D78C] text-lg flex-shrink-0" />
                        <div>
                          <p className="font-moul text-[#F0D78C] text-sm font-semibold">យូវ សុគ្រីវ</p>
                          <p className="font-moul text-[#D4A84B]">012 345 678</p>
                        </div>
                      </a>
                      <a href="tel:098765432" className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#D4A84B]/15 to-[#D4A84B]/5 rounded-lg hover:from-[#D4A84B]/25 hover:to-[#D4A84B]/15 transition-all border border-[#D4A84B]/20 hover:border-[#D4A84B]/40">
                        <FaPhone className="text-[#F0D78C] text-lg flex-shrink-0" />
                        <div>
                          <p className="font-moul text-[#F0D78C] text-sm font-semibold">ជា ចំលើយ</p>
                          <p className="font-moul text-[#D4A84B]">098 765 432</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.section>

              <motion.section {...fadeInUp} id="closing" className="text-center pb-12 pt-4">
                <GoldDivider className="mb-8" />
                <p className="font-moul text-[#D4A84B]/80 text-sm italic mb-6" style={{ fontSize: '1.1rem' }}>
                  &ldquo;សូមអរគុណច្រើនដែលបានទទួលលិខិតអញ្ជើញនេះ&rdquo;
                </p>
                <p className="font-moul text-2xl md:text-3xl text-[#F0D78C] mb-3 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(212, 168, 75, 0.4)' }}>
                  សុគ្រីវ & ចំលើយ
                </p>
                <p className="text-[#D4A84B]/60 text-xs tracking-widest mb-8 font-semibold">
                  #SokrivChamlei2026
                </p>
                <FloralBorderBottom />
                <div className="mt-8 text-[#F0D78C] text-3xl animate-pulse drop-shadow-lg">
                  💎 ♥ 💎
                </div>
              </motion.section>

            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}