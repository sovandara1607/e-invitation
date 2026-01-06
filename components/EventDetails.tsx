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
    const weddingDate = new Date('2026-05-01T19:00:00').getTime();

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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="script-font text-6xl md:text-7xl mb-4 text-sage">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl text-center mb-8 tracking-wider">Counting Down To Our Big Day</h3>
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center bg-cream p-6 rounded-lg shadow-md">
                <div className="text-4xl font-light text-sage mb-2">{item.value}</div>
                <div className="text-sm tracking-wider uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-cream rounded-lg shadow-lg"
          >
            <FaCalendarAlt className="mx-auto text-sage mb-4" size={40} />
            <h3 className="text-2xl mb-2 font-semibold">Date</h3>
            <p className="text-lg">Saturday</p>
            <p className="text-xl font-semibold">May 01, 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-cream rounded-lg shadow-lg"
          >
            <FaClock className="mx-auto text-sage mb-4" size={40} />
            <h3 className="text-2xl mb-2 font-semibold">Time</h3>
            <p className="text-xl font-semibold">7:00 PM</p>
            <p className="text-lg">Ceremony starts promptly</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-cream rounded-lg shadow-lg"
          >
            <FaMapMarkerAlt className="mx-auto text-sage mb-4" size={40} />
            <h3 className="text-2xl mb-2 font-semibold">Venue</h3>
            <p className="text-lg">123 Anywhere St.</p>
            <p className="text-lg">Any City, ST 12345</p>
          </motion.div>
        </div>

        {/* Dress Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl script-font mb-4 text-sage">Dress Code</h3>
          <p className="text-xl">Formal / Black Tie Optional</p>
        </motion.div>
      </div>
    </section>
  );
}
