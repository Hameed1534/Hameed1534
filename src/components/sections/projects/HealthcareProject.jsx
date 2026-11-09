import Icon from '../../ui/Icon';
import { otherProjects } from '../../../data/projects';

// Two project cards side by side (Neutix and the corporate website).
export default function HealthcareProject() {
  return (
    <section aria-label="More projects" className="grid grid-cols-1 gap-gutter md:grid-cols-2">
      {otherProjects.map((project) => (
        <article
          key={project.title}
          className="flex flex-col space-y-6 rounded-xl border border-outline-variant bg-surface p-6 md:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-xl bg-primary-fixed p-3 text-primary">
              <Icon name={project.icon} />
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                {project.eyebrow}
              </span>
              <h2 className="text-h3">{project.title}</h2>
            </div>
          </div>

          <p className="flex-grow text-body-md text-on-surface-variant">{project.description}</p>

          <dl className="grid grid-cols-2 gap-4">
            {project.stats.map(({ label, value, valueClassName }) => (
              <div key={label} className="rounded-lg border border-outline-variant bg-background p-4">
                <dt className="mb-1 font-label-caps text-label-caps text-on-surface-variant">{label}</dt>
                <dd className={`text-body-md font-bold ${valueClassName}`}>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="space-y-2">
            <p className="font-label-caps text-label-caps text-on-surface-variant">
              {project.challengeLabel}
            </p>
            <p className="border-l-2 border-outline pl-4 text-body-sm italic">{project.challenge}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
