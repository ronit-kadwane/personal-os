import type { MetadataRoute } from 'next';

/**
 * Generates crawler directives and sitemap location for robots.txt.
 *
 * @returns Next.js Robots metadata configuration
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ronit-kadwane.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
