import { regressionHealth as data } from '../../../data/testCases';

export default function RegressionHealth() {
  return (
    <section
      aria-labelledby="health-title"
      className="flex-1 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm"
    >
      <h2 id="health-title" className="mb-4 font-label-caps text-label-caps uppercase text-outline">
        {data.title}
      </h2>

      <div className="flex items-center justify-center py-4">
        <div
          role="img"
          aria-label={`${data.percent}% automation coverage`}
          className="relative h-32 w-32"
        >
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3" className="stroke-slate-200" />
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              strokeWidth="3"
              strokeDasharray={`${data.percent} 100`}
              className="stroke-primary"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary">
            {data.percent}%
          </div>
        </div>
      </div>

      <p className="px-4 text-center text-body-sm text-outline">{data.note}</p>
    </section>
  );
}
