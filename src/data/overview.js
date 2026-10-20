// PLACEHOLDER numbers copied from the Stitch design.
// TODO: replace with real figures from your projects, or delete what you cannot prove.
export const heroStats = { passRate: 99.8 };

export const metrics = [
  { id: 'regression', label: 'REGRESSION SUITE', value: '1,240', caption: 'Total Test Cases Executed', tag: 'Pass', tone: 'pass' },
  { id: 'automation', label: 'AUTOMATION COVERAGE', value: '84%', caption: 'Unit & E2E Coverage', tag: 'Optimal', tone: 'optimal' },
  { id: 'defects', label: 'DEFECT DENSITY', value: '0.2', caption: 'Bugs per 1k LOC', tag: 'Pending', tone: 'pending' },
];

// TODO: use your real stack (for example Selenium, TestNG, Postman, JIRA).
export const overviewProjects = [
  { id: 'api-reliability', name: 'API Reliability Framework', stack: ['RestAssured', 'Java'], env: 'Production', status: 'Stable', url: '/projects', },
  { id: 'ui-automation', name: 'Global UI Automation Suite', stack: ['Playwright', 'TS'], env: 'Staging', status: 'Stable',url: '/projects', },
];