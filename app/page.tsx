'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import LandingCover from "@/components/LandingCover";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import OurStory from "@/components/OurStory";
// import Gallery from "@/components/Gallery";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

// Helper function to get honorific title based on gender
const getHonorificTitle = (gender: string | null): string => {
  switch (gender) {
    case 'm':
    case 'male':
      return 'លោក';
    case 'f':
    case 'female':
      return 'អ្នកស្រី';
    case 'miss':
      return 'កញ្ញា';
    case 'family':
      return 'គ្រួសារ';
    case 'couple':
      return 'លោក និង អ្នកស្រី';
    default:
      return '';
  }
};

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);
  const [guestTitle, setGuestTitle] = useState<string>('');
  const searchParams = useSearchParams();

  // Read guest name and gender from URL parameters
  // Example: ?guest=សុខ+សាន&gender=m
  useEffect(() => {
    const guest = searchParams.get('guest');
    const gender = searchParams.get('gender');
    
    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
    if (gender) {
      setGuestTitle(getHonorificTitle(gender));
    }
  }, [searchParams]);

  const handleEnter = () => {
    setShowMain(true);
  };

  return (
    <>
      <AnimatePresence>
        {!showMain && <LandingCover onEnter={handleEnter} guestName={guestName} guestTitle={guestTitle} />}
      </AnimatePresence>

      {showMain && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen"
        >
          <MusicPlayer autoPlay={true} />
          <Hero guestName={guestName} guestTitle={guestTitle} />
          <EventDetails />
          <OurStory />
          <GoogleMap />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
