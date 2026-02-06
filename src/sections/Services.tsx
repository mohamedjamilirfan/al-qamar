import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Check } from 'lucide-react';
import villaicon from '../assets/villa-icon.png';

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Transform your home into a pristine sanctuary. Our expert team handles every detail from deep cleaning to regular maintenance.',
    icon: <Home size={40} className="text-white" />,
    color: 'bg-[#3b82f6]', // Bright Blue
    features: [
      'Deep cleaning',
      'Regular maintenance',
      'Move-in/out cleaning',
      'Custom schedules',
    ],
  },
  {
    title: 'Commercial Cleaning',
    description:
      'Keep your workplace spotless and professional. We provide comprehensive cleaning solutions for offices, retail spaces, and facilities.',
    icon: <Building2 size={40} className="text-white" />,
    color: 'bg-[#10b981]', // Success Green
    features: [
      'Office cleaning',
      'Retail spaces',
      'After-hours service',
      'Tailored plans',
    ],
  },
  {
    title: 'Villa Cleaning',
    description:
      'Premium care for luxury properties. Our specialized villa cleaning service ensures every corner of your estate gleams.',
    icon: <img src={villaicon} alt="Premium Villa Cleaning Services Sharjah" />,
    color: 'bg-[#6366f1]', // Indigo/Purple
    features: [
      'Estate cleaning',
      'Garden areas',
      'Pool maintenance',
      'Premium care',
    ],
  },
];

const Services: React.FC = memo(() => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        {/* Badge & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold text-[#000000] mb-6 tracking-tight">
            Comprehensive Cleaning Solutions
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From homes to businesses and luxury villas, we provide top-tier
            cleaning services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col group cursor-default">
              {/* Card Header */}
              <div
                className={`${service.color} p-10 rounded-t-[0.8rem] transition-transform duration-500 group-hover:-translate-y-2`}>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white text-left tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="bg-white p-10 flex-grow rounded-b-[0.8rem] shadow-sm border-x border-b border-gray-100 text-left transition-all duration-500 group-hover:shadow-2xl">
                <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check
                        size={18}
                        className="text-[#12377d] flex-shrink-0"
                      />
                      <span className="text-gray-700 font-semibold text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;
