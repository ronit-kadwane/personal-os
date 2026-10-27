'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Tooltip } from '@/components/ui/Tooltip';
import { t } from '@/locales';
import { cn } from '@/lib/utils';

/**
 * Floating scroll-to-top button featuring an integrated circular SVG scroll progress ring.
 *
 * @returns Floating scroll progress button
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > 350) {
      setIsVisible(true);
      const currentProgress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Tooltip content={t.common.scrollToTop} position="left">
            <button
              onClick={scrollToTop}
              aria-label={t.common.scrollToTop}
              className="relative w-11 h-11 rounded-full flex items-center justify-center bg-surface/90 backdrop-blur-md border border-border text-foreground hover:bg-surface-elevated hover:text-indigo-500 transition-all shadow-lg shadow-black/10 dark:shadow-black/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group"
            >
              {/* SVG circular progress ring */}
              <svg
                className="absolute inset-0 w-11 h-11 -rotate-90 pointer-events-none"
                viewBox="0 0 44 44"
              >
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-border"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className={cn(
                    'stroke-indigo-500',
                    !shouldReduceMotion && 'transition-[stroke-dashoffset] duration-150 ease-out',
                  )}
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>

              <ChevronUp
                size={18}
                className={cn(
                  'relative z-10',
                  !shouldReduceMotion && 'transition-transform group-hover:-translate-y-0.5',
                )}
              />
            </button>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
