import { GoogleGenAI } from "@google/genai";
import { SearchResult } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

/**
 * Uses Gemini 3 Flash with Google Search Grounding to find niche trends.
 */
export const findNicheTrends = async (niche: string): Promise<SearchResult> => {
  try {
    const prompt = `
      Actúa como un estratega experto de YouTube para 'Agencia Insignia'.
      Investiga tendencias actuales usando Google Search sobre el nicho: "${niche}".
      Genera 5 ideas de videos específicos para un canal Faceless (sin mostrar rostro).
      
      Para cada idea, provee:
      1. Un título atractivo.
      2. Una breve descripción de 1 línea.
      3. Estima el potencial viral como 'ALTO' o 'MEDIO'.
      
      Devuelve la respuesta en texto plano pero estructurado claramente.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    // We return the raw text to display in a "terminal" style, but in a real app
    // we might parse this into JSON using responseSchema. For this brutalist UI,
    // raw text with grounding links looks technical and cool.
    const text = response.text || "No se pudieron generar ideas en este momento.";

    // Extract search sources if available for display
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      ideas: [], // Not strictly parsing to object for this UI style, using rawText
      rawText: text,
    };
  } catch (error) {
    console.error("Error fetching niche trends:", error);
    throw new Error("Falló la conexión con la IA. Intenta nuevamente.");
  }
};

/**
 * Uses Gemini 2.5 Flash Image (Nano Banana) to generate a thumbnail concept.
 */
export const generateThumbnailConcept = async (videoTitle: string): Promise<string | null> => {
  try {
    const prompt = `
      Genera una imagen conceptual para una miniatura de YouTube de alto CTR (Click Through Rate).
      Título del video: "${videoTitle}".
      Estilo: Vibrante, alto contraste, estilo ilustración digital 3D o fotorealista, sin texto, apto para canal Faceless.
      La imagen debe ser impactante y curiosa.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
      config: {
        // Nano banana does not support complex configs like responseMimeType, keep it simple
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }

    return null;
  } catch (error) {
    console.error("Error generating thumbnail:", error);
    throw new Error("No se pudo generar la imagen. Intenta con otro título.");
  }
};
