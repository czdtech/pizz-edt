import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { GameCard } from '@/components/GameCard';
import { CategoryCard } from '@/components/CategoryCard';
import { games, categories, additionalGames } from '@/data/games';
import { TrendingUp, Star, Zap } from 'lucide-react';

// 动态导入非关键组件
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
});

const GeometricBackground = dynamic(() => import('@/components/GeometricBackground').then(mod => ({ default: mod.GeometricBackground })), {
  ssr: false, // 背景动画不需要SSR
});

export default function Home() {
  const featuredGames = games.filter(game => game.featured);
  const allGames = [...games, ...additionalGames];
  const popularGames = allGames.slice(6, 24);
  const newGames = allGames.slice(24, 36);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative">
      <GeometricBackground />
      <div className="relative z-10">
        <Navbar showH1={true} />
      
      {/* Featured Games */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-nunito">Featured Games</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Hand-picked games that offer the best gaming experience on Pizza Edition. Updated regularly with new favorites!
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-nunito">Game Categories</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore Pizza Edition's diverse collection of games organized by genre. Find your favorite type of game and discover new challenges!
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-nunito">Popular This Week</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See what other players are enjoying right now. These games are trending and loved by the Pizza Edition community!
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {popularGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* New Games */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-purple-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-white font-nunito">New Arrivals</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Fresh games added to our collection. Be the first to discover these exciting new adventures!
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {newGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          
          {/* View All Games button - Commented out for future use */}
          {/*
          <div className="text-center mt-12">
            <Link href="/games">
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4">
                View All Games
              </Button>
            </Link>
          </div>
          */}
        </div>
      </section>

      {/* Website Description */}
      <section className="py-16 bg-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-nunito">
              Pizza Edition - Your Ultimate Gaming Destination
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Play</h3>
                <p className="text-gray-600">
                  No downloads, no installations. Click and play instantly in your browser with Pizza Edition's HTML5 games.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  Carefully curated collection of high-quality games across multiple genres for endless entertainment.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Always Fresh</h3>
                <p className="text-gray-600">
                  New games added regularly to keep your gaming experience exciting and up-to-date.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About Pizza Edition</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Pizza Edition is your premier destination for free HTML5 games that work seamlessly across all devices.
                Whether you're looking for action-packed adventures, mind-bending puzzles, or casual games to unwind,
                we've got something for everyone. Our platform is designed with simplicity in mind – just click and play!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join millions of players worldwide who trust Pizza Edition for their daily gaming fix.
                With new games added weekly and a community-driven approach to game curation,
                you'll always find something new and exciting to play.
              </p>
            </div>
          </div>
        </div>
      </section>
        <Footer />
      </div>
    </div>
  );
}