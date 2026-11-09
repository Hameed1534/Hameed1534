import { defectLifecycle as data } from '../../../data/bugs';

export default function DefectLifecycle() {
  return (
    <section
      aria-labelledby="lifecycle-title"
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm xl:col-span-8"
    >
      <h2 id="lifecycle-title" className="text-h3 text-on-surface">
        {data.title}
      </h2>
      <p className="mb-6 mt-1 text-body-sm text-on-surface-variant">{data.description}</p>

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {data.steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-lg border border-outline-variant bg-surface-container-low p-4"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
                {index + 1}
              </span>
              <span className="text-body-md font-bold">{step.title}</span>
            </div>
            <p className="text-body-sm text-on-surface-variant">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
