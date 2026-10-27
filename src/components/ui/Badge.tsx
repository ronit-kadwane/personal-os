import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'indigo' | 'cyan' | 'emerald' | 'rose' | 'amber' | 'violet';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Atomic status indicator and technology tag pill component.
 *
 * @param props - Component props controlling appearance, size, and label content
 * @returns Stylized badge element
 */
export function Badge({ children, variant = 'default', size = 'md', className }: BadgeProps) {
  const base =
    'inline-flex items-center gap-1 font-mono font-medium rounded-full border leading-none whitespace-nowrap';

  const variants = {
    default: 'bg-surface-elevated text-muted-foreground border-border',
    indigo: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/25',
    cyan: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25',
    rose: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/25',
    amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/25',
    violet: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/25',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return <span className={cn(base, variants[variant], sizes[size], className)}>{children}</span>;
}
