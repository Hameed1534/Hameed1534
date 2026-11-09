// Automation page. The resume says you are BUILDING Playwright (JavaScript) automation with
// Page Object Model, assertions, fixtures and hooks, so this page shows that pattern.
// The file names below are an example layout.
// TODO: change them to match your real project when you have one on GitHub.

export const automationHeader = {
  eyebrow: 'Automation Learning Path',
  title: 'Playwright Automation',
  description:
    'Building automation with Playwright (JavaScript) to expand regression coverage and reduce manual testing effort, using the Page Object Model, assertions, fixtures and hooks.',
  chips: [
    { id: 'status', label: 'In progress', dot: true },
    { id: 'stack', label: 'Playwright · JavaScript', icon: 'terminal' },
  ],
};

export const pomLayer = {
  eyebrow: 'Framework Pattern',
  title: 'Playwright Page Object Model',
  icon: 'architecture',
  pageObjects: ['LoginPage.js', 'DashboardPage.js'],
  runner: {
    title: 'Playwright Test Runner',
    hooks: [
      'beforeEach: open page, prepare data',
      'test: actions + expect() assertions',
      'afterEach: clean up',
    ],
  },
  dataSource: { icon: 'database', lines: ['Test Data', 'JSON / fixtures'] },
};

export const mavenStructure = {
  eyebrow: 'Project Layout',
  title: 'Playwright Project Structure',
  icon: 'inventory_2',
  tree: [
    { icon: 'folder_open', label: 'pages/', level: 0 },
    { icon: 'description', label: 'LoginPage.js', level: 1 },
    { icon: 'folder_open', label: 'tests/', level: 0 },
    { icon: 'description', label: 'login.spec.js', level: 1 },
    { icon: 'folder_open', label: 'fixtures/', level: 0 },
    { icon: 'settings_applications', label: 'playwright.config.js', level: 0, highlight: true },
  ],
  quote: '“Page objects keep locators and actions out of the tests.”',
};

// The section id "workflow" is the target of the sidebar's "Test Workflow" link.
export const pipeline = {
  eyebrow: 'TEST WORKFLOW',
  title: 'Sprint Testing Workflow',
  steps: [
    { icon: 'rule', title: 'Requirement Review', subtitle: 'Acceptance criteria', tone: 'default' },
    { icon: 'edit_note', title: 'Test Design', subtitle: 'Cases & scenarios', tone: 'active' },
    { icon: 'play_arrow', title: 'Execution', subtitle: 'Functional · Regression', tone: 'default' },
    { icon: 'bug_report', title: 'Defect Logging', subtitle: 'JIRA lifecycle', tone: 'success' },
    { icon: 'verified', title: 'Release Sign-off', subtitle: 'Smoke & sanity', tone: 'default' },
  ],
};
