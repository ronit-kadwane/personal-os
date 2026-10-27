import { Logo } from '@/components/ui/Logo';
import { GithubIcon, LinkedinIcon, StackOverflowIcon } from '@/components/ui/BrandIcons';
import { personalInfo } from '@/data/portfolio';
import { t } from '@/locales';

/**
 * Site-wide footer displaying identity monogram, copyright metadata, and verified social profiles.
 *
 * @returns Footer component
 */
export function Footer() {
  const year = new Date().getFullYear();

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

          {/* Socials */}
          <div className="flex items-center gap-3" role="list" aria-label="Social media links">
            {[
              { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
              {
                icon: StackOverflowIcon,
                href: personalInfo.socials.stackoverflow,
                label: 'StackOverflow',
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                role="listitem"
                className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-elevated transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
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
