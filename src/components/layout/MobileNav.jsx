import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';
import { mobileNav } from '../../data/navigation';

export default function MobileNav() {
  return (
    <nav
      aria-label="Mobile"
      className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant bg-surface md:hidden"
    >
      {mobileNav.map(({ label, icon, to }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex min-w-14 flex-col items-center gap-1 ${
              isActive ? 'text-primary' : 'text-on-surface-variant'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icon name={icon} filled={isActive} />
              <span className="text-[10px] font-bold">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}