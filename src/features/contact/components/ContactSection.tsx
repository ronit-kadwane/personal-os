'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, StackOverflowIcon } from '@/components/ui/BrandIcons';
import { Badge } from '@/components/ui/Badge';
import { personalInfo } from '@/data/portfolio';
import { t } from '@/locales';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(80),
  email: z.string().email('Please enter a valid email address'),
  budget: z.string().min(1, 'Please select a project scope'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-surface-elevated/40 text-foreground transition-colors duration-200 content-visibility-auto"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Badge variant="indigo" className="mb-4">
            {t.contact.badge}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact channels */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: t.contact.emailLabel,
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Phone,
                  label: t.contact.phoneLabel,
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: MapPin,
                  label: t.contact.locationLabel,
                  value: personalInfo.location,
                  href: undefined,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Icon size={16} className="text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-xs text-muted font-mono uppercase tracking-wide">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Email CTA Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              id="contact-direct-email"
              className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-200 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-600/30 group-hover:bg-indigo-500 transition-colors">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  {t.contact.sendDirectEmail}
                </div>
                <div className="text-xs text-muted">{personalInfo.email}</div>
              </div>
            </a>

            {/* Social Links */}
            <div>
              <p className="text-xs text-muted uppercase tracking-widest font-mono mb-4">
                {t.contact.findOnline}
              </p>
              <div className="flex gap-3">
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
                    className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-elevated transition-all duration-200 shadow-sm"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-xl"
          >
            {status === 'success' ? (
              <div className="py-12 text-center">
                <CheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t.contact.successTitle}
                </h3>
                <p className="text-muted text-sm max-w-sm mx-auto mb-6">
                  {t.contact.successMessage}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover text-foreground border border-border text-sm font-semibold transition-all cursor-pointer"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm"
                    role="alert"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>
                      {t.contact.errorTitle}. {t.contact.errorMessage} {personalInfo.email}
                    </span>
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide"
                    >
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      {...register('name')}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl bg-surface-elevated border text-foreground placeholder:text-muted/60 text-sm transition-all focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500',
                        errors.name ? 'border-rose-500/50' : 'border-border',
                      )}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide"
                    >
                      {t.contact.emailInputLabel} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder={t.contact.emailPlaceholder}
                      {...register('email')}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl bg-surface-elevated border text-foreground placeholder:text-muted/60 text-sm transition-all focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500',
                        errors.email ? 'border-rose-500/50' : 'border-border',
                      )}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Scope selection */}
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide">
                    {t.contact.budgetLabel} *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {t.contact.budgets.map((b) => (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setValue('budget', b.value, { shouldValidate: true })}
                        className={cn(
                          'px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer',
                          selectedBudget === b.value
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-surface-elevated text-muted hover:text-foreground border-border hover:bg-surface-hover',
                        )}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                  {errors.budget && (
                    <p className="text-xs text-rose-500 mt-1">{errors.budget.message}</p>
                  )}
                </div>

                {/* Project type */}
                <div>
                  <label className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide">
                    {t.contact.projectTypeLabel} *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {t.contact.projectTypes.map((pt) => (
                      <button
                        key={pt.value}
                        type="button"
                        onClick={() => setValue('projectType', pt.value, { shouldValidate: true })}
                        className={cn(
                          'px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer',
                          selectedProjectType === pt.value
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-surface-elevated text-muted hover:text-foreground border-border hover:bg-surface-hover',
                        )}
                      >
                        {pt.label}
                      </button>
                    ))}
                  </div>
                  {errors.projectType && (
                    <p className="text-xs text-rose-500 mt-1">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-muted mb-2 uppercase tracking-wide"
                  >
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    {...register('message')}
                    className={cn(
                      'w-full px-4 py-3 rounded-xl bg-surface-elevated border text-foreground placeholder:text-muted/60 text-sm transition-all focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none',
                      errors.message ? 'border-rose-500/50' : 'border-border',
                    )}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t.contact.submittingButton}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.contact.submitButton}
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
