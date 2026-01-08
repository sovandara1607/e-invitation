'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function EventDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2026-01-04T17:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-cream relative overflow-hidden">
      {/* Paper Texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M0,0 L100,0 L0,100 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-40 h-40 opacity-10 rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <path d="M0,0 L100,0 L0,100 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="khmer-title text-4xl md:text-5xl mb-4 text-primary">
            កម្មវិធីសិរីមង្គល<br/><br/>ពិធីភ្ជាប់ពាក្យ
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-primary/70 khmer-text">ថ្ងៃអាទិត្យ ទី១៥ ខែកុម្ភៈ ឆ្នាំ២០២៦</p>
        </motion.div>

        {/* Countdown Timer */}
        


        {/* Event Schedule - Khmer Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="khmer-title text-2xl text-center mb-8 text-primary">កម្មវិធីពេលព្រឹក</h3>
          <div className="max-w-2xl mx-auto bg-white/50 p-8 rounded-sm border border-accent/20 shadow-lg">
            <div className="space-y-6">
              {[
                { time: 'ម៉ោង ៤:០០នាទី', event: 'ចាប់ផ្តើមកម្មវិធី' },
                { time: 'ម៉ោង ៥:០០នាទី', event: 'កម្មវិធីបំពាក់ចិញ្ចៀន' },
                { time: 'ម៉ោង ១១:០០នាទី', event: 'ពិធីសារអាហារថ្ងៃត្រង់' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="w-32 text-right text-primary/60 khmer-text text-sm">{item.time}</div>
                  <div className="w-3 h-3 bg-accent rounded-full relative">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-30"></div>
                  </div>
                  <div className="flex-1 text-primary khmer-text">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-primary rounded-sm shadow-lg relative"
          >
            <div className="absolute inset-2 border border-accent/20 pointer-events-none"></div>
            <FaCalendarAlt className="mx-auto text-accent mb-4" size={40} />
            <h3 className="text-2xl mb-2 font-semibold text-accent khmer-text">កាលបរិច្ឆេទ</h3>
            <p className="text-lg text-accent/80 khmer-text">ថ្ងៃអាទិត្យ</p>
            <p className="text-xl font-semibold text-accent">១៥ កុម្ភៈ ២០២៦</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-primary rounded-sm shadow-lg relative"
          >
            <div className="absolute inset-2 border border-accent/20 pointer-events-none"></div>
            <FaClock className="mx-auto text-accent mb-4" size={40} />
            <h3 className="text-2xl mb-2 font-semibold text-accent khmer-text">ម៉ោង</h3>
            <p className="text-xl font-semibold text-accent">៥:០០ រសៀល</p>
            <p className="text-lg text-accent/80 khmer-text">ពិធីចាប់ផ្តើមទាន់ម៉ោង</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-primary rounded-sm shadow-lg relative"
          >
            <div className="absolute inset-2 border border-accent/20 pointer-events-none"></div>
            <FaMapMarkerAlt className="mx-auto text-accent mb-4" size={40} />
            <h3 className="text-2xl mb-2 font-semibold text-accent khmer-text">ទីកន្លែង</h3>
            <p className="text-lg text-accent/80 khmer-text">សាលមង្គលការ រ៉ូយ៉ាល់ រ៉េនដឺវូ</p>
            <p className="text-lg text-accent/80 khmer-text">រាជធានីភ្នំពេញ</p>
          </motion.div>
        </div>

        {/* Evening Program */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="khmer-title text-2xl mb-4 text-primary">កម្មវិធីពេលល្ងាច</h3>
          <p className="text-lg text-primary/80 khmer-text mb-4">
            អញ្ជើញភ្ញៀវកិត្តិយសទាំងអស់រីសារអាហារស្វាគមន៍នៅទីតាំងខាងដែល
          </p>
          <p className="text-primary/60 khmer-text">ដោយមេត្រីភាព។</p>
        </motion.div>
      </div>
    </section>
  );
}
