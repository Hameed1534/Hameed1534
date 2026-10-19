import Icon from '../ui/Icon';
import { mobileNav, mobileNavIds } from '../../data/navigation';
import useScrollSpy from '../../hooks/useScrollSpy';

export default function MobileNav() {
  const activeId = useScrollSpy(mobileNavIds);

  return (
    <nav
      aria-label="Mobile"
      className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant bg-surface md:hidden"
    >
      {mobileNav.map(({ label, icon, id }) => {
        const active = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active ? 'true' : undefined}
            className={`flex min-w-16 flex-col items-center gap-1 ${
              active ? 'text-primary' : 'text-on-surface-variant'
            }`}
          >
            <Icon name={icon} filled={active} />
            <span className="text-[10px] font-bold">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}