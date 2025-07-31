import Link from 'next/link';
import { Gamepad2, Mail, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Pizza Edition</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your ultimate destination for HTML5 games. Play hundreds of free games instantly in your browser, no downloads required!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/action" className="text-gray-400 hover:text-white transition-colors">Action Games</Link></li>
              <li><Link href="/category/puzzle" className="text-gray-400 hover:text-white transition-colors">Puzzle Games</Link></li>
              <li><Link href="/category/casual" className="text-gray-400 hover:text-white transition-colors">Casual Games</Link></li>
              <li><Link href="/category/adventure" className="text-gray-400 hover:text-white transition-colors">Adventure Games</Link></li>
              <li><Link href="/category/racing" className="text-gray-400 hover:text-white transition-colors">Racing Games</Link></li>
              <li><Link href="/category/strategy" className="text-gray-400 hover:text-white transition-colors">Strategy Games</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/trending" className="text-gray-400 hover:text-white transition-colors">Trending</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Pizza Edition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}