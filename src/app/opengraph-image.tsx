import { ImageResponse } from 'next/og';
import { personalInfo, skills } from '@/data/portfolio';
import { t } from '@/locales';

export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * Dynamically generates 1200x630 OpenGraph preview card with avatar initials, metrics, and branding.
 *
 * @returns Next.js ImageResponse rendering the OpenGraph social card
 */
export default function Image() {
  const topSkills = skills.flatMap((s) => s.items).slice(0, 4);
  const initials = personalInfo.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return new ImageResponse(
    <div tw="flex flex-col w-full h-full bg-black text-slate-100 p-16 justify-between border-8 border-indigo-900">
      {/* Top Header: Monogram + Availability Status */}
      <div tw="flex items-center justify-between w-full">
        <div tw="flex items-center">
          <div tw="flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-600 text-white font-extrabold text-2xl mr-4">
            {initials}
          </div>
          <div tw="flex flex-col">
            <span tw="text-2xl font-bold text-white">{personalInfo.name}</span>
            <span tw="text-sm font-semibold text-indigo-400">{t.socialCard.systemBadge}</span>
          </div>
        </div>

        <div tw="flex items-center bg-zinc-900 border border-zinc-700 px-5 py-2.5 rounded-full">
          <div tw="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2.5" />
          <span tw="text-sm font-semibold text-slate-200">{personalInfo.availabilityText}</span>
        </div>
      </div>

      {/* Center: Title & Value Proposition */}
      <div tw="flex flex-col max-w-4xl">
        <h1 tw="text-5xl font-black text-white leading-tight mb-4">{personalInfo.title}</h1>
        <p tw="text-xl text-slate-400 leading-normal">{personalInfo.bio}</p>
      </div>

      {/* Bottom Metrics & Core Tech Stack Badges */}
      <div tw="flex items-center justify-between w-full border-t border-zinc-800 pt-6">
        <div tw="flex">
          <div tw="flex flex-col mr-10">
            <span tw="text-3xl font-extrabold text-indigo-500">{t.hero.metrics[0]?.value}</span>
            <span tw="text-xs font-medium text-slate-400">{t.socialCard.experience}</span>
          </div>
          <div tw="flex flex-col mr-10">
            <span tw="text-3xl font-extrabold text-cyan-400">{t.hero.metrics[1]?.value}</span>
            <span tw="text-xs font-medium text-slate-400">{t.socialCard.productionApps}</span>
          </div>
          <div tw="flex flex-col">
            <span tw="text-3xl font-extrabold text-emerald-400">{t.hero.metrics[2]?.value}</span>
            <span tw="text-xs font-medium text-slate-400">{t.socialCard.reliability}</span>
          </div>
        </div>

        <div tw="flex">
          {topSkills.map((tech) => (
            <div
              key={tech.name}
              tw="flex bg-indigo-900 border border-indigo-800 text-indigo-300 px-4 py-2 rounded-lg text-sm font-semibold ml-2.5"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
