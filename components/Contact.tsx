import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-rose-900 text-white relative overflow-hidden">
        {/* Decorative Gold Circles */}
        <div className="absolute top-0 right-0 w-80 h-80 border border-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] border border-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Beginnen Sie Ihre Reise</h2>
          <p className="text-white/70 font-light text-xl italic font-serif">
            Lassen Sie uns gemeinsam etwas Atemberaubendes erschaffen.
          </p>
        </div>

        <form className="space-y-8 bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3 font-bold">Ihr Name</label>
              <input type="text" className="w-full bg-white/5 border-b border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Vor- und Nachname" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3 font-bold">Partner Name</label>
              <input type="text" className="w-full bg-white/5 border-b border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="Vor- und Nachname" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3 font-bold">E-Mail Adresse</label>
              <input type="email" className="w-full bg-white/5 border-b border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] transition-all" placeholder="ihre@mail.de" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3 font-bold">Hochzeitsdatum (geplant)</label>
              <input type="date" className="w-full bg-white/5 border-b border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] transition-all" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3 font-bold">Ihre Vision</label>
            <textarea className="w-full bg-white/5 border-b border-white/20 p-4 text-white placeholder-white/20 focus:outline-none focus:border-[#D4AF37] transition-all min-h-[120px]" placeholder="Erzählen Sie uns von Ihrer Traumhochzeit..."></textarea>
          </div>

          <div className="text-center pt-10">
            <button type="button" className="px-12 py-5 bg-white text-rose-900 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#FAF5E9] transition-all duration-500 shadow-2xl shadow-black/30">
              Anfrage senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};