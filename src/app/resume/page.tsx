import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';
import { personalInfo, experience, skills, projects } from '@/data/portfolio';
import { t } from '@/locales';

export const metadata: Metadata = {
  title: t.resume.pageTitle,
  description: t.resume.pageDescription,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-10 transition-colors duration-200 print:bg-white print:text-black print:p-0">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            {t.resume.backToPortfolio}
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Ronit_Kadwane_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
            >
              <Download size={14} />
              {t.resume.downloadPdf}
            </a>
          </div>
        </div>

        {/* Resume Paper Container */}
        <article className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl print:border-none print:bg-transparent print:p-0 print:shadow-none">
          {/* Header */}
          <header className="border-b border-border pb-6 mb-8 print:border-zinc-300">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground print:text-black mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 print:text-zinc-800 mb-3">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-muted print:text-zinc-600">
              <span>{personalInfo.location}</span>
              <span>&bull;</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                {personalInfo.email}
              </a>
              <span>&bull;</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
              <span>&bull;</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <span>&bull;</span>
              <a
                href={personalInfo.socials.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                StackOverflow
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-indigo-600 dark:text-indigo-400 print:text-zinc-700 font-bold mb-3">
              {t.resume.executiveSummary}
            </h2>
            <p className="text-sm text-foreground/90 print:text-zinc-800 leading-relaxed">
              {personalInfo.bio}
            </p>
          </section>

          {/* Technical Arsenal */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-indigo-600 dark:text-indigo-400 print:text-zinc-700 font-bold mb-3">
              {t.resume.technicalArsenal}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skills.map((cat) => (
                <div
                  key={cat.category}
                  className="p-3.5 rounded-xl bg-surface-elevated border border-border print:border-zinc-200"
                >
                  <div className="font-semibold text-foreground print:text-black mb-1.5">
                    {cat.category}
                  </div>
                  <div className="text-muted print:text-zinc-700 leading-relaxed">
                    {cat.items.map((i) => i.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-indigo-600 dark:text-indigo-400 print:text-zinc-700 font-bold mb-4">
              {t.resume.professionalExperience}
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-indigo-500/40 pl-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-foreground print:text-black">
                      {exp.role}{' '}
                      <span className="font-normal text-indigo-600 dark:text-indigo-400">
                        @ {exp.company}
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-muted">{exp.period}</span>
                  </div>
                  <p className="text-xs text-muted print:text-zinc-600 mb-2">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-foreground/90 print:text-zinc-700">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Production Systems */}
          <section className="mb-8">
            <h2 className="text-xs uppercase tracking-widest font-mono text-indigo-600 dark:text-indigo-400 print:text-zinc-700 font-bold mb-4">
              {t.resume.featuredProductionSystems}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl bg-surface-elevated border border-border print:border-zinc-200 text-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="font-bold text-foreground print:text-black">{p.title}</div>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline print:text-zinc-800 shrink-0"
                        >
                          {t.resume.liveLink}
                        </a>
                      )}
                    </div>
                    <p className="text-muted print:text-zinc-600 mb-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                    {p.techStack.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
