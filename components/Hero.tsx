import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col pt-10 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Logo */}
      <div className="absolute top-6 left-6 md:left-0 z-50">
        <h1 className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase border-b-[4px] border-black inline-block leading-[0.8]">
          Agencia<br/>Insignia
        </h1>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center mt-20 md:mt-0 relative z-10">
        <div className="mb-6 inline-block transform -rotate-2">
           <span className="bg-insignia-cyan border-[3px] border-black px-4 py-1 font-mono font-bold text-sm shadow-hard-sm">
              POTENCIADO POR IA DE GOOGLE
            </span>
        </div>
        
        <h2 className="font-display font-black text-5xl md:text-7xl lg:text-9xl leading-[0.9] mb-8 uppercase text-black">
          Domina YouTube<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-insignia-violet to-blue-600" style={{WebkitTextStroke: '3px black'}}>Faceless</span>
        </h2>

        <p className="font-mono text-lg md:text-xl max-w-2xl mb-12 border-l-[4px] border-black pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          Usa nuestras herramientas exclusivas para encontrar nichos ganadores y generar miniaturas virales en segundos.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Button variant="primary" onClick={scrollToTools} className="text-xl px-12 py-6">
            PROBAR HERRAMIENTAS
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/3 w-32 h-32 bg-insignia-yellow border-[4px] border-black rounded-full shadow-hard opacity-50 md:opacity-100 hidden md:block"></div>
      <div className="absolute left-10 bottom-20 w-16 h-16 bg-black border-[4px] border-black rotate-45 hidden md:block"></div>
    </section>
  );
};
