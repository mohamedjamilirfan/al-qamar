import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import CountryCodeSelector from '../components/CountryCodeSelector';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '971553147444';
    const message = `*New Contact Form Submission* 📝\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.countryCode} ${formData.phone}\n*Service:* ${formData.service}\n\n*Message:*\n${formData.message || 'No additional message provided'}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-500 to-slate-800 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8">
            <span className="px-4 py-1.5 bg-white/10 text-blue-100 text-sm font-bold rounded-full border border-white/20">
              Contact Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Get In Touch <span className="text-blue-300">Here</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready for a cleaner space? Our friendly team is here to help you
            find the perfect cleaning solution.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl -mt-12 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 text-[#12377d] rounded-2xl flex items-center justify-center mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4">
                Available during business hours
              </p>
              <a
                href="tel:+971553147444"
                className="text-2xl font-bold text-[#12377d] hover:text-[#b91c1d] transition-colors">
                +971 55 314 7444
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4">
                We'll respond within 24 hours
              </p>
              <a
                href="mailto:anwaralqamar@gmail.com"
                className="text-lg font-bold text-gray-800 hover:text-[#12377d] transition-colors break-words">
                anwaralqamar@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Location
              </h3>
              <p className="text-gray-500 mb-4">
                Serving Sharjah and nearby areas
              </p>
              <p className="text-lg font-bold text-gray-800">Sharjah, UAE</p>
            </motion.div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 h-full">
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#12377d] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#12377d] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Phone Number
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <CountryCodeSelector
                      value={formData.countryCode}
                      onChange={handleChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="flex-1 px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#12377d] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Service Required
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#12377d] transition-all">
                    <option value="">Select a service</option>
                    <option value="Residential">Residential Cleaning</option>
                    <option value="Commercial">Commercial Cleaning</option>
                    <option value="Villa">Villa Cleaning</option>
                    <option value="Deep Clean">Deep Cleaning</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#12377d] transition-all resize-none"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12377d] hover:bg-[#b91c1d] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg active:scale-95">
                  Request a Free Quote
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-10 rounded-[3rem] flex items-center gap-8">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#12377d]">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Business Hours</h4>
              <p className="text-gray-500 font-medium">
                Sat - Wed: 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-500 font-medium text-sm">
                Thu & Fri: Holiday
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-10 rounded-[3rem] flex items-center gap-8">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#25d366]">
              <MessageCircle size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">WhatsApp Support</h4>
              <p className="text-gray-500 font-medium mb-3">
                Instant response during work hours
              </p>
              <a
                href="https://wa.me/971553147444"
                className="text-[#25d366] font-bold hover:underline">
                Chat with us now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
