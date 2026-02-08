import React, { memo } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Check, Award, ShieldCheck } from 'lucide-react';
import aboutImg from '../assets/about.png';

const highlights = [
  'Serving Sharjah & nearby areas',
  'Certified & trained professionals',
  'Residential, Commercial & Villa cleaning',
  '100% satisfaction guarantee',
];

const currentYear = new Date().getFullYear();
const yearsOfExp = currentYear - 2005;

const About: React.FC = memo(() => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        {/* Badge & Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold text-[#000000] mb-6 tracking-tight">
            Trusted Cleaning Services Since 2005
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Expert residential and commercial cleaning services in Sharjah,
            delivering quality since 2005.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group/img">
              <img
                src={aboutImg}
                alt="Al Qamar Building Cleaning Team"
                className="w-full h-auto object-cover transform group-hover/img:scale-105 transition-transform duration-1000"
              />

              {/* Badge 1: Years of Experience (Top Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.5, duration: 0.6, ease: 'backOut' },
                }}
                viewport={{ once: true }}
                onViewportEnter={() => {
                  animate(count, yearsOfExp, {
                    duration: 2.5,
                    ease: 'easeOut',
                  });
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#12377d] to-[#1e4ba1] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <Award size={24} />
                </div>
                <div className="text-left">
                  <div className="flex items-baseline gap-0.5">
                    <motion.span className="text-2xl font-bold text-[#12377d] tabular-nums">
                      {rounded}
                    </motion.span>
                    <span className="text-xl font-bold text-[#b91c1d]">+</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.1em] leading-none">
                    Years Experience
                  </p>
                </div>
              </motion.div>

              {/* Badge 2: Satisfaction (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.8, duration: 0.6, ease: 'backOut' },
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  },
                }}
                className="absolute bottom-6 right-6 z-20 bg-[#12377d]/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(18,55,125,0.25)] flex items-center gap-4 group hover:bg-[#12377d] transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#12377d] shadow-md group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck
                    size={26}
                    fill="white"
                    className="text-[#12377d]"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl font-bold text-white block leading-tight">
                    100%
                  </span>
                  <p className="text-[10px] font-bold text-blue-200/80 uppercase tracking-[0.1em] leading-none">
                    Satisfaction
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Subtle background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#b91c1d]/15 rounded-2xl -z-10 hidden lg:block" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-1/2">
            <div className="space-y-6 text-[#111] leading-relaxed mb-10 text-lg">
              <p className="font-semibold text-justify">
                Al Qamar Building Cleaning is a professional cleaning and pest
                control company based in Sharjah. Since 2005, we have been
                delivering reliable, high-quality cleaning solutions for
                residential, commercial, and villa properties.
              </p>
              <p className="font-semibold text-justify">
                Our certified and experienced professionals are committed to
                maintaining clean, safe, and hygienic environments using
                industry-approved methods and materials. We focus on
                consistency, attention to detail, and customer satisfaction in
                every service we provide.
              </p>
              <p className="italic text-[#12377d]">
                "Whether it's your home or your workplace, we ensure a spotless
                result — or your money back."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index, duration: 0.5 }}
                  className="group relative flex items-center gap-4 px-4 py-3">
                  {/* Accent line */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-full bg-gradient-to-b from-[#12377d] to-[#b91c1d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#ecf3ff] flex items-center justify-center transition-all duration-300 group-hover:bg-[#12377d]">
                    <Check
                      size={18}
                      className="text-[#12377d] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Text */}
                  <span className="text-[15px] font-semibold text-gray-700 group-hover:text-black transition-colors duration-300 text-left leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
