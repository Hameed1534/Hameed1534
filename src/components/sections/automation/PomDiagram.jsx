import { Fragment } from 'react';
import Icon from '../../ui/Icon';
import { pomLayer as pom } from '../../../data/automation';

const dotGrid = {
  backgroundImage: 'radial-gradient(#c3c6d7 1px, transparent 1px)',
  backgroundSize: '24px 24px',
};

export default function PomDiagram() {
  return (
    <section
      aria-labelledby="pom-title"
      style={dotGrid}
      className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8 xl:col-span-8"
    >
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
            {pom.eyebrow}
          </span>
          <h2 id="pom-title" className="text-h3 text-on-surface">
            {pom.title}
          </h2>
        </div>
        <Icon name={pom.icon} className="text-primary" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
        {/* Page objects */}
        <ul className="flex w-full flex-col gap-4 md:w-1/4">
          {pom.pageObjects.map((file) => (
            <li
              key={file}
              className="rounded border border-outline-variant bg-white p-4 text-center shadow-sm"
            >
              <Icon name="page_info" className="mb-2 block text-secondary" />
              <span className="break-all font-code text-code">{file}</span>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Icon name="arrow_forward" className="scale-150 text-outline-variant" />
        </div>

        {/* Test runner */}
        <div className="w-full rounded-lg bg-primary-container p-6 text-on-primary-container shadow-md md:w-2/5">
          <h3 className="mb-4 border-b border-white/20 pb-2 text-center font-label-caps text-label-caps uppercase opacity-80">
            {pom.runner.title}
          </h3>
          <ul className="space-y-3 font-code text-xs">
            {pom.runner.hooks.map((hook) => (
              <li key={hook} className="flex items-center gap-2">
                <Icon name="check_circle" className="!text-sm" />
                {hook}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Icon name="arrow_forward" className="scale-150 text-outline-variant" />
        </div>

        {/* Data source */}
        <div className="w-full rounded border border-dashed border-outline-variant bg-surface-container p-4 text-center md:w-1/4">
          <Icon name={pom.dataSource.icon} className="mb-2 block text-secondary" />
          <span className="font-label-caps text-label-caps">
            {pom.dataSource.lines.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
