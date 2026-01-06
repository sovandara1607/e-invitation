'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    dietary: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-cream to-[#E8DFD0]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="script-font text-6xl md:text-7xl mb-4 text-sage">
            RSVP
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg">
            Please respond by April 1st, 2026
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="attending" className="block text-sm font-medium mb-2">
                Will you be attending? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage focus:border-transparent"
              >
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2">
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage focus:border-transparent"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>

            <div>
              <label htmlFor="dietary" className="block text-sm font-medium mb-2">
                Dietary Restrictions
              </label>
              <input
                type="text"
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="Vegetarian, Gluten-free, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message to the Couple
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="Share your excitement or well wishes..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-sage text-white py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
            >
              Submit RSVP
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sage font-semibold"
              >
                Thank you for your RSVP! We can't wait to celebrate with you!
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
