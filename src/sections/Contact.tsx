import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import CountryCodeSelector from '../components/CountryCodeSelector';

const Contact: React.FC = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971', // Default to UAE
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

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Format the form data into a WhatsApp message
      const whatsappNumber = '971553147444'; // Without + or spaces
      const message = `*New Contact Form Submission* 📝

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.countryCode} ${formData.phone}
*Service:* ${formData.service === 'residential' ? 'Residential Cleaning' : formData.service === 'commercial' ? 'Commercial Cleaning' : 'Villa Cleaning'}

*Message:*
${formData.message || 'No additional message provided'}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Open WhatsApp with pre-filled message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        '_blank',
      );

      // Show confirmation to user
      alert(
        'Redirecting to WhatsApp. Please send the message to complete your inquiry.',
      );

      // Clear the form
      setFormData({
        name: '',
        email: '',
        countryCode: '+971',
        phone: '',
        service: '',
        message: '',
      });
    },
    [formData],
  );
  return (
    <section id="contact" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#ecf3ff] text-[#12377d] text-sm font-bold rounded-full mb-6">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to experience premium cleaning? Contact us today for a free
            quote.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Contact Information */}
          <div className="w-full lg:w-[45%]">
            <h3 className="text-2xl font-bold text-[#000000] mb-8">
              Contact Information
            </h3>

            <div className="space-y-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ecf3ff] flex items-center justify-center text-[#12377d]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#000000] mb-1">Phone</p>
                  <a href="tel:+971553147444" className="text-gray-500">
                    +971 55 314 7444
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ecf3ff] flex items-center justify-center text-[#12377d]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#000000] mb-1">Email</p>
                  <a
                    href="mailto:anwaralqamar@gmail.com"
                    className="text-gray-500">
                    anwaralqamar@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ecf3ff] flex items-center justify-center text-[#12377d]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#000000] mb-1">Location</p>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500">
                    Sharjah, UAE
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#ecf3ff] flex items-center justify-center text-[#12377d]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#000000] mb-3">WhatsApp</p>
                  <button
                    onClick={() =>
                      window.open('https://wa.me/971553147444', '_blank')
                    }
                    className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white px-6 py-3 cursor-pointer rounded-xl font-bold transition-all shadow-lg shadow-green-500/20 active:scale-95">
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#12377d] to-[#1d4cd2] rounded-3xl p-6 sm:p-10 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-8">Business Hours</h4>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 gap-2">
                  <span className="font-medium text-white/80">
                    Saturday - Wednesday
                  </span>
                  <span className="font-bold text-lg">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 gap-2">
                  <span className="font-medium text-white/80">Thursday</span>
                  <span className="font-bold text-lg">Holiday</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <span className="font-medium text-white/80">Friday</span>
                  <span id="contact01" className="font-bold text-lg">
                    Holiday
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] bg-white rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100">
            <h3 className="text-2xl font-bold text-[#000000] mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#000000] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#12377d] focus:ring-1 focus:ring-[#12377d] transition-all text-gray-700 placeholder-gray-400 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#000000] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Email"
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#12377d] focus:ring-1 focus:ring-[#12377d] transition-all text-gray-700 placeholder-gray-400 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#000000] mb-2">
                    Phone Number *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <CountryCodeSelector
                      value={formData.countryCode}
                      onChange={handleChange}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter Your Phone Number"
                      className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#12377d] focus:ring-1 focus:ring-[#12377d] transition-all text-gray-700 placeholder-gray-400 shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#000000] mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#12377d] focus:ring-1 focus:ring-[#12377d] transition-all text-gray-700 bg-white cursor-pointer shadow-sm">
                    <option value="" disabled>
                      Select Service Type
                    </option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="villa">Villa Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#000000] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cleaning needs..."
                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#12377d] focus:ring-1 focus:ring-[#12377d] transition-all text-gray-700 placeholder-gray-400 resize-none shadow-sm"></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#12377d] cursor-pointer hover:bg-[#1d4cd2] text-white py-4.5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/10 active:scale-[0.98]">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
