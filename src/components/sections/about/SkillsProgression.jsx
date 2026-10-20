import SectionHeading from '../../ui/SectionHeading';
import { skillGroups } from '../../../data/about';

export default function SkillsProgression() {
  return (
    <section aria-labelledby="skills-title" className="min-w-0">
      <SectionHeading id="skills-title">Skills Progression</SectionHeading>

      <div className="space-y-8 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8">
        {skillGroups.map(({ name, level, percent, tools }) => (
          <div key={name} className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-body-md font-bold">{name}</span>
              <span className="shrink-0 font-label-caps text-label-caps text-primary">{level}</span>
            </div>

            <div
              role="progressbar"
              aria-label={`${name} proficiency`}
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-2 w-full overflow-hidden rounded-full bg-surface-container"
            >
              <div className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
            </div>

            <ul className="mt-2 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded bg-surface-container-high px-2 py-1 font-code text-[11px]"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}