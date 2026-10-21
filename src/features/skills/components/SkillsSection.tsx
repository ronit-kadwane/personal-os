'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { skills, type Skill } from '@/data/portfolio';
import { t } from '@/locales';
import { cn } from '@/lib/utils';

type SkillLevel = 'expert' | 'advanced' | 'proficient';

function getProficiencyValue(level: SkillLevel): number {
  if (level === 'expert') return 100;
  if (level === 'advanced') return 80;
  return 60;
}

function getProficiencyWidth(level: SkillLevel): string {
  if (level === 'expert') return '100%';
  if (level === 'advanced') return '80%';
  return '60%';
}

const levelConfig: Record<SkillLevel, { label: string; color: string; textColor: string }> = {
  expert: {
    label: t.skills.legendExpert,
    color: 'bg-indigo-500',
    textColor: 'text-indigo-600 dark:text-indigo-400',
  },
  advanced: {
    label: t.skills.legendAdvanced,
    color: 'bg-cyan-500',
    textColor: 'text-cyan-700 dark:text-cyan-400',
  },
  proficient: {
    label: t.skills.legendProficient,
    color: 'bg-emerald-500',
    textColor: 'text-emerald-700 dark:text-emerald-400',
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-background text-foreground transition-colors duration-200"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge variant="indigo" className="mb-4">
            {t.skills.badge}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.skills.title}</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          {(['expert', 'advanced', 'proficient'] as const).map((key) => {
            const item = levelConfig[key];
            return (
              <div key={key} className="flex items-center gap-2 text-sm text-muted">
                <span className={cn('w-2.5 h-2.5 rounded-full', item.color)} aria-hidden="true" />
                {item.label}
              </div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((category: Skill, ci: number) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl bg-card border border-border p-5 hover:border-border-hover transition-colors duration-300 shadow-sm"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl" aria-hidden="true" role="img">
                  {category.icon}
                </span>
                <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3.5">
                {category.items.map((skill, si) => {
                  const config = levelConfig[skill.level];
                  const ariaValue = getProficiencyValue(skill.level);
                  const barWidth = getProficiencyWidth(skill.level);

                  return (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-foreground font-medium">{skill.name}</span>
                        <span
                          className={cn('text-[10px] font-mono font-semibold', config.textColor)}
                        >
                          {config.label}
                        </span>
                      </div>
                      {/* Proficiency bar */}
                      <div
                        className="h-1 bg-surface-elevated rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={ariaValue}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency: ${config.label}`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: barWidth }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: si * 0.08 + ci * 0.1,
                            ease: 'easeOut',
                          }}
                          className={cn('h-full rounded-full', config.color)}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
