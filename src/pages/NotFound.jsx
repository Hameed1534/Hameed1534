import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <span className="mb-4 font-label-caps text-label-caps uppercase tracking-widest text-primary">
        Error 404
      </span>
      <h1 className="mb-4 text-h1">Page not found</h1>
      <p className="mb-8 max-w-md text-body-md text-on-surface-variant">
        The page you are looking for does not exist.
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