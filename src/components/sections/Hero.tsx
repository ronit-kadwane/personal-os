'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Calendar, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/ui/BrandIcons';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.roles;
  const currentRole = roles[roleIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole, roles.length]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/6 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium"
            role="status"
            aria-label="Availability status"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {personalInfo.availabilityText}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.08] mb-4"
        >
          I build{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              extraordinary
            </span>
          </span>
          <br />
          digital products.
        </motion.h1>

        {/* Role ticker */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex justify-center items-center gap-2 mb-6 h-8"
          aria-label={`Current role: ${currentRole}`}
        >
          <Sparkles size={16} className="text-indigo-400 flex-shrink-0" />
          <span className="font-mono text-lg text-zinc-400">
            <span className="text-indigo-400">{displayed}</span>
            <span className="animate-pulse text-indigo-400">|</span>
          </span>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            id="hero-explore-work"
            size="lg"
            onClick={scrollToProjects}
            className="w-full sm:w-auto group"
          >
            Explore My Work
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </Button>

          <a
            href={personalInfo.resumeUrl}
            download
            id="hero-download-resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-100 rounded-xl transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>

          <a
            href={personalInfo.socials.calendly}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-book-call"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/60 hover:bg-cyan-500/5 rounded-xl transition-all duration-200"
          >
            <Calendar size={16} />
            Book a Call
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
            { icon: TwitterXIcon, href: personalInfo.socials.twitter, label: 'X / Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl text-zinc-500 hover:text-zinc-100 hover:bg-white/5 border border-transparent hover:border-zinc-700 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Metrics row */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: '5+', label: 'Years Building' },
            { value: '30+', label: 'Projects Shipped' },
            { value: '$2M+', label: 'Revenue Enabled' },
            { value: '20+', label: 'Happy Clients' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-zinc-100">{value}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-zinc-600" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
