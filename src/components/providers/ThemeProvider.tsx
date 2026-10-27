'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ReactNode } from 'react';

/**
 * NextThemesProvider wrapper enabling 3-way theme switching (system/light/dark)
 * with transition suppression to avoid layout flicker.
 *
 * @param props - Component props containing child components
 * @returns NextThemesProvider provider element
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
