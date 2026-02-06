import React, { useState, useEffect, useCallback, memo } from 'react';
import { ArrowDownToLine } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      } ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img
              src="/QBC-LOGO1.png"
              alt="Al Qamar Logo"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-extrabold text-[#12377d] leading-tight">
                Al Qamar
              </span>
              <span className="text-[10px] sm:text-[10px] md:text-xs text-[#000000] font-semibold tracking-wider opacity-80">
                Building Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Hidden on mobile/tablet, shown from large screens (lg) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-md xl:text-lg font-bold text-[#12377d] hover:text-[#b91c1d] transition-all duration-200 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b91c1d] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleProfileClick}
              className="bg-[#12377d] text-white px-6 py-2.5 rounded-lg font-bold cursor-pointer text-sm hover:bg-[#b91c1d] transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-red-900/20 active:scale-95 transform hover:-translate-y-0.5 flex items-center gap-2">
              <ArrowDownToLine size={18} />
              Company Profile
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-1.5 sm:p-2 text-[#b91c1d] hover:bg-transparent rounded-lg transition-colors"
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
          onClick={closeMobileMenu}
          className={`lg:hidden absolute top-full backdrop-blur-md left-0 w-full h-[100vh] transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[100vw] p-5 bg-white border border-[#12377d]/10 space-y-4">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-xl font-bold py-4 px-4 rounded-xl transition-all text-center text-[#12377d] hover:text-[#b91c1d] hover:bg-[#12377d]/5">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 flex flex-col gap-4">
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
