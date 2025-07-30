import { Navbar } from '@/components/Navbar';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { games, categories, additionalGames } from '@/data/games';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Generate dynamic metadata for each category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    return {
      title: 'Category Not Found - Pizza Edition',
      description: 'The requested game category could not be found on Pizza Edition.',
    };
  }

  const allGames = [...games, ...additionalGames];
  const categoryGames = allGames.filter(game => game.category === params.slug);
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
      url: `https://pizzaedition.com/category/${params.slug}`,
      title: `${category.name} Games - Play ${gameCount} Free ${category.name} Games | Pizza Edition`,
      description: categoryDescription,
      siteName: 'Pizza Edition',
      images: [
        {
          url: `https://pizzaedition.com/category-${params.slug}.jpg`,
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
      images: [`https://pizzaedition.com/category-${params.slug}.jpg`],
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
      canonical: `https://pizzaedition.com/category/${params.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const allGames = [...games, ...additionalGames];
  const categoryGames = allGames.filter(game => game.category === params.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name} Games</h1>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">{category.description}</p>
          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-full px-4 py-2 text-lg">
            {categoryGames.length} games available
          </Badge>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryGames.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {categoryGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
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
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}