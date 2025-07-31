import { Navbar } from '@/components/Navbar';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { GeometricBackground } from '@/components/GeometricBackground';
import { games, additionalGames } from '@/data/games';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trending Games - Pizza Edition',
  description: 'Discover the hottest and most popular games on Pizza Edition. Play trending HTML5 games that everyone is talking about.',
  keywords: 'trending games, popular games, hot games, featured games, Pizza Edition, HTML5 games',
  openGraph: {
    title: 'Trending Games',
    description: 'Discover the hottest and most popular games on Pizza Edition. Play trending HTML5 games that everyone is talking about.',
    type: 'website',
    url: 'https://pizzaedition.com/trending',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trending Games - Pizza Edition',
    description: 'Discover the hottest and most popular games on Pizza Edition.',
  },
};

export default function TrendingPage() {
  // Get all featured games from both arrays
  const allGames = [...games, ...additionalGames];
  const trendingGames = allGames.filter(game => game.featured === true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative">
      <GeometricBackground />
      <div className="relative z-10">
        <Navbar />

        {/* Trending Games Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {trendingGames.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-nunito">
                    Trending Games
                  </h1>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    These games are currently trending and getting the most attention from players worldwide.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {trendingGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 bg-slate-800/50 rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4 font-nunito">Trending Stats</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">{trendingGames.length}</div>
                      <div className="text-gray-300">Featured Games</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">
                        {trendingGames.reduce((total, game) => total + (game.plays || 0), 0).toLocaleString()}
                      </div>
                      <div className="text-gray-300">Total Plays</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">
                        {(trendingGames.reduce((total, game) => total + (game.rating || 0), 0) / trendingGames.length).toFixed(1)}
                      </div>
                      <div className="text-gray-300">Average Rating</div>
                    </div>
                  </div>
                </div>

                {/* Why These Games Are Trending */}
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6 font-nunito">Why These Games Are Trending</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-800/30 rounded-xl p-6">
                      <div className="text-4xl mb-4">⭐</div>
                      <h4 className="text-lg font-bold text-white mb-2">High Quality</h4>
                      <p className="text-gray-300 text-sm">
                        These games are carefully selected for their exceptional gameplay and user experience.
                      </p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-6">
                      <div className="text-4xl mb-4">👥</div>
                      <h4 className="text-lg font-bold text-white mb-2">Community Favorites</h4>
                      <p className="text-gray-300 text-sm">
                        Most played and highest rated games by our gaming community.
                      </p>
                    </div>
                    <div className="bg-slate-800/30 rounded-xl p-6">
                      <div className="text-4xl mb-4">🚀</div>
                      <h4 className="text-lg font-bold text-white mb-2">Instant Fun</h4>
                      <p className="text-gray-300 text-sm">
                        Quick to load, easy to play, and guaranteed to provide hours of entertainment.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🎮</div>
                <h2 className="text-2xl font-bold text-white mb-4 font-nunito">No Trending Games Yet</h2>
                <p className="text-gray-300 text-lg max-w-md mx-auto">
                  We're working on featuring the best games. Check back soon for trending content!
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
