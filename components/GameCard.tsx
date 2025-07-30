import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Star, Users } from 'lucide-react';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={`/game/${game.id}`}>
            <Button size="sm" className="rounded-full bg-white/90 text-gray-800 hover:bg-white text-xs">
              <Play className="w-3 h-3 mr-1" />
              Play Now
            </Button>
          </Link>
        </div>
        {game.featured && (
          <Badge className="absolute top-2 left-2 bg-yellow-400 text-gray-800 hover:bg-yellow-400 text-xs">
            ⭐ Featured
          </Badge>
        )}
      </div>
      
      <CardContent className="p-3">
        <h3 className="font-bold text-sm text-gray-800 mb-1 line-clamp-1">{game.title}</h3>
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">{game.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          {game.rating && (
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span>{game.rating}</span>
            </div>
          )}
          {game.plays && (
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3" />
              <span className="text-xs">{(game.plays / 1000).toFixed(0)}k</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {game.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs rounded-full px-1 py-0">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Link href={`/game/${game.id}`} className="block">
          <Button size="sm" className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs">
            <Play className="w-3 h-3 mr-1" />
            Play Game
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}