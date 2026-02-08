import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowDownToLine, ChevronDown, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../constants/servicesData';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Team', href: '/team' },
  { name: 'Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleProfileClick = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/QBC-PROFILE.pdf';
    link.download = 'QBC-PROFILE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const shouldBeTransparent = !isScrolled && !isMobileMenuOpen;
  const textColor = shouldBeTransparent ? 'text-white' : 'text-[#12377d]';
  const logoTextColor = shouldBeTransparent ? 'text-white' : 'text-[#12377d]';
  const sublogoTextColor = shouldBeTransparent
    ? 'text-white/80'
    : 'text-[#000000]';
  const activeColor = shouldBeTransparent ? 'text-white' : 'text-[#b91c1d]';
  const underlineColor = shouldBeTransparent ? 'bg-white' : 'bg-[#b91c1d]';
  const hoverColor = shouldBeTransparent
    ? 'hover:text-amber-200'
    : 'hover:text-[#b91c1d]';
  const hoverUnderlineColor = shouldBeTransparent
    ? 'group-hover:bg-amber-200'
    : 'group-hover:bg-[#b91c1d]';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        shouldBeTransparent ? 'bg-transparent' : 'bg-white shadow-md'
      } ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex flex-col justify-center">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img
              src="/QBC-LOGO1.png"
              alt="Al Qamar Logo"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span
                className={`text-base sm:text-lg md:text-xl font-extrabold leading-tight transition-colors duration-300 ${logoTextColor}`}>
                Al Qamar
              </span>
              <span
                className={`text-[10px] sm:text-[10px] md:text-xs font-semibold tracking-wider opacity-80 transition-colors duration-300 ${sublogoTextColor}`}>
                Building Cleaning
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      to={link.href}
                      className={`text-md xl:text-lg font-bold transition-all duration-200 ${
                        isActive(link.href) ||
                        location.pathname.startsWith('/services/')
                          ? activeColor
                          : `${textColor} ${hoverColor}`
                      }`}>
                      {link.name}
                    </Link>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 group-hover:rotate-180 ${
                        isActive(link.href) ||
                        location.pathname.startsWith('/services/')
                          ? activeColor
                          : `transition-colors duration-300 ${textColor}`
                      }`}
                    />

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 p-3 w-64">
                        {SERVICES_DATA.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 text-[#12377d] hover:text-[#b91c1d] transition-all group/item">
                            <span className="font-bold text-sm">
                              {service.title}
                            </span>
                            <ChevronRight
                              size={14}
                              className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-md xl:text-lg font-bold transition-all duration-200 relative ${
                      isActive(link.href)
                        ? activeColor
                        : `${textColor} ${hoverColor}`
                    }`}>
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isActive(link.href)
                          ? `w-full ${underlineColor}`
                          : `w-0 group-hover:w-full ${hoverUnderlineColor}`
                      }`}></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleProfileClick}
              className={`px-6 py-2.5 rounded-lg font-bold cursor-pointer text-sm transition-all duration-300 shadow-lg active:scale-95 transform hover:-translate-y-0.5 flex items-center gap-2 ${
                shouldBeTransparent
                  ? 'bg-white text-[#12377d] hover:bg-[#b91c1d] hover:text-white shadow-white/10'
                  : 'bg-[#12377d] text-white hover:bg-[#b91c1d] shadow-blue-900/20 hover:shadow-red-900/20'
              }`}>
              <ArrowDownToLine size={18} />
              Company Profile
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors ${shouldBeTransparent ? 'text-white' : 'text-[#b91c1d]'}`}
              aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu (Tablet & Below) */}
        <div
          className={`lg:hidden absolute top-full backdrop-blur-md left-0 w-full h-[100vh] transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}>
          <div className="w-[100vw] h-full p-5 bg-white border border-[#12377d]/10 overflow-y-auto pb-24">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="flex flex-col">
                      <Link
                        to={link.href}
                        onClick={closeMobileMenu}
                        className={`text-xl font-bold py-4 px-4 rounded-xl transition-all text-center ${
                          isActive(link.href) ||
                          location.pathname.startsWith('/services/')
                            ? 'text-[#b91c1d]'
                            : 'text-[#12377d]'
                        }`}>
                        {link.name}
                      </Link>
                      <div className="grid grid-cols-2 gap-2 mt-2 px-2">
                        {SERVICES_DATA.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            onClick={closeMobileMenu}
                            className="bg-gray-50 py-3 px-3 rounded-xl text-[#12377d] text-center text-sm font-bold active:bg-[#12377d]/10">
                            {service.title.split(' ')[0]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className={`text-xl font-bold py-4 px-4 rounded-xl transition-all text-center block ${
                        isActive(link.href)
                          ? 'text-[#b91c1d] bg-[#12377d]/5'
                          : 'text-[#12377d] hover:text-[#b91c1d] hover:bg-[#12377d]/5'
                      }`}>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="pt-8 flex flex-col gap-4">
              <button
                onClick={handleProfileClick}
                className="bg-[#12377d] text-white px-6 py-4 rounded-xl font-bold cursor-pointer text-lg hover:bg-[#b91c1d] transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-red-900/20 active:scale-95 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <ArrowDownToLine size={22} />
                Company Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
