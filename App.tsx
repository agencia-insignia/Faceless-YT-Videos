import React from 'react';
import { Hero } from './components/Hero';
import { IdeaFinder } from './components/IdeaFinder';
import { ThumbnailGenerator } from './components/ThumbnailGenerator';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-insignia-bg selection:bg-insignia-yellow selection:text-black">
      <Hero />
      
      {/* Divider */}
      <div className="w-full h-4 bg-black my-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDIwIEwyMCAwIEgyMCBWMjAgWiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] opacity-20"></div>
      </div>

      <IdeaFinder />
      
      <div className="h-24"></div> {/* Spacer */}

      <ThumbnailGenerator />

      {/* CTA Section */}
      <section className="bg-insignia-violet border-y-[6px] border-black py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase mb-6 leading-none shadow-black drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
            No solo creamos videos,<br/> escalamos activos digitales.
          </h2>
          <p className="font-mono text-white mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Estas herramientas son solo el 1% de lo que nuestra metodología en Agencia Insignia puede hacer por tu canal.
          </p>
          <Button variant="cta" className="text-xl px-12 py-6 transform hover:scale-105">
            UNIRME A LA LISTA DE ESPERA
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
