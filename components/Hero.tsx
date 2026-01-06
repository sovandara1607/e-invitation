'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-[#E8DFD0] py-20 px-4">
      {/* Decorative Birds */}
      <div className="absolute top-10 left-10 text-sage opacity-40">
        <svg className="w-6 h-6 bird-animation" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-1.1 0-2 .9-2 2 0 .35.09.68.25.97L2 12l8.25 7.03c-.16.29-.25.62-.25.97 0 1.1.9 2 2 2s2-.9 2-2c0-.35-.09-.68-.25-.97L22 12l-8.25-7.03c.16-.29.25-.62.25-.97 0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
      <div className="absolute top-20 right-20 text-sage opacity-40" style={{ animationDelay: '2s' }}>
        <svg className="w-6 h-6 bird-animation" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c-1.1 0-2 .9-2 2 0 .35.09.68.25.97L2 12l8.25 7.03c-.16.29-.25.62-.25.97 0 1.1.9 2 2 2s2-.9 2-2c0-.35-.09-.68-.25-.97L22 12l-8.25-7.03c.16-.29.25-.62.25-.97 0-1.1-.9-2-2-2z"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-sage">Together</p>
          <p className="text-sm tracking-[0.2em] uppercase mb-8">With Their Families</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="script-font text-7xl md:text-8xl lg:text-9xl mb-4 text-dark-text">
            Dara & Lingcheu
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="text-sm tracking-[0.2em] uppercase mb-2">Invite You To Join Their</p>
          <p className="text-sm tracking-[0.2em] uppercase mb-8">Wedding Celebration On</p>

          <div className="flex items-center justify-center gap-8 mb-8 text-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-2">May</p>
              <div className="border-t border-b border-dark-text py-2 px-6">
                <p className="text-sm tracking-[0.2em] uppercase">Saturday</p>
              </div>
            </div>

            <div>
              <p className="text-8xl font-light">01</p>
            </div>

            <div>
              <div className="border-t border-b border-dark-text py-2 px-6">
                <p className="text-sm tracking-[0.2em] uppercase">At 7 PM</p>
              </div>
              <p className="text-sm tracking-[0.3em] mt-2">2026</p>
            </div>
          </div>

          <p className="text-sm tracking-[0.15em] uppercase mb-12">
            123 Anywhere St., Any City, ST 12345
          </p>

          <p className="script-font text-2xl mb-8">Reception to follow</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <FaArrowDown className="mx-auto text-sage animate-bounce" size={24} />
        </motion.div>
      </div>

      {/* Decorative elements at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sage/10 to-transparent"></div>
    </section>
  );
}
