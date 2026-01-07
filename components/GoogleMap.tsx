'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections, FaPhone, FaClock } from 'react-icons/fa';

export default function GoogleMap() {
  const venues = [
    {
      id: 1,
      name: 'សាលមង្គលការ រ៉ូយ៉ាល់ រ៉េនដឺវូ',
      nameEn: 'Royal Rendezvous Wedding Hall',
      address: 'ផ្ទះលេខ១១A ផ្លូវ៦១៤ សង្កាត់បឹងកក់២ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ',
      time: 'ម៉ោង ៥:០០ ល្ងាច',
      phone: '០១២ ៣៤៥ ៦៧៨',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7546449387847!2d104.9!3d11.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzAwLjAiTiAxMDTCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=11.55,104.9',
    },
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
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="35" stroke="currentColor" fill="none" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="25" stroke="currentColor" fill="none" strokeWidth="0.5"/>
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
            ទីកន្លែងប្រារព្ធពិធី
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-primary/70 khmer-text">ផែនទីទីតាំងពិធីភ្ជាប់ពាក្យ</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-accent/20"
            >
              {/* Map Embed */}
              <div className="relative h-64 bg-primary/10">
                <iframe
                  src={venue.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Venue Details */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary khmer-text mb-1">
                      {venue.name}
                    </h3>
                    <p className="text-sm text-primary/60">{venue.nameEn}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-primary/80">
                    <FaMapMarkerAlt className="text-accent flex-shrink-0" />
                    <p className="text-sm khmer-text">{venue.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-primary/80">
                    <FaClock className="text-accent flex-shrink-0" />
                    <p className="text-sm khmer-text">{venue.time}</p>
                  </div>
                  <div className="flex items-center gap-3 text-primary/80">
                    <FaPhone className="text-accent flex-shrink-0" />
                    <p className="text-sm">{venue.phone}</p>
                  </div>
                </div>

                {/* Directions Button */}
                <motion.a
                  href={venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-accent 
                           rounded-md hover:bg-primary/90 transition-all duration-300 khmer-text"
                >
                  <FaDirections />
                  <span>បើកផែនទី Google</span>
                </motion.a>
              </div>
            </motion.div>
          ))}

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-primary rounded-lg shadow-xl p-8 flex flex-col justify-center"
          >
            <h3 className="khmer-title text-2xl text-accent mb-6 text-center">
              កម្មវិធីពិធីភ្ជាប់ពាក្យ
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-accent/90">
                <div className="w-20 text-right khmer-text">ម៉ោង ៤:០០នាទី</div>
                <div className="w-px h-8 bg-accent/30"></div>
                <div className="khmer-text">ចាប់ផ្តើមកម្មវិធី</div>
              </div>
              <div className="flex items-center gap-4 text-accent/90">
                <div className="w-20 text-right khmer-text">ម៉ោង ៥:០០នាទី</div>
                <div className="w-px h-8 bg-accent/30"></div>
                <div className="khmer-text">កម្មវិធីបំពាក់ចិញ្ចៀន</div>
              </div>
              <div className="flex items-center gap-4 text-accent/90">
                <div className="w-20 text-right khmer-text">ម៉ោង ១១:០០នាទី</div>
                <div className="w-px h-8 bg-accent/30"></div>
                <div className="khmer-text">ពិធីសារអាហារថ្ងៃត្រង់</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-accent/20 text-center">
              <p className="text-accent/70 text-sm khmer-text">
                អញ្ជើញក្រោកពីសារអាហារស្តាំៗនៅទីតាំងដែល<br />
                ដោយមេត្រីភាព។
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
