/**
 * Site configuration utilities
 * Centralized management of site URLs and metadata
 */

export const SITE_CONFIG = {
  // Base URL - can be overridden by environment variable
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://pizzaedition.com',
  
  // Site metadata
  name: 'Pizza Edition',
  description: 'Play free HTML5 games instantly in your browser! Featuring popular games like Among Us, Fireboy and Watergirl, Geometry Dash, and more.',
  
  // Social media
  twitter: '@pizzaedition',
  
  // Contact
  email: {
    general: 'hello@pizzaedition.com',
    privacy: 'privacy@pizzaedition.com',
  },
} as const;

/**
 * Get the full URL for a given path
 */
export function getFullUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.baseUrl}${cleanPath}`;
}

/**
 * Get the full URL for an image
 */
export function getImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) {
    return imagePath; // Already a full URL
  }
  return getFullUrl(imagePath);
}

/**
 * Get canonical URL for a page
 */
export function getCanonicalUrl(path: string = ''): string {
  return getFullUrl(path);
}

/**
 * Get Open Graph image URL
 */
export function getOgImageUrl(imagePath: string): string {
  return getImageUrl(imagePath);
}
