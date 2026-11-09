import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';
import PageHeader from '../components/ui/PageHeader';
import BugKpiCards from '../components/sections/bugs/BugKpiCards';
import DefectLifecycle from '../components/sections/bugs/DefectLifecycle';
import SeverityDistribution from '../components/sections/bugs/SeverityDistribution';
import DefectLogs from '../components/sections/bugs/DefectLogs';
import { bugsHeader, severityFilters } from '../data/bugs';
import usePageTitle from '../hooks/usePageTitle';

export default function BugReports() {
  usePageTitle('Bug Reports');
  const [filterIndex, setFilterIndex] = useState(0);
  const severityFilter = severityFilters[filterIndex];

  return (
    <div className="pb-8">
      <PageHeader eyebrow={bugsHeader.eyebrow} title={bugsHeader.title} className="mb-8">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFilterIndex((filterIndex + 1) % severityFilters.length)}
            aria-label={`Filter by severity. Current filter: ${severityFilter}. Click to change.`}
            className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface px-4 py-2 text-body-sm transition-colors hover:bg-surface-container-low"
          >
            <Icon name="filter_list" className="!text-[20px]" />
            {severityFilter === 'All' ? 'Filter' : `Filter: ${severityFilter}`}
          </button>
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-body-sm font-semibold text-on-primary transition-all hover:opacity-90"
          >
            <Icon name="add" className="!text-[20px]" />
            Report Bug
          </Link>
        </div>
      </PageHeader>

      <BugKpiCards />

      <div className="mb-gutter grid grid-cols-1 gap-gutter xl:grid-cols-12">
        <DefectLifecycle />
        <SeverityDistribution />
      </div>

      <DefectLogs severityFilter={severityFilter} />
    </div>
  );
}
