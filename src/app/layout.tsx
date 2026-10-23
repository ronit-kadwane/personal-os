import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { personalInfo } from '@/data/portfolio';
import './globals.css';

/* ====================================================
   Google Fonts
   ==================================================== */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
});

/* ====================================================
   SEO Metadata (Optimized for High-Payscale US & EU Enterprise)
   ==================================================== */
export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    personalInfo.name,
    'Associate Staff Engineer',
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
  authors: [{ name: personalInfo.name, url: personalInfo.website }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.website,
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
  metadataBase: new URL(personalInfo.website),
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
  url: personalInfo.website,
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
      </body>
    </html>
  );
}
