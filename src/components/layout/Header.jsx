import { profile } from '../../data/profile';
import { topNav, topNavIds } from '../../data/navigation';
import useScrollSpy from '../../hooks/useScrollSpy';

export default function Header() {
  const activeId = useScrollSpy(topNavIds);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-outline-variant bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile md:px-margin-desktop">
        <a href="#home" className="font-h3 text-h3 font-bold tracking-tight text-on-surface">
          {profile.brand}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {topNav.map(({ label, id }) => {
            const active = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active ? 'true' : undefined}
                className={`pb-1 transition-colors duration-200 ${
                  active
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <a
          href={profile.resumeUrl}
          download={profile.resumeFileName}
          className="whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary transition-all hover:opacity-90 active:scale-95 md:px-6 md:text-base"
        >
          <span className="sm:hidden">Resume</span>
          <span className="hidden sm:inline">Download Resume</span>
        </a>
      </div>
    </header>
  );
}