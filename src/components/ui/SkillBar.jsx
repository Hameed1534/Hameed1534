export default function SkillBar({ label, percent, size = 'lg' }) {
  const large = size === 'lg';

  return (
    <div>
      <div
        className={
          large
            ? 'mb-2 flex justify-between gap-4 text-body-md'
            : 'mb-1 flex justify-between gap-4 text-body-sm font-semibold'
        }
      >
        <span className={large ? 'font-semibold' : undefined}>{label}</span>
        <span className={large ? 'shrink-0 font-bold text-primary' : 'shrink-0'}>{percent}%</span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className={`w-full rounded-full bg-surface-container ${large ? 'h-2' : 'h-1.5'}`}
      >
        <div
          className={`rounded-full bg-primary ${large ? 'h-2' : 'h-1.5'}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}