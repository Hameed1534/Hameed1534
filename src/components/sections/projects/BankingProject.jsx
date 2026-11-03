import Pill from '../../ui/Pill';
import { bankingProject as project } from '../../../data/projects';

const statusStyles = {
  Pass: { className: 'bg-emerald-100 text-emerald-800', icon: 'check' },
  'Pending Audit': { className: 'bg-amber-100 text-amber-800', icon: 'history' },
};

export default function BankingProject() {
  const { compliance } = project;
  const hasLink = Boolean(compliance.url);

  return (
    <section
      aria-labelledby="banking-title"
      className="grid grid-cols-12 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest"
    >
      {/* Main content */}
      <div className="col-span-12 space-y-6 p-6 md:p-8 xl:col-span-8">
        <div className="space-y-1">
          <span className="font-label-caps text-label-caps text-on-surface-variant">
            {project.eyebrow}
          </span>
          <h2 id="banking-title" className="text-h2">
            {project.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="border-l-4 border-primary pl-4 font-bold text-primary">
              {project.challengesTitle}
            </h3>
            <p className="text-body-md leading-relaxed text-on-surface-variant">
              {project.challenges}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="border-l-4 border-primary pl-4 font-bold text-primary">
              {project.toolsTitle}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded bg-surface-container-high px-3 py-1 text-body-sm font-medium"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6">
          <h3 className="mb-4 text-h3">{project.audit.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead className="border-b border-outline-variant">
                <tr>
                  {project.audit.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="py-3 font-label-caps text-label-caps text-on-surface-variant"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {project.audit.rows.map((row) => {
                  const status = statusStyles[row.status] ?? statusStyles.Pass;
                  return (
                    <tr key={row.domain}>
                      <td className="py-3 text-body-md font-bold">{row.domain}</td>
                      <td className="py-3 text-body-sm">{row.method}</td>
                      <td className="py-3">
                        <Pill
                          icon={status.icon}
                          className={`rounded px-2 py-1 text-xs ${status.className}`}
                        >
                          {row.status}
                        </Pill>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Compliance panel */}
      <div className="col-span-12 flex flex-col justify-center border-t border-outline-variant bg-surface-container p-6 md:p-8 xl:col-span-4 xl:border-l xl:border-t-0">
        <div className="space-y-6 text-center">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary text-2xl font-bold text-primary">
            {compliance.value}
          </div>
          <div>
            <h3 className="text-h3">{compliance.title}</h3>
            <p className="mt-2 text-body-sm text-on-surface-variant">{compliance.description}</p>
          </div>
          <a
            href={hasLink ? compliance.url : undefined}
            aria-disabled={hasLink ? undefined : 'true'}
            className="block w-full rounded-lg border border-primary py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
          >
            {compliance.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
