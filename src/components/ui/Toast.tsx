'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ToastItem {
  id: string;
  message: string;
  durationMs: number;
}

const TOAST_EVENT = 'personal-os:toast';

let toastCounter = 0;

/**
 * Dispatch an application-wide toast notification.
 *
 * @param message - User-facing notification message
 * @param durationMs - Optional duration before auto-dismissal (default: 3000ms)
 */
export function toast(message: string, durationMs = 3000): void {
  if (typeof window === 'undefined') return;
  toastCounter += 1;
  const event = new CustomEvent(TOAST_EVENT, {
    detail: {
      id: `toast-${Date.now()}-${toastCounter}`,
      message,
      durationMs,
    },
  });
  window.dispatchEvent(event);
}

/**
 * Site-wide floating toast notification container rendering active alerts with smooth animations.
 *
 * @returns Toast notification container component
 */
export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<ToastItem>;
      if (!customEvent.detail) return;

      const newToast = customEvent.detail;
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        removeToast(newToast.id);
      }, newToast.durationMs);
    };

    window.addEventListener(TOAST_EVENT, handleToastEvent);
    return () => {
      window.removeEventListener(TOAST_EVENT, handleToastEvent);
    };
  }, [removeToast]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full"
    >
      <AnimatePresence>
        {toasts.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl',
              'bg-surface/95 backdrop-blur-xl border border-border shadow-xl shadow-black/20 text-foreground',
            )}
            role="status"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
              <p className="text-sm font-medium truncate">{item.message}</p>
            </div>
            <button
              onClick={() => removeToast(item.id)}
              className="text-muted hover:text-foreground p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
