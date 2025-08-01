import { Navbar } from '@/components/Navbar';
import { GameFrame } from '@/components/GameFrame';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { GeometricBackground } from '@/components/GeometricBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { games, additionalGames } from '@/data/games';
import { notFound } from 'next/navigation';
import { Star, Users, Share2, Heart } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

// Helper function to format tips into a list
const formatTips = (tips: string) => {
  const tipItems = tips.split(/\d+\.\s+/).filter(item => item.trim().length > 0);
  return tipItems;
};

// Helper function to format FAQ into Q&A pairs
const formatFAQ = (faq: string) => {
  const qaPairs = faq.split(/Q:\s+/).filter(item => item.trim().length > 0);
  return qaPairs.map(pair => {
    const [question, ...answerParts] = pair.split(/A:\s+/);
    return {
      question: question.trim(),
      answer: answerParts.join('A: ').trim()
    };
  });
};

interface GamePageProps {
  params: {
    id: string;
  };
}

// Generate dynamic metadata for each game
export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const allGames = [...games, ...additionalGames];
  const game = allGames.find(g => g.id === params.id);

  if (!game) {
    return {
      title: 'Game Not Found - Pizza Edition',
      description: 'The requested game could not be found on Pizza Edition.',
    };
  }

  const gameTitle = `${game.title} - Play Free Online`;
  const gameDescription = game.gameInfo?.overview
    ? `${game.description} ${game.gameInfo.overview.substring(0, 100)}...`
    : game.description;

  return {
    title: gameTitle,
    description: gameDescription,
    keywords: [
      game.title.toLowerCase(),
      'free online game',
      'html5 game',
      'browser game',
      game.category,
      ...(game.tags || []),
      'pizza edition',
      'play online',
      'no download'
    ].join(', '),
    authors: [{ name: 'Pizza Edition Team' }],
    creator: 'Pizza Edition',
    publisher: 'Pizza Edition',
    category: game.category,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${SITE_CONFIG.baseUrl}/game/${game.id}`,
      title: `${game.title} - Play Free Online | Pizza Edition`,
      description: gameDescription,
      siteName: 'Pizza Edition',
      images: [
        {
          url: game.coverImage.startsWith('/')
            ? `${SITE_CONFIG.baseUrl}${game.coverImage}`
            : game.coverImage,
          width: 400,
          height: 300,
          alt: `${game.title} - Free Online Game`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - Play Free Online | Pizza Edition`,
      description: gameDescription,
      creator: '@pizzaedition',
      images: [game.coverImage.startsWith('/')
        ? `${SITE_CONFIG.baseUrl}${game.coverImage}`
        : game.coverImage],
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
      canonical: `${SITE_CONFIG.baseUrl}/game/${game.id}`,
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  const allGames = [...games, ...additionalGames];
  const game = allGames.find(g => g.id === params.id);

  if (!game) {
    notFound();
  }

  const relatedGames = allGames
    .filter(g => g.category === game.category && g.id !== game.id)
    .slice(0, 3);

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: game.title,
    description: game.description,
    image: game.coverImage.startsWith('/')
      ? `${SITE_CONFIG.baseUrl}${game.coverImage}`
      : game.coverImage,
    url: `${SITE_CONFIG.baseUrl}/game/${game.id}`,
    genre: game.category,
    keywords: game.tags?.join(', '),
    aggregateRating: game.rating ? {
      '@type': 'AggregateRating',
      ratingValue: game.rating,
      ratingCount: Math.floor((game.plays || 1000) / 10),
      bestRating: 5,
      worstRating: 1
    } : undefined,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/PlayAction',
      userInteractionCount: game.plays || 1000
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pizza Edition',
      url: SITE_CONFIG.baseUrl
    },
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative">
        <GeometricBackground />
        <div className="relative z-10">
          <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Content */}
          <div className="lg:col-span-2">
            {/* Game Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link href={`/category/${game.category}`}>
                  <Badge variant="secondary" className="rounded-full hover:bg-gray-200 cursor-pointer">
                    {game.category}
                  </Badge>
                </Link>
                {game.featured && (
                  <Badge className="bg-yellow-400 text-gray-800 hover:bg-yellow-400 rounded-full">
                    ⭐ Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-nunito">{game.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-4">
                {game.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{game.rating}</span>
                    <span>rating</span>
                  </div>
                )}
                {game.plays && (
                  <div className="flex items-center space-x-1">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">{game.plays.toLocaleString()}</span>
                    <span>plays</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button variant="outline" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button variant="outline" className="rounded-full border-gray-600 text-gray-300 hover:bg-gray-700">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Game
                </Button>
              </div>
            </div>

            {/* Game Frame */}
            <GameFrame gameUrl={game.iframeUrl} title={game.title} coverImage={game.coverImage} />

            {/* Game Description */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Game</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{game.description}</p>

              {game.tags && game.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Game Information */}
            {game.gameInfo && (
              <div className="mt-8 space-y-6">
                {/* Game Overview */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      📖
                    </span>
                    Game Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{game.gameInfo.overview}</p>
                </div>

                {/* How to Play */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      🎮
                    </span>
                    How to Play
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{game.gameInfo.howToPlay}</p>
                </div>

                {/* Tips and Strategies */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      💡
                    </span>
                    Tips & Strategies
                  </h2>
                  <ul className="space-y-3">
                    {formatTips(game.gameInfo.tips).map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      ❓
                    </span>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {formatFAQ(game.gameInfo.faq).map((qa, index) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-start">
                          <span className="text-purple-600 mr-2">Q:</span>
                          {qa.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed flex items-start">
                          <span className="text-purple-600 mr-2 font-semibold">A:</span>
                          {qa.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <img
                src={game.coverImage}
                alt={game.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Game Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="capitalize font-medium">{game.category}</span>
                </div>
                {game.rating && (
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span className="font-medium">{game.rating}/5</span>
                  </div>
                )}
                {game.plays && (
                  <div className="flex justify-between">
                    <span>Total Plays:</span>
                    <span className="font-medium">{game.plays.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Related Games */}
            {relatedGames.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">More {game.category} Games</h3>
                <div className="space-y-4">
                  {relatedGames.map((relatedGame) => (
                    <Link key={relatedGame.id} href={`/game/${relatedGame.id}`}>
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <img
                          src={relatedGame.coverImage}
                          alt={relatedGame.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {relatedGame.title}
                          </p>
                          {relatedGame.rating && (
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-gray-500">{relatedGame.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href={`/category/${game.category}`}>
                  <Button variant="outline" className="w-full mt-4 rounded-xl">
                    View All {game.category} Games
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
        </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const allGames = [...games, ...additionalGames];
  return allGames.map((game) => ({
    id: game.id,
  }));
}