import Icon from '../../ui/Icon';
import IconHeading from '../../ui/IconHeading';
import { documentation } from '../../../data/docs';

export default function DocumentationGrid() {
  return (
    <section aria-labelledby="docs-title">
      <IconHeading id="docs-title" icon={documentation.icon}>
        {documentation.title}
      </IconHeading>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {documentation.items.map((doc) => {
          const hasLink = Boolean(doc.url);
          return (
            <article
              key={doc.title}
              className="group rounded-xl border border-outline-variant bg-surface-container-low p-4 transition-all hover:border-primary"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container-highest transition-transform group-hover:scale-110">
                <Icon name={doc.icon} filled className="text-primary" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-on-surface">{doc.title}</h3>
              <p className="mb-4 text-body-sm text-on-surface-variant">{doc.description}</p>
              {hasLink && (
                <a
                  href={doc.url}
                  {...(doc.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-1 text-body-sm font-bold text-primary transition-transform group-hover:translate-x-1"
                >
                  {doc.cta}
                  <Icon name={doc.ctaIcon} className="!text-sm" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
