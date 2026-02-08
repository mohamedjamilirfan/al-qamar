import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'Home Owner',
    content:
      'The best cleaning service in Sharjah. They are professional, punctual, and my villa has never looked better. Highly recommended!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'David Miller',
    role: 'Office Manager',
    content:
      "We've been using Al Qamar for our office cleaning for 6 months. Their attention to detail is exceptional and they work around our schedule.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=david',
  },
  {
    name: 'Fatima Al Mansoori',
    role: 'Villa Owner',
    content:
      'Outstanding deep cleaning service. They managed to remove stains I thought were permanent. Very courteous staff.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=fatima',
  },
  {
    name: 'James Wilson',
    role: 'Apartment Resident',
    content:
      'Great service and very reasonable prices. The hourly cleaning is perfect for my busy lifestyle. Reliable and trustworthy.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=james',
  },
];

const Testimonials: React.FC = memo(() => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-extrabold text-[#000000] mb-6 tracking-tight">
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            We take pride in delivering exceptional service. Here's why our
            clients trust us for their cleaning needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#12377d] font-semibold text-sm">
                    {testimonial.role}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote
                  className="absolute -top-4 -left-4 text-blue-100 opacity-50 group-hover:scale-125 transition-transform duration-500"
                  size={48}
                />
                <p className="text-gray-600 leading-relaxed text-lg italic relative z-10 pl-4">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google/Trustpilot Badges placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl text-gray-400 italic">
              Google
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-gray-400 text-gray-400"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl text-gray-400 italic">
              Trustpilot
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-gray-400 text-gray-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Testimonials;
