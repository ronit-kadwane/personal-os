'use client';

import { useState, useRef, useEffect, useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { t } from '@/locales';
import { cn } from '@/lib/utils';

interface ThemeSelectorProps {
  className?: string;
}

const emptySubscribe = () => () => {};

/**
 * Render corresponding Lucide icon for active theme option.
 *
 * @param props - Glyph properties containing theme identifier and icon size
 * @returns Stylized Lucide glyph
 */
function ThemeGlyph({ value, size = 14 }: { value: string; size?: number }) {
  if (value === 'light') {
    return <Sun size={size} className="text-amber-500" />;
  }
  if (value === 'dark') {
    return <Moon size={size} className="text-indigo-400" />;
  }
  return <Monitor size={size} className="text-cyan-400" />;
}

/**
 * Resolve effective theme glyph accounting for system preference.
 *
 * @param currentTheme - Configured theme value ('system' | 'light' | 'dark')
 * @param resolvedTheme - Actual evaluated OS theme preference
 * @returns Resolved visual theme key
 */
function getActiveThemeGlyph(currentTheme: string, resolvedTheme?: string) {
  if (currentTheme === 'system') {
    return resolvedTheme === 'dark' ? 'dark' : 'light';
  }
  return currentTheme;
}

/**
 * Desktop dropdown theme selector offering System, Light, and Dark modes.
 *
 * @param props - Component props containing optional className
 * @returns Dropdown theme selector element
 */
export function ThemeSelector({ className }: ThemeSelectorProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-xl border border-border bg-surface-elevated/50 animate-pulse',
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  const options = [
    { value: 'light', label: t.common.themeLight },
    { value: 'dark', label: t.common.themeDark },
    { value: 'system', label: t.common.themeSystem },
  ];

  const currentTheme = theme || 'system';

  return (
    <div className={cn('relative inline-block', className)} ref={containerRef}>
      <button
        id="theme-menu-button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'p-2 rounded-xl text-muted hover:text-foreground hover:bg-surface-elevated border border-border transition-all duration-200 cursor-pointer flex items-center justify-center',
          isOpen && 'bg-surface-elevated text-foreground border-accent/40',
        )}
        aria-label={t.common.themeToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        title={`${t.common.theme}: ${currentTheme}`}
      >
        <ThemeGlyph value={getActiveThemeGlyph(currentTheme, resolvedTheme)} size={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-38 rounded-xl bg-surface/95 backdrop-blur-xl border border-border shadow-2xl shadow-black/20 p-1.5 z-50 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="theme-menu-button"
          >
            {options.map((opt) => {
              const isSelected = currentTheme === opt.value;
              return (
                <button
                  key={opt.value}
                  role="menuitem"
                  onClick={() => {
                    setTheme(opt.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center justify-between gap-2.5 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer text-left',
                    isSelected
                      ? 'bg-indigo-600/10 text-indigo-400 dark:text-indigo-300 font-semibold'
                      : 'text-muted hover:text-foreground hover:bg-surface-elevated',
                  )}
                >
                  <div className="flex items-center gap-2">
                    <ThemeGlyph value={opt.value} size={14} />
                    <span>{opt.label}</span>
                  </div>
                  {isSelected && <Check size={13} className="text-indigo-500" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Mobile 3-way segmented control for navigation drawer.
 *
 * @returns Segmented theme switcher element
 */
export function MobileThemeSelector() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;

  const currentTheme = theme || 'system';

  const options = [
    { value: 'light', label: t.common.themeLight },
    { value: 'dark', label: t.common.themeDark },
    { value: 'system', label: t.common.themeSystem },
  ];

  return (
    <div className="flex items-center justify-between pt-2 border-t border-border mt-1">
      <span className="text-xs text-muted font-medium">{t.common.theme}</span>
      <div className="inline-flex rounded-lg p-0.5 bg-surface-elevated border border-border">
        {options.map((opt) => {
          const isSelected = currentTheme === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setTheme(opt.value)}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md transition-all duration-150 cursor-pointer',
                isSelected
                  ? 'bg-surface text-foreground shadow-sm font-semibold'
                  : 'text-muted hover:text-foreground',
              )}
              aria-label={opt.label}
            >
              <ThemeGlyph value={opt.value} size={12} />
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
