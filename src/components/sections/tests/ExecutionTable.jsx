import { useState } from 'react';
import Icon from '../../ui/Icon';
import { executionTable, statusFilters } from '../../../data/testCases';

const statusStyles = {
  Pass: { className: 'bg-emerald-100 text-emerald-800', icon: 'check_circle' },
  Fail: { className: 'border border-red-200 bg-red-100 text-red-800', icon: 'cancel' },
  Blocked: { className: 'border border-amber-200 bg-amber-100 text-amber-800', icon: 'block' },
};

const columns = [
  { label: 'ID' },
  { label: 'Module' },
  { label: 'Scenario', className: 'min-w-[16rem]' },
  { label: 'Expected Result', className: 'min-w-[14rem]' },
  { label: 'Status' },
  { label: 'Actions', className: 'text-right' },
];

export default function ExecutionTable({ selectedId, onSelect }) {
  const { title, searchPlaceholder, newTestLabel, entriesTotal, rows } = executionTable;
  const [query, setQuery] = useState('');
  const [filterIndex, setFilterIndex] = useState(0);
  const statusFilter = statusFilters[filterIndex];

  const needle = query.trim().toLowerCase();
  const filtered = rows.filter((test) => {
    const matchesStatus = statusFilter === 'All' || test.status === statusFilter;
    const matchesQuery =
      !needle ||
      test.id.toLowerCase().includes(needle) ||
      test.scenario.toLowerCase().includes(needle);
    return matchesStatus && matchesQuery;
  });
  const isFiltered = needle !== '' || statusFilter !== 'All';

  return (
    <section
      aria-labelledby="execution-title"
      className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm"
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant p-6">
        <div className="flex flex-wrap items-center gap-4">
          <h2 id="execution-title" className="text-h3">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => setFilterIndex((filterIndex + 1) % statusFilters.length)}
            aria-label={`Filter by status. Current filter: ${statusFilter}. Click to change.`}
            className="flex items-center gap-1 rounded bg-surface-container px-3 py-1 font-label-caps text-label-caps text-on-surface-variant transition-colors hover:bg-surface-container-high"
          >
            <Icon name="filter_list" className="!text-sm" />
            {statusFilter === 'All' ? 'Filter' : `Filter: ${statusFilter}`}
          </button>
        </div>

        <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 !text-lg text-outline"
            />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              aria-label="Search test cases by scenario or ID"
              className="w-full rounded-lg border-none bg-surface-container-low py-2 pl-10 pr-4 text-body-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="button"
            title="Demo control"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-label-caps text-label-caps text-on-primary transition-opacity hover:opacity-90"
          >
            <Icon name="add" className="!text-sm" />
            {newTestLabel}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead className="border-b border-outline-variant bg-surface-container-low">
            <tr>
              {columns.map(({ label, className = '' }) => (
                <th
                  key={label}
                  scope="col"
                  className={`p-4 font-label-caps text-label-caps uppercase tracking-wider text-outline ${className}`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="p-10 text-center text-body-sm text-on-surface-variant">
                  No test cases match your search.
                </td>
              </tr>
            )}

            {filtered.map((test) => {
              const status = statusStyles[test.status] ?? statusStyles.Pass;
              const hasDetails = Boolean(test.details);
              const selected = selectedId === test.id;

              return (
                <tr
                  key={test.id}
                  onClick={hasDetails ? () => onSelect(test.id) : undefined}
                  className={`transition-colors hover:bg-surface-container-low ${
                    selected ? 'bg-surface-container-low' : ''
                  } ${hasDetails ? 'cursor-pointer' : ''}`}
                >
                  <td className="whitespace-nowrap p-4 font-code text-code text-primary">{test.id}</td>
                  <td className="p-4">
                    <span className="whitespace-nowrap rounded bg-surface-container-high px-2 py-1 text-xs font-medium text-on-secondary-fixed-variant">
                      {test.module}
                    </span>
                  </td>
                  <td className="p-4">
                    <p className="text-body-md font-semibold">{test.scenario}</p>
                    <p className="mt-1 text-body-sm text-outline">{test.description}</p>
                  </td>
                  <td className="p-4 text-body-sm text-on-surface-variant">{test.expected}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${status.className}`}
                    >
                      <Icon name={status.icon} filled className="!text-sm" />
                      <span className="font-label-caps text-label-caps">{test.status}</span>
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      type="button"
                      disabled={!hasDetails}
                      onClick={(event) => {
                        event.stopPropagation();
                        onSelect(test.id);
                      }}
                      aria-label={
                        hasDetails
                          ? `Show investigation details for ${test.id}`
                          : `No details available for ${test.id}`
                      }
                      className="text-outline transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-outline"
                    >
                      <Icon name="more_vert" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant bg-surface-container-low p-4">
        <span className="text-body-sm text-outline">
          {isFiltered
            ? `Showing ${filtered.length} matching entries`
            : `Showing 1 to ${filtered.length} of ${entriesTotal} entries`}
        </span>
        <div className="flex gap-2" aria-label="Pagination (demo)">
          <button type="button" title="Demo control" className="rounded border border-outline-variant px-3 py-1 text-body-sm transition-all hover:bg-surface-container-high">
            Previous
          </button>
          <button type="button" title="Demo control" className="rounded bg-primary px-3 py-1 text-body-sm font-bold text-on-primary transition-all">
            1
          </button>
          <button type="button" title="Demo control" className="rounded border border-outline-variant px-3 py-1 text-body-sm transition-all hover:bg-surface-container-high">
            2
          </button>
          <button type="button" title="Demo control" className="rounded border border-outline-variant px-3 py-1 text-body-sm transition-all hover:bg-surface-container-high">
            3
          </button>
          <button type="button" title="Demo control" className="rounded border border-outline-variant px-3 py-1 text-body-sm transition-all hover:bg-surface-container-high">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
