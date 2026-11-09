import Icon from '../../ui/Icon';
import { pipeline } from '../../../data/automation';

const tones = {
  default: { wrapper: 'border-outline', circle: 'bg-primary/20', icon: 'text-primary-fixed-dim' },
  active: {
    wrapper: 'border-primary shadow-[0_0_15px_rgba(37,99,235,0.2)]',
    circle: 'bg-primary',
    icon: 'text-white',
  },
  success: { wrapper: 'border-outline', circle: 'bg-emerald-500/20', icon: 'text-emerald-400' },
};

export default function PipelineWorkflow() {
  return (
    <section
      id="workflow"
      aria-labelledby="pipeline-title"
      className="relative overflow-hidden rounded-xl bg-inverse-surface p-6 text-inverse-on-surface md:p-8 xl:col-span-12"
    >
      <div className="mb-8">
        <span className="font-label-caps text-label-caps uppercase text-primary-fixed-dim">
          {pipeline.eyebrow}
        </span>
        <h2 id="pipeline-title" className="mt-1 text-h2">
          {pipeline.title}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-outline-variant/20 md:block" />
        <ol className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
          {pipeline.steps.map(({ icon, title, subtitle, tone }) => {
            const style = tones[tone] ?? tones.default;
            return (
              <li
                key={title}
                className={`z-10 w-full rounded-lg border bg-inverse-surface p-4 text-center md:w-auto ${style.wrapper}`}
              >
                <div
                  className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full ${style.circle}`}
                >
                  <Icon name={icon} className={style.icon} />
                </div>
                <p className="font-label-caps text-label-caps">{title}</p>
                <p className="text-[10px] opacity-60">{subtitle}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
