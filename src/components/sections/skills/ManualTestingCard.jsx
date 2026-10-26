import Icon from '../../ui/Icon';
import BentoCard from '../../ui/BentoCard';
import CardHeading from '../../ui/CardHeading';
import { manualTesting } from '../../../data/skills';

export default function ManualTestingCard() {
  return (
    <BentoCard className="xl:col-span-4" aria-labelledby="manual-title">
      <CardHeading
        id="manual-title"
        eyebrow={manualTesting.eyebrow}
        title={manualTesting.title}
        icon={manualTesting.icon}
        className="mb-6"
      />

      <ul className="space-y-4">
        {manualTesting.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-body-md">
            <Icon name="done_all" className="text-emerald-600" />
            {item}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}