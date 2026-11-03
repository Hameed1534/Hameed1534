import { defectTrends } from '../../../data/bugs';

export default function DefectTrends() {
  return (
    <section
      aria-labelledby="trends-title"
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm xl:col-span-8"
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-2">
        <h2 id="trends-title" className="text-h3 text-on-surface">
          {defectTrends.title}
        </h2>
        <ul className="flex gap-4">
          {defectTrends.legend.map(({ label, dotClassName }) => (
            <li key={label} className="flex items-center gap-2 text-body-sm">
              <span className={`h-3 w-3 rounded-full ${dotClassName}`} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div
        role="img"
        aria-label="Bar chart of new and resolved defects per weekday"
        className="relative flex h-[240px] items-end justify-between gap-2 border-b border-l border-outline-variant px-2 md:gap-4 md:px-4"
      >
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between py-2">
          {[0, 1, 2, 3].map((line) => (
            <div key={line} className="w-full border-t border-dashed border-outline-variant/30" />
          ))}
        </div>

        {defectTrends.days.map(({ day, created, resolved }) => (
          <div key={day} className="flex w-full flex-col items-center gap-1">
            <div className="flex h-40 items-end gap-1">
              <div className="w-2 rounded-t-sm bg-primary" style={{ height: `${created}%` }} />
              <div className="w-2 rounded-t-sm bg-secondary" style={{ height: `${resolved}%` }} />
            </div>
            <span className="font-label-caps text-[10px] text-outline">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
