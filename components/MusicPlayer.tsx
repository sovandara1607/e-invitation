'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export default function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/music/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    audioRef.current.addEventListener('error', () => {
      console.log('Audio file not found, using fallback');
      setIsLoaded(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (autoPlay && audioRef.current && isLoaded) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was prevented, user needs to interact
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlay, isLoaded]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Playback failed:', error);
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="relative w-14 h-14 rounded-full bg-primary border-2 border-accent 
                   flex items-center justify-center shadow-lg hover:shadow-accent/30
                   transition-all duration-300"
      >
        {/* Rotating ring when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        {/* Music waves animation */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-accent rounded-full"
                animate={{ height: [4, 12, 4] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}

        <span className="text-accent text-xl">
          {isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
        </span>
      </motion.button>

      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="text-accent/70 text-xs text-center mt-2 khmer-text"
      >
        {isPlaying ? 'កំពុងចាក់' : 'ចាក់តន្ត្រី'}
      </motion.p>
    </motion.div>
  );
}
