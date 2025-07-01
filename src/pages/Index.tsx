
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import SummerCamps from '../components/SummerCamps';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <SummerCamps />
      <Contact />
    </div>
  );
};

export default Index;
