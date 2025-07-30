export interface Game {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  iframeUrl: string;
  featured?: boolean;
  tags?: string[];
  rating?: number;
  plays?: number;
  gameInfo?: {
    overview: string;
    howToPlay: string;
    tips: string;
    faq: string;
  };
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  gameCount: number;
}