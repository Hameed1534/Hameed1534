import MetricCard from 'ui/MetricCard';
import ProjectsTable from 'ui/ProjectsTable';
import { metrics, overviewProjects } from '../../data/overview';

export default function ExecutionOverview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className="mb-16 grid grid-cols-12 gap-gutter md:mb-section-gap"
    >
      <div className="col-span-12 mb-4">
        <h2 id="overview-title" className="text-h2 text-on-surface">
          Execution Overview
        </h2>
      </div>

      {metrics.map((metric) => (
        <MetricCard key={metric.id} {...metric} />
      ))}

      <ProjectsTable projects={overviewProjects} />
    </section>
  );
}