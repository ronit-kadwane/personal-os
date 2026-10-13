'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const levelConfig = {
  expert: { label: 'Expert', color: 'bg-indigo-500', width: 'w-full', textColor: 'text-indigo-400' },
  advanced: { label: 'Advanced', color: 'bg-cyan-500', width: 'w-4/5', textColor: 'text-cyan-400' },
  proficient: { label: 'Proficient', color: 'bg-emerald-500', width: 'w-3/5', textColor: 'text-emerald-400' },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge variant="indigo" className="mb-4">Technical Arsenal</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Technologies I work with daily to ship production software.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          {Object.entries(levelConfig).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2 text-sm text-zinc-500">
              <span className={cn('w-2.5 h-2.5 rounded-full', color)} aria-hidden="true" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl bg-zinc-900 border border-zinc-800/60 p-5 hover:border-zinc-700 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl" aria-hidden="true" role="img">{category.icon}</span>
                <h3 className="text-sm font-semibold text-zinc-200">{category.category}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3.5">
                {category.items.map((skill, si) => {
                  const config = levelConfig[skill.level];
                  return (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-zinc-300 font-medium">{skill.name}</span>
                        <span className={cn('text-[10px] font-mono font-semibold', config.textColor)}>
                          {config.label}
                        </span>
                      </div>
                      {/* Proficiency bar */}
                      <div
                        className="h-1 bg-zinc-800 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level === 'expert' ? 100 : skill.level === 'advanced' ? 80 : 60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${config.label}`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: config.width.replace('w-', '') }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: si * 0.08 + ci * 0.1, ease: 'easeOut' }}
                          className={cn('h-full rounded-full', config.color)}
                          style={{
                            width:
                              skill.level === 'expert'
                                ? '100%'
                                : skill.level === 'advanced'
                                ? '80%'
                                : '60%',
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech badges cloud */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono mb-6">
            Also comfortable with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'ElasticSearch', 'Kafka', 'RabbitMQ', 'WebSockets', 'tRPC',
              'Prisma', 'Drizzle', 'Zustand', 'React Query', 'Playwright',
              'Jest', 'Vitest', 'GitHub Actions', 'Datadog', 'Sentry',
            ].map((t) => (
              <Badge key={t} size="sm">
                {t}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
