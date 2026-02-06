import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import intro01jpeg from '../assets/intro01.jpeg';
import intro02jpeg from '../assets/intro02.jpeg';
import intro03jpeg from '../assets/intro03.jpeg';
import intro01MV from '../assets/intro01-MV.png';
import intro02MV from '../assets/intro02-MV.png';
import intro03MV from '../assets/intro03-MV.jpeg';

const slides = [
  {
    id: 1,
    title: 'Professional Cleaning & Pest Control Services in Sharjah',
    subtitle:
      'Trusted by homes and businesses since 2005. We deliver spotless, hygienic, and pest-free environments — or your money back.',
    image: intro01jpeg,
    mobileImage: intro01MV,
    bgColor: '#12377d',
    variants: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -100 },
    },
  },
  {
    id: 2,
    title: 'Premium Residential & Villa Cleaning Services',
    subtitle:
      'From apartments to luxury villas, our certified professionals ensure a safe, healthy, and sparkling home for your family.',
    image: intro02jpeg,
    mobileImage: intro02MV,
    bgColor: '#b91c1d',
    variants: {
      initial: { opacity: 0, scale: 1.1 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
  },
  {
    id: 3,
    title: 'Reliable Commercial Cleaning for Businesses',
    subtitle:
      'We help offices, shops, and commercial spaces stay clean, compliant, and professional — so you can focus on your business.',
    image: intro03jpeg,
    mobileImage: intro03MV,
    bgColor: '#000000',
    variants: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -100 },
    },
  },
];

const Hero: React.FC = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const checkIsMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkMobile();
    checkIsMobileOrTablet();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('resize', checkIsMobileOrTablet);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', checkIsMobileOrTablet);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative h-[95vh] md:h-[100vh] w-full overflow-hidden">
      {/* Dynamic Background Color Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ backgroundColor: slides[currentSlide].bgColor }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          variants={slides[currentSlide].variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-10">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${isMobile ? slides[currentSlide].mobileImage : slides[currentSlide].image})`,
            }}></div>

          {/* DARK OVERLAY (important fix) */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 flex items-center gap-2 bg-[#12377d]/70 px-4 py-1.5 rounded-full border border-white/30 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-[#b91c1d] animate-pulse" />
              <span className="text-sm font-bold tracking-wider uppercase text-white drop-shadow-sm flex">
                {'Since 2005'.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, display: 'none' }}
                    animate={{ opacity: 1, display: 'inline-block' }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.05,
                    }}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-[#ffffff] font-bold leading-tight max-w-3xl mb-6 drop-shadow-lg">
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl font-medium max-w-2xl mb-10 text-white drop-shadow-md">
              {slides[currentSlide].subtitle}
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover="hover"
                transition={{ delay: 0.7, duration: 0.4 }}
                href={isMobileOrTablet ? '#contact01' : '#contact'}
                className="group inline-flex items-center gap-2 bg-[#b91c1d] hover:bg-[#a11818] text-white px-6 py-2 rounded-md font-bold text-lg transition-all cursor-pointer shadow-xl">
                Book Now
                <motion.span
                  variants={{ hover: { x: 5 } }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}>
                  <ArrowRight size={19} />
                </motion.span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                href="tel:+971553147444"
                className="inline-flex items-center gap-2 bg-white/70 text-[#12377d] border-2 border-[#12377d] hover:bg-[#12377d] hover:text-white px-6 py-2 rounded-md font-bold text-lg transition-all cursor-pointer shadow-xl">
                <Phone size={18} /> Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="flex flex-col gap-2 group cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}>
            <div
              className={`h-1 transition-all duration-500 rounded-full ${
                currentSlide === index
                  ? 'w-16 bg-[#b91c1d]'
                  : 'w-8 bg-white/30 group-hover:bg-white/50'
              }`}></div>
          </button>
        ))}
      </div>
    </section>
  );
});

export default Hero;
