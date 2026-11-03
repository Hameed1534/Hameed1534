// TODO: placeholder content copied from the Stitch design.
// Replace with the details of your own framework, pipeline and metrics.

export const automationHeader = {
  eyebrow: 'Core Architecture',
  title: 'Automation Testing Framework',
  description:
    'A methodical, scalable Selenium WebDriver framework leveraging Page Object Model (POM) and modern CI/CD orchestration for industrial-grade quality assurance.',
  chips: [
    { id: 'status', label: 'System Healthy', dot: true },
    { id: 'version', label: 'v2.4.0-stable', icon: 'terminal' },
  ],
};

export const pomLayer = {
  eyebrow: 'Logical Layer',
  title: 'Selenium Framework (POM)',
  icon: 'architecture',
  pageObjects: ['Login_PO.java', 'Dash_PO.java'],
  runner: {
    title: 'TestNG Runner',
    hooks: ['@BeforeSuite: SetupDriver', '@Test: Execution Logic', '@AfterSuite: Teardown'],
  },
  dataSource: { icon: 'database', lines: ['Excel / JSON', 'Data Source'] },
};

export const mavenStructure = {
  eyebrow: 'Build Mgmt',
  title: 'Maven Structure',
  icon: 'inventory_2',
  tree: [
    { icon: 'folder_open', label: 'src/main/java', level: 0 },
    { icon: 'description', label: 'BaseTest.java', level: 1 },
    { icon: 'folder_open', label: 'src/test/resources', level: 0 },
    { icon: 'settings_applications', label: 'testng.xml', level: 1 },
    { icon: 'code_blocks', label: 'pom.xml', level: 0, highlight: true },
  ],
  quote: '“Dependency isolation and standardized build lifecycle.”',
};

export const pipeline = {
  eyebrow: 'CI/CD Pipeline',
  title: 'Jenkins Orchestration Workflow',
  steps: [
    { icon: 'hub', title: 'Code Push', subtitle: 'Webhook Trigger', tone: 'default' },
    { icon: 'build', title: 'Maven Build', subtitle: 'mvn clean install', tone: 'active' },
    { icon: 'play_arrow', title: 'Execution', subtitle: 'Parallel Tests', tone: 'default' },
    { icon: 'analytics', title: 'Report Gen', subtitle: 'Extent Reports', tone: 'success' },
    { icon: 'mail', title: 'Notification', subtitle: 'Slack / Email', tone: 'default' },
  ],
};

export const automationMetrics = {
  coverage: {
    label: 'Regression Coverage',
    value: '94.2',
    unit: '%',
    delta: '+2.1% WoW',
    percent: 94.2,
    note: 'Total automated scenarios across 5 mission-critical business modules.',
  },
  buildTime: {
    label: 'Avg. Build Time',
    value: '12.5',
    unit: 'min',
    tag: 'Concurrent',
    bars: [50, 66, 100, 75, 50, 66], // bar heights in %
    activeIndex: 2,
    note: 'Optimized via Selenium Grid and TestNG parallel threads.',
  },
  flakiness: {
    label: 'Flakiness Rate',
    value: '0.8',
    unit: '%',
    tag: 'Stable',
    quote: '“Explicit waits & JS Executors”',
  },
};

export const executionArtefacts = {
  title: 'Execution Artefacts',
  description: 'Detailed visual breakdowns of the automated reporting engine and stack traces.',
  items: [
    {
      badge: 'REPORTING',
      badgeClassName: 'bg-primary',
      title: 'Extent Report Dashboard',
      image: '/images/extent-report.jpg',
      imageAlt: 'Extent Report dashboard with test result charts',
    },
    {
      badge: 'INFRASTRUCTURE',
      badgeClassName: 'bg-tertiary',
      title: 'Dockerized Grid Nodes',
      image: '/images/docker-grid.jpg',
      imageAlt: 'Terminal output from dockerized Selenium Grid nodes',
    },
  ],
};
