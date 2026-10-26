import Icon from '../../ui/Icon';
import BentoCard from '../../ui/BentoCard';
import CardHeading from '../../ui/CardHeading';
import { apiServices } from '../../../data/skills';

export default function ApiServicesCard() {
  return (
    <BentoCard className="xl:col-span-4" aria-labelledby="api-title">
      <CardHeading
        id="api-title"
        eyebrow={apiServices.eyebrow}
        title={apiServices.title}
        icon={apiServices.icon}
        className="mb-6"
      />

      <ul className="space-y-8">
        {apiServices.tools.map((tool) => (
          <li key={tool.name} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface-container">
              <Icon name={tool.icon} className="text-primary" />
            </div>
            <div>
              <h4 className="text-body-md font-bold">{tool.name}</h4>
              <p className="text-body-sm text-on-surface-variant">{tool.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-lg bg-surface-container-low p-4">
        <p className="text-body-sm italic text-on-surface-variant">{apiServices.quote}</p>
      </div>
    </BentoCard>
  );
}