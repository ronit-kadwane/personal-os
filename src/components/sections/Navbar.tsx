'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeSelector, MobileThemeSelector } from '@/components/ui/ThemeSelector';
import { personalInfo } from '@/data/portfolio';
import { t } from '@/locales';
import { cn } from '@/lib/utils';

/**
 * Floating responsive navigation header with scroll elevation, section smooth scrolling,
 * brand logo, and 3-way theme selector.
 *
 * @returns Navbar component
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-2xl transition-all duration-300',
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl border border-border shadow-xl shadow-black/10 dark:shadow-black/50'
            : 'bg-surface/75 backdrop-blur-lg border border-border/80 shadow-md shadow-black/5 dark:shadow-black/20',
        )}
      >
        <nav
          className="flex items-center justify-between px-5 py-3"
          role="navigation"
          aria-label={t.nav.home}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label={t.nav.home}
          >
            <Logo size={32} className="transition-transform duration-200 group-hover:scale-105" />
            <span className="font-bold text-sm text-foreground hidden sm:block">
              {personalInfo.name}
              <span className="text-indigo-500">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-sm text-muted hover:text-foreground rounded-lg hover:bg-surface-elevated transition-all duration-200 font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Selector (System, Light, Dark) */}
            <ThemeSelector />

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              id="nav-contact-btn"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {t.nav.getInTouch}
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-xl text-muted hover:text-foreground hover:bg-surface-elevated border border-border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-surface/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-4 md:hidden"
            role="dialog"
            aria-label={t.nav.openMenu}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-surface-elevated rounded-xl transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-200"
                >
                  {t.nav.getInTouch}
                </button>
              </li>
              <li>
                <MobileThemeSelector />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
