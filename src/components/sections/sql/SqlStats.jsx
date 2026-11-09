import Icon from '../../ui/Icon';
import { sqlStats as stats } from '../../../data/sql';

const cardClass = 'rounded-xl border border-outline-variant bg-surface p-6 shadow-sm';
const labelClass = 'mb-2 font-label-caps text-label-caps text-on-surface-variant';

export default function SqlStats() {
  const { consistency, drift, suites } = stats;

  return (
    <section aria-label="Database health" className="mt-4 grid grid-cols-1 gap-gutter md:grid-cols-3">
      <article className={cardClass}>
        <h3 className={labelClass}>{consistency.label}</h3>
        <p className="text-h1 text-emerald-600">{consistency.value}</p>
        <div
          role="progressbar"
          aria-label={consistency.label}
          aria-valuenow={consistency.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-container-high"
        >
          <div className="h-full rounded-full bg-emerald-500" style={{ width: `${consistency.percent}%` }} />
        </div>
        <p className="mt-4 text-body-sm text-on-surface-variant">{consistency.note}</p>
      </article>

      <article className={cardClass}>
        <h3 className={labelClass}>{drift.label}</h3>
        <p className="text-h1 text-on-surface">{drift.value}</p>
        <p className={`mt-4 flex items-center gap-2 text-body-sm ${drift.noteClassName ?? 'text-emerald-600'}`}>
          <Icon name={drift.icon ?? 'verified'} />
          {drift.note}
        </p>
      </article>

      <article className={cardClass}>
        <h3 className={labelClass}>{suites.label}</h3>
        <p className="text-h1 text-primary">{suites.value}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {suites.tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-outline-variant/30 bg-surface-container-high px-2 py-0.5 font-label-caps text-[10px]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
