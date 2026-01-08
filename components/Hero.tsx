'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-primary">
      {/* Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Khmer Traditional Pattern Background */}
      <div className="absolute inset-0 opacity-5 khmer-pattern" />

      {/* Royal Corner Decorations */}
      <div className="absolute top-8 left-8 w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M0,0 L50,0 Q45,5 40,10 L10,40 Q5,45 0,50 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q25,5 25,25 Q25,45 5,55" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <path d="M10,10 Q20,10 20,20 Q20,30 10,35" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
          <circle cx="15" cy="15" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-32 h-32 -scale-x-100">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M0,0 L50,0 Q45,5 40,10 L10,40 Q5,45 0,50 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q25,5 25,25 Q25,45 5,55" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-8 left-8 w-32 h-32 -scale-y-100">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M0,0 L50,0 Q45,5 40,10 L10,40 Q5,45 0,50 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q25,5 25,25 Q25,45 5,55" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 w-32 h-32 scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M0,0 L50,0 Q45,5 40,10 L10,40 Q5,45 0,50 Z" fill="currentColor" opacity="0.3"/>
          <path d="M5,5 Q25,5 25,25 Q25,45 5,55" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      </div>

      {/* Floating Lotus Decorations */}
      <motion.div 
        className="absolute top-1/4 left-10"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 60" className="w-16 h-16 text-accent/20">
          <ellipse cx="30" cy="45" rx="8" ry="15" fill="currentColor"/>
          <ellipse cx="20" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(-30 20 40)"/>
          <ellipse cx="40" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(30 40 40)"/>
          <ellipse cx="15" cy="35" rx="5" ry="10" fill="currentColor" transform="rotate(-50 15 35)"/>
          <ellipse cx="45" cy="35" rx="5" ry="10" fill="currentColor" transform="rotate(50 45 35)"/>
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 right-10"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 60 60" className="w-20 h-20 text-accent/15">
          <ellipse cx="30" cy="45" rx="8" ry="15" fill="currentColor"/>
          <ellipse cx="20" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(-30 20 40)"/>
          <ellipse cx="40" cy="40" rx="6" ry="12" fill="currentColor" transform="rotate(30 40 40)"/>
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <svg viewBox="0 0 200 40" className="w-48 h-12 mx-auto text-accent">
            <path d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20" stroke="currentColor" fill="none" strokeWidth="0.5"/>
            <circle cx="100" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="20" r="4" fill="currentColor" opacity="0.5"/>
            <path d="M92,20 L80,15 M92,20 L80,25 M108,20 L120,15 M108,20 L120,25" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-2"
        >
          <p className="text-sm tracking-wider text-accent/60 khmer-text">
            ~ លិខិតអញ្ជើញ ~
          </p>
          <p className="text-xl md:text-2xl text-accent/90 khmer-text font-medium">
            សិរីមង្គលពិធីភ្ជាប់ពាក្យ
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8"
        />

        {/* Names with Ring Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <h1 className="khmer-title text-5xl md:text-6xl lg:text-7xl mb-6 text-accent drop-shadow-lg">
            ដូលីន ផានីរាជ
          </h1>
          
          {/* Ring Icon */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="my-4"
          >
            <svg viewBox="0 0 60 40" className="w-20 h-12 mx-auto text-accent">
              <ellipse cx="20" cy="20" rx="12" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="40" cy="20" rx="12" ry="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="20" cy="8" r="3" fill="currentColor"/>
              <circle cx="40" cy="8" r="3" fill="currentColor"/>
            </svg>
          </motion.div>

          <h1 className="khmer-title text-5xl md:text-6xl lg:text-7xl text-accent drop-shadow-lg">
            ហុង ណាតា
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Decorative Line */}
          <div className="w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-8" />
          
          <p className="text-lg tracking-wider mb-6 text-accent/90 khmer-text">
            សូមគោរពអញ្ជើញចូលរួមពិធីភ្ជាប់ពាក្យ
          </p>

          {/* Date Display - Elegant Style */}
          <div className="inline-block border border-accent/40 p-8 rounded-sm relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent"></div>

            <div className="flex items-center justify-center gap-6 text-center text-accent">
              <div>
                <p className="text-sm tracking-wider mb-1 khmer-text opacity-70">ថ្ងៃ</p>
                <p className="text-lg tracking-wider khmer-text">អាទិត្យ</p>
              </div>

              <div className="border-l border-r border-accent/30 px-6">
                <p className="text-6xl font-light">១៥</p>
              </div>

              <div>
                <p className="text-lg tracking-wider khmer-text">កុម្ភៈ</p>
                <p className="text-sm tracking-wider mt-1 khmer-text opacity-70">២០២៦</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="text-sm tracking-wider khmer-text opacity-80">ម៉ោង ៨:០០ ព្រឹក</p>
            </div>
          </div>

          <div className="w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-8" />

          <p className="text-sm tracking-wider mb-8 text-accent/80 khmer-text">
            នៅសាលមង្គលការ រ៉ូយ៉ាល់ រ៉េនដឺវូ<br />
            ផ្ទះលេខ១១A ផ្លូវ៦១៤ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក<br />
            រាជធានីភ្នំពេញ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8"
        >
          <FaArrowDown className="mx-auto text-accent animate-bounce" size={24} />
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream/10 to-transparent"></div>
    </section>
  );
}
