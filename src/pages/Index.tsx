
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Activities from '../components/Activities';
import SummerCamps from '../components/SummerCamps';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import TeamSection from '@/components/Staff';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <SummerCamps />
      <TeamSection />
      <Contact />
    </div>
  );
};

export default Index;
