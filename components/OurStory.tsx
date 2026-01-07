'use client';

import { motion } from 'framer-motion';

export default function OurStory() {
  const parents = {
    groom: {
      father: 'លោក ជា ទុង',
      mother: 'លោកស្រី សុខ មិថុនា',
    },
    bride: {
      father: 'លោក យីន សុខចិន្តា',
      mother: 'លោកស្រី កែវ សុខមិត្រា',
    },
  };

  return (
    <section className="py-20 px-4 bg-primary relative overflow-hidden">
      {/* Paper Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Lotus Elements */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent">
          <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" fill="none" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" fill="none" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="khmer-title text-4xl md:text-5xl mb-4 text-accent">
            សូមគោរពអញ្ជើញ          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Parents Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Groom's Parents */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent/10 p-8 rounded-sm border border-accent/20 relative"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-accent"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent"></div>

                <p className="text-accent/60 text-sm mb-4 khmer-text">ឪពុកម្តាយខាងប្រុស</p>
                <h3 className="text-xl font-semibold mb-2 text-accent khmer-text">{parents.groom.father}</h3>
                <h3 className="text-xl font-semibold text-accent khmer-text">{parents.groom.mother}</h3>
              </motion.div>
            </div>

            {/* Bride's Parents */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-accent/10 p-8 rounded-sm border border-accent/20 relative"
              >
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-accent"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-accent"></div>

                <p className="text-accent/60 text-sm mb-4 khmer-text">ឪពុកម្តាយខាងស្រី</p>
                <h3 className="text-xl font-semibold mb-2 text-accent khmer-text">{parents.bride.father}</h3>
                <h3 className="text-xl font-semibold text-accent khmer-text">{parents.bride.mother}</h3>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg leading-relaxed text-accent/90 khmer-text max-w-3xl mx-auto">
            មានកិត្តិយសអញ្ជើញ លោក លោកស្រី អ្នកនាង អ្នកឧកញ៉ា អញ្ជើញចូលរួម
            រួមពរអរអបអរមង្គលភិរក្សអាពាហ៍ពិពាហ៍ និងរីករាយក្នុងពិធីសង្សារភក្តិភាព
            កូនប្រុស កូនស្រី របស់ខ្ញុំ។
          </p>
        </motion.div>

        {/* Couple Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block border-2 border-accent/30 p-12 rounded-sm relative">
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full text-accent">
                <path d="M0,16 L0,0 L16,0" stroke="currentColor" fill="none" strokeWidth="2" />
                <circle cx="0" cy="0" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rotate-90">
              <svg viewBox="0 0 32 32" className="w-full h-full text-accent">
                <path d="M0,16 L0,0 L16,0" stroke="currentColor" fill="none" strokeWidth="2" />
                <circle cx="0" cy="0" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 -rotate-90">
              <svg viewBox="0 0 32 32" className="w-full h-full text-accent">
                <path d="M0,16 L0,0 L16,0" stroke="currentColor" fill="none" strokeWidth="2" />
                <circle cx="0" cy="0" r="3" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rotate-180">
              <svg viewBox="0 0 32 32" className="w-full h-full text-accent">
                <path d="M0,16 L0,0 L16,0" stroke="currentColor" fill="none" strokeWidth="2" />
                <circle cx="0" cy="0" r="3" fill="currentColor" />
              </svg>
            </div>

            <p className="text-accent/60 text-sm mb-4 khmer-text">ដាក្រី៩</p>

            <div className="grid grid-cols-2 gap-16">
              <div className="text-center">
                <p className="text-accent/60 text-sm mb-2 khmer-text">កូនប្រុសម្ហ៍</p>
                <h3 className="khmer-title text-2xl text-accent">យីន សុខារិទ្ធិ</h3>
              </div>
              <div className="text-center">
                <p className="text-accent/60 text-sm mb-2 khmer-text">កូនស្រីនាង</p>
                <h3 className="khmer-title text-2xl text-accent">ជា ចារីយ៉ា</h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="w-16 h-px bg-accent/50 mx-auto mb-6"></div>
          <p className="text-xl text-accent/80 italic khmer-text">
            "ស្នេហាពិតគ្មានទីបញ្ចប់ វាគ្រាន់តែជាការចាប់ផ្តើមថ្មីមួយ"
          </p>
          <div className="w-16 h-px bg-accent/50 mx-auto mt-6"></div>
        </motion.div>
      </div>
    </section>
  );
}
