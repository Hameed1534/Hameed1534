import Icon from '../../ui/Icon';
import BentoCard from '../../ui/BentoCard';
import CardHeading from '../../ui/CardHeading';
import SkillBar from '../../ui/SkillBar';
import { automation } from '../../../data/skills';

export default function AutomationCard() {
  return (
    <BentoCard className="xl:col-span-8" aria-labelledby="automation-title">
      <div className="mb-6 flex items-start justify-between gap-4">
        <CardHeading
          id="automation-title"
          eyebrow={automation.eyebrow}
          title={automation.title}
          icon={automation.icon}
        />
        <span className="flex shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
          <Icon name="check_circle" filled className="!text-sm" />
          <span className="font-label-caps text-label-caps">{automation.badge}</span>
        </span>
      </div>

      <div className="space-y-6">
        {automation.bars.map((bar) => (
          <SkillBar key={bar.label} {...bar} />
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {automation.tags.map((tag) => (
          <li
            key={tag}
            className="rounded bg-surface-variant px-3 py-1 text-body-sm text-on-surface-variant"
          >
            {tag}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
