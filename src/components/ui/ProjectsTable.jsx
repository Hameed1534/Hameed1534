import Icon from '../ui/Icon';

export default function ProjectsTable({ projects }) {
  return (
    <div className="col-span-12 overflow-hidden rounded-xl border border-outline-variant bg-white">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant p-4 md:p-6">
        <h3 className="text-h3">Core Technical Stack Projects</h3>
        <a href="#projects" className="text-primary hover:underline">
          View All Projects
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead className="border-b border-outline-variant bg-surface-container-low">
            <tr>
              {['PROJECT NAME', 'TECH STACK', 'ENV', 'STATUS', 'ACTION'].map((heading) => (
                <th key={heading} scope="col" className="px-6 py-4 font-normal text-on-surface-variant">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {projects.map((project) => (
              <tr key={project.id} className="transition-colors hover:bg-surface-container-low">
                <td className="px-6 py-5 font-bold">{project.name}</td>
                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded bg-surface-container px-2 py-0.5 font-code text-code">
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5 text-on-surface-variant">{project.env}</td>
                <td className="px-6 py-5">
                  <span className="flex w-fit items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
                    <Icon name="check" className="!text-[14px]" />
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <a
                    href={project.url}
                    aria-label={`Open ${project.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded border border-outline-variant hover:bg-surface-container-high"
                  >
                    <Icon name="open_in_new" className="!text-[18px]" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}