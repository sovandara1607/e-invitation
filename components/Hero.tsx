'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Wedding Illustration Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/White and Green Illustrated Wedding Virtual Invitation.png"
          alt="Wedding Illustration"
          fill
          className="object-contain"
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Names and Wedding Details */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase mb-4 text-sage font-semibold">Together</p>
            <p className="text-sm tracking-[0.2em] uppercase mb-8 font-semibold">With Their Families</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <h1 className="script-font text-7xl md:text-8xl lg:text-9xl mb-4 text-dark-text drop-shadow-lg">
              Dara & Lingcheu
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-2 font-semibold">Invite You To Join Their</p>
            <p className="text-sm tracking-[0.2em] uppercase mb-8 font-semibold">Wedding Celebration On</p>

            <div className="flex items-center justify-center gap-8 mb-8 text-center">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase mb-2 font-semibold">May</p>
                <div className="border-t-2 border-b-2 border-dark-text py-2 px-6">
                  <p className="text-sm tracking-[0.2em] uppercase font-semibold">Saturday</p>
                </div>
              </div>

              <div>
                <p className="text-8xl font-light">01</p>
              </div>

              <div>
                <div className="border-t-2 border-b-2 border-dark-text py-2 px-6">
                  <p className="text-sm tracking-[0.2em] uppercase font-semibold">At 7 PM</p>
                </div>
                <p className="text-sm tracking-[0.3em] mt-2 font-semibold">2026</p>
              </div>
            </div>

            <p className="text-sm tracking-[0.15em] uppercase mb-12 font-semibold">
              123 Anywhere St., Any City, ST 12345
            </p>

            <p className="script-font text-2xl mb-8 drop-shadow-md">Reception to follow</p>
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
