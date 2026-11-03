import Icon from '../../ui/Icon';
import Pill from '../../ui/Pill';
import ImageWithFallback from '../../ui/ImageWithFallback';
import { flagshipProject as project } from '../../../data/projects';

export default function FlagshipProject() {
  return (
    <section aria-labelledby="flagship-title" className="grid grid-cols-12 gap-gutter">
      {/* Image with overlay */}
      <div className="group relative col-span-12 min-h-[18rem] overflow-hidden rounded-xl border border-outline-variant xl:col-span-5">
        <ImageWithFallback
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white md:p-8">
          <h2 id="flagship-title" className="mb-2 text-h2">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Pill
              icon="check_circle"
              filled
              iconClassName="!text-xs"
              className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300"
            >
              {project.passRate}
            </Pill>
            <span className="text-sm text-white/80">{project.methodology}</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="col-span-12 space-y-6 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8 xl:col-span-7">
        <dl className="grid grid-cols-2 gap-4 border-b border-outline-variant pb-6 md:grid-cols-4">
          {project.facts.map(({ label, value }) => (
            <div key={label}>
              <dt className="mb-1 font-label-caps text-label-caps text-on-surface-variant">{label}</dt>
              <dd className="text-body-md font-semibold">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-4">
          <h3 className="text-h3 text-on-surface">{project.responsibilitiesTitle}</h3>
          <ul className="space-y-2">
            {project.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-body-md">
                <Icon name="task_alt" className="mt-1 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 pt-4">
          <p className="font-label-caps text-label-caps text-on-surface-variant">
            {project.techStackLabel}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded bg-surface-container-high px-3 py-1 text-body-sm font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
