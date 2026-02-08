import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  Check,
  Award,
  ShieldCheck,
  Heart,
  Target,
  Lightbulb,
} from 'lucide-react';
import aboutImg from '../assets/about.png';

const highlights = [
  'Serving Sharjah & nearby areas',
  'Certified & trained professionals',
  'Residential, Commercial & Villa cleaning',
  '100% satisfaction guarantee',
];

const values = [
  {
    title: 'Our Mission',
    description:
      'To provide the highest standard of cleaning services using eco-friendly methods and innovative technology.',
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Our Vision',
    description:
      'To be the most trusted and reliable cleaning partner for households and businesses across the UAE.',
    icon: <Lightbulb className="w-8 h-8 text-amber-600" />,
  },
  {
    title: 'Our Commitment',
    description:
      'We are dedicated to excellence, integrity, and ensuring complete customer satisfaction in every project.',
    icon: <Heart className="w-8 h-8 text-rose-600" />,
  },
];

const currentYear = new Date().getFullYear();
const yearsOfExp = currentYear - 2005;

const AboutPage: React.FC = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    animate(count, yearsOfExp, {
      duration: 2.5,
      ease: 'easeOut',
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-500 to-slate-800 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8">
            <span className="px-4 py-1.5 bg-white/10 text-blue-100 text-sm font-bold rounded-full border border-white/20">
              Our Story
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            A Legacy of <span className="text-blue-300">Excellence</span> &
            Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Since 2005, Al Qamar has been the hallmark of cleanliness and
            hygiene in Sharjah, building a legacy of trust and excellence.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src={aboutImg}
                  alt="About Al Qamar"
                  className="w-full h-auto object-cover"
                />

                {/* Years Experience Badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-white/50">
                  <div className="w-14 h-14 bg-[#12377d] rounded-2xl flex items-center justify-center text-white">
                    <Award size={28} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <motion.span className="text-3xl font-bold text-[#12377d]">
                        {rounded}
                      </motion.span>
                      <span className="text-2xl font-bold text-[#b91c1d]">
                        +
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      Years Experience
                    </p>
                  </div>
                </div>

                {/* Satisfaction Badge */}
                <div className="absolute bottom-8 right-8 bg-[#12377d]/95 backdrop-blur-xl p-5 rounded-3xl shadow-xl flex items-center gap-4 border border-white/10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#12377d]">
                    <ShieldCheck size={30} />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white block">
                      100%
                    </span>
                    <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Column */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                Dedicated to Making Your Space{' '}
                <span className="text-[#12377d]">Spick and Span</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p>
                  Al Qamar Building Cleaning has evolved from a small local team
                  into Sharjah's premier cleaning service provider. Our journey
                  has been defined by a relentless focus on quality and a deep
                  understanding of our clients' needs.
                </p>
                <p>
                  Whether it's a high-rise office building, a luxury villa, or a
                  cozy apartment, we bring the same level of precision and care
                  to every project. Our staff is not just trained; they are
                  passionate about creating environments that promote health and
                  well-being.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="text-[#12377d] w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="bg-gray-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
