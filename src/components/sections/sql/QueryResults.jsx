import { useState } from 'react';
import Icon from '../../ui/Icon';
import { queryResult } from '../../../data/sql';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function downloadCsv(rows) {
  const escapeCell = (value) => `"${String(value).replace(/"/g, '""')}"`;
  const lines = [
    queryResult.columns,
    ...rows.map((row) => [
      row.id,
      row.username,
      row.transactionId,
      row.amount.toFixed(2),
      row.status.toUpperCase(),
      row.validation,
    ]),
  ].map((cells) => cells.map(escapeCell).join(','));

  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'query-result.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function QueryResults() {
  const [diffOnly, setDiffOnly] = useState(false);
  const rows = diffOnly ? queryResult.rows.filter((row) => row.validation !== 'Match') : queryResult.rows;

  return (
    <section
      id="query-results"
      aria-labelledby="results-title"
      className="overflow-hidden rounded-xl border border-outline-variant bg-surface shadow-sm"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 p-6">
        <h2 id="results-title" className="text-h3">
          {queryResult.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => downloadCsv(rows)}
            className="flex items-center gap-2 rounded border border-outline-variant px-3 py-1.5 text-body-sm transition-colors hover:bg-surface-container-low"
          >
            <Icon name="download" className="!text-[18px]" />
            Export CSV
          </button>
          <button
            type="button"
            onClick={() => setDiffOnly(!diffOnly)}
            aria-pressed={diffOnly}
            className={`flex items-center gap-2 rounded border border-outline-variant px-3 py-1.5 text-body-sm transition-colors hover:bg-surface-container-low ${
              diffOnly ? 'bg-surface-container-high' : ''
            }`}
          >
            <Icon name="table_chart" className="!text-[18px]" />
            Diff View
          </button>
        </div>
      </div>

      <div className="custom-scrollbar overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead className="border-y border-outline-variant bg-surface-container-low">
            <tr>
              {queryResult.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-6 py-4 font-label-caps text-label-caps text-on-surface-variant"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {rows.length === 0 && (
              <tr>
                <td colSpan={queryResult.columns.length} className="px-6 py-10 text-center text-body-sm text-on-surface-variant">
                  No mismatches in this result set.
                </td>
              </tr>
            )}
            {rows.map((row) => {
              const failed = row.validation !== 'Match';
              return (
                <tr
                  key={row.id}
                  className={`transition-colors hover:bg-surface-container-low ${
                    failed ? 'bg-error-container/10' : ''
                  }`}
                >
                  <td className="px-6 py-4 font-code text-code font-bold">{row.id}</td>
                  <td className="px-6 py-4 text-body-md">{row.username}</td>
                  <td className="px-6 py-4 font-code text-code text-on-surface-variant">
                    {row.transactionId}
                  </td>
                  <td className="px-6 py-4 text-body-md">{currency.format(row.amount)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded px-2 py-0.5 font-label-caps text-[10px] uppercase ${
                        failed ? 'bg-error-container text-error' : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`flex items-center gap-1 text-body-sm ${
                        failed ? 'text-error' : 'text-emerald-600'
                      }`}
                    >
                      <Icon name={failed ? 'error' : 'check_circle'} className="!text-[18px]" />
                      {row.validation}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
