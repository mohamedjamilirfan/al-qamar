import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  Building2,
  Sparkles,
  Clock,
  Armchair,
  Wind,
  Waves,
  Car,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Residential Cleaning',
    slug: 'residential-cleaning',
    description:
      'Complete home cleaning services tailored for apartments and houses. We ensure every room is spotless and hygienic.',
    icon: <Home className="w-8 h-8" />,
    color: 'bg-blue-500',
    details: [
      'Kitchen Deep Clean',
      'Bathroom Sanitization',
      'Dusting & Vacuuming',
      'Floor Mopping',
    ],
  },
  {
    title: 'Villa Cleaning',
    slug: 'villa-cleaning',
    description:
      'Specialized deep cleaning for large villas. Includes outdoor areas, windows, and intensive indoor cleaning.',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'bg-indigo-500',
    details: [
      'Exterior Pressure Wash',
      'Glass & Mirror Polishing',
      'Intensive Floor Care',
      'Balcony Cleaning',
    ],
  },
  {
    title: 'Commercial Cleaning',
    slug: 'commercial-cleaning',
    description:
      'Professional cleaning for offices, retail stores, and warehouses to maintain a productive and healthy environment.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'bg-emerald-500',
    details: [
      'Office Desk Sanitization',
      'Common Area Cleaning',
      'Trash Removal',
      'Commercial Floor Care',
    ],
  },
  {
    title: 'Deep Cleaning',
    slug: 'deep-cleaning',
    description:
      'Extra-thorough cleaning service targeting grime and dust in hard-to-reach places. Ideal for move-ins or seasonal resets.',
    icon: <Waves className="w-8 h-8" />,
    color: 'bg-cyan-500',
    details: [
      'Inside Cabinet Cleaning',
      'Appliance Deep Scrub',
      'Grout Cleaning',
      'Air Vent Dusting',
    ],
  },
  {
    title: 'Hourly Cleaning',
    slug: 'hourly-cleaning',
    description:
      'Flexible cleaning sessions based on your specific needs. You decide the focus areas and the duration.',
    icon: <Clock className="w-8 h-8" />,
    color: 'bg-amber-500',
    details: [
      'Flexible Scheduling',
      'On-demand Tasks',
      'Ironing Services',
      'Organization Help',
    ],
  },
  {
    title: 'Sofa & Upholstery',
    slug: 'sofa-cleaning',
    description:
      'Advanced steam and dry cleaning for sofas, armchairs, and curtains to remove stains and allergens.',
    icon: <Armchair className="w-8 h-8" />,
    color: 'bg-rose-500',
    details: [
      'Stain Removal',
      'Steam Sanitization',
      'Odor Neutralization',
      'Fabric Protection',
    ],
  },
  {
    title: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    description:
      'Professional deep cleaning for rugs and carpets using high-tech equipment to restore freshness.',
    icon: <Wind className="w-8 h-8" />,
    color: 'bg-teal-500',
    details: [
      'Industrial Vacuuming',
      'Spot Treatment',
      'Deodorizing',
      'Quick Drying Process',
    ],
  },
  {
    title: 'Car Cleaning',
    slug: 'car-cleaning',
    description:
      'Internal and external premium car wash services at your doorstep for maximum convenience.',
    icon: <Car className="w-8 h-8" />,
    color: 'bg-slate-700',
    details: [
      'Interior Vacuuming',
      'Dashboard Polishing',
      'Leather Conditioning',
      'Window Tint Cleaning',
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-500 to-slate-800 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8">
            <span className="px-4 py-1.5 bg-white/10 text-blue-100 text-sm font-bold rounded-full border border-white/20">
              Premium Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Professional <span className="text-blue-200">Cleaning</span>{' '}
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the highest standard of cleanliness with our specialized
            cleaning solutions across Sharjah and UAE.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100">
              <div
                className={`${service.color} p-8 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
                  {React.cloneElement(service.icon as React.ReactElement)}
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-8 w-full py-4 rounded-xl bg-gray-50 text-[#12377d] font-bold flex items-center justify-center gap-2 group-hover:bg-[#12377d] group-hover:text-white transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-20">
        <div className="bg-[#b91c1d] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready for a Spotless Space?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Our professional team is just a call away. Get a free quote for
              your custom cleaning needs today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971553147444"
                className="bg-white text-[#b91c1d] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors">
                Call Us Now
              </a>
              <Link
                to="/#contact"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
