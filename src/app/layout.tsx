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
   SEO Metadata
   ==================================================== */
export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} — ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    'Full-Stack Engineer',
    'AI Integration',
    'Next.js',
    'React',
    'TypeScript',
    'Freelance Software Engineer',
    'Portfolio',
    personalInfo.name,
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
    creator: '@ronitkadwane',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  metadataBase: new URL(personalInfo.website),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/* ====================================================
   Root Layout
   ==================================================== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
