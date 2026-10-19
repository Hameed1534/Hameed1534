import Icon from '.Icon';

const tones = {
  pass: { badge: 'bg-emerald-100 text-emerald-700', icon: 'check_circle', filled: true },
  optimal: { badge: 'bg-primary-fixed text-on-primary-fixed', icon: 'trending_up', filled: false },
  pending: { badge: 'bg-amber-100 text-amber-700', icon: 'schedule', filled: false },
};

export default function MetricCard({ label, value, caption, tag, tone }) {
  const style = tones[tone] ?? tones.optimal;

  return (
    <article className="col-span-12 rounded-xl border border-outline-variant bg-white p-6 transition-all hover:shadow-lg md:col-span-4">
      <div className="mb-6 flex items-start justify-between gap-2">
        <span className="font-label-caps text-label-caps text-on-surface-variant">{label}</span>
        <span
          className={`flex shrink-0 items-center gap-1 rounded px-2 py-1 text-[10px] font-bold uppercase ${style.badge}`}
        >
          <Icon name={style.icon} filled={style.filled} className="!text-[12px]" />
          {tag}
        </span>
      </div>
      <div className="mb-2 text-4xl font-bold">{value}</div>
      <div className="text-body-sm text-on-surface-variant">{caption}</div>
    </article>
  );
}