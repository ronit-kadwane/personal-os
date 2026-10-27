import type { MetadataRoute } from 'next';

/**
 * Generates Progressive Web App manifest with icons, themes, and launch behavior.
 *
 * @returns Next.js Manifest metadata configuration
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ronit Kadwane — Staff Engineer & Full-Stack Architect',
    short_name: 'Ronit Kadwane',
    description:
      'Personal portfolio of Ronit Kadwane: Staff Engineer & Full-Stack Architect specialized in React, React-Native, Node.js, and enterprise systems.',
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
