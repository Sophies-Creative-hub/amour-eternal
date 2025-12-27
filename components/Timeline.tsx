import React from 'react';
import { TimelineEvent } from '../types';
import { Flower, GlassWater, Music, Utensils, HeartHandshake, Camera } from 'lucide-react';

const events: TimelineEvent[] = [
  { id: '1', time: '12:00', title: 'Vorbereitung der Braut', description: 'Champagner-Toast und letzte Details mit den Brautjungfern in der Suite.', icon: <GlassWater className="w-5 h-5 text-rose-300" /> },
  { id: '2', time: '14:30', title: 'Die Zeremonie', description: 'Das feierliche Ja-Wort unter dem romantisch dekorierten Blumenbogen.', icon: <HeartHandshake className="w-5 h-5 text-rose-300" /> },
  { id: '3', time: '15:30', title: 'Sektempfang', description: 'Live-Jazz, Signature-Cocktails und feine Hors d\'oeuvres im Garten.', icon: <Music className="w-5 h-5 text-rose-300" /> },
  { id: '4', time: '17:00', title: 'Paar-Shooting', description: 'Goldene Stunde Fotografie in der malerischen Umgebung der Location.', icon: <Camera className="w-5 h-5 text-rose-300" /> },
  { id: '5', time: '19:00', title: 'Festliches Dinner', description: 'Ein exquisites Drei-Gänge-Menü unter funkelnden Kristalllüstern.', icon: <Utensils className="w-5 h-5 text-rose-300" /> },
  { id: '6', time: '21:00', title: 'Eröffnungstanz', description: 'Der magische erste Tanz und Beginn einer unvergesslichen Party.', icon: <Music className="w-5 h-5 text-rose-300" /> },
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Watercolor Circles */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-champagne-50/50 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-rose-400 uppercase tracking-[0.3em] text-[10px] font-extrabold">Der Perfekte Ablauf</span>
          <h2 className="font-serif text-4xl md:text-6xl text-gray-800 mt-4">Ihr Hochzeitstag</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-rose-100 via-[#D4AF37]/30 to-rose-100 hidden md:block"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={event.id} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`w-full md:w-[42%] p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl shadow-rose-100/40 border border-white/50 hover:border-rose-200 transition-all duration-500 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 && 'md:flex-row-reverse'}`}>
                    <span className="font-serif text-3xl text-[#D4AF37] italic">{event.time}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{event.description}</p>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-white rounded-full border border-rose-100 shadow-lg my-6 md:my-0">
                  <div className="bg-rose-50/30 w-full h-full rounded-full flex items-center justify-center">
                    {event.icon || <Flower className="w-5 h-5 text-rose-300" />}
                  </div>
                </div>

                {/* Balance Side */}
                <div className="hidden md:block w-[42%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};