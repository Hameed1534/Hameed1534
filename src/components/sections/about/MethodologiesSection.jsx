import Icon from '../../ui/Icon';
import SectionHeading from '../../ui/SectionHeading';
import { sdlc, agile, specialization, credential } from '../../../data/about';

export default function MethodologiesSection() {
  return (
    <section aria-labelledby="methodologies-title" className="mb-20">
      <SectionHeading id="methodologies-title">Methodologies &amp; SDLC</SectionHeading>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {/* SDLC / STLC */}
        <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:shadow-lg md:col-span-2 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-h3">{sdlc.title}</h3>
            <Icon name="account_tree" className="text-primary" />
          </div>
          <p className="mb-6 text-body-md text-on-surface-variant">{sdlc.description}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {sdlc.phases.map((phase) => (
              <div
                key={phase.label}
                className="rounded-lg border border-outline-variant bg-background p-4"
              >
                <span className="mb-2 block font-label-caps text-label-caps text-primary">
                  {phase.label}
                </span>
                <div className="text-body-sm font-bold">{phase.title}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Agile */}
        <article className="flex flex-col justify-between rounded-xl bg-primary p-6 text-on-primary md:p-8">
          <div>
            <h3 className="mb-4 text-h3">{agile.title}</h3>
            <p className="text-body-sm leading-relaxed opacity-90">{agile.description}</p>
          </div>
          <div className="mt-8 border-t border-white/20 pt-6">
            <div className="flex items-center gap-3">
              <Icon name="cycle" filled />
              <span className="font-label-caps text-label-caps uppercase tracking-wider">
                {agile.footerLabel}
              </span>
            </div>
          </div>
        </article>

        {/* API & Automation */}
        <article className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:shadow-lg md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-secondary-container p-2">
              <Icon name="api" className="text-on-secondary-container" />
            </div>
            <h3 className="text-h3">{specialization.title}</h3>
          </div>
          <ul className="space-y-3 text-body-sm text-on-surface-variant">
            {specialization.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Icon name="check_circle" className="!text-[18px] text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Credentials */}
        <article className="relative flex items-center justify-between overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low p-6 md:col-span-2 md:p-8">
          <div className="z-10">
            <span className="mb-2 block font-label-caps text-label-caps uppercase tracking-widest text-primary">
              {credential.eyebrow}
            </span>
            <h3 className="mb-2 text-h3">{credential.title}</h3>
            <p className="text-body-md text-on-surface-variant">{credential.description}</p>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-10">
            <Icon name="verified" className="!text-[120px]" />
          </div>
        </article>
      </div>
    </section>
  );
}