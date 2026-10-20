import { Link, NavLink } from 'react-router-dom';
import Icon from '../ui/Icon';
import Avatar from '../ui/Avatar';
import { profile } from '../../data/profile';
import { sideNav } from '../../data/navigation';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-64 flex-col overflow-y-auto border-r border-outline-variant bg-surface-container-low px-4 py-8 lg:flex">
      <div className="mb-8 px-4">
        <div className="mb-2 flex items-center gap-3">
          <Avatar
            src="/images/avatar.jpg"
            name={profile.name}
            className="h-12 w-12 shrink-0 rounded-full border-2 border-primary"
          />
          <div>
            <div className="font-h2 text-h2 font-bold leading-tight text-on-surface">
              {profile.sidebarTitle}
            </div>
            <div className="font-label-caps text-label-caps text-on-surface-variant">
              {profile.sidebarSubtitle}
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Sections" className="flex flex-grow flex-col gap-1">
        {sideNav.map(({ label, icon, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-2 transition-all ${
                isActive
                  ? 'bg-secondary-container text-on-secondary-container'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            <Icon name={icon} />
            <span className="font-label-caps text-label-caps">{label}</span>
          </NavLink>
        ))}
      </nav>

      <Link
        to="/contact"
        className="mt-6 block w-full rounded-lg bg-primary py-3 text-center font-label-caps text-label-caps font-bold tracking-widest text-on-primary transition-all hover:opacity-90 active:scale-95"
      >
        HIRE ME
      </Link>
    </aside>
  );
}