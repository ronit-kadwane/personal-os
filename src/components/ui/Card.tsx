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
    default: 'bg-card text-card-foreground border border-border shadow-sm',
    glass: 'bg-surface/70 backdrop-blur-md border border-border',
    bordered: 'border border-border bg-surface text-foreground',
  };

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-0.5'
    : '';

  return (
    <div className={cn(base, variants[variant], hoverStyles, className)} {...props}>
      {children}
    </div>
  );
}
