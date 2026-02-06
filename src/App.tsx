import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CustomScrollbar from './components/CustomScrollbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

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
        <HomePage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
