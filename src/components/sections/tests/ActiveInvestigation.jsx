import Icon from '../../ui/Icon';

export default function ActiveInvestigation({ test }) {
  const { details } = test;

  return (
    <section
      aria-labelledby="investigation-title"
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm md:p-8 xl:col-span-2"
    >
      <h2 id="investigation-title" className="mb-6 flex items-center gap-2 text-h3">
        <Icon name="list_alt" className="text-primary" />
        Active Investigation: {test.id}
      </h2>

      <div className="space-y-6">
        <div>
          <span className="mb-2 block font-label-caps text-label-caps uppercase text-outline">
            Preconditions
          </span>
          <ol className="list-inside list-decimal space-y-1 rounded-lg border border-outline-variant bg-surface-container-low p-4 text-body-sm">
            {details.preconditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>

        <div>
          <span className="mb-2 block font-label-caps text-label-caps uppercase text-outline">
            Step-by-Step Execution
          </span>
          <ol className="list-inside list-decimal space-y-3 text-body-md">
            {details.steps.map((step) => (
              <li
                key={step.text}
                className={`border-b p-2 ${
                  step.failed ? 'border-red-200 bg-red-50' : 'border-outline-variant'
                }`}
              >
                {step.text}
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <span className="mb-2 block font-label-caps text-label-caps uppercase text-outline">
              Expected
            </span>
            <p className="text-body-md font-medium text-emerald-700">{details.expected}</p>
          </div>
          <div>
            <span className="mb-2 block font-label-caps text-label-caps uppercase text-outline">
              Actual
            </span>
            <p className="text-body-md font-medium text-red-700">{details.actual}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
