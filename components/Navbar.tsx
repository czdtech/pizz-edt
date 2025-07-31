'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Gamepad2, Home, TrendingUp, Zap, Puzzle, Target, Map, Car, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/data/games';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping for categories
  const categoryIcons = {
    action: Zap,
    puzzle: Puzzle,
    casual: Target,
    adventure: Map,
    racing: Car,
    strategy: Brain,
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block font-nunito">Pizza Edition</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 font-medium transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link href="/trending" className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 font-medium transition-colors">
              <TrendingUp className="w-4 h-4" />
              <span>Trending</span>
            </Link>
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons];
              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 font-medium transition-colors"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Search Bar - Commented out for future use */}
          {/*
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search games..."
                className="pl-10 w-64 rounded-2xl border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search - Commented out for future use */}
              {/*
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search games..."
                  className="pl-10 w-full rounded-2xl border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              */}
              <div className="space-y-2">
                <Link
                  href="/"
                  className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/trending"
                  className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending</span>
                </Link>
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons];
                  return (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-500 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{category.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}