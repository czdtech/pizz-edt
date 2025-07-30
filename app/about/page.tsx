import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Gamepad2, Users, Zap, Star, Globe, Heart, Shield, Rocket } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Pizza Edition',
  description: 'Learn about Pizza Edition, your ultimate destination for free HTML5 games. Discover our mission, values, and commitment to providing the best gaming experience.',
  keywords: 'about pizza edition, free games platform, HTML5 games, online gaming, browser games, game collection',
  openGraph: {
    title: 'About Pizza Edition - Free HTML5 Games Platform',
    description: 'Learn about Pizza Edition, your ultimate destination for free HTML5 games. Discover our mission, values, and commitment to providing the best gaming experience.',
    type: 'website',
    url: 'https://pizzaedition.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pizza Edition - Free HTML5 Games Platform',
    description: 'Learn about Pizza Edition, your ultimate destination for free HTML5 games.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Pizza Edition</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Your ultimate destination for free HTML5 games. We're passionate about bringing you the best gaming experience, 
            right in your browser, with no downloads required.
          </p>
          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-full px-6 py-3 text-lg">
            <Gamepad2 className="w-5 h-5 mr-2" />
            70+ Games & Growing
          </Badge>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              To make high-quality gaming accessible to everyone, everywhere, instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Instant Access</h3>
                <p className="text-gray-600">
                  No downloads, no installations, no waiting. Click and play instantly in your browser with our optimized HTML5 games.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality First</h3>
                <p className="text-gray-600">
                  Every game is carefully selected and tested to ensure the highest quality gaming experience across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community Driven</h3>
                <p className="text-gray-600">
                  We listen to our players and continuously add new games based on community feedback and trending preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Pizza Edition was born from a simple idea: gaming should be accessible to everyone, everywhere, instantly. 
                In a world where games often require lengthy downloads, expensive hardware, or complex installations, 
                we saw an opportunity to bring the joy of gaming directly to your browser.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our journey began with a small collection of classic HTML5 games, but we quickly realized that players 
                wanted more variety, better quality, and a seamless experience. Today, we're proud to offer over 70 
                carefully curated games spanning multiple genres, from action-packed adventures to brain-teasing puzzles.
              </p>
              
              <p className="text-lg leading-relaxed">
                What sets us apart is our commitment to quality and accessibility. Every game on Pizza Edition is 
                tested across multiple devices and browsers to ensure a smooth experience. We believe that great gaming 
                shouldn't be limited by technical barriers, and we're constantly working to make our platform faster, 
                more reliable, and more enjoyable for players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Pizza Edition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">
                Gaming for everyone, regardless of device, location, or technical expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">
                A safe, family-friendly environment with carefully moderated content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Constantly improving our platform with new features and technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                Building connections through shared gaming experiences and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pizza Edition by the Numbers</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">70+</div>
              <div className="text-gray-600">Games Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
              <div className="text-gray-600">Games Played</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Players</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-600">Game Categories</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
