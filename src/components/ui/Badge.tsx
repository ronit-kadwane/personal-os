import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'indigo' | 'cyan' | 'emerald' | 'rose' | 'amber' | 'violet';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const base =
    'inline-flex items-center gap-1 font-mono font-medium rounded-full border leading-none whitespace-nowrap';

  const variants = {
    default:
      'bg-zinc-800/80 text-zinc-300 border-zinc-700/50',
    indigo:
      'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    cyan:
      'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    emerald:
      'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    rose:
      'bg-rose-500/15 text-rose-300 border-rose-500/30',
    amber:
      'bg-amber-500/15 text-amber-300 border-amber-500/30',
    violet:
      'bg-violet-500/15 text-violet-300 border-violet-500/30',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
