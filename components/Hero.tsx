import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000")', 
        }}
      >
        <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FAF5E9]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-white text-xs md:text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up font-bold">
          Wir erschaffen Ihre Traumhochzeit
        </p>
        <h1 className="font-script text-7xl md:text-9xl text-white mb-8 drop-shadow-xl animate-fade-in">
          Ewig & Edel
        </h1>
        <p className="text-white/95 font-serif italic text-xl md:text-3xl mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          "Wo Ihre Liebesgeschichte zu einem Meisterwerk aus Eleganz und Emotion wird."
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="#assistant" 
            className="w-full sm:w-auto px-10 py-4 bg-white/15 backdrop-blur-md border border-white/50 text-white hover:bg-white hover:text-rose-900 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-bold"
          >
            Mit KI planen
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-white hover:bg-[#B8962D] transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-bold shadow-xl shadow-gold-500/20"
          >
            Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};