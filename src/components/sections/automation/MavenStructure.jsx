import Icon from '../../ui/Icon';
import { mavenStructure as maven } from '../../../data/automation';

export default function MavenStructure() {
  return (
    <section
      aria-labelledby="maven-title"
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 xl:col-span-4"
    >
      <div className="mb-6 flex items-start justify-between gap-2">
        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
          {maven.eyebrow}
        </span>
        <Icon name={maven.icon} className="text-tertiary" />
      </div>

      <h2 id="maven-title" className="mb-4 text-h3 text-on-surface">
        {maven.title}
      </h2>

      <ul className="space-y-2 font-code text-body-sm text-on-surface-variant">
        {maven.tree.map(({ icon, label, level, highlight }) => (
          <li
            key={label}
            className={`flex items-center gap-2 py-1 ${
              highlight ? 'rounded bg-surface-container-high px-2' : 'border-b border-outline-variant/30'
            } ${level > 0 ? 'pl-4' : ''}`}
          >
            <Icon name={icon} className={`!text-xs ${highlight ? 'text-primary' : ''}`} />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-outline-variant pt-6">
        <p className="text-body-sm italic text-on-surface-variant">{maven.quote}</p>
      </div>
    </section>
  );
}
