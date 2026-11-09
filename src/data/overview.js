// Numbers on the Home page come from the resume (work at Wonder Worth Solutions, July 2024 to present).

export const heroStats = {
  label: 'TEST CASES EXECUTED',
  value: '200+',
  note: 'Across 3 live production web applications',
};

export const metrics = [
  {
    id: 'cases',
    label: 'TEST CASES EXECUTED',
    value: '200+',
    caption: 'Functional, regression, smoke, sanity and compatibility',
    tag: 'Manual',
    tone: 'pass',
  },
  {
    id: 'api',
    label: 'API ENDPOINTS VALIDATED',
    value: '55+',
    caption: 'REST and GraphQL, tested in Postman before each release',
    tag: 'API',
    tone: 'optimal',
  },
  {
    id: 'defects',
    label: 'DEFECTS MANAGED',
    value: '60+',
    caption: 'Logged and tracked in JIRA through the full defect lifecycle',
    tag: 'JIRA',
    tone: 'optimal',
  },
];

export const overviewProjects = [
  { id: 'bm', name: 'BM – US Medical Billing', stack: ['Postman', 'JMeter', 'JIRA'], env: 'Production', status: 'Live', url: '/projects' },
  { id: 'nexus', name: 'Nexus – Provider / Patient Portal', stack: ['Functional', 'Regression'], env: 'Production', status: 'Live', url: '/projects' },
  { id: 'neutix', name: 'Neutix – Project Management', stack: ['Postman', 'JMeter', 'GraphQL'], env: 'Production', status: 'Live', url: '/projects' },
];
