import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { personalInfo } from '@/data/portfolio';
import './globals.css';

/* ====================================================
   Google Fonts (Variable Fonts for Zero-Flicker Preload)
   ==================================================== */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

/* ====================================================
   SEO Metadata (Optimized for High-Payscale US & EU Enterprise)
   ==================================================== */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ronit-kadwane.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} — ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  alternates: {
    canonical: '/',
  },
  keywords: [
    personalInfo.name,
    'Staff Engineer',
    'Principal Full-Stack Architect',
    'Senior Software Architect',
    'React Native Principal Engineer',
    'Next.js Architecture Expert',
    'Node.js Distributed Systems Lead',
    'US & European Remote Engineering Specialist',
    'Mobile & Web Production Architect',
    'Enterprise Cloud & Offline Sync Systems',
    'MongoDB Scalability Expert',
    'Technical Leadership & Mentorship',
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description: personalInfo.bio,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#09090b' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  url: siteUrl,
  sameAs: [
    personalInfo.socials.github,
    personalInfo.socials.linkedin,
    personalInfo.socials.stackoverflow,
  ],
  description: personalInfo.bio,
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Sarvajanik College of Engineering & Technology',
  },
  knowsAbout: [
    'System Architecture',
    'React',
    'React-Native',
    'Next.js',
    'Node.js',
    'MongoDB',
    'AWS Lambda',
    'Chromecast SDK',
    'Mobile Application Development',
    'Offline Sync Architectures',
    'Enterprise Production Systems',
  ],
};

/* ====================================================
   Root Layout
   ==================================================== */
/**
 * Root application layout establishing font variables, JSON-LD structured data,
 * theme management provider, and observability telemetry beacons.
 *
 * @param props - Component props containing child route nodes
 * @returns Master HTML document tree
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
