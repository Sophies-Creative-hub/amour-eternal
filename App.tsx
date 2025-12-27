import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';

function App() {
  return (
    <div className="min-h-screen bg-rose-50/20 selection:bg-rose-200 selection:text-rose-900">
      <Navigation />
      
      <main>
        <Hero />
        
        <div className="relative -mt-10 z-20">
             <SectionDivider color="fill-rose-50" />
        </div>
        
        <Services />
        <SectionDivider flip color="fill-white" />
        
        <Timeline />
        
        <SectionDivider color="fill-rose-50" />
        <div className="bg-rose-50/30">
            <Gallery />
        </div>
        
        <Testimonials />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;