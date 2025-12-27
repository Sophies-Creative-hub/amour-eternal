import React from 'react';
import { Package } from '../types';
import { Check } from 'lucide-react';

const packages: Package[] = [
  {
    id: 'basic',
    name: 'Die Essenz',
    price: 'ab €2.500',
    description: 'Ideal für Paare, die die Details bereits geplant haben, aber einen Profi für die reibungslose Umsetzung am Tag selbst benötigen.',
    features: ['Koordination am Hochzeitstag', 'Ablaufplan-Erstellung', 'Dienstleister-Check (4 Wochen vorher)', 'Generalprobe der Zeremonie', '8 Stunden vor Ort'],
  },
  {
    id: 'premium',
    name: 'Die Romantik',
    price: 'ab €5.500',
    description: 'Ein gemeinsamer Ansatz. Wir begleiten Sie durch den Prozess und bieten fachkundige Beratung und Design-Expertise.',
    features: ['Teilplanung der Hochzeit', 'Design- & Stilberatung', 'Dienstleister-Empfehlungen', 'Budgetverwaltung', 'Unbegrenzter E-Mail-Support', '10 Stunden vor Ort'],
    isPopular: true,
  },
  {
    id: 'luxury',
    name: 'Die Ewigkeit',
    price: 'ab €9.500',
    description: 'Unser Full-Service-Erlebnis. Vom ersten "Ja" bis zum "Ich will" kümmern wir uns um jedes exquisite Detail.',
    features: ['Komplette Hochzeitsplanung', 'Bespoke Design & Styling', 'Location-Suche', 'Gäste-Management', 'Rehearsal Dinner Planung', 'Unbegrenzte Stunden vor Ort'],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#FAF5E9] relative overflow-hidden">
      {/* Decorative Watercolor Splashes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-100/40 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-champagne-200/40 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-rose-400 uppercase tracking-[0.3em] text-[10px] font-extrabold">Kuratierte Erlebnisse</span>
          <h2 className="font-serif text-4xl md:text-6xl text-gray-800 mt-4 mb-8">Unsere Pakete</h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white p-10 rounded-3xl shadow-2xl shadow-rose-200/20 transition-all hover:-translate-y-3 duration-500 border-t-8 ${pkg.isPopular ? 'border-[#D4AF37]' : 'border-rose-100'}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-white px-8 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
                  Am Beliebtesten
                </div>
              )}
              
              <h3 className="font-serif text-3xl text-gray-800 mb-3">{pkg.name}</h3>
              <p className="text-[#D4AF37] text-xl font-light mb-8 font-serif italic">{pkg.price}</p>
              <p className="text-gray-500 mb-10 font-light leading-relaxed text-sm">{pkg.description}</p>
              
              <ul className="space-y-5 mb-12">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-600 text-sm">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 uppercase tracking-widest text-[10px] font-bold transition-all duration-500 border ${
                pkg.isPopular 
                ? 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800' 
                : 'bg-transparent text-gray-800 border-rose-100 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}>
                Paket Auswählen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};