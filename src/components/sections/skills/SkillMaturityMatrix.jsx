import Icon from '../../ui/Icon';
import { maturity } from '../../../data/skills';

const statusStyles = {
  Active: { badge: 'bg-emerald-100 text-emerald-800', icon: 'check_circle' },
  Learning: { badge: 'bg-amber-100 text-amber-800', icon: 'schedule' },
};

const headings = ['Skill Name', 'Experience', 'Last Used', 'Proficiency', 'Status'];

export default function SkillMaturityMatrix() {
  return (
    <section aria-labelledby="maturity-title" className="mt-16 md:mt-section-gap">
      <div className="mb-6">
        <h2 id="maturity-title" className="text-h2 text-on-surface">
          {maturity.title}
        </h2>
        <p className="text-body-md text-on-surface-variant">{maturity.description}</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead className="bg-surface-container">
              <tr>
                {headings.map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="px-6 py-4 font-label-caps text-label-caps text-on-surface"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {maturity.rows.map((row) => {
                const status = statusStyles[row.status] ?? statusStyles.Learning;
                return (
                  <tr key={row.skill} className="transition-colors hover:bg-surface-container-low">
                    <td className="px-6 py-4 text-body-md font-bold">{row.skill}</td>
                    <td className="px-6 py-4 text-body-sm text-on-secondary-fixed-variant">
                      {row.experience}
                    </td>
                    <td className="px-6 py-4 text-body-sm text-on-secondary-fixed-variant">
                      {row.lastUsed}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        role="img"
                        aria-label={`Proficiency ${row.proficiency} out of 5`}
                        className="flex gap-1"
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i < row.proficiency ? 'bg-primary' : 'bg-outline-variant'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${status.badge}`}
                      >
                        <Icon name={status.icon} className="!text-[14px]" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
