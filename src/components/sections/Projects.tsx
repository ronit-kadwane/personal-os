'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, TrendingUp } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { projects, type Project } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { formatNumber } from '@/lib/utils';

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

function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.article
      {...useInViewAnimation(delay)}
      className={cn(
        'group relative rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-900/80',
        'transition-all duration-300 hover:border-zinc-700/80 hover:shadow-2xl hover:shadow-indigo-500/5',
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
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Category */}
        <div className="absolute top-4 left-4">
          <Badge variant="default" size="sm" className="bg-black/30 border-white/20 text-white/80">
            {project.category}
          </Badge>
        </div>
        {/* Links */}
        <div className="absolute top-4 right-4 flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-all"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-all"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        {/* GitHub stars */}
        {project.githubStars && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 px-2 py-1 rounded-lg bg-black/30 text-white/80 text-xs font-mono">
            <Star size={10} fill="currentColor" />
            {formatNumber(project.githubStars)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className={cn(
            'font-bold text-zinc-100 mb-2 leading-tight',
            project.size === 'large' ? 'text-xl' : 'text-base',
          )}
        >
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
          {project.size === 'large' ? project.longDescription : project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 text-xs font-mono border border-indigo-500/20"
            >
              <TrendingUp size={10} />
              {m}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div {...useInViewAnimation()} className="mb-14 text-center">
          <Badge variant="indigo" className="mb-4">Featured Work</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Projects & Products
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Production applications serving real users with measurable business impact.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
