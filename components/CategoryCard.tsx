import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/types/game';
import { Zap, Puzzle, Target, Map, Car, Brain } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  // Icon mapping for categories
  const categoryIcons = {
    action: Zap,
    puzzle: Puzzle,
    casual: Target,
    adventure: Map,
    racing: Car,
    strategy: Brain,
  };

  // Color mapping for each category based on their characteristics
  const categoryColors = {
    action: 'text-red-500',      // Red - Energy, excitement, intensity
    puzzle: 'text-purple-500',   // Purple - Creativity, mystery, intelligence
    casual: 'text-green-500',    // Green - Relaxation, ease, friendly
    adventure: 'text-orange-500', // Orange - Adventure, exploration, warmth
    racing: 'text-blue-500',     // Blue - Speed, technology, precision
    strategy: 'text-indigo-600', // Indigo - Deep thinking, wisdom, strategy
  };

  const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons];
  const iconColor = categoryColors[category.slug as keyof typeof categoryColors];

  return (
    <Link href={`/category/${category.slug}`}>
      <Card className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-200">
        <CardContent className="p-4 text-center">
          <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
            <IconComponent className={`w-8 h-8 ${iconColor}`} />
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">{category.name}</h3>
          <p className="text-gray-600 text-xs mb-3">{category.description}</p>
          <Badge variant="secondary" className="rounded-full">
            {category.gameCount} games
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}