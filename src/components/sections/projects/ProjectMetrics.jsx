import Icon from '../../ui/Icon';
import { testingVolume, testingTypes, toolbox } from '../../../data/projects';

function VolumeCard() {
  const { title, icon, rows, note } = testingVolume;

  return (
    <article className="rounded-xl border border-outline-variant bg-surface p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-2">
        <h3 className="text-h3">{title}</h3>
        <Icon name={icon} className="text-primary" />
      </div>
      <dl className="space-y-4">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-2">
            <dt className="text-body-sm text-on-surface-variant">{label}</dt>
            <dd className="text-h3 text-primary">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-on-surface-variant">{note}</p>
    </article>
  );
}

function ChipsCard({ title, icon, items }) {
  return (
    <article className="rounded-xl border border-outline-variant bg-surface p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-2">
        <h3 className="text-h3">{title}</h3>
        <Icon name={icon} className="text-primary" />
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded bg-surface-container-high px-3 py-1 text-body-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProjectMetrics() {
  return (
    <section aria-label="Testing summary" className="grid grid-cols-1 gap-gutter md:grid-cols-3">
      <VolumeCard />
      <ChipsCard {...testingTypes} />
      <ChipsCard {...toolbox} />
    </section>
  );
}
