'use client';

import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { GithubIcon, LinkedinIcon, StackOverflowIcon } from '@/components/ui/BrandIcons';
import { Tooltip, toast } from '@/components/ui';
import { personalInfo } from '@/data/portfolio';
import { t } from '@/locales';

/**
 * Site-wide footer displaying identity monogram, copyright metadata, verified social profiles,
 * and direct email / copy email actions with accessible tooltips.
 *
 * @returns Footer component
 */
export function Footer() {
  const year = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      toast(t.common.emailCopied);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <footer className="border-t border-border bg-surface py-10 px-6 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <div>
              <div className="text-sm font-bold text-foreground">{personalInfo.name}</div>
              <div className="text-xs text-muted">{t.footer.tagline}</div>
            </div>
          </div>

          {/* Socials & Contact Actions */}
          <div
            className="flex items-center gap-2.5"
            role="list"
            aria-label="Social and contact links"
          >
            {[
              {
                icon: GithubIcon,
                href: personalInfo.socials.github,
                label: 'GitHub',
                tooltip: t.tooltips.githubProfile,
              },
              {
                icon: LinkedinIcon,
                href: personalInfo.socials.linkedin,
                label: 'LinkedIn',
                tooltip: t.tooltips.linkedinProfile,
              },
              {
                icon: StackOverflowIcon,
                href: personalInfo.socials.stackoverflow,
                label: 'StackOverflow',
                tooltip: t.tooltips.stackoverflowProfile,
              },
            ].map(({ icon: Icon, href, label, tooltip }) => (
              <Tooltip key={label} content={tooltip}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-elevated transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Icon size={14} />
                </a>
              </Tooltip>
            ))}

            {/* Direct Email (mailto:) */}
            <Tooltip content={t.tooltips.sendDirectEmail}>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={t.tooltips.sendDirectEmail}
                role="listitem"
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-elevated transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <Mail size={14} />
              </a>
            </Tooltip>

            {/* 1-Click Copy Email */}
            <Tooltip content={t.tooltips.copyEmailAddress}>
              <button
                onClick={handleCopyEmail}
                aria-label={t.tooltips.copyEmailAddress}
                role="listitem"
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-elevated transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {copiedEmail ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </Tooltip>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted font-mono">
            &copy; {year} {personalInfo.name} &middot; {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
