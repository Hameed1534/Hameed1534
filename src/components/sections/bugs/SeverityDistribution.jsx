import { severityDistribution as data } from '../../../data/bugs';

export default function SeverityDistribution() {
  // Each segment starts where the previous one ended.
  let offset = 0;
  const arcs = data.segments.map((segment) => {
    const arc = { ...segment, offset };
    offset += segment.percent;
    return arc;
  });

  return (
    <section
      aria-labelledby="severity-title"
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm xl:col-span-4"
    >
      <h2 id="severity-title" className="mb-6 text-h3 text-on-surface">
        {data.title}
      </h2>

      <div className="flex items-center justify-center py-4">
        <div
          role="img"
          aria-label={`${data.total} ${data.totalLabel}: ${data.segments
            .map((s) => `${s.label} ${s.percent}%`)
            .join(', ')}`}
          className="relative h-40 w-40"
        >
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              strokeWidth="3.6"
              className="stroke-surface-container-high"
            />
            {arcs.map(({ label, percent, offset: start, strokeClassName }) => (
              <circle
                key={label}
                cx="18"
                cy="18"
                r="15.9155"
                fill="none"
                strokeWidth="3.6"
                strokeDasharray={`${percent} ${100 - percent}`}
                strokeDashoffset={-start}
                className={strokeClassName}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-h2 font-bold">{data.total}</span>
            <span className="text-body-sm text-on-surface-variant">{data.totalLabel}</span>
          </div>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {data.segments.map(({ label, percent, dotClassName }) => (
          <li key={label} className="flex items-center justify-between text-body-sm">
            <span className="flex items-center gap-2">
              <span className={`h-3 w-3 rounded-full ${dotClassName}`} />
              {label}
            </span>
            <span className="font-semibold">{percent}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
