export const topNav = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'QA Docs', id: 'docs' },
  { label: 'Contact', id: 'contact' },
];

export const sideNav = [
  { label: 'Dashboard', icon: 'dashboard', id: 'home' },
  { label: 'Test Suites', icon: 'fact_check', id: 'test-cases' },
  { label: 'Automation', icon: 'smart_toy', id: 'automation' },
  { label: 'CI/CD', icon: 'account_tree', id: 'ci-cd' },
  { label: 'Reports', icon: 'assessment', id: 'bug-reports' },
];

export const mobileNav = [
  { label: 'Home', icon: 'dashboard', id: 'home' },
  { label: 'Tests', icon: 'fact_check', id: 'test-cases' },
  { label: 'Auto', icon: 'smart_toy', id: 'automation' },
  { label: 'Contact', icon: 'person', id: 'contact' },
];

// Stable arrays so the scroll-spy hook does not re-subscribe on every render.
export const topNavIds = topNav.map((item) => item.id);
export const sideNavIds = sideNav.map((item) => item.id);
export const mobileNavIds = mobileNav.map((item) => item.id);