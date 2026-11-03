import PageHeader from '../components/ui/PageHeader';
import FlagshipProject from '../components/sections/projects/FlagshipProject';
import ProjectMetrics from '../components/sections/projects/ProjectMetrics';
import BankingProject from '../components/sections/projects/BankingProject';
import HealthcareProject from '../components/sections/projects/HealthcareProject';
import { projectsHeader } from '../data/projects';
import usePageTitle from '../hooks/usePageTitle';

export default function Projects() {
  usePageTitle('Projects');

  return (
    <div className="space-y-12 pb-8">
      <PageHeader
        eyebrow={projectsHeader.eyebrow}
        title={projectsHeader.title}
        description={projectsHeader.description}
        eyebrowStyle="pill"
        descriptionClassName="max-w-3xl"
        className=""
      />
      <FlagshipProject />
      <ProjectMetrics />
      <BankingProject />
      <HealthcareProject />
    </div>
  );
}
