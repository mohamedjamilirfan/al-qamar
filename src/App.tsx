import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProcessPage from './pages/ProcessPage';
import FAQPage from './pages/FAQPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CustomScrollbar from './components/CustomScrollbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Determine loading duration based on device
    const isMobileOrTablet = window.innerWidth < 1024;
    const duration = isMobileOrTablet ? 3100 : 3200;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#12377d]/10 selection:text-[#12377d]">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <CustomScrollbar />
      <Navbar />
      <main className="overflow-hidden">
        <ScrollToTopOnNavigate />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
