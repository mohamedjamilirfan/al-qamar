import React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Mail,
  Star,
  Users,
  ShieldCheck,
  Heart,
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Anwar UI Qamar',
    role: 'Managing Director',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Leading Al Qamar with over 15 years of experience in the cleaning and facility management industry in UAE.',
    social: { linkedin: '#', mail: 'mailto:anwaralqamar@gmail.com' },
  },
  {
    name: 'Sarah Ahmed',
    role: 'Operations Manager',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Overseeing daily operations to ensure every client receives premium, consistent cleaning services.',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    name: 'David Wilson',
    role: 'Quality Control Lead',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Meticulous professional ensuring all cleaning projects meet our high-quality premium standards.',
    social: { linkedin: '#', instagram: '#' },
  },
  {
    name: 'Elena Rodriguez',
    role: 'Customer Relations',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500',
    bio: 'Dedicated to providing exceptional support and building long-lasting relationships with our clients.',
    social: { instagram: '#', mail: '#' },
  },
];

const values = [
  {
    title: 'Professionalism',
    description:
      'Our team undergoes rigorous training to deliver consistent, expert-level service.',
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    title: 'Reliability',
    description:
      'We value your time and property, ensuring punctual and trustworthy service every time.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
  },
  {
    title: 'Customer First',
    description:
      'Every space we clean is treated with the care and attention it deserves.',
    icon: <Heart className="w-8 h-8 text-rose-600" />,
  },
  {
    title: 'Excellence',
    description:
      'We strive for perfection in every corner, leaving your space truly spotless.',
    icon: <Star className="w-8 h-8 text-amber-600" />,
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
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
              Meet Our Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Dedicated to <span className="text-blue-300">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Behind our premium services is a team of passionate professionals
            committed to making your environment healthier and cleaner.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group">
              <div className="relative mb-6 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12377d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white text-white hover:text-[#12377d] transition-all">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white text-white hover:text-[#b91c1d] transition-all">
                        <Instagram size={20} />
                      </a>
                    )}
                    {member.social.mail && (
                      <a
                        href={member.social.mail}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white text-white hover:text-[#12377d] transition-all">
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0c111d] mb-1 group-hover:text-[#12377d] transition-colors">
                {member.name}
              </h3>
              <p className="text-[#b91c1d] font-bold text-sm uppercase tracking-widest mb-4">
                {member.role}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 rounded-[4rem] mx-6 mb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c111d]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-gray-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#12377d] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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

export default TeamPage;
