import { SITE_CONFIG } from '@/lib/site-config';

export function GET() {
  const robotsTxt = `# Robots.txt for Pizza Edition
# ${SITE_CONFIG.baseUrl}/robots.txt

User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Disallow admin and private areas (if any in future)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow game embeds and assets
Allow: /images/
Allow: /icons/

# Crawl delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
