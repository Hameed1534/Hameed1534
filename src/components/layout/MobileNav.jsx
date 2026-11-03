import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';
import MobileMenu from './MobileMenu';
import { mobileNav } from '../../data/navigation';

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <nav
        aria-label="Mobile"
        className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-outline-variant bg-surface lg:hidden"
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

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          className="flex min-w-14 flex-col items-center gap-1 text-on-surface-variant"
        >
          <Icon name="menu" />
          <span className="text-[10px] font-bold">More</span>
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
