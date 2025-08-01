import { SITE_CONFIG } from '@/lib/site-config';
import { games, additionalGames, categories } from '@/data/games';

export const dynamic = 'force-static';

export function GET() {
  const allGames = [...games, ...additionalGames];
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_CONFIG.baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Trending Page -->
  <url>
    <loc>${SITE_CONFIG.baseUrl}/trending</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Category Pages -->
${categories.map(category => `  <url>
    <loc>${SITE_CONFIG.baseUrl}/category/${category.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
  
  <!-- Static Pages -->
  <url>
    <loc>${SITE_CONFIG.baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${SITE_CONFIG.baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>${SITE_CONFIG.baseUrl}/privacy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${SITE_CONFIG.baseUrl}/terms</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Game Pages -->
${allGames.map(game => `  <url>
    <loc>${SITE_CONFIG.baseUrl}/game/${game.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
