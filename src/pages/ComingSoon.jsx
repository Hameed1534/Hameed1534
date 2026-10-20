import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function ComingSoon({ title }) {
  usePageTitle(title);

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <span className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary">
        Coming soon
      </span>
      <h1 className="mb-4 text-h1">{title}</h1>
      <p className="mb-8 max-w-md text-body-md text-on-surface-variant">
        This page is still being built.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-primary px-6 py-2 font-bold text-on-primary transition-all hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  );
}