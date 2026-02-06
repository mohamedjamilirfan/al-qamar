import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import logoVideo from '../assets/logo.mp4';

const Preloader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 1.0 is normal speed, 1.5 is 50% faster, 2.0 is double speed
      videoRef.current.playbackRate = 2.5;
    }
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-contain"
            onEnded={() => {
              // Optional: loop or stay on last frame
            }}>
            <source src={logoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
      {/* <div className="absolute bottom-10 w-full left-1/2 text-center transform -translate-x-1/2 z-[9999]">
        <h2 className="text-xl w-full font-bold text-[#000000] mb-2">
          Al Qamar Building Cleaning
        </h2>
        <p className="text-gray-500 text-lg">Loading...</p>
      </div> */}
    </>
  );
};

export default Preloader;
