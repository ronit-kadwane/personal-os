'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/ui/BrandIcons';
import { personalInfo } from '@/data/portfolio';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  budget: z.string().min(1, 'Please select a budget range'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const budgetRanges = [
  '$2K – $5K',
  '$5K – $15K',
  '$15K – $50K',
  '$50K+',
  'Full-time Role',
];

const projectTypes = [
  'Full-Stack Web App',
  'AI / ML Integration',
  'API & Backend',
  'Code Review / Audit',
  'Consulting',
  'Other',
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { budget: '', projectType: '' },
  });

  const selectedBudget = watch('budget');
  const selectedProjectType = watch('projectType');

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    // Simulate API call — replace with actual form endpoint (e.g., Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    // In production: POST to /api/contact with validated data
    setStatus('success');
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge variant="indigo" className="mb-4">Let&apos;s Connect</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Start a Project
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Have an idea or a role to fill? I&apos;d love to hear about it.
            Typically respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon size={15} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-600 font-mono uppercase tracking-wide">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-zinc-300 hover:text-white transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-300">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Book a call CTA */}
            <a
              href={personalInfo.socials.calendly}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-book-call"
              className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:bg-indigo-500 transition-colors">
                <Calendar size={18} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">Schedule a Free Call</div>
                <div className="text-xs text-zinc-500">30-min intro via Calendly</div>
              </div>
            </a>

            {/* Socials */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono mb-4">Find me online</p>
              <div className="flex gap-3">
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
                    className="w-10 h-10 rounded-xl border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-20 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
                <CheckCircle size={40} className="text-emerald-400" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm">
                    Thanks for reaching out. I&apos;ll reply within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
                aria-label="Contact form"
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Your Name <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      {...register('name')}
                      placeholder="Jane Doe"
                      className={cn(
                        'w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200',
                        errors.name ? 'border-rose-500/60' : 'border-zinc-700 focus:border-indigo-500/60',
                      )}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                        <AlertCircle size={10} />
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Email <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      {...register('email')}
                      placeholder="jane@company.com"
                      className={cn(
                        'w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200',
                        errors.email ? 'border-rose-500/60' : 'border-zinc-700 focus:border-indigo-500/60',
                      )}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                        <AlertCircle size={10} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">
                    Budget Range <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setValue('budget', b)}
                        className={cn(
                          'px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200',
                          selectedBudget === b
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 bg-zinc-800/40',
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register('budget')} />
                  {errors.budget && (
                    <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                      <AlertCircle size={10} />
                      {errors.budget.message}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">
                    Project Type <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setValue('projectType', t)}
                        className={cn(
                          'px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200',
                          selectedProjectType === t
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-500 bg-zinc-800/40',
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" {...register('projectType')} />
                  {errors.projectType && (
                    <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                      <AlertCircle size={10} />
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Tell me about your project <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    {...register('message')}
                    placeholder="Brief description of what you're building, the problem you're solving, and what kind of help you need..."
                    className={cn(
                      'w-full px-4 py-2.5 rounded-xl bg-zinc-800/60 border text-zinc-100 text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-200 resize-none',
                      errors.message ? 'border-rose-500/60' : 'border-zinc-700 focus:border-indigo-500/60',
                    )}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 mt-1 text-xs text-rose-400">
                      <AlertCircle size={10} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    <AlertCircle size={14} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:pointer-events-none text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/25"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
