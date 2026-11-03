import Icon from '../../ui/Icon';
import { tableVerification as data } from '../../../data/sql';

export default function TableVerification() {
  return (
    <section
      aria-labelledby="tables-title"
      className="flex flex-col rounded-xl border border-outline-variant bg-surface p-6 shadow-sm xl:col-span-4"
    >
      <h2 id="tables-title" className="mb-6 flex items-center gap-2 text-h3">
        <Icon name="schema" className="text-primary" />
        {data.title}
      </h2>

      <ul className="space-y-3">
        {data.tables.map(({ name, meta }) => (
          <li
            key={name}
            className="group flex items-center justify-between gap-2 rounded-lg border border-outline-variant/30 bg-surface-container-low p-3 transition-all hover:border-primary/50"
          >
            <div className="min-w-0">
              <p className="text-body-md font-semibold">{name}</p>
              <p className="text-body-sm text-on-surface-variant">{meta}</p>
            </div>
            <Icon
              name="chevron_right"
              className="shrink-0 text-outline transition-colors group-hover:text-primary"
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        title="Demo control"
        className="mt-6 w-full rounded border border-primary py-2 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/5"
      >
        {data.cta}
      </button>
    </section>
  );
}
