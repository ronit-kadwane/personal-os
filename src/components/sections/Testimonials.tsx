'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials, type Testimonial } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const avatarColors = [
  'from-indigo-600 to-violet-600',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-violet-600 to-purple-700',
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div
      className={cn(
        'flex-shrink-0 w-80 sm:w-96 rounded-2xl p-6 border',
        'bg-zinc-900 border-zinc-800/60',
      )}
    >
      {/* Quote icon */}
      <Quote size={20} className="text-indigo-500/60 mb-4" aria-hidden="true" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={12} className="text-amber-400 fill-amber-400" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'w-10 h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold flex-shrink-0',
            avatarColors[index % avatarColors.length],
          )}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-100">{testimonial.name}</div>
          <div className="text-xs text-zinc-500">
            {testimonial.title} · {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

// Duplicate testimonials for seamless loop
const duplicated = [...testimonials, ...testimonials];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge variant="indigo" className="mb-4">Social Proof</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Client Testimonials
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            What engineering leaders and founders say about working with me.
          </p>
        </motion.div>
      </div>

      {/* Marquee — first row (left) */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-zinc-950 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-zinc-950 to-transparent"
          aria-hidden="true"
        />

        <div
          className="flex gap-4 overflow-hidden"
          aria-label="Client testimonials carousel"
        >
          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
            style={{ willChange: 'transform' }}
          >
            {duplicated.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} testimonial={t} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee — second row (right, reversed) */}
      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-zinc-950 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-zinc-950 to-transparent"
          aria-hidden="true"
        />

        <div className="flex gap-4 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
            style={{ willChange: 'transform' }}
          >
            {[...duplicated].reverse().map((t, i) => (
              <TestimonialCard key={`rev-${t.id}-${i}`} testimonial={t} index={i + 3} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
