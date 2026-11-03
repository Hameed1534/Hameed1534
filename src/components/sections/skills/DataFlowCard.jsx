import BentoCard from '../../ui/BentoCard';
import CardHeading from '../../ui/CardHeading';
import SkillBar from '../../ui/SkillBar';
import { dataFlow } from '../../../data/skills';

export default function DataFlowCard() {
  return (
    <BentoCard className="xl:col-span-8" aria-labelledby="dataflow-title">
      <CardHeading
        id="dataflow-title"
        eyebrow={dataFlow.eyebrow}
        title={dataFlow.title}
        icon={dataFlow.icon}
        className="mb-6"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {dataFlow.columns.map((column) => (
          <div key={column.heading}>
            <h4 className="mb-4 font-label-caps text-label-caps text-outline">{column.heading}</h4>
            <div className="space-y-4">
              {column.bars.map((bar) => (
                <SkillBar key={bar.label} size="sm" {...bar} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
