import Icon from '../../ui/Icon';
import ImageWithFallback from '../../ui/ImageWithFallback';
import { defectDensity, sprintVelocity, pipelineCard } from '../../../data/projects';

function DefectDensityCard() {
  const { title, criticalFixed, resolution, note } = defectDensity;

  return (
    <article className="rounded-xl border border-outline-variant bg-surface p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-2">
        <h3 className="text-h3">{title}</h3>
        <Icon name="bug_report" className="text-error" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-body-sm text-on-surface-variant">{criticalFixed.label}</span>
          <span className="text-body-md font-bold">{criticalFixed.value}</span>
        </div>
        <div
          role="progressbar"
          aria-label={criticalFixed.label}
          aria-valuenow={criticalFixed.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high"
        >
          <div className="h-full bg-primary" style={{ width: `${criticalFixed.percent}%` }} />
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-body-sm text-on-surface-variant">{resolution.label}</span>
          <span className="text-body-md font-bold">{resolution.value}</span>
        </div>
        <p className="mt-2 text-xs text-on-surface-variant">{note}</p>
      </div>
    </article>
  );
}

function SprintVelocityCard() {
  const { title, sprints } = sprintVelocity;

  return (
    <article className="rounded-xl border border-outline-variant bg-surface p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-2">
        <h3 className="text-h3">{title}</h3>
        <Icon name="analytics" className="text-primary" />
      </div>
      <div className="mb-4 flex h-24 items-end gap-2" role="img" aria-label="Sprint velocity bar chart">
        {sprints.map(({ label, height, active }) => (
          <div
            key={label}
            className={`w-full rounded-t ${active ? 'bg-primary' : 'bg-surface-container-highest'}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-on-surface-variant">
        {sprints.map(({ label, active }) => (
          <span key={label} className={active ? 'font-bold text-primary' : undefined}>
            {label}
          </span>
        ))}
      </div>
    </article>
  );
}

function PipelineCard() {
  const { title, image, imageAlt, badges } = pipelineCard;

  return (
    <article className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface p-6 shadow-sm">
      <h3 className="mb-4 text-h3">{title}</h3>
      <ImageWithFallback
        src={image}
        alt={imageAlt}
        className="mb-4 h-32 w-full rounded-lg object-cover"
      />
      <ul className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <li
            key={badge}
            className="rounded bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700"
          >
            {badge}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectMetrics() {
  return (
    <section aria-label="Project metrics" className="grid grid-cols-1 gap-gutter md:grid-cols-3">
      <DefectDensityCard />
      <SprintVelocityCard />
      <PipelineCard />
    </section>
  );
}
