import React, { useCallback, memo } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react';

import { FaHeart } from 'react-icons/fa';

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const SERVICES_LINKS = [
  { name: 'Residential Cleaning', href: '#services' },
  { name: 'Commercial Cleaning', href: '#services' },
  { name: 'Villa Cleaning', href: '#services' },
  { name: 'Office Cleaning', href: '#services' },
  { name: 'Windows Cleaning', href: '#services' },
];

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
  {
    name: 'Instagram',
    icon: <Instagram size={20} />,
    href: 'https://www.instagram.com/al_qamar_bldgcleaning?igsh=cjRvM202djczZDFs',
  },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
];

const CONTACT_INFO = [
  { name: 'Phone', icon: <Phone size={20} />, href: 'tel:+971553147444' },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    href: 'mailto:anwaralqamar@gmail.com',
  },
  { name: 'Location', icon: <MapPin size={20} />, href: '#' },
];

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const handleNameClick = useCallback(() => {
    // You can replace this URL with your actual portfolio website
    window.open('https://mohamedjamilirfan-portfolio.vercel.app/', '_blank');
  }, []);

  return (
    <footer className="bg-[#0c111d] text-white pt-20 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/QBC-LOGO1.png"
                alt="Al Qamar Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-[#ffffff] leading-tight">
                  Al Qamar
                </span>
                <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
                  Building Cleaning
                </span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Providing premium cleaning services in Sharjah and across the UAE
              with excellence and dedication since inception.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-md bg-gray-800 flex items-center justify-center hover:bg-[#12377d] transition-all duration-300 border border-white/10"
                  aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#12377d] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
                    <ArrowRight
                      size={14}
                      className="text-[#12377d] group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#12377d] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {SERVICES_LINKS.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
                    <ArrowRight
                      size={14}
                      className="text-[#12377d] group-hover:translate-x-1 transition-transform"
                    />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#12377d] rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              {CONTACT_INFO.map((contact) => (
                <li key={contact.name} className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-[#3b82f6] mt-1 bg-transparent">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-white">{contact.name}</p>
                    <a href={contact.href} className="text-gray-400">
                      {contact.name === 'Phone'
                        ? '+971 55 314 7444'
                        : contact.name === 'Email'
                          ? 'anwaralqamar@gmail.com'
                          : 'Sharjah, UAE'}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear}{' '}
              <span className="text-white font-semibold">
                Al Qamar Building Cleaning
              </span>
              . All Rights Reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Designer Credits */}
          <div className="text-center pt-4">
            <p className="text-gray-500 text-sm mb-0">
              Designed & Developed with <FaHeart className="heartbeat" /> by{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNameClick();
                }}
                className="footer-link"
                title="Visit my portfolio">
                Mohamed Jamil Irfan
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
