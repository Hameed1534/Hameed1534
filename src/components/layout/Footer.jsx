import { profile } from '../../data/profile';

const links = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-4 px-margin-mobile py-12 text-center md:flex-row md:px-margin-desktop md:text-left">
        <div className="font-label-caps text-label-caps font-bold text-on-surface-variant">
          © {new Date().getFullYear()} {profile.footerText}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map(({ label, href }) => {
            const external = href.startsWith('http');
            return (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-body-sm text-on-surface-variant underline transition-all hover:text-primary active:opacity-70"
              >
                {label}
              </a>
            );
          })}
          <span className="text-body-sm font-bold text-primary">{profile.availability}</span>
        </div>
      </div>
    </footer>
  );
}