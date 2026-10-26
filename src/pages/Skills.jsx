import SkillsHeader from '../components/sections/skills/SkillsHeader';
import AutomationCard from '../components/sections/skills/AutomationCard';
import ApiServicesCard from '../components/sections/skills/ApiServicesCard';
import ManualTestingCard from '../components/sections/skills/ManualTestingCard';
import DataFlowCard from '../components/sections/skills/DataFlowCard';
import TrackingCard from '../components/sections/skills/TrackingCard';
import SkillMaturityMatrix from '../components/sections/skills/SkillMaturityMatrix';
import usePageTitle from '../hooks/usePageTitle';

export default function Skills() {
  usePageTitle('Technical Skills');

  return (
    <div className="pb-8">
      <SkillsHeader />

      <div className="grid grid-cols-1 gap-gutter xl:grid-cols-12">
        <AutomationCard />
        <ApiServicesCard />
        <ManualTestingCard />
        <DataFlowCard />
        <TrackingCard />
      </div>

      <SkillMaturityMatrix />
    </div>
  );
}