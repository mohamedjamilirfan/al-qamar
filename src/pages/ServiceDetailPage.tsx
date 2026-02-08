import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants/servicesData';
import {
  Home,
  Sparkles,
  Building2,
  Waves,
  Clock,
  Armchair,
  Wind,
  Car,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Heart,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home size={32} />,
  Sparkles: <Sparkles size={32} />,
  Building2: <Building2 size={32} />,
  Waves: <Waves size={32} />,
  Clock: <Clock size={32} />,
  Armchair: <Armchair size={32} />,
  Wind: <Wind size={32} />,
  Car: <Car size={32} />,
};

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-500 to-slate-800 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.color} text-white shadow-xl`}>
              {iconMap[service.iconName]}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-medium">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">
                  Overview
                </h2>
                <p className="text-xl leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                    <h3 className="text-xl font-bold text-[#12377d] mb-6 flex items-center gap-3">
                      <CheckCircle2 size={24} />
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-emerald-500 shrink-0 mt-1"
                            size={18}
                          />
                          <span className="font-semibold text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border border-blue-100/50">
                    <h3 className="text-xl font-bold text-[#12377d] mb-6 flex items-center gap-3">
                      <Sparkles size={24} />
                      Why Choose This
                    </h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-blue-500 shrink-0 mt-1"
                            size={18}
                          />
                          <span className="font-semibold text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Book This Service
                  </h3>
                  <p className="text-gray-500 mb-8 font-medium">
                    Ready for a spotless {service.title.toLowerCase()}? Get a
                    custom quote today.
                  </p>

                  <Link
                    to="/contact"
                    className={`block w-full py-5 rounded-2xl font-bold text-white mb-4 transition-all transform hover:-translate-y-1 shadow-lg ${service.color}`}>
                    Request a Quote
                  </Link>

                  <a
                    href="https://wa.me/971553147444"
                    className="block w-full py-5 rounded-2xl font-bold text-[#25d366] border-2 border-[#25d366] hover:bg-[#25d366]/5 transition-all">
                    Chat on WhatsApp
                  </a>
                </motion.div>

                {/* Trust Badges */}
                <div className="bg-gray-50 p-8 rounded-[2.5rem] space-y-6">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-[#12377d]" size={24} />
                    <div>
                      <p className="font-bold text-sm text-gray-900">
                        Guaranteed Quality
                      </p>
                      <p className="text-xs text-gray-500">
                        100% Satisfaction or refund
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap className="text-amber-500" size={24} />
                    <div>
                      <p className="font-bold text-sm text-gray-900">
                        Fast Response
                      </p>
                      <p className="text-xs text-gray-500">
                        Service within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Heart className="text-rose-500" size={24} />
                    <div>
                      <p className="font-bold text-sm text-gray-900">
                        Eco-Friendly
                      </p>
                      <p className="text-xs text-gray-500">
                        Safe for kids & pets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Link */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Not what you're looking for?
          </h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 text-[#12377d] font-bold text-xl hover:gap-5 transition-all">
            Explore all services <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
