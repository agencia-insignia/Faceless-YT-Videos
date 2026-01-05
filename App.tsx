import React from 'react';
import { Hero } from './components/Hero';
import { IdeaFinder } from './components/IdeaFinder';
import { ThumbnailGenerator } from './components/ThumbnailGenerator';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import { captureLead } from './services/supabaseClient';

const App: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await captureLead(email, 'waitlist');
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error(error);
      alert("Error al unirse. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

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
            No solo creamos videos,<br /> escalamos activos digitales.
          </h2>
          <p className="font-mono text-white mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Estas herramientas son solo el 1% de lo que nuestra metodología en Agencia Insignia puede hacer por tu canal.
          </p>

          {submitted ? (
            <div className="bg-insignia-yellow border-[4px] border-black p-8 shadow-hard inline-block transform rotate-1">
              <h3 className="font-display text-2xl font-black mb-2 uppercase text-black">¡YA ESTÁS DENTRO!</h3>
              <p className="font-mono text-black">Te avisaremos tan pronto abramos nuevas plazas.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Ingresa tu mejor correo..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-xl"
              />
              <Button type="submit" variant="cta" disabled={loading} className="text-xl px-12 py-6 transform hover:scale-105">
                {loading ? "UNIÉNDOSE..." : "UNIRME A LA LISTA DE ESPERA"}
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
