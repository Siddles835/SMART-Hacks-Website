
import React, { useState, useEffect } from 'react';
import { Code, Users, Zap, ChevronDown } from 'lucide-react';

const Hero = () => {
  const words = ['Coders', 'Innovators', 'Developers', 'Thinkers', 'Founders', 'Engineers', 'Problem Solvers', 'Data Scientists', 'Creators'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 100 : isPaused ? 2000 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-gray-900 to-indigo-950 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-12">
          <div className="flex space-x-6">
            <div className="p-4 bg-blue-900/50 rounded-full animate-pulse backdrop-blur-sm">
              <Code className="h-10 w-10 text-blue-400" />
            </div>
            <div className="p-4 bg-purple-900/50 rounded-full animate-pulse delay-100 backdrop-blur-sm">
              <Users className="h-10 w-10 text-purple-400" />
            </div>
            <div className="p-4 bg-indigo-900/50 rounded-full animate-pulse delay-200 backdrop-blur-sm">
              <Zap className="h-10 w-10 text-indigo-400" />
            </div>
          </div>
        </div>
        
        <div className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          <h1 className="mb-4">
            Empowering the Next Generation of
          </h1>
          <div className="flex justify-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join our community of innovators and problem solvers!
          Build skills, solve real-world challenges, and shape the future of our World.
        </p>
        
        {/* Bouncing scroll down arrow */}
        <div className="flex justify-center">
          <button 
            onClick={handleScrollDown}
            className="p-4 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
