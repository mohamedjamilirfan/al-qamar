import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, ClipboardCheck, ThumbsUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Book Your Service',
    description:
      'Choose your preferred cleaning service, date, and time through our easy booking process.',
    icon: Calendar,
  },
  {
    step: '02',
    title: 'Professional Cleaning',
    description:
      'Our trained experts arrive fully equipped with eco-friendly products and proven methods.',
    icon: Sparkles,
  },
  {
    step: '03',
    title: 'Quality Inspection',
    description:
      'Every corner is carefully inspected to ensure our strict cleanliness standards are met.',
    icon: ClipboardCheck,
  },
  {
    step: '04',
    title: 'Final Handover',
    description:
      'Review the results, share feedback, and enjoy a spotless, refreshed environment.',
    icon: ThumbsUp,
  },
];

const Process: React.FC = memo(() => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkIsMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkIsMobileOrTablet();
    window.addEventListener('resize', checkIsMobileOrTablet);
    return () => window.removeEventListener('resize', checkIsMobileOrTablet);
  }, []);

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-black mb-6 tracking-tight">
            A Smooth & Reliable Cleaning Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Designed for efficiency, transparency, and spotless results — every
            single time.
          </motion.p>
        </div>

        {/* Process Flow */}
        <div className="space-y-16 flex-col items-center">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center justify-center">
                {/* Flow Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block relative left-[42px] top-[73px] h-[80px] w-[2px] bg-gradient-to-b from-[#12377d] to-[#b91c1d]" />
                )}

                <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
                  {/* Icon + Step */}
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#12377d] to-[#b91c1d] flex items-center justify-center shadow-lg">
                      <Icon size={32} className="text-white" />
                    </div>
                    <span className="text-5xl font-extrabold text-gray-200">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-28 text-center">
          <a
            href={isMobileOrTablet ? '#contact01' : '#contact'}
            className="inline-block bg-[#12377d] hover:bg-[#b91c1d] text-white cursor-pointer px-12 py-5 rounded-full font-extrabold text-lg transition-all duration-300 shadow-xl active:scale-95">
            Book Your Cleaning Today
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Process;
