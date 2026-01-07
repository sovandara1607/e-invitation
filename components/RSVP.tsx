'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    attending: 'yes',
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
    <section id="rsvp" className="py-20 px-4 bg-primary">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="khmer-title text-4xl md:text-5xl mb-4 text-accent">
            បញ្ជាក់ការចូលរួម
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-accent khmer-text">
            សូមបញ្ជាក់ការចូលរួមរបស់អ្នកមុនថ្ងៃទី ១ មករា ២០២៦
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-cream p-8 rounded-lg shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary khmer-text">
                ឈ្មោះពេញ *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary"
                placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary khmer-text">
                លេខទូរស័ព្ទ *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary"
                placeholder="០១២ ៣៤៥ ៦៧៨"
              />
            </div>

            <div>
              <label htmlFor="attending" className="block text-sm font-medium mb-2 text-primary khmer-text">
                តើអ្នកនឹងចូលរួមទេ? *
              </label>
              <select
                id="attending"
                name="attending"
                required
                value={formData.attending}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary"
              >
                <option value="yes">បាទ/ចា ខ្ញុំនឹងចូលរួម</option>
                <option value="no">សូមអភ័យទោស ខ្ញុំមិនអាចចូលរួមបាន</option>
              </select>
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2 text-primary khmer-text">
                ចំនួនភ្ញៀវ
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary"
              >
                <option value="1">១ នាក់</option>
                <option value="2">២ នាក់</option>
                <option value="3">៣ នាក់</option>
                <option value="4">៤ នាក់</option>
                <option value="5">៥+ នាក់</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary khmer-text">
                សារជូនពរ
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary/30 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-primary"
                placeholder="ចែករំលែកសារជូនពររបស់អ្នក..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-accent py-4 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg khmer-text"
            >
              បញ្ជូន
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-primary font-semibold khmer-text"
              >
                សូមអរគុណសម្រាប់ការបញ្ជាក់! យើងរីករាយដែលបានជួបអ្នក!
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
