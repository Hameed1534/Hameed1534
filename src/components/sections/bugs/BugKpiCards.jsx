import Icon from '../../ui/Icon';
import { bugKpis } from '../../../data/bugs';

export default function BugKpiCards() {
  return (
    <section
      aria-label="Defect summary"
      className="mb-gutter grid grid-cols-1 gap-gutter md:grid-cols-2 xl:grid-cols-4"
    >
      {bugKpis.map((kpi) => (
        <article
          key={kpi.id}
          className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm"
        >
          <div className="mb-4 flex items-start justify-between gap-2">
            <span className="font-label-caps text-label-caps text-on-surface-variant">{kpi.label}</span>
            <Icon name={kpi.icon} filled={kpi.iconFilled} className={kpi.iconClassName} />
          </div>

          <div className={`text-h2 ${kpi.valueClassName ?? 'text-on-surface'}`}>{kpi.value}</div>

          {kpi.footer && (
            <div className={`mt-2 flex items-center gap-1 text-body-sm ${kpi.footer.className}`}>
              <Icon name={kpi.footer.icon} className="!text-[16px]" />
              {kpi.footer.text}
            </div>
          )}

          {kpi.progress != null && (
            <div
              role="progressbar"
              aria-label={kpi.label}
              aria-valuenow={kpi.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              className="mt-2 h-1.5 w-full rounded-full bg-surface-container-high"
            >
              <div className="h-1.5 rounded-full bg-primary" style={{ width: `${kpi.progress}%` }} />
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
