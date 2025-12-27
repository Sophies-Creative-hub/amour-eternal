import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-5 h-5 text-rose-400" fill="currentColor" />
          <span className="font-script text-3xl md:text-4xl">Amour Eternel</span>
        </div>
        
        <div className="flex space-x-10 mb-10">
          <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Instagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Facebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-all transform hover:scale-110"><Twitter size={24} /></a>
        </div>

        <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold text-center">
          &copy; {new Date().getFullYear()} Amour Eternel Hochzeitsplanung. Mit Liebe gestaltet.
        </p>
      </div>
    </footer>
  );
};