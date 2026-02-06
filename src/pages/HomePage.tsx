import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About.tsx';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import Process from '../sections/Process';
import Contact from '../sections/Contact.tsx';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Contact />
    </div>
  );
};

export default HomePage;
