import { Navbar } from '@/components/Navbar';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { GeometricBackground } from '@/components/GeometricBackground';
import { games, categories, additionalGames } from '@/data/games';
import { Zap, Puzzle, Target, Map, Car, Brain } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic metadata for each category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find(cat => cat.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found - Pizza Edition',
      description: 'The requested game category could not be found on Pizza Edition.',
    };
  }

  const allGames = [...games, ...additionalGames];
  const categoryGames = allGames.filter(game => game.category === slug);
  const gameCount = categoryGames.length;

  const categoryTitle = `${category.name} Games`;
  const categoryDescription = `Play ${gameCount} free ${category.name.toLowerCase()} games online! ${category.description} All games are HTML5 and work in your browser - no downloads required.`;

  // Get some popular games from this category for keywords
  const popularGames = categoryGames
    .sort((a, b) => (b.plays || 0) - (a.plays || 0))
    .slice(0, 5)
    .map(game => game.title.toLowerCase());

  return {
    title: categoryTitle,
    description: categoryDescription,
    keywords: [
      `${category.name.toLowerCase()} games`,
      'free online games',
      'html5 games',
      'browser games',
      'no download games',
      'pizza edition',
      ...popularGames,
      `play ${category.name.toLowerCase()} games`,
      `${category.name.toLowerCase()} games online`,
      'instant play games'
    ].join(', '),
    authors: [{ name: 'Pizza Edition Team' }],
    creator: 'Pizza Edition',
    publisher: 'Pizza Edition',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${SITE_CONFIG.baseUrl}/category/${slug}`,
      title: `${category.name} Games - Play ${gameCount} Free ${category.name} Games | Pizza Edition`,
      description: categoryDescription,
      siteName: 'Pizza Edition',
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/category-${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} Games - Pizza Edition`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Games - Play ${gameCount} Free ${category.name} Games | Pizza Edition`,
      description: categoryDescription,
      creator: '@pizzaedition',
      images: [`${SITE_CONFIG.baseUrl}/category-${slug}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find(cat => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Icon mapping for categories
  const categoryIcons = {
    action: Zap,
    puzzle: Puzzle,
    casual: Target,
    adventure: Map,
    racing: Car,
    strategy: Brain,
  };

  const allGames = [...games, ...additionalGames];
  const categoryGames = allGames.filter(game => game.category === slug);
  const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative">
      <GeometricBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Games Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categoryGames.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-nunito flex items-center justify-center space-x-3">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    <span>{category.name} Games</span>
                  </h1>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    {category.description} - {categoryGames.length} games available
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {categoryGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              </>
            ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No games found</h3>
              <p className="text-gray-600">
                We're working on adding more {category.name.toLowerCase()} games. Check back soon!
              </p>
            </div>
          )}
        </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}