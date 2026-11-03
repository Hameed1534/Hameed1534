import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import TestKpiCards from '../components/sections/tests/TestKpiCards';
import ExecutionTable from '../components/sections/tests/ExecutionTable';
import ActiveInvestigation from '../components/sections/tests/ActiveInvestigation';
import JiraTicketCard from '../components/sections/tests/JiraTicketCard';
import RegressionHealth from '../components/sections/tests/RegressionHealth';
import { testHeader, executionTable } from '../data/testCases';
import usePageTitle from '../hooks/usePageTitle';

export default function TestCases() {
  usePageTitle('Test Cases');

  // The first test case that has details is opened by default.
  const [selectedId, setSelectedId] = useState(
    () => executionTable.rows.find((row) => row.details)?.id ?? null
  );
  const selected = executionTable.rows.find((row) => row.id === selectedId && row.details);

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow={testHeader.eyebrow}
        title={testHeader.title}
        eyebrowStyle="muted"
        className="mb-6"
      >
        <span className="font-label-caps text-label-caps text-outline">{testHeader.lastRun}</span>
      </PageHeader>

      <TestKpiCards />

      <ExecutionTable selectedId={selectedId} onSelect={setSelectedId} />

      <div className="mt-10 grid grid-cols-1 gap-gutter xl:grid-cols-3">
        {selected && <ActiveInvestigation test={selected} />}
        <div className={`flex flex-col gap-gutter ${selected ? '' : 'xl:col-span-3'}`}>
          {selected?.details.bug && <JiraTicketCard bug={selected.details.bug} />}
          <RegressionHealth />
        </div>
      </div>
    </div>
  );
}
