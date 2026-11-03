// TODO: placeholder content copied from the Stitch design.
// The PRD asks for at least 15 real test cases (positive, negative and boundary).
// Add them to `executionTable.rows`. A row that has a `details` object becomes
// clickable and fills the "Active Investigation" panel below the table.

export const testHeader = {
  eyebrow: 'Regression Suite v2.4',
  title: 'Test Execution Summary',
  lastRun: 'Last Run: Today, 10:42 AM',
};

export const testKpis = [
  { id: 'pass', label: 'Pass Rate', value: '94.2%', icon: 'check_circle', iconClassName: 'text-primary', progress: 94.2 },
  { id: 'executed', label: 'Executed', value: '342 / 350', icon: 'play_circle', iconClassName: 'text-secondary', note: '8 Remaining' },
  { id: 'blocked', label: 'Blocked', value: '3', icon: 'block', iconClassName: 'text-tertiary', note: 'Infrastructure related' },
  {
    id: 'defects',
    label: 'Defects Found',
    value: '5',
    icon: 'bug_report',
    iconClassName: 'text-error',
    note: '2 Critical Priority',
    noteClassName: 'text-error',
    accent: true,
  },
];

export const executionTable = {
  title: 'Execution Details',
  searchPlaceholder: 'Search by Scenario or ID',
  newTestLabel: 'New Test',
  entriesTotal: 350,
  rows: [
    {
      id: 'TC-4012',
      module: 'Auth-UI',
      scenario: 'User Login with MFA',
      description: 'Verify that the system prompts for a 6-digit TOTP code after valid credentials.',
      expected: 'Dashboard should load upon successful code entry within 2s.',
      status: 'Pass',
    },
    {
      id: 'TC-4013',
      module: 'Payment',
      scenario: 'Stripe 3DS Sandbox',
      description: 'Simulate a failed 3DS verification with a declined test card.',
      expected: "Error toast 'Payment Declined' must be displayed in Red.",
      status: 'Fail',
      details: {
        preconditions: [
          'Stripe Sandbox Environment is operational.',
          "Test user account 'QA_MFA_User_01' exists.",
          'Browser cache cleared.',
        ],
        steps: [
          { text: 'Navigate to /checkout page.' },
          { text: "Fill credit card details with '4000 0000 0000 0002' (3DS Decline card)." },
          { text: "Click 'Confirm Purchase'." },
          { text: 'Confirm 3DS modal appears and wait for response.', failed: true },
        ],
        expected: "System should display 'Authentication Failed' and return to payment selector.",
        actual: 'System threw a 500 Internal Server Error; user stuck on blank loading screen.',
        bug: {
          label: 'Open Bug Ticket',
          key: 'JIRA-8921',
          note: 'Linked to TC-4013. Assigned to @frontend_dev.',
          cta: 'View Ticket',
          url: '', // TODO: link to the ticket / sample report
        },
      },
    },
    {
      id: 'TC-4014',
      module: 'Reports',
      scenario: 'CSV Export Large Data',
      description: 'Export 100k rows of transaction data to CSV.',
      expected: 'File generated within 30s; data integrity verified via MD5.',
      status: 'Blocked',
    },
    {
      id: 'TC-4015',
      module: 'Search',
      scenario: 'Elasticsearch Fuzzy Match',
      description: "Search for 'ipone' should suggest 'iPhone'.",
      expected: "Top result must be 'iPhone' with relevant relevance score.",
      status: 'Pass',
    },
  ],
};

export const regressionHealth = {
  title: 'Regression Health',
  percent: 85,
  note: 'Automation coverage has increased by 5% this sprint.',
};

export const statusFilters = ['All', 'Pass', 'Fail', 'Blocked'];
