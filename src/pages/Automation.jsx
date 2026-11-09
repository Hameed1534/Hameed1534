import PageHeader from '../components/ui/PageHeader';
import Icon from '../components/ui/Icon';
import PomDiagram from '../components/sections/automation/PomDiagram';
import MavenStructure from '../components/sections/automation/MavenStructure';
import PipelineWorkflow from '../components/sections/automation/PipelineWorkflow';
import { automationHeader } from '../data/automation';
import usePageTitle from '../hooks/usePageTitle';

export default function Automation() {
  usePageTitle('Automation');

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow={automationHeader.eyebrow}
        title={automationHeader.title}
        description={automationHeader.description}
        className="mb-12"
      >
        <ul className="flex flex-wrap gap-3">
          {automationHeader.chips.map(({ id, label, dot, icon }) => (
            <li
              key={id}
              className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-highest px-4 py-2"
            >
              {dot && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
              {icon && <Icon name={icon} className="!text-sm" />}
              <span className="font-label-caps text-label-caps">{label}</span>
            </li>
          ))}
        </ul>
      </PageHeader>

      <div className="grid grid-cols-1 gap-gutter xl:grid-cols-12">
        <PomDiagram />
        <MavenStructure />
        <PipelineWorkflow />
      </div>
    </div>
  );
}
