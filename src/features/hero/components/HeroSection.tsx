'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MessageSquare, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, StackOverflowIcon } from '@/components/ui/BrandIcons';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolio';
import { t } from '@/locales';

export function HeroSection() {
  const roles = personalInfo.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole, roles.length]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-background text-foreground transition-colors duration-200"
    >
      {/* Background ambient glows (GPU composited float, zero layout shift) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-violet-500/8 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/6 rounded-full blur-3xl animate-float-slow" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-sm font-medium shadow-sm"
            role="status"
            aria-label={t.hero.availabilityStatus}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {personalInfo.availabilityText}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-4">
          {t.hero.headlinePrefix}{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {t.hero.headlineHighlight}
            </span>
          </span>
          <br />
          {t.hero.headlineSuffix}
        </h1>

        {/* Role ticker */}
        <div
          className="flex justify-center items-center gap-2 mb-6 min-h-[2rem]"
          aria-label={`Current role: ${currentRole}`}
        >
          <Sparkles size={16} className="text-indigo-500 flex-shrink-0" />
          <span className="font-mono text-base sm:text-lg text-muted">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{displayed}</span>
            <span className="animate-pulse text-indigo-500">|</span>
          </span>
        </div>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14">
          <Button
            id="hero-explore-work"
            size="lg"
            onClick={scrollToProjects}
            className="w-full sm:w-auto group"
          >
            {t.common.exploreProjects}
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </Button>

          <a
            href={personalInfo.resumeUrl}
            download="Ronit_Kadwane_Resume.pdf"
            id="hero-download-resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-foreground bg-surface-elevated hover:bg-surface-hover border border-border rounded-xl transition-all duration-200 shadow-sm"
          >
            <Download size={16} className="text-indigo-500" />
            {t.common.downloadResumePdf}
          </a>

          <Button
            id="hero-contact-cta"
            size="lg"
            variant="secondary"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <MessageSquare size={16} />
            {t.common.getInTouch}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-16">
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
              className="p-2.5 rounded-xl text-muted hover:text-foreground hover:bg-surface-elevated border border-border transition-all duration-200 shadow-sm"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Metrics row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {t.hero.metrics.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{value}</div>
              <div className="text-xs text-muted mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] text-muted uppercase tracking-widest font-mono">
            {t.common.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-muted" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
