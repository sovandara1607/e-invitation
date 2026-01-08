'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-accent py-16 px-4 relative overflow-hidden">
      {/* Paper Texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Decorative Element */}
          <svg viewBox="0 0 200 40" className="w-48 h-12 mx-auto mb-6 text-accent/50">
            <path d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20" stroke="currentColor" fill="none" strokeWidth="0.5"/>
            <circle cx="100" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.5"/>
          </svg>

          <h3 className="khmer-title text-4xl mb-2 text-accent">ផានីរាជ & ណាតា</h3>
          <p className="text-lg mb-4 text-accent/80 khmer-text">ពិធីភ្ជាប់ពាក្យ</p>
          <p className="text-xl mb-8 text-accent/70">៤ មករា ២០២៦</p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-accent/80"
            >
              <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center">
                <FaMapMarkerAlt size={16} />
              </div>
              <span className="text-sm khmer-text">រាជធានីភ្នំពេញ កម្ពុជា</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-accent/80"
            >
              <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center">
                <FaPhone size={16} />
              </div>
              <span className="text-sm">០១២ ៣៤៥ ៦៧៨</span>
            </motion.div>
            
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-accent/80 hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center">
                <FaEnvelope size={16} />
              </div>
              <span className="text-sm">contact@example.com</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-accent/20 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-2 text-sm text-accent/60 mb-4 khmer-text">
            បង្កើតដោយ <FaHeart className="text-accent animate-pulse" /> សម្រាប់ថ្ងៃពិសេសរបស់យើង
          </p>
          <p className="text-xs text-accent/40">
            © ២០២៦ រក្សាសិទ្ធិគ្រប់យ៉ាង។ Developed with ❤️ by Dara & Linhcheu.
          </p>
        </motion.div>

        {/* Decorative Bottom Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mt-8"
        />
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-4 left-4 w-16 h-16 opacity-20">
        <svg viewBox="0 0 64 64" className="w-full h-full text-accent">
          <path d="M0,64 L0,32 Q0,0 32,0" stroke="currentColor" fill="none" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-16 h-16 opacity-20 -scale-x-100">
        <svg viewBox="0 0 64 64" className="w-full h-full text-accent">
          <path d="M0,64 L0,32 Q0,0 32,0" stroke="currentColor" fill="none" strokeWidth="1"/>
        </svg>
      </div>
    </footer>
  );
}
