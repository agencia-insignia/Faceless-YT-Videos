import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t-[6px] border-insignia-violet">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display font-black text-2xl uppercase mb-2">Agencia Insignia</h3>
          <p className="font-mono text-sm text-gray-400">Escalando activos digitales con Inteligencia Artificial.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 font-mono text-sm">
          <a href="#" className="hover:text-insignia-cyan underline decoration-2 underline-offset-4">Instagram</a>
          <a href="#" className="hover:text-insignia-cyan underline decoration-2 underline-offset-4">Twitter / X</a>
          <a href="#" className="hover:text-insignia-cyan underline decoration-2 underline-offset-4">Política de Privacidad</a>
        </div>

        <div className="font-mono text-xs text-gray-500">
          © 2026 Reservados todos los derechos.
        </div>
      </div>
    </footer>
  );
};
