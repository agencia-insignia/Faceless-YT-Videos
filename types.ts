export interface NicheIdea {
  title: string;
  description: string;
  viralPotential: 'ALTO' | 'MEDIO';
}

export interface SearchResult {
  ideas: NicheIdea[];
  rawText: string;
}

export interface ThumbnailResult {
  imageUrl: string | null;
  error?: string;
}
