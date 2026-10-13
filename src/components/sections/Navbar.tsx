'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-2xl transition-all duration-300',
          scrolled
            ? 'bg-zinc-950/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30'
            : 'bg-transparent border border-transparent',
        )}
      >
        <nav
          className="flex items-center justify-between px-5 py-3"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 shadow-lg shadow-indigo-600/40 group-hover:bg-indigo-500 transition-colors duration-200">
              <Code2 size={16} className="text-white" />
            </span>
            <span className="font-bold text-sm text-zinc-100 hidden sm:block">
              {personalInfo.name.split(' ')[0]}
              <span className="text-indigo-400">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <button
                id="theme-toggle"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all duration-200"
                aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* CTA */}
            <a
              href={personalInfo.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-book-call"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/25"
            >
              Book a Call
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 md:hidden"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-zinc-800">
                <a
                  href={personalInfo.socials.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
