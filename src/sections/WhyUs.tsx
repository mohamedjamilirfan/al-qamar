import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Users, Leaf, ShieldCheck, CircleDollarSign } from 'lucide-react';

const features = [
  {
    title: 'Trained Professionals',
    description:
      'Our team undergoes rigorous training and certification to deliver the highest quality cleaning services.',
    Icon: Users,
    accent: 'from-blue-600 to-blue-400',
  },
  {
    title: 'Eco-Friendly Products',
    description:
      'We use environmentally safe, non-toxic cleaning products that are safe for your family and pets.',
    Icon: Leaf,
    accent: 'from-emerald-600 to-emerald-400',
  },
  {
    title: 'Reliable & Trustworthy',
    description:
      'Fully insured and background-checked staff. We treat your property with the utmost care and respect.',
    Icon: ShieldCheck,
    accent: 'from-indigo-600 to-indigo-400',
  },
  {
    title: 'Affordable Pricing',
    description:
      'Premium quality at competitive prices. Transparent quotes with no hidden fees or surprise charges.',
    Icon: CircleDollarSign,
    accent: 'from-cyan-600 to-cyan-400',
  },
];

const WhyUs: React.FC = memo(() => {
  return (
    <section
      id="why-us"
      className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        {/* Badge & Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-black mb-6 tracking-tight">
            The Al Qamar Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We combine expertise, quality, and care to deliver exceptional
            cleaning experiences.
          </motion.p>
        </div>

        {/* Timeline-style features */}
        <div className="relative mt-8 lg:mt-12">
          {/* Center line (continuous) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] transform -translate-x-1/2 bg-gradient-to-b from-[#12377d]/30 to-[#7aa1e6]/10 rounded" />

          {/* Mobile left line (animated) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '77%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="lg:hidden absolute left-[23px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-[#12377d] to-[#7aa1e6]/40 rounded"
          />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-rows-4 lg:gap-y-8">
            {features.map((feature, index) => {
              const sideLeft = index % 2 === 0;
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="lg:flex lg:items-center lg:justify-between">
                  {/* Left panel slot */}
                  <div
                    className={`hidden lg:flex lg:w-1/2 ${sideLeft ? 'lg:justify-end lg:pr-8' : 'lg:justify-start lg:pl-8'}`}>
                    {sideLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.6 }}
                        className="group relative max-w-md w-full">
                        <div
                          className={`bg-white/60 border border-white/30 backdrop-blur-md rounded-3xl p-6 shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1`}>
                          <div className="flex items-start gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-[#12377d] mb-1">
                                {feature.title}
                              </h3>
                              <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                            <div
                              className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${'bg-gradient-to-br ' + feature.accent}`}>
                              <Icon size={20} className="text-white" />
                            </div>
                          </div>
                        </div>

                        {/* subtle shadow flare */}
                        <div className="absolute -inset-x-2 -bottom-3 h-6 rounded-2xl blur-xl opacity-10 bg-gradient-to-r from-black to-transparent" />
                      </motion.div>
                    )}
                  </div>

                  {/* Center dot for all screen sizes */}
                  <div className="hidden lg:flex justify-center lg:contents">
                    <div className="relative flex items-center justify-center">
                      {/* Vertical spacing for small screens */}
                      <div className="block lg:hidden h-6" />
                      {/* Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06, duration: 0.4 }}
                        className={`z-10 w-5 h-5 rounded-full bg-white border-2 ${index % 2 === 0 ? 'border-[#12377d]' : 'border-[#b91c1d]'} shadow`}
                      />
                      {/* Small connecting line for small screens */}
                      <div className="lg:hidden absolute top-8 left-1/2 transform -translate-x-1/2 w-[2px] h-6 bg-gray-200/60" />
                    </div>
                  </div>

                  {/* Right panel slot */}
                  <div
                    className={`hidden lg:flex lg:w-1/2 ${!sideLeft ? 'lg:justify-start lg:pl-8' : 'lg:justify-end lg:pr-8'}`}>
                    {!sideLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.6 }}
                        className="group relative max-w-md w-full">
                        <div
                          className={`bg-white/60 border border-white/30 backdrop-blur-md rounded-3xl p-6 shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1`}>
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${'bg-gradient-to-br ' + feature.accent}`}>
                              <Icon size={20} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-[#12377d] mb-1">
                                {feature.title}
                              </h3>
                              <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="absolute -inset-x-2 -bottom-3 h-6 rounded-2xl blur-xl opacity-10 bg-gradient-to-r from-black to-transparent" />
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile / small-screen centered panel */}
                  <div className="lg:hidden flex w-full relative pl-2">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100,
                      }}
                      className="flex items-start gap-4 w-full">
                      {/* Mobile Center Dot */}
                      <div className="relative flex-shrink-0 flex items-center justify-center w-8 h-12">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.1 + 0.2,
                            duration: 0.3,
                          }}
                          className={`z-10 w-4 h-4 mt-5 rounded-full bg-white border-[3px] ${index % 2 === 0 ? 'border-[#12377d]' : 'border-[#b91c1d]'} shadow-sm`}
                        />
                      </div>

                      {/* CardContent */}
                      <div className="bg-white/70 border flex-col flex-1 border-white/30 backdrop-blur-md rounded-2xl p-5 shadow-sm flex items-start gap-3 mb-8">
                        <div className="flex flex-row items-center gap-4">
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${'bg-gradient-to-br ' + feature.accent}`}>
                            <Icon size={25} className="text-white" />
                          </div>
                          <h4 className="text-[#12377d] text-[19px] font-semibold">
                            {feature.title}
                          </h4>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm text-justify leading-relaxed mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default WhyUs;
