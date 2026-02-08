import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What areas do you serve?',
        a: 'We primarily serve Sharjah and all its neighboring areas. For large commercial projects, we also provide services across the UAE.',
      },
      {
        q: 'How do I book a cleaning service?',
        a: 'You can book directly through our website contact form or by sending us a message on WhatsApp at +971 55 314 7444.',
      },
      {
        q: 'Are your cleaning products safe?',
        a: 'Yes, we use eco-friendly and non-toxic cleaning products that are safe for your family, pets, and the environment.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        q: 'Do you provide move-in/move-out cleaning?',
        a: 'Yes, we offer specialized deep cleaning services specifically designed for moving in or out of residential and commercial properties.',
      },
      {
        q: 'What is included in Villa Cleaning?',
        a: 'Villa cleaning is more intensive and includes all indoor rooms, balconies, external glass (up to accessible heights), and deep floor scrubbing.',
      },
      {
        q: 'Can I book an hourly cleaner?',
        a: 'Absolutely! We offer flexible hourly cleaning services. You can choose the duration and tasks according to your requirements.',
      },
    ],
  },
  {
    category: 'Billing & Policy',
    questions: [
      {
        q: 'What are your payment options?',
        a: 'We accept cash and bank transfers. For corporate clients, we also offer monthly billing arrangements.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'We request at least 24 hours notice for any cancellation or rescheduling to avoid a small processing fee.',
      },
    ],
  },
];

const FAQPage: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (q: string) => {
    setActiveQuestion(activeQuestion === q ? null : q);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Search Header */}
      <section className="bg-gradient-to-r from-slate-500 to-slate-800  py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            How can we help <span className="text-blue-300">you?</span>
          </motion.h1>
          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
              size={24}
            />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-6 rounded-[2rem] bg-white shadow-xl border-none focus:ring-2 focus:ring-blue-400 text-lg transition-all text-gray-900"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="py-20 container mx-auto px-6 max-w-4xl">
        {faqs.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-2xl font-bold text-[#12377d] mb-8 px-4 flex items-center gap-4">
              {category.category}
              <div className="h-px bg-gray-200 flex-1"></div>
            </h2>
            <div className="space-y-4">
              {category.questions
                .filter(
                  (item) =>
                    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.a.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((item) => (
                  <div
                    key={item.q}
                    className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 border ${
                      activeQuestion === item.q
                        ? 'border-[#12377d] shadow-lg'
                        : 'border-gray-100'
                    }`}>
                    <button
                      onClick={() => toggleQuestion(item.q)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-gray-50">
                      <span className="text-lg md:text-xl font-bold text-gray-800 pr-8">
                        {item.q}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          activeQuestion === item.q
                            ? 'bg-[#12377d] text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                        {activeQuestion === item.q ? (
                          <Minus size={18} />
                        ) : (
                          <Plus size={18} />
                        )}
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeQuestion === item.q && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden">
                          <div className="p-8 md:p-10 pt-0 text-gray-500 text-lg leading-relaxed border-t border-gray-50">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-6">
        <div className="bg-[#b91c1d] rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-bold">Still have questions?</h3>
            <p className="text-white/80 text-lg">
              We're always here to clarify your doubts and provide the best
              solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/971553147444"
              className="bg-white text-[#b91c1d] px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors">
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="border-2 border-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
              Contact Support
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
