import PageHeader from '../components/ui/PageHeader';
import Icon from '../components/ui/Icon';
import SqlEditor from '../components/sections/sql/SqlEditor';
import TableVerification from '../components/sections/sql/TableVerification';
import QueryResults from '../components/sections/sql/QueryResults';
import SqlStats from '../components/sections/sql/SqlStats';
import SqlBanner from '../components/sections/sql/SqlBanner';
import { sqlHeader } from '../data/sql';
import usePageTitle from '../hooks/usePageTitle';

export default function SqlTesting() {
  usePageTitle('SQL Testing');

  // "Run Query" jumps to the result set below the editor.
  const handleRun = () => {
    document.getElementById('query-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pb-8">
      <PageHeader
        eyebrow={sqlHeader.eyebrow}
        title={sqlHeader.title}
        description={sqlHeader.description}
        className="mb-10"
      >
        <div className="flex shrink-0 items-center gap-4 rounded-xl border border-outline-variant bg-surface p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed text-primary">
            <Icon name="database" />
          </div>
          <div>
            <p className="font-label-caps text-[10px] text-on-surface-variant">{sqlHeader.dbContext.label}</p>
            <p className="text-body-md font-bold">{sqlHeader.dbContext.value}</p>
          </div>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-gutter">
        <div className="grid grid-cols-1 gap-gutter xl:grid-cols-12">
          <SqlEditor onRun={handleRun} />
          <TableVerification />
        </div>

        <QueryResults />
        <SqlStats />
      </div>

      <SqlBanner />
    </div>
  );
}
