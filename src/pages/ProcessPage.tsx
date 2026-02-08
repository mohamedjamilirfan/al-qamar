import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  ClipboardCheck,
  ThumbsUp,
  ShieldCheck,
  Zap,
  Users2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    step: '01',
    title: 'Easy Online Booking',
    description:
      'Schedule your cleaning service in just a few clicks through our website or a quick WhatsApp message.',
    icon: Calendar,
    color: 'from-blue-600 to-blue-400',
  },
  {
    step: '02',
    title: 'Expert Assignment',
    description:
      'We match your specific needs with our most qualified and specialized cleaning professionals.',
    icon: Users2,
    color: 'from-indigo-600 to-indigo-400',
  },
  {
    step: '03',
    title: 'Premium Cleaning',
    description:
      'Our team arrives on time with high-quality, eco-friendly equipment and dedicated supplies.',
    icon: Sparkles,
    color: 'from-emerald-600 to-emerald-400',
  },
  {
    step: '04',
    title: 'Thorough Inspection',
    description:
      'A supervisor conducts a detailed quality check to ensure every corner meets our high standards.',
    icon: ClipboardCheck,
    color: 'from-amber-600 to-amber-400',
  },
  {
    step: '05',
    title: 'Success Handover',
    description:
      'We walk through the space with you to ensure complete satisfaction before completing the job.',
    icon: ThumbsUp,
    color: 'from-rose-600 to-rose-400',
  },
];

const features = [
  {
    title: 'Eco-Friendly Products',
    description:
      'We use safe, non-toxic cleaning agents that are effective yet gentle on your environment.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Certified Professionals',
    description:
      'Our team is background-checked and undergoes continuous training for specialized cleaning.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];

const ProcessPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
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
              How We Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Our Professional <span className="text-blue-300">Process</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover how we deliver consistent, high-quality cleaning results
            through our efficient 5-step workflow.
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 gap-20">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div
                    className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <Icon size={40} className="text-white" />
                  </div>
                  <div
                    className={`space-y-4 ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center gap-4 mb-2 justify-start lg:justify-start">
                      <span className="text-6xl font-extrabold text-gray-100">
                        {item.step}
                      </span>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="bg-[#0c111d] py-24 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Why Our Process Stands Out
              </h2>
              <div className="space-y-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 text-blue-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#12377d] to-[#1d4cd2] p-12 rounded-[3rem] text-center">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Experience the Difference?
              </h3>
              <p className="text-white/80 mb-10 text-lg">
                Book your first cleaning session today and see our professional
                process in action.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#12377d] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
