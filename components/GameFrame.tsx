'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Maximize, RefreshCw } from 'lucide-react';

interface GameFrameProps {
  gameUrl: string;
  title: string;
  coverImage: string;
}

export function GameFrame({ gameUrl, title, coverImage }: GameFrameProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);



  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg">
      <div className="relative bg-gray-900 min-h-[400px] lg:min-h-[600px]">
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
            <div className="text-center text-white">
              <div className="relative mx-auto mb-6 group cursor-pointer overflow-hidden rounded-xl shadow-2xl border-2 border-white/20 transition-transform duration-300 group-hover:scale-105" onClick={handlePlay}>
                <img
                  src={coverImage}
                  alt={title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ width: '240px' }}
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-blue-100 mb-6">Click to start playing!</p>
              <Button
                onClick={handlePlay}
                size="lg"
                className="rounded-full bg-white text-blue-600 hover:bg-gray-100"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Game
              </Button>
            </div>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-white text-center">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2" />
                  <p>Loading game...</p>
                </div>
              </div>
            )}
            <iframe
              id="game-iframe"
              src={gameUrl}
              className="w-full h-full min-h-[400px] lg:min-h-[600px] border-0"
              allowFullScreen
              title={title}
              onLoad={() => setIsLoading(false)}
            />
          </>
        )}
        
        {isPlaying && (
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              onClick={handleRefresh}
              size="sm"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => {
                const iframe = document.getElementById('game-iframe') as HTMLIFrameElement;
                if (iframe.requestFullscreen) {
                  iframe.requestFullscreen();
                }
              }}
              size="sm"
              variant="secondary"
              className="rounded-full bg-white/90 hover:bg-white"
            >
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}