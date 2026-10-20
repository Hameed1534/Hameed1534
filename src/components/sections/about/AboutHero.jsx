import { useState } from 'react';
import Icon from '../../ui/Icon';
import { aboutHero } from '../../../data/about';

export default function AboutHero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      aria-labelledby="about-title"
      className="mb-20 grid grid-cols-1 items-center gap-gutter lg:grid-cols-12"
    >
      <div className="lg:col-span-7">
        <span className="mb-4 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
          {aboutHero.eyebrow}
        </span>
        <h1 id="about-title" className="mb-6 text-h1">
          {aboutHero.heading}
        </h1>
        <p className="mb-8 text-body-lg leading-relaxed text-on-surface-variant">
          {aboutHero.summary}
        </p>

        <ul className="flex flex-wrap gap-4">
          {aboutHero.domains.map(({ label, icon }) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2"
            >
              <Icon name={icon} className="!text-[20px] text-primary" />
              <span className="text-body-sm font-semibold">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
        <div className="aspect-square overflow-hidden rounded-xl border-4 border-surface-container-highest shadow-xl">
          {imageFailed ? (
            <div className="flex h-full w-full items-center justify-center bg-surface-container-high text-primary">
              <Icon name="person" className="!text-[120px]" />
            </div>
          ) : (
            <img
              src={aboutHero.image}
              alt={aboutHero.imageAlt}
              fetchPriority="high"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="absolute bottom-4 left-4 rounded-lg bg-primary p-4 text-on-primary shadow-lg md:-bottom-6 md:-left-6 md:p-6">
          <div className="text-[32px] font-bold">{aboutHero.badgeValue}</div>
          <div className="font-label-caps text-label-caps uppercase opacity-80">
            {aboutHero.badgeLabel}
          </div>
        </div>
      </div>
    </section>
  );
}