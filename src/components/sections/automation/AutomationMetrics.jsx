import Icon from '../../ui/Icon';
import { automationMetrics as metrics } from '../../../data/automation';

const cardClass =
  'rounded-xl border border-outline-variant bg-surface-container-lowest p-6 xl:col-span-4';

function BigValue({ value, unit }) {
  return (
    <span className="text-display leading-none text-on-surface">
      {value}
      <span className="text-h2">{unit}</span>
    </span>
  );
}

function CoverageCard() {
  const { label, value, unit, delta, percent, note } = metrics.coverage;
  return (
    <article className={cardClass}>
      <h3 className="mb-4 font-label-caps text-label-caps uppercase text-on-surface-variant">{label}</h3>
      <div className="mb-2 flex items-end justify-between gap-2">
        <BigValue value={value} unit={unit} />
        <span className="font-label-caps text-label-caps text-emerald-500">{delta}</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-surface-container-high"
      >
        <div className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-4 text-body-sm text-on-surface-variant">{note}</p>
    </article>
  );
}

function BuildTimeCard() {
  const { label, value, unit, tag, bars, activeIndex, note } = metrics.buildTime;
  return (
    <article className={cardClass}>
      <h3 className="mb-4 font-label-caps text-label-caps uppercase text-on-surface-variant">{label}</h3>
      <div className="mb-2 flex items-end justify-between gap-2">
        <BigValue value={value} unit={unit} />
        <span className="font-label-caps text-label-caps text-secondary">{tag}</span>
      </div>
      <div className="mt-4 flex h-8 items-end gap-1" role="img" aria-label="Recent build durations">
        {bars.map((height, index) => (
          <div
            key={index}
            className={`flex-1 rounded-t-sm ${
              index === activeIndex ? 'bg-primary' : 'bg-outline-variant'
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <p className="mt-4 text-body-sm text-on-surface-variant">{note}</p>
    </article>
  );
}

function FlakinessCard() {
  const { label, value, unit, tag, quote } = metrics.flakiness;
  return (
    <article className={cardClass}>
      <h3 className="mb-4 font-label-caps text-label-caps uppercase text-on-surface-variant">{label}</h3>
      <div className="mb-2 flex items-end justify-between gap-2">
        <BigValue value={value} unit={unit} />
        <span className="flex items-center gap-1 font-label-caps text-label-caps text-emerald-500">
          <Icon name="verified" className="!text-xs" />
          {tag}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded border border-outline-variant/20 bg-surface-container-low p-3">
        <Icon name="auto_fix_high" className="text-primary" />
        <span className="text-body-sm italic">{quote}</span>
      </div>
    </article>
  );
}

export default function AutomationMetrics() {
  return (
    <>
      <CoverageCard />
      <BuildTimeCard />
      <FlakinessCard />
    </>
  );
}
