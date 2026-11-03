// Top navigation. "QA Docs" also stays highlighted on the documentation-style
// pages (the Stitch designs highlight it on all of them).
export const topNav = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'QA Docs', to: '/docs', alsoActiveFor: ['/test-cases', '/bug-reports', '/sql'] },
  { label: 'Contact', to: '/contact' },
];

// Left sidebar (desktop, 1024px and up).
export const sideNav = [
  { label: 'Dashboard', icon: 'dashboard', to: '/' },
  { label: 'Test Suites', icon: 'fact_check', to: '/test-cases' },
  { label: 'Automation', icon: 'smart_toy', to: '/automation' },
  { label: 'CI/CD', icon: 'account_tree', to: '/ci-cd' },
  { label: 'Reports', icon: 'assessment', to: '/bug-reports' },
  { label: 'SQL Testing', icon: 'database', to: '/sql' },
];

// Bottom bar on phones and tablets (below 1024px). The 5th slot is the "More" menu.
export const mobileNav = [
  { label: 'Home', icon: 'dashboard', to: '/' },
  { label: 'About', icon: 'person', to: '/about' },
  { label: 'Skills', icon: 'build', to: '/skills' },
  { label: 'Projects', icon: 'work', to: '/projects' },
];

// Everything, grouped, for the "More" menu.
export const menuGroups = [
  {
    title: 'Pages',
    items: [
      { label: 'About', icon: 'person', to: '/about' },
      { label: 'Skills', icon: 'build', to: '/skills' },
      { label: 'Projects', icon: 'work', to: '/projects' },
      { label: 'QA Docs', icon: 'description', to: '/docs' },
      { label: 'Contact', icon: 'mail', to: '/contact' },
    ],
  },
  {
    title: 'Dashboard',
    items: [
      { label: 'Dashboard', icon: 'dashboard', to: '/' },
      { label: 'Test Suites', icon: 'fact_check', to: '/test-cases' },
      { label: 'Automation', icon: 'smart_toy', to: '/automation' },
      { label: 'CI/CD', icon: 'account_tree', to: '/ci-cd' },
      { label: 'Bug Reports', icon: 'assessment', to: '/bug-reports' },
      { label: 'SQL Testing', icon: 'database', to: '/sql' },
    ],
  },
];
