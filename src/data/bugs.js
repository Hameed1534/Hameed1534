// SAMPLE defect reports. They show how a defect is written (steps, expected, actual,
// severity, priority, environment) for the kinds of features in your resume, but the
// defects themselves are illustrative. Replace them with your own sanitised reports
// (no company or patient data). Add more rows and the table paginates automatically.
// The summary cards and the severity chart are calculated from these rows.

export const bugsHeader = {
  eyebrow: 'Sample Defect Reports',
  title: 'Bug Reporting Dashboard',
};

const rows = [
  {
    id: 'BUG-101',
    title: 'Claim submission accepts a zero billed amount',
    summary: 'Steps: New Claim -> amount 0.00 -> Submit...',
    severity: 'High',
    priority: 'P1 - Major',
    environment: 'QA',
    status: 'Resolved',
    details: {
      steps: ['Open the New Claim form', 'Enter a billed amount of 0.00', 'Click Submit'],
      expected: 'A validation message blocks the submission.',
      actual: 'The claim was saved with a 0.00 amount.',
      screenshot: '', // optional, e.g. '/images/bugs/bug-101.png'
    },
  },
  {
    id: 'BUG-102',
    title: "Physician can open another provider's document",
    summary: "Steps: log in as physician -> open another provider's document link...",
    severity: 'Critical',
    priority: 'P0 - Blocker',
    environment: 'Staging',
    status: 'In Progress',
    details: {
      steps: ['Log in as the physician', 'Open the link of a document owned by another provider'],
      expected: 'Access is denied and the document is not shown.',
      actual: 'The document opened and its contents were visible.',
      screenshot: '',
    },
  },
  {
    id: 'BUG-103',
    title: 'eSignature link still works after the document is signed',
    summary: 'Steps: sign a document -> open the same signing link again...',
    severity: 'High',
    priority: 'P1 - Major',
    environment: 'Staging',
    status: 'Open',
    details: {
      steps: ['Sign a document using its signing link', 'Open the same signing link again'],
      expected: "The link shows an 'already signed' message and blocks a second signature.",
      actual: 'The signature screen opens again.',
      screenshot: '',
    },
  },
  {
    id: 'BUG-104',
    title: 'Newsletter form accepts an invalid email format',
    summary: "Steps: enter 'abc@' in the email field -> Subscribe...",
    severity: 'Medium',
    priority: 'P2 - Normal',
    environment: 'QA',
    status: 'Resolved',
    details: {
      steps: ["Enter 'abc@' in the email field", 'Click Subscribe'],
      expected: 'An inline error is shown and nothing is submitted.',
      actual: 'The form shows a success message.',
      screenshot: '',
    },
  },
  {
    id: 'BUG-105',
    title: 'REST endpoint returns 500 instead of 400 for a missing field',
    summary: 'Steps: POST without a required field -> check the status code...',
    severity: 'High',
    priority: 'P1 - Major',
    environment: 'QA',
    status: 'Open',
    details: {
      steps: ["Send a POST request with the required 'name' field removed", 'Check the status code'],
      expected: 'Status 400 with a clear validation message.',
      actual: 'Status 500 Internal Server Error.',
      screenshot: '',
    },
  },
];

const count = (predicate) => rows.filter(predicate).length;
const total = rows.length;
const openCount = count((bug) => bug.status === 'Open' || bug.status === 'In Progress');
const criticalCount = count((bug) => bug.severity === 'Critical');
const doneCount = count((bug) => bug.status === 'Resolved' || bug.status === 'Closed');
const resolutionRate = total ? Math.round((doneCount / total) * 100) : 0;

export const bugKpis = [
  {
    id: 'total',
    label: 'Total Logged',
    value: String(total),
    icon: 'bug_report',
    iconClassName: 'text-primary',
    footer: { icon: 'description', text: 'Sample defect reports', className: 'text-on-surface-variant' },
  },
  {
    id: 'open',
    label: 'Open Defects',
    value: String(openCount),
    icon: 'pending_actions',
    iconClassName: 'text-primary',
    footer: { icon: 'schedule', text: 'Waiting for a fix', className: 'text-on-secondary-container' },
  },
  {
    id: 'critical',
    label: 'Critical Bugs',
    value: String(criticalCount).padStart(2, '0'),
    valueClassName: criticalCount ? 'text-error' : undefined,
    icon: 'priority_high',
    iconClassName: 'text-error',
    footer: { icon: 'bolt', text: criticalCount ? 'Immediate action required' : 'None open', className: 'text-on-surface-variant' },
  },
  {
    id: 'resolution',
    label: 'Resolution Rate',
    value: `${resolutionRate}%`,
    icon: 'analytics',
    iconClassName: 'text-primary',
    progress: resolutionRate,
  },
];

export const defectLifecycle = {
  title: 'Defect Lifecycle',
  description: 'How a defect moves through JIRA, from discovery to closure.',
  steps: [
    { title: 'New', text: 'Logged with steps, expected and actual result, severity, priority and environment.' },
    { title: 'Assigned', text: 'Triaged and assigned to a developer.' },
    { title: 'In Progress', text: 'The developer investigates and fixes the issue.' },
    { title: 'Resolved', text: 'The fix is available in the test environment.' },
    { title: 'Retest', text: 'The fix is verified and related regression checks are run.' },
    { title: 'Closed', text: 'Verified and closed, or reopened with new details if it persists.' },
  ],
};

const severityOrder = [
  { label: 'Critical', dotClassName: 'bg-error', strokeClassName: 'stroke-error' },
  { label: 'High', dotClassName: 'bg-tertiary-fixed-dim', strokeClassName: 'stroke-tertiary-fixed-dim' },
  { label: 'Medium', dotClassName: 'bg-primary', strokeClassName: 'stroke-primary' },
  { label: 'Low', dotClassName: 'bg-secondary', strokeClassName: 'stroke-secondary' },
];

export const severityDistribution = {
  title: 'Severity Distribution',
  total,
  totalLabel: 'Total Bugs',
  segments: severityOrder
    .map((level) => ({
      ...level,
      percent: total ? Math.round((count((bug) => bug.severity === level.label) / total) * 1000) / 10 : 0,
    }))
    .filter((segment) => segment.percent > 0),
};

export const defectLogs = {
  title: 'Recent Defect Logs',
  searchPlaceholder: 'Search by ID or title...',
  totalDefects: total,
  pageSize: 5,
  rows,
};

export const severityFilters = ['All', 'Critical', 'High', 'Medium', 'Low'];
