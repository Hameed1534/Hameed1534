import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { profile, experience } from '../../data/profile';
import { heroStats } from '../../data/overview';

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="home"
      className="mb-16 grid grid-cols-12 items-center gap-gutter md:mb-section-gap"
    >
      {/* Left: text */}
      <div className="col-span-12 xl:col-span-7">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-fixed px-3 py-1 font-label-caps text-label-caps uppercase text-on-primary-fixed">
          <Icon name="workspace_premium" filled className="!text-[14px]" />
          {experience.text}
        </div>

        <h1 className="mb-4 text-h1 text-on-background md:text-display">{profile.role}</h1>

        <p className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-body-md font-semibold text-on-surface">
          <span>{profile.name}</span>
          <span className="flex items-center gap-1 font-normal text-on-surface-variant">
            <Icon name="location_on" className="!text-[18px]" />
            {profile.location}
          </span>
        </p>

        <p className="mb-8 max-w-xl text-body-lg text-on-surface-variant">{profile.summary}</p>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-h3 text-h3 text-on-primary transition-all hover:opacity-90"
          >
            View Projects
            <Icon name="arrow_forward" />
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center rounded-lg border border-outline px-8 py-3 font-h3 text-h3 text-primary transition-all hover:bg-surface-container-low"
          >
            Contact Me
          </Link>
        </div>

        <ul className="flex flex-wrap gap-2">
          {profile.skillTags.map((skill) => (
            <li
              key={skill}
              className="rounded bg-surface-container px-3 py-1 text-body-sm text-on-surface-variant"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: browser-style image card */}
      <div className="relative col-span-12 mt-4 xl:col-span-5 xl:mt-0">
        <div className="overflow-hidden rounded-xl border border-outline-variant bg-white shadow-xl">
          <div className="flex h-8 items-center gap-1.5 border-b border-outline-variant bg-surface-container-high px-4">
            <span className="h-3 w-3 rounded-full bg-error/40" />
            <span className="h-3 w-3 rounded-full bg-tertiary/40" />
            <span className="h-3 w-3 rounded-full bg-primary/40" />
          </div>

          {imageFailed ? (
            <div className="h-64 w-full bg-inverse-surface sm:h-80 xl:h-[400px]" />
          ) : (
            <img
              src="/images/hero-dashboard.png"
              alt="Laptop showing a QA automation dashboard with passing tests"
              fetchPriority="high"
              onError={() => setImageFailed(true)}
              className="h-64 w-full object-cover sm:h-80 xl:h-[400px]"
            />
          )}
        </div>

        {/* Floating pass-rate card */}
        <div className="absolute bottom-4 left-4 rounded-xl border border-outline-variant bg-white p-4 shadow-lg md:-bottom-6 md:-left-6 md:p-6">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            {heroStats.label}
          </span>
          <div className="mt-1 text-3xl font-bold text-primary">{heroStats.value}</div>
          <p className="max-w-[12rem] text-body-sm text-on-surface-variant">{heroStats.note}</p>
        </div>
      </div>
    </section>
  );
}
