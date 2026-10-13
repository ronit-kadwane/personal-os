'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, Briefcase, GraduationCap, Laptop2, Download } from 'lucide-react';
import { experience, personalInfo, type Experience } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

type Filter = 'all' | 'fulltime' | 'freelance' | 'education';

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'fulltime', label: 'Full-time' },
  { value: 'freelance', label: 'Freelance' },
  { value: 'education', label: 'Education' },
];

const typeIcon = {
  fulltime: Briefcase,
  freelance: Laptop2,
  contract: Briefcase,
  education: GraduationCap,
};

const typeBadgeVariant: Record<Experience['type'], 'indigo' | 'cyan' | 'emerald' | 'amber'> = {
  fulltime: 'indigo',
  freelance: 'cyan',
  contract: 'emerald',
  education: 'amber',
};

interface TimelineItemProps {
  item: Experience;
  index: number;
  isLast: boolean;
}

function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = typeIcon[item.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-10 w-px h-full bg-zinc-800" aria-hidden="true" />
      )}

      {/* Icon bubble */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg">
        <Icon size={16} className="text-indigo-400" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full text-left group"
          aria-expanded={expanded}
          id={`experience-${item.id}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                {item.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="text-indigo-400 font-medium text-sm">{item.company}</span>
                )}
                <Badge variant={typeBadgeVariant[item.type]} size="sm">
                  {item.type}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-zinc-500">
                <span className="font-mono">{item.period}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {item.location}
                </span>
              </div>
            </div>
            <ChevronDown
              size={16}
              className={cn(
                'text-zinc-500 flex-shrink-0 mt-1 transition-transform duration-300',
                expanded ? 'rotate-180' : '',
              )}
            />
          </div>
          <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{item.description}</p>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4">
                {/* Highlights */}
                <ul className="space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.techStack.map((t) => (
                    <Badge key={t} size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = experience.filter(
    (e) => filter === 'all' || e.type === filter,
  );

  return (
    <section id="experience" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge variant="indigo" className="mb-4">Career Timeline</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Experience & Education
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            5+ years of building, shipping, and scaling digital products.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center" role="tablist" aria-label="Filter experience by type">
          {filters.map((f) => (
            <button
              key={f.value}
              role="tab"
              aria-selected={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                filter === f.value
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((item, i) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={i}
                  isLast={i === filtered.length - 1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-6"
        >
          <a
            href={personalInfo.resumeUrl}
            download
            id="experience-download-resume"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25"
          >
            <Download size={16} />
            Download ATS-Optimized Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
