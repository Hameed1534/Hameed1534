import Icon from '../../ui/Icon';

export default function JiraTicketCard({ bug }) {
  const hasLink = Boolean(bug.url);

  return (
    <aside className="relative overflow-hidden rounded-xl bg-primary-container p-6 text-on-primary-container shadow-lg">
      <div className="relative z-10">
        <h2 className="font-label-caps text-label-caps uppercase opacity-80">{bug.label}</h2>
        <p className="mt-2 text-2xl font-bold">{bug.key}</p>
        <p className="mt-2 text-body-sm opacity-90">{bug.note}</p>
        <a
          href={hasLink ? bug.url : undefined}
          aria-disabled={hasLink ? undefined : 'true'}
          {...(hasLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="mt-4 inline-block rounded bg-on-primary-container px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-container transition-colors hover:bg-white"
        >
          {bug.cta}
        </a>
      </div>
      <Icon name="bug_report" className="pointer-events-none absolute -bottom-4 -right-4 !text-9xl opacity-10" />
    </aside>
  );
}
