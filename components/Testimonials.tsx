import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    couple: 'Sarah & Jan',
    date: 'Juni 2024',
    quote: "Amour Eternel hat unseren Tag wie ein Märchen wirken lassen. Die Liebe zum Detail war einfach exquisit. Jedes Element fühlte sich persönlich an.",
    image: 'https://images.unsplash.com/photo-1537367630511-48560c15292a?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '2',
    couple: 'Elena & Marco',
    date: 'August 2024',
    quote: "Professionell, beruhigend und unglaublich talentiert. Wir hätten uns keinen besseren Partner für unsere internationale Hochzeit wünschen können.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '3',
    couple: 'Chloé & Alexander',
    date: 'September 2024',
    quote: "Jeder Gast war vom Design begeistert. Es war purer Luxus, ohne steif zu wirken. Der Abend war einfach magisch und unvergesslich.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-rose-400 uppercase tracking-[0.3em] text-[10px] font-extrabold">Liebesbriefe</span>
          <h2 className="font-serif text-4xl md:text-6xl text-gray-800 mt-4">Von unseren Paaren</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center p-10 bg-rose-50/10 rounded-3xl border border-rose-50 hover:border-rose-200 transition-all duration-500 shadow-xl shadow-rose-100/20 group">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img src={t.image} alt={t.couple} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute -bottom-3 -right-3 bg-[#D4AF37] text-white p-2.5 rounded-full shadow-lg">
                    <Quote size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic font-serif text-xl mb-8 leading-relaxed">"{t.quote}"</p>
              <h4 className="font-bold text-gray-800 uppercase tracking-widest text-xs">{t.couple}</h4>
              <p className="text-rose-400 text-[10px] mt-2 font-bold uppercase tracking-widest">{t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};