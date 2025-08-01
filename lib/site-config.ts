/**
 * Site configuration utilities
 * Centralized management of site URLs and metadata
 */

/**
 * Get the base URL for the current environment
 * Automatically detects Netlify, Vercel, and other deployment platforms
 */
function getBaseUrl(): string {
  // 1. Check for explicit environment variable
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // 2. Auto-detect Netlify deployment
  if (process.env.NETLIFY) {
    // Use Netlify's deploy URL or site URL
    if (process.env.DEPLOY_PRIME_URL && process.env.CONTEXT !== 'production') {
      return process.env.DEPLOY_PRIME_URL; // Branch deploys
    }
    if (process.env.URL) {
      return process.env.URL; // Production site URL
    }
  }

  // 3. Auto-detect Vercel deployment
  if (process.env.VERCEL) {
    if (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
  }

  // 4. Check if we're in browser and can use window.location
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }

  // 5. Fallback to default
  return 'http://127.0.0.1';
}

export const SITE_CONFIG = {
  // Base URL - automatically detected based on environment
  baseUrl: getBaseUrl(),

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
