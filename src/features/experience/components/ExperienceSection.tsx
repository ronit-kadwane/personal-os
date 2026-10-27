'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown, Briefcase, GraduationCap, Laptop2, Download } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { experience, personalInfo, type Experience } from '@/data/portfolio';
import { t } from '@/locales';
import { cn } from '@/lib/utils';

type Filter = 'all' | 'fulltime' | 'freelance' | 'education';

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

/**
 * Timeline entry item rendering career role details, company, duration, and expandable highlights.
 *
 * @param props - TimelineItemProps containing experience model, index, and border indicator
 * @returns Animated timeline node element
 */
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
        <div className="absolute left-5 top-10 w-px h-full bg-border" aria-hidden="true" />
      )}

      {/* Icon bubble */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-surface-elevated border border-border flex items-center justify-center shadow-md">
        <Icon size={16} className="text-indigo-500" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full text-left group cursor-pointer"
          aria-expanded={expanded}
          id={`experience-${item.id}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-sm transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                    {item.company}
                  </span>
                )}
                <Badge variant={typeBadgeVariant[item.type]} size="sm">
                  {item.type}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-muted">
                <span className="font-mono">{item.period}</span>
                <span aria-hidden="true">&middot;</span>
                <span className="flex items-center gap-1">
                  <MapPin size={10} />
                  {item.location}
                </span>
              </div>
            </div>
            <ChevronDown
              size={16}
              className={cn(
                'text-muted flex-shrink-0 mt-1 transition-transform duration-300',
                expanded ? 'rotate-180' : '',
              )}
            />
          </div>
          <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
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
              <div className="mt-4 space-y-4 pt-2 border-t border-border/60">
                {/* Highlights */}
                <ul className="space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} size="sm">
                      {tech}
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

/**
 * Filterable career journey timeline showcasing verified engineering tenures and education.
 *
 * @returns Career experience timeline section
 */
export function ExperienceSection() {
  const [filter, setFilter] = useState<Filter>('all');

  const availableTypes = new Set(experience.map((e) => e.type));
  const allFilters: { value: Filter; label: string }[] = [
    { value: 'all', label: t.experience.filterAll },
    { value: 'fulltime', label: t.experience.filterFulltime },
    { value: 'freelance', label: t.experience.filterFreelance },
    { value: 'education', label: t.experience.filterEducation },
  ];
  const filters = allFilters.filter(
    (f) => f.value === 'all' || availableTypes.has(f.value as Experience['type']),
  );

  const filtered = experience.filter((e) => filter === 'all' || e.type === filter);

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-surface-elevated/40 text-foreground transition-colors duration-200 content-visibility-auto"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Badge variant="indigo" className="mb-4">
            {t.experience.badge}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t.experience.title}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">{t.experience.subtitle}</p>
        </motion.div>

        {/* Filter Tabs */}
        {filters.length > 2 && (
          <div className="flex items-center justify-center gap-2 mb-12">
            {filters.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer',
                  filter === tab.value
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-surface border border-border text-muted hover:text-foreground hover:bg-surface-elevated',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Timeline */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === filtered.length - 1}
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
            download="Ronit_Kadwane_Resume.pdf"
            id="experience-download-resume"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-indigo-600/20"
          >
            <Download size={16} />
            {t.common.downloadAtsResume}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
