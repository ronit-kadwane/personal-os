import { cn } from '@/lib/utils';
import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  hover = false,
  className,
  ...props
}: CardProps) {
  const base = 'rounded-2xl overflow-hidden';

  const variants = {
    default: 'bg-zinc-900 border border-zinc-800/60',
    glass:
      'bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10',
    bordered: 'border border-zinc-700/60 bg-zinc-900/50',
  };

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5'
    : '';

  return (
    <div className={cn(base, variants[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
}
