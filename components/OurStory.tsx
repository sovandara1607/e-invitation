'use client';

import { motion } from 'framer-motion';

export default function OurStory() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="script-font text-6xl md:text-7xl mb-4 text-sage">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-sage">How We Met</h3>
            <p className="text-lg leading-relaxed">
              Our paths crossed on a beautiful spring day at a mutual friend's garden party. 
              From the moment our eyes met across the blooming flowers, we knew there was 
              something special between us. What started as a friendly conversation turned 
              into hours of laughter and connection.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-sage">The Proposal</h3>
            <p className="text-lg leading-relaxed">
              Under a starlit sky at our favorite spot by the lake, Andre got down on one 
              knee and asked the question that would change our lives forever. With tears 
              of joy and an overwhelming sense of love, Sophia said yes! It was a moment 
              we'll treasure for the rest of our lives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-4 text-sage">Our Journey</h3>
            <p className="text-lg leading-relaxed">
              Together, we've built a foundation of love, trust, and endless adventures. 
              From spontaneous road trips to quiet evenings at home, every moment has 
              brought us closer. Now, we're ready to embark on our greatest adventure yet: 
              a lifetime together as husband and wife.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="script-font text-4xl text-sage italic">
            "Love is not about how many days, months, or years you have been together.<br />
            Love is about how much you love each other every single day."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
