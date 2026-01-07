'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingCover from "@/components/LandingCover";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import OurStory from "@/components/OurStory";
// import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleEnter = () => {
    setShowMain(true);
  };

  return (
    <>
      <AnimatePresence>
        {!showMain && <LandingCover onEnter={handleEnter} />}
      </AnimatePresence>

      {showMain && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen"
        >
          <MusicPlayer autoPlay={true} />
          <Hero />
          <EventDetails />
          <OurStory />
          <GoogleMap />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
