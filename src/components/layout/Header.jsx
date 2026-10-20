import { Link, NavLink } from 'react-router-dom';
import { profile } from '../../data/profile';
import { topNav } from '../../data/navigation';

// "solid" = Home design, "light" = About design (Stitch uses a different button style on each).
const resumeStyles = {
  solid: 'bg-primary text-on-primary font-bold',
  light: 'bg-primary-container text-on-primary-container',
};

export default function Header({ variant = 'solid' }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-outline-variant bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="font-h3 text-h3 font-bold tracking-tight text-on-surface">
          {profile.brand}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex lg:gap-8">
          {topNav.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `pb-1 transition-colors duration-200 ${
                  isActive
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href={profile.resumeUrl}
          download={profile.resumeFileName}
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm transition-all hover:opacity-90 active:scale-95 lg:px-6 lg:text-base ${resumeStyles[variant]}`}
        >
          <span className="sm:hidden">Resume</span>
          <span className="hidden sm:inline">Download Resume</span>
        </a>
      </div>
    </header>
  );
}