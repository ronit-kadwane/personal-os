'use client';

import { Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/ui/BrandIcons';
import { personalInfo } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
              <Code2 size={16} className="text-white" />
            </span>
            <div>
              <div className="text-sm font-bold text-zinc-100">{personalInfo.name}</div>
              <div className="text-xs text-zinc-600">{personalInfo.title}</div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3" role="list" aria-label="Social media links">
            {[
              { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              { icon: TwitterXIcon, href: personalInfo.socials.twitter, label: 'X (Twitter)' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                role="listitem"
                className="w-9 h-9 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:border-zinc-600 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-600 font-mono">
            © {year} {personalInfo.name} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
