import SectionHeading from '../../ui/SectionHeading';
import { experience } from '../../../data/about';

export default function CareerTimeline() {
  return (
    <section aria-labelledby="career-title" className="min-w-0">
      <SectionHeading id="career-title">Career Experience</SectionHeading>

      <ol className="space-y-8">
        {experience.map((job, index) => {
          const isCurrent = index === 0;
          const isLast = index === experience.length - 1;

          return (
            <li key={`${job.company}-${job.period}`} className="relative pl-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 z-10 flex h-6 w-6 items-center justify-center rounded-full ${
                  isCurrent ? 'bg-primary' : 'bg-outline-variant'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 left-[11px] top-6 w-0.5 bg-outline-variant"
                />
              )}

              <div>
                <div
                  className={`mb-1 font-label-caps text-label-caps ${
                    isCurrent ? 'text-primary' : 'text-outline'
                  }`}
                >
                  {job.period}
                </div>
                <h3 className="mb-1 text-h3">{job.role}</h3>
                <div className="mb-3 text-body-md font-semibold text-on-surface-variant">
                  {job.company}
                </div>
                <p className="text-body-sm leading-relaxed text-on-surface-variant">
                  {job.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}