import ImageWithFallback from '../../ui/ImageWithFallback';
import { executionArtefacts as artefacts } from '../../../data/automation';

export default function ExecutionArtefacts() {
  return (
    <section aria-labelledby="artefacts-title">
      <div className="mb-8">
        <h2 id="artefacts-title" className="text-h2 text-on-surface">
          {artefacts.title}
        </h2>
        <p className="text-body-md text-on-surface-variant">{artefacts.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        {artefacts.items.map(({ badge, badgeClassName, title, image, imageAlt }) => (
          <figure
            key={title}
            className="group relative aspect-video overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low"
          >
            <ImageWithFallback
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-on-background/80 to-transparent p-6">
              <div>
                <span
                  className={`mb-2 inline-block rounded px-3 py-1 font-label-caps text-[10px] text-white ${badgeClassName}`}
                >
                  {badge}
                </span>
                <h3 className="text-h3 text-white">{title}</h3>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
