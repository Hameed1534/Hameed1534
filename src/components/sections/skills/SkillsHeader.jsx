import { skillsHeader } from '../../../data/skills';

export default function SkillsHeader() {
  return (
    <header className="mb-10">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-caps text-label-caps text-primary">
          {skillsHeader.badge}
        </span>
        <span className="font-label-caps text-label-caps text-on-surface-variant">
          {skillsHeader.updatedLabel}
        </span>
      </div>
      <h1 className="text-h1 text-on-surface">{skillsHeader.title}</h1>
      <p className="mt-2 max-w-3xl text-body-lg text-on-surface-variant">
        {skillsHeader.description}
      </p>
    </header>
  );
}