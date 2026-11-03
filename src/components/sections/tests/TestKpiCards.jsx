import Icon from '../../ui/Icon';
import { testKpis } from '../../../data/testCases';

export default function TestKpiCards() {
  return (
    <section
      aria-label="Execution summary"
      className="mb-10 grid grid-cols-1 gap-gutter md:grid-cols-2 xl:grid-cols-4"
    >
      {testKpis.map((kpi) => (
        <article
          key={kpi.id}
          className={`rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm ${
            kpi.accent ? 'border-l-4 border-l-error' : ''
          }`}
        >
          <div className="mb-4 flex items-start justify-between gap-2">
            <span className="font-label-caps text-label-caps text-outline">{kpi.label}</span>
            <Icon name={kpi.icon} className={kpi.iconClassName} />
          </div>

          <div className="text-3xl font-bold text-on-surface">{kpi.value}</div>

          {kpi.progress != null && (
            <div
              role="progressbar"
              aria-label={kpi.label}
              aria-valuenow={kpi.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-4 h-2 w-full overflow-hidden rounded-full bg-surface-container-high"
            >
              <div className="h-full bg-emerald-500" style={{ width: `${kpi.progress}%` }} />
            </div>
          )}

          {kpi.note && (
            <p className={`mt-2 text-body-sm ${kpi.noteClassName ?? 'text-outline'}`}>{kpi.note}</p>
          )}
        </article>
      ))}
    </section>
  );
}
