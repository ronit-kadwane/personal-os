import type { MetadataRoute } from 'next';
import { t } from '@/locales';

/**
 * Generates Progressive Web App manifest with icons, themes, and launch behavior.
 *
 * @returns Next.js Manifest metadata configuration
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: t.manifest.name,
    short_name: 'Ronit Kadwane',
    description: t.manifest.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#09090B',
    theme_color: '#6366F1',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/logo.svg',
        sizes: '192x192 512x512',
        type: 'image/svg+xml',
      },
    ],
  };
}
