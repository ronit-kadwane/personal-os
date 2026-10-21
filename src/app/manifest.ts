import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ronit Kadwane — Associate Staff Engineer & Full-Stack Architect',
    short_name: 'Ronit Kadwane',
    description:
      'Personal portfolio of Ronit Kadwane: Associate Staff Engineer & Full-Stack Architect specialized in React, React-Native, Node.js, and enterprise systems.',
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
