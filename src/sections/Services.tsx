import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  Sparkles,
  Waves,
  Clock,
  Armchair,
  Wind,
  Car,
  Check,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA } from '../constants/servicesData';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={40} className="text-white" />,
  Sparkles: <Sparkles size={40} className="text-white" />,
  Building2: <Building2 size={40} className="text-white" />,
  Waves: <Waves size={40} className="text-white" />,
  Clock: <Clock size={40} className="text-white" />,
  Armchair: <Armchair size={40} className="text-white" />,
  Wind: <Wind size={40} className="text-white" />,
  Car: <Car size={40} className="text-white" />,
};

const Services: React.FC = memo(() => {
  // Only show featured services on the homepage
  const featuredServices = SERVICES_DATA.filter((s) => s.featured);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

      <div className="container mx-auto px-6 max-w-7xl text-center">
        {/* Badge & Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold text-[#000000] mb-6 tracking-tight">
            Comprehensive Cleaning Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            From luxury villas to commercial spaces, we provide professional
            cleaning services tailored to your specific environment.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col group">
              {/* Card Header */}
              <div
                className={`${service.color} p-10 rounded-t-[2.5rem] relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 shadow-lg`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <div className="mb-8 relative z-10 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-2xl font-bold text-white text-left tracking-tight relative z-10">
                  {service.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="bg-white p-10 flex-grow rounded-b-[2.5rem] shadow-sm border-x border-b border-gray-100 text-left transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-100">
                <p className="text-gray-500 mb-8 leading-relaxed font-medium line-clamp-3">
                  {service.shortDescription}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-emerald-500" />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Card Action */}
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#12377d] font-extrabold hover:gap-4 transition-all duration-300 group/link">
                  Learn More
                  <ArrowRight
                    size={20}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#12377d] text-white font-bold hover:bg-[#b91c1d] transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-red-900/20 active:scale-95">
            Explore All Services
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

export default Services;
