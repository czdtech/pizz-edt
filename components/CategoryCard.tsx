import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/types/game';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Card className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 border-2 hover:border-blue-200">
        <CardContent className="p-4 text-center">
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
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