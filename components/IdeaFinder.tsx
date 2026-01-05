import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { findNicheTrends } from '../services/geminiService';

export const IdeaFinder: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;

    setLoading(true);
    setResult(null);

    try {
      const data = await findNicheTrends(niche);
      setResult(data.rawText);
    } catch (error) {
      console.error(error);
      setResult("Error al conectar con la base de datos de Insignia. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tools" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-white border-[4px] border-black shadow-hard-lg p-0 overflow-hidden relative">
        {/* Header Tag */}
        <div className="bg-black text-white font-mono text-xs py-2 px-4 inline-block absolute top-0 left-0 border-r-[3px] border-b-[3px] border-white z-10">
          BY INSIGNIA AI v1.0
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Inputs */}
          <div className="p-8 md:p-12 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black flex flex-col justify-center">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-none">
              BUSCADOR DE<br/>
              <span className="text-insignia-violet">TENDENCIAS</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input 
                label="¿Cuál es tu nicho o interés?"
                placeholder="Ej: Finanzas, True Crime, IA..."
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                required
              />
              <Input 
                type="email"
                label="Tu mejor correo (Opcional)"
                placeholder="usuario@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" variant="secondary" fullWidth disabled={loading}>
                {loading ? "ANALIZANDO DATOS..." : "BUSCAR TENDENCIAS"}
              </Button>
            </form>
          </div>

          {/* Right: Output */}
          <div className="bg-gray-100 p-8 md:p-12 font-mono text-sm overflow-y-auto min-h-[400px] flex flex-col relative">
            <div className="flex justify-between items-center mb-6 pb-4 border-b-[3px] border-black/10">
              <span className="font-bold uppercase tracking-wider">Resultados del análisis</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
              </div>
            </div>

            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center animate-pulse">
                <div className="font-display text-2xl mb-4">ESCANEANDO YOUTUBE...</div>
                <div className="w-full h-4 bg-black/10 mb-2"></div>
                <div className="w-3/4 h-4 bg-black/10 mb-2"></div>
                <div className="w-5/6 h-4 bg-black/10"></div>
              </div>
            ) : result ? (
              <div className="whitespace-pre-wrap leading-relaxed text-black">
                {result}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 text-center">
                &gt; Esperando input del usuario...<br/>
                &gt; Ingresa un nicho para comenzar.
              </div>
            )}
            
            {result && (
              <div className="mt-6 pt-4 border-t-[3px] border-black/10 text-xs text-gray-500">
                Datos procesados por Gemini Grounding. Verifica siempre las fuentes.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
