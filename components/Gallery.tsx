'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, color: '#ceb37e', placeholder: 'រូបភាព ១' },
    { id: 2, color: '#2f4427', placeholder: 'រូបភាព ២' },
    { id: 3, color: '#a89060', placeholder: 'រូបភាព ៣' },
    { id: 4, color: '#3d5a32', placeholder: 'រូបភាព ៤' },
    { id: 5, color: '#ceb37e', placeholder: 'រូបភាព ៥' },
    { id: 6, color: '#2f4427', placeholder: 'រូបភាព ៦' },
  ];

  return (
    <section className="py-20 px-4 bg-cream relative overflow-hidden">
      {/* Paper Texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-40 h-40 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <ellipse cx="50" cy="70" rx="15" ry="30" fill="currentColor"/>
          <ellipse cx="35" cy="55" rx="10" ry="22" fill="currentColor" transform="rotate(-30 35 55)"/>
          <ellipse cx="65" cy="55" rx="10" ry="22" fill="currentColor" transform="rotate(30 65 55)"/>
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
            វិនាទីរបស់យើង
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-primary/60 khmer-text">ការចងចាំដ៏ស្រស់ស្អាត</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedImage(image.id)}
              className="aspect-square rounded-sm shadow-xl overflow-hidden cursor-pointer relative group"
              style={{ backgroundColor: image.color }}
            >
              {/* Inner border */}
              <div className="absolute inset-2 border border-white/20 pointer-events-none z-10"></div>
              
              {/* Placeholder content */}
              <div className="w-full h-full flex items-center justify-center text-white/50">
                <div className="text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm khmer-text">{image.placeholder}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
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
          className="text-center mt-12 text-primary/60 italic khmer-text"
        >
          សូមចែករំលែករូបថតរបស់អ្នកជាមួយយើង #សុភានិងវិសាល២០២៦
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-primary p-4 rounded-sm max-w-2xl w-full aspect-square flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-accent text-center">
              <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              <p className="khmer-text">រូបភាព {selectedImage}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
