'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Badge, Tooltip } from '@/components/ui';
import { projects, type Project } from '@/data/portfolio';
import { t } from '@/locales';
import { cn, formatNumber } from '@/lib/utils';

/**
 * Framer motion viewport entry transition configuration with optional stagger delay.
 *
 * @param delay - Stagger offset in seconds
 * @returns Motion animation configuration object
 */
function useInViewAnimation(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  };
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

/**
 * Bento grid card showcasing project metadata, live links, and metrics.
 *
 * @param props - ProjectCardProps containing project data and animation delay
 * @returns Styled project card element
 */
function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.article
      {...useInViewAnimation(delay)}
      className={cn(
        'group relative rounded-2xl overflow-hidden border border-border bg-card text-card-foreground',
        'transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5',
        'flex flex-col',
        project.size === 'large' ? 'md:col-span-2 md:row-span-2' : '',
      )}
    >
      {/* Gradient header */}
      <div
        className={cn(
          'relative overflow-hidden flex-shrink-0',
          project.size === 'large' ? 'h-48 md:h-64' : 'h-36',
        )}
        aria-hidden="true"
      >
        <div className={cn('absolute inset-0 bg-gradient-to-br opacity-90', project.gradient)} />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Category */}
        <div className="absolute top-4 left-4">
          <Badge
            variant="default"
            size="sm"
            className="bg-black/35 border-white/20 text-white font-medium"
          >
            {project.category}
          </Badge>
        </div>
        {/* Links */}
        <div className="absolute top-4 right-4 flex gap-2">
          {project.githubUrl && (
            <Tooltip content={t.tooltips.viewGithubRepo} position="bottom">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${t.projects.githubRepoAria}`}
                className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white/90 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <GithubIcon size={14} />
              </a>
            </Tooltip>
          )}
          {project.liveUrl && (
            <Tooltip content={t.tooltips.openLiveApp} position="bottom">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${t.projects.liveDemoAria}`}
                className="p-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-white/90 hover:text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ExternalLink size={14} />
              </a>
            </Tooltip>
          )}
        </div>
        {/* GitHub stars */}
        {project.githubStars && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/40 text-white text-xs font-mono">
            <Star size={10} fill="currentColor" />
            {formatNumber(project.githubStars)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className={cn(
            'font-bold text-foreground mb-2 leading-tight',
            project.size === 'large' ? 'text-xl' : 'text-base',
          )}
        >
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
          {project.size === 'large' ? project.longDescription : project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono border border-indigo-500/20"
            >
              <TrendingUp size={10} />
              {m}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-muted-foreground bg-surface-elevated px-2 py-0.5 rounded-md border border-border/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Projects section rendering responsive Bento grid of featured production systems.
 *
 * @returns Projects showcase section
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-background text-foreground transition-colors duration-200 content-visibility-auto"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge variant="indigo" className="mb-4">
            {t.projects.badge}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t.projects.title}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">{t.projects.subtitle}</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
