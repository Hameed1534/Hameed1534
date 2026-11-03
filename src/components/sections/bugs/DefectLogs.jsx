import { Fragment, useState } from 'react';
import Icon from '../../ui/Icon';
import Pill from '../../ui/Pill';
import { defectLogs } from '../../../data/bugs';

const severityStyles = {
  Critical: { className: 'bg-error/10 text-error', icon: 'dangerous' },
  High: { className: 'bg-orange-100 text-orange-700', icon: 'warning' },
  Medium: { className: 'bg-blue-100 text-blue-700', icon: 'info' },
  Low: { className: 'bg-slate-100 text-slate-700', icon: 'arrow_downward' },
};

const statusStyles = {
  Open: { className: 'bg-tertiary-container/10 text-tertiary', icon: 'pending' },
  'In Progress': { className: 'bg-blue-100 text-blue-700', icon: 'engineering' },
  Resolved: { className: 'bg-emerald-100 text-emerald-700', icon: 'check_circle', filled: true },
  Closed: { className: 'bg-slate-100 text-slate-700', icon: 'lock' },
};

const columns = ['ID', 'Title', 'Severity', 'Priority', 'Environment', 'Status', 'Action'];

export default function DefectLogs({ severityFilter = 'All' }) {
  const { title, searchPlaceholder, totalDefects, pageSize, rows } = defectLogs;
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  const needle = query.trim().toLowerCase();
  const filtered = rows.filter((bug) => {
    const matchesSeverity = severityFilter === 'All' || bug.severity === severityFilter;
    const matchesQuery =
      !needle || bug.id.toLowerCase().includes(needle) || bug.title.toLowerCase().includes(needle);
    return matchesSeverity && matchesQuery;
  });

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const isFiltered = needle !== '' || severityFilter !== 'All';
  const totalLabel = isFiltered ? filtered.length : Math.max(totalDefects, rows.length);

  return (
    <section
      aria-labelledby="logs-title"
      className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant bg-surface-container-low p-6">
        <h2 id="logs-title" className="text-h3 text-on-surface">
          {title}
        </h2>
        <div className="relative w-full sm:w-64">
          <Icon
            name="search"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant"
          />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label="Search defects by ID or title"
            className="w-full rounded-lg border border-outline-variant bg-surface py-2 pl-10 pr-4 text-body-sm outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="custom-scrollbar overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low/50">
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border-b border-outline-variant px-6 py-4 font-label-caps text-label-caps text-on-surface-variant"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {visible.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-body-sm text-on-surface-variant">
                  No defects match your search.
                </td>
              </tr>
            )}

            {visible.map((bug) => {
              const severity = severityStyles[bug.severity] ?? severityStyles.Medium;
              const status = statusStyles[bug.status] ?? statusStyles.Open;
              const expanded = expandedId === bug.id;
              const detailId = `detail-${bug.id}`;

              return (
                <Fragment key={bug.id}>
                  <tr className="transition-colors hover:bg-surface-container-low/30">
                    <td className="whitespace-nowrap px-6 py-4 font-code text-code text-primary">{bug.id}</td>
                    <td className="px-6 py-4">
                      <div className="text-body-md font-semibold text-on-surface">{bug.title}</div>
                      <div className="mt-1 text-body-sm text-on-surface-variant">{bug.summary}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Pill
                        icon={severity.icon}
                        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${severity.className}`}
                      >
                        {bug.severity}
                      </Pill>
                    </td>
                    <td className="px-6 py-4 text-body-sm font-semibold text-on-surface">{bug.priority}</td>
                    <td className="px-6 py-4">
                      <span className="rounded bg-surface-variant px-2 py-0.5 text-xs font-medium text-on-surface-variant">
                        {bug.environment}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Pill
                        icon={status.icon}
                        filled={status.filled}
                        className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase ${status.className}`}
                      >
                        {bug.status}
                      </Pill>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        onClick={() => setExpandedId(expanded ? null : bug.id)}
                        aria-expanded={expanded}
                        aria-controls={detailId}
                        aria-label={`${expanded ? 'Hide' : 'Show'} details for ${bug.id}`}
                        className="text-on-surface-variant transition-colors hover:text-primary"
                      >
                        <Icon name={expanded ? 'expand_less' : 'more_vert'} />
                      </button>
                    </td>
                  </tr>

                  {expanded && bug.details && (
                    <tr id={detailId} className="bg-surface-container-low/60">
                      <td colSpan={columns.length} className="px-6 py-5">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                          <div>
                            <h3 className="mb-2 font-label-caps text-label-caps uppercase text-outline">
                              Steps to reproduce
                            </h3>
                            <ol className="list-decimal space-y-1 pl-5 text-body-sm">
                              {bug.details.steps.map((step) => (
                                <li key={step}>{step}</li>
                              ))}
                            </ol>
                          </div>
                          <div>
                            <h3 className="mb-2 font-label-caps text-label-caps uppercase text-outline">
                              Expected result
                            </h3>
                            <p className="text-body-sm font-medium text-emerald-700">{bug.details.expected}</p>
                          </div>
                          <div>
                            <h3 className="mb-2 font-label-caps text-label-caps uppercase text-outline">
                              Actual result
                            </h3>
                            <p className="text-body-sm font-medium text-red-700">{bug.details.actual}</p>
                          </div>
                        </div>

                        {bug.details.screenshot && (
                          <a href={bug.details.screenshot} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                            <img
                              src={bug.details.screenshot}
                              alt={`Screenshot attached to ${bug.id}`}
                              loading="lazy"
                              className="max-h-48 rounded-lg border border-outline-variant"
                            />
                          </a>
                        )}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant bg-surface-container-low/20 px-6 py-4">
        <span className="text-body-sm text-on-surface-variant">
          Showing {visible.length} of {totalLabel} defects
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="rounded border border-outline-variant p-2 hover:bg-surface-container-low disabled:opacity-50"
          >
            <Icon name="chevron_left" />
          </button>
          <button
            type="button"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === pageCount}
            aria-label="Next page"
            className="rounded border border-outline-variant p-2 hover:bg-surface-container-low disabled:opacity-50"
          >
            <Icon name="chevron_right" />
          </button>
        </div>
      </div>
    </section>
  );
}
