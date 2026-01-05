import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { generateThumbnailConcept } from '../services/geminiService';

export const ThumbnailGenerator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    setLoading(true);
    setImageUrl(null);

    try {
      const url = await generateThumbnailConcept(title);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
      alert("No se pudo generar la imagen. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-insignia-violet p-1 border-[4px] border-black shadow-hard-lg">
        <div className="bg-insignia-bg border-[3px] border-black p-8 md:p-12">
          
          <div className="text-center mb-12">
            <span className="bg-insignia-yellow border-[2px] border-black px-3 py-1 font-mono font-bold text-sm mb-4 inline-block shadow-hard-sm">
              HERRAMIENTA VISUAL
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black leading-tight uppercase">
              Generador de<br/>Miniaturas
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {/* Input Area */}
            <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 items-end">
              <Input 
                label="Título de tu próximo video"
                placeholder="Ej: Cómo gané $1000 con IA en 24 horas..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Button type="submit" variant="primary" disabled={loading} className="md:w-auto w-full">
                {loading ? "GENERANDO..." : "GENERAR PREVIEW"}
              </Button>
            </form>

            {/* YouTube Player Mockup */}
            <div className="relative w-full aspect-video bg-black border-[4px] border-black shadow-hard group">
              {/* Fake Player Header */}
              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-between items-start p-4">
                <div className="text-white/80 font-mono text-xs">{title || "Sin título"}</div>
              </div>

              {/* Content */}
              <div className="w-full h-full bg-[#111] flex items-center justify-center overflow-hidden">
                {loading ? (
                  <div className="text-insignia-cyan font-mono animate-pulse">
                    &gt; RENDERIZANDO PIXELES...
                  </div>
                ) : imageUrl ? (
                  <img src={imageUrl} alt="Generated Thumbnail" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center text-gray-500 font-mono text-sm p-4 text-center">
                    <div className="w-16 h-12 border-2 border-gray-600 rounded-lg mb-2 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-gray-600 border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                    <span>La vista previa aparecerá aquí</span>
                  </div>
                )}
              </div>

              {/* Watermark */}
              <div className="absolute bottom-4 right-4 z-10 opacity-50">
                 <span className="font-display text-white text-xs tracking-widest uppercase bg-black px-2 py-1">Agencia Insignia</span>
              </div>
              
               {/* Fake Progress Bar */}
               <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <div className="h-full bg-red-600 w-2/3 relative">
                    <div className="absolute right-0 -top-1 w-3 h-3 bg-red-600 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
