import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out px-6 py-4 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = `uppercase text-[10px] tracking-[0.25em] hover:text-rose-400 transition-colors duration-300 font-bold ${
    isScrolled ? 'text-gray-800' : 'text-white drop-shadow-sm'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className={`w-5 h-5 ${isScrolled ? 'text-rose-300' : 'text-white'}`} fill="currentColor" />
          <span className={`font-script text-3xl md:text-4xl ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>
            Amour Eternel
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#services" className={linkClasses}>Leistungen</a>
          <a href="#timeline" className={linkClasses}>Ablauf</a>
          <a href="#gallery" className={linkClasses}>Galerie</a>
          <a href="#assistant" className={linkClasses}>KI-Planer</a>
          <a href="#contact" className={`px-8 py-2.5 border ${isScrolled ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' : 'border-white text-white hover:bg-white hover:text-rose-900'} transition-all duration-500 uppercase text-[10px] tracking-widest font-bold`}>
            Anfragen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X className={isScrolled ? "text-gray-800" : "text-white"} /> : <Menu className={isScrolled ? "text-gray-800" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col items-center py-10 space-y-8 md:hidden animate-fade-in-down border-t border-rose-50">
          <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-800 uppercase tracking-[0.2em] text-xs font-bold">Leistungen</a>
          <a href="#timeline" onClick={() => setIsOpen(false)} className="text-gray-800 uppercase tracking-[0.2em] text-xs font-bold">Ablauf</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="text-gray-800 uppercase tracking-[0.2em] text-xs font-bold">Galerie</a>
          <a href="#assistant" onClick={() => setIsOpen(false)} className="text-gray-800 uppercase tracking-[0.2em] text-xs font-bold">KI-Planer</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-10 py-3 bg-rose-100 text-rose-900 uppercase tracking-widest text-xs font-bold rounded-sm">Jetzt Buchen</a>
        </div>
      )}
    </nav>
  );
};