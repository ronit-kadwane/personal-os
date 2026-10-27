'use client';

import { useState, useRef, useId, useCallback, ReactNode, ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TooltipProps {
  /** Text or node content to display inside the tooltip bubble */
  content: ReactNode;
  /** Trigger element that displays the tooltip on hover or focus */
  children: ReactElement;
  /** Alignment placement relative to the trigger element (default: 'top') */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay in milliseconds before opening the tooltip (default: 150) */
  delayMs?: number;
  /** Optional custom styling classes for the tooltip bubble */
  className?: string;
}

const positionClasses = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

/**
 * Accessible micro-interaction tooltip presenting descriptive labels on hover or keyboard focus.
 *
 * @param props - Tooltip configuration and trigger child
 * @returns Accessible interactive trigger element with animated tooltip popup
 */
export function Tooltip({
  content,
  children,
  position = 'top',
  delayMs = 150,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const handleShow = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);
  }, [delayMs]);

  const handleHide = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsVisible(false);
  }, []);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
      onTouchStart={handleHide}
    >
      {children}
      <AnimatePresence>
        {isVisible && content && (
          <motion.span
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className={cn(
              'absolute z-50 pointer-events-none px-2.5 py-1 text-xs font-medium rounded-lg',
              'bg-surface-elevated text-foreground border border-border shadow-lg shadow-black/20 backdrop-blur-md whitespace-nowrap',
              positionClasses[position],
              className,
            )}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
