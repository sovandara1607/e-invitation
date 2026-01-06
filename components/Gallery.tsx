'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { id: 1, color: '#D4AF37' },
    { id: 2, color: '#8A9A5B' },
    { id: 3, color: '#C4B5A0' },
    { id: 4, color: '#A8C5A1' },
    { id: 5, color: '#D4AF37' },
    { id: 6, color: '#8A9A5B' },
  ];

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
            Our Moments
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg shadow-lg overflow-hidden cursor-pointer"
              style={{ backgroundColor: image.color }}
            >
              <div className="w-full h-full flex items-center justify-center text-white text-opacity-50">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600 italic"
        >
          Share your photos with us using #SophiaAndAndre2026
        </motion.p>
      </div>
    </section>
  );
}
