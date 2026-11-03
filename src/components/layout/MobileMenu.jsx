import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';
import { menuGroups } from '../../data/navigation';
import { profile } from '../../data/profile';

// Bottom-sheet menu listing every page. Opened from the "More" button on phones/tablets.
export default function MobileMenu({ open, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-on-background/40"
      />

      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-surface p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-h3 text-h3 font-bold tracking-tight text-on-surface">{profile.brand}</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
          >
            <Icon name="close" />
          </button>
        </div>

        {menuGroups.map((group) => (
          <div key={group.title} className="mb-6">
            <p className="mb-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
              {group.title}
            </p>
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {group.items.map(({ label, icon, to }) => (
                <li key={`${group.title}-${to}`}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 ${
                        isActive
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'text-on-surface hover:bg-surface-container-low'
                      }`
                    }
                  >
                    <Icon name={icon} />
                    <span className="text-body-md font-semibold">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <a
          href={profile.resumeUrl}
          download={profile.resumeFileName}
          className="block w-full rounded-lg bg-primary py-3 text-center font-bold text-on-primary"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
