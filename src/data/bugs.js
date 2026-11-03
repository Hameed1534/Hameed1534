// TODO: placeholder content copied from the Stitch design.
// Replace with your real defects. The PRD asks for at least 5 real bug reports:
// add more objects to `defectLogs.rows` and the table paginates automatically.

export const bugsHeader = {
  eyebrow: 'System Health',
  title: 'Bug Reporting Dashboard',
};

export const bugKpis = [
  {
    id: 'open',
    label: 'Open Defects',
    value: '24',
    icon: 'bug_report',
    iconClassName: 'text-primary',
    footer: { icon: 'arrow_upward', text: '+12% vs last sprint', className: 'text-error' },
  },
  {
    id: 'closed',
    label: 'Closed Today',
    value: '18',
    icon: 'task_alt',
    iconFilled: true,
    iconClassName: 'text-primary',
    footer: { icon: 'check', text: 'On track for release', className: 'text-on-secondary-container' },
  },
  {
    id: 'critical',
    label: 'Critical Bugs',
    value: '03',
    valueClassName: 'text-error',
    icon: 'priority_high',
    iconClassName: 'text-error',
    footer: { icon: 'bolt', text: 'Immediate action required', className: 'text-on-surface-variant' },
  },
  {
    id: 'resolution',
    label: 'Resolution Rate',
    value: '88%',
    icon: 'analytics',
    iconClassName: 'text-primary',
    progress: 88,
  },
];

export const defectTrends = {
  title: 'Defect Trends',
  legend: [
    { label: 'New', dotClassName: 'bg-primary' },
    { label: 'Resolved', dotClassName: 'bg-secondary' },
  ],
  // `created` and `resolved` are bar heights in % of the chart area.
  days: [
    { day: 'MON', created: 40, resolved: 30 },
    { day: 'TUE', created: 65, resolved: 50 },
    { day: 'WED', created: 45, resolved: 75 },
    { day: 'THU', created: 90, resolved: 60 },
    { day: 'FRI', created: 55, resolved: 85 },
    { day: 'SAT', created: 30, resolved: 20 },
    { day: 'SUN', created: 25, resolved: 15 },
  ],
};

export const severityDistribution = {
  title: 'Severity Distribution',
  total: 45,
  totalLabel: 'Total Bugs',
  // percent values should add up to 100
  segments: [
    { label: 'Critical', percent: 10, dotClassName: 'bg-error', strokeClassName: 'stroke-error' },
    { label: 'High', percent: 25, dotClassName: 'bg-tertiary-fixed-dim', strokeClassName: 'stroke-tertiary-fixed-dim' },
    { label: 'Medium/Low', percent: 65, dotClassName: 'bg-primary', strokeClassName: 'stroke-primary' },
  ],
};

export const defectLogs = {
  title: 'Recent Defect Logs',
  searchPlaceholder: 'Search by ID or title...',
  totalDefects: 45, // shown as "Showing X of 45 defects"
  pageSize: 5,
  rows: [
    {
      id: 'BUG-1024',
      title: 'Checkout crash on payment retry',
      summary: 'Steps: Select item -> Pay -> Interruption -> Retry...',
      severity: 'Critical',
      priority: 'P0 - Blocker',
      environment: 'Production',
      status: 'Open',
      details: {
        steps: ['Select item', 'Pay', 'Interruption', 'Retry'],
        expected: 'The payment retry completes and the order is placed once.', // TODO: replace
        actual: 'The checkout crashes when the payment is retried.', // TODO: replace
        screenshot: '', // optional, e.g. '/images/bugs/bug-1024.png'
      },
    },
    {
      id: 'BUG-1025',
      title: 'Search filter delay in Firefox',
      summary: 'Observed 2s latency when applying 3+ filters...',
      severity: 'High',
      priority: 'P1 - Major',
      environment: 'Staging',
      status: 'In Progress',
      details: {
        steps: ['Open the search page in Firefox', 'Apply 3 or more filters'], // TODO: replace
        expected: 'Results update immediately after each filter.', // TODO: replace
        actual: 'Observed 2s latency when applying 3+ filters.',
        screenshot: '',
      },
    },
    {
      id: 'BUG-1026',
      title: 'Avatar overlap on mobile (Safari)',
      summary: 'Profile UI breaks at 375px viewport...',
      severity: 'Medium',
      priority: 'P3 - Trivial',
      environment: 'QA-Alpha',
      status: 'Resolved',
      details: {
        steps: ['Open the profile page in Safari', 'Set the viewport to 375px'], // TODO: replace
        expected: 'The avatar and profile layout stay aligned.', // TODO: replace
        actual: 'The avatar overlaps the profile UI at a 375px viewport.',
        screenshot: '',
      },
    },
  ],
};

export const severityFilters = ['All', 'Critical', 'High', 'Medium', 'Low'];
