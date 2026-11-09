import Icon from '../../ui/Icon';
import Pill from '../../ui/Pill';
import IconHeading from '../../ui/IconHeading';
import { featuredRepos } from '../../../data/docs';

export default function FeaturedRepos() {
  return (
    <section aria-labelledby="repos-title" className="mb-16">
      <IconHeading id="repos-title" icon={featuredRepos.icon}>
        {featuredRepos.title}
      </IconHeading>

      {featuredRepos.items.length === 0 && (
        <p className="rounded-xl border border-dashed border-outline-variant bg-surface-container-low p-8 text-center text-body-md text-on-surface-variant">
          {featuredRepos.emptyMessage}
        </p>
      )}

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 xl:grid-cols-3">
        {featuredRepos.items.map((repo) => {
          const hasLink = Boolean(repo.url);
          return (
            <article
              key={repo.title}
              className="flex flex-col rounded-xl border border-outline-variant bg-surface-container-lowest p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <span className="font-label-caps text-label-caps text-primary">{repo.category}</span>
                <Pill
                  icon={repo.badge.icon}
                  filled
                  iconClassName="!text-[12px]"
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${repo.badge.className}`}
                >
                  {repo.badge.label}
                </Pill>
              </div>

              <h3 className="mb-2 text-h3 text-on-surface">{repo.title}</h3>
              <p className="mb-6 text-body-sm text-on-surface-variant">{repo.description}</p>

              <ul className="mb-6 flex flex-wrap gap-2">
                {repo.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-surface-container px-3 py-1 text-body-sm text-on-surface-variant"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between gap-2 border-t border-outline-variant pt-4">
                <div className="flex gap-4 text-body-sm text-outline">
                  <span className="flex items-center gap-1" title="Stars">
                    <Icon name="star" className="!text-sm" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1" title="Forks">
                    <Icon name="fork_left" className="!text-sm" />
                    {repo.forks}
                  </span>
                </div>
                <a
                  href={hasLink ? repo.url : undefined}
                  aria-disabled={hasLink ? undefined : 'true'}
                  {...(hasLink && repo.url.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  View Code
                  <Icon name="arrow_outward" className="!text-[18px]" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
