import React from 'react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Dekoration', alt: 'Elegant gedeckter Hochzeitstisch' },
  { id: '2', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', category: 'Momente', alt: 'Brautpaar im Sonnenuntergang' },
  { id: '3', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800', category: 'Details', alt: 'Trauringe auf Seide' },
  { id: '4', src: 'https://images.unsplash.com/photo-1522673607200-164883eeca48?auto=format&fit=crop&q=80&w=800', category: 'Floristik', alt: 'Brautstrauß in Pastelltönen' },
  { id: '5', src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200', category: 'Zeremonie', alt: 'Freie Trauung im Garten' },
  { id: '6', src: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800', category: 'Kulinarik', alt: 'Vierstöckige Hochzeitstorte' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-rose-50/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-800 mb-8">Portfolio</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto leading-relaxed italic">
            Eine kuratierte Sammlung von Liebesgeschichten, die wir mit Leidenschaft begleiten durften.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-xl transition-all duration-700 ${
                index === 1 || index === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/40 transition-all duration-700 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-[2px]">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                  <span className="text-white font-script text-4xl block mb-3">{item.category}</span>
                  <div className="w-12 h-0.5 bg-white mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <button className="text-gray-800 uppercase tracking-[0.3em] text-[10px] font-bold border-b-2 border-rose-200 pb-2 hover:text-rose-500 hover:border-rose-500 transition-all duration-300">
             Gesamte Galerie ansehen
           </button>
        </div>
      </div>
    </section>
  );
};