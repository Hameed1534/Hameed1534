// Skills page content. Skills and tools come from the resume.
// The bars show the level named in your resume, not a measured score:
// Proficient = 80, Working knowledge = 60, Building = 50, Learning = 25.

export const skillsHeader = {
  badge: 'CORE COMPETENCIES',
  updatedLabel: 'Last Updated: Nov 2026',
  title: 'Technical Skills Dashboard',
  description:
    'An overview of the testing skills and tools I use on live healthcare and SaaS web applications, and the automation skills I am building.',
};

export const automation = {
  eyebrow: 'AUTOMATION',
  title: 'Test Automation',
  icon: 'smart_toy',
  badge: 'In progress',
  bars: [
    { label: 'Playwright (JavaScript)', percent: 50 },
    { label: 'Page Object Model (POM)', percent: 50 },
    { label: 'Assertions, Fixtures & Hooks', percent: 50 },
  ],
  tags: ['Playwright', 'JavaScript', 'Page Object Model', 'Assertions', 'Fixtures', 'Hooks'],
};

export const apiServices = {
  eyebrow: 'INTERFACES',
  title: 'API & Performance',
  icon: 'api',
  tools: [
    { icon: 'send', name: 'Postman', description: 'REST and GraphQL request and response validation' },
    { icon: 'hub', name: 'GraphQL APIs', description: 'Queries, mutations and error handling' },
    { icon: 'speed', name: 'JMeter', description: 'Throughput, response time and stability under load' },
  ],
  quote:
    '“Verified request and response behaviour, status codes, error handling and data accuracy before every release.”',
};

export const manualTesting = {
  eyebrow: 'METHODOLOGY',
  title: 'Manual Testing',
  icon: 'fact_check',
  items: [
    'Functional & Regression Testing',
    'Smoke & Sanity Testing',
    'Compatibility & Cross-browser Testing',
    'UAT & Test Case Design',
  ],
};

export const dataFlow = {
  eyebrow: 'DATA & TOOLS',
  title: 'Data & Version Control',
  icon: 'database',
  columns: [
    {
      heading: 'DATABASE & CLOUD',
      bars: [
        { label: 'SQL / MySQL (basics)', percent: 60 },
        { label: 'Azure Data Factory (learning)', percent: 25 },
      ],
    },
    {
      heading: 'CODE & VERSION CONTROL',
      bars: [
        { label: 'Git', percent: 60 },
        { label: 'JavaScript', percent: 50 },
      ],
    },
  ],
};

export const tracking = {
  eyebrow: 'TRACKING',
  title: 'JIRA & Test Management',
  icon: 'bug_report',
  backgroundImage: '/images/jira-dashboard.jpg', // optional decoration, 10% opacity
  stats: [
    { value: '60+', label: 'DEFECTS MANAGED' },
    { value: '200+', label: 'TEST CASES EXECUTED' },
    { value: '55+', label: 'API ENDPOINTS VALIDATED' },
    { value: '3', label: 'LIVE APPLICATIONS TESTED' },
  ],
};

export const maturity = {
  title: 'Skill Maturity Matrix',
  description: 'Where each skill stands today. Proficiency dots are my own assessment.',
  rows: [
    { skill: 'Functional & Regression Testing', experience: 'Since Jul 2024', lastUsed: 'Current', proficiency: 4, status: 'Active' },
    { skill: 'API Testing (Postman)', experience: 'Since Jul 2024', lastUsed: 'Current', proficiency: 4, status: 'Active' },
    { skill: 'JIRA & Defect Lifecycle', experience: 'Since Jul 2024', lastUsed: 'Current', proficiency: 4, status: 'Active' },
    { skill: 'Performance Testing (JMeter)', experience: 'Since Jul 2024', lastUsed: 'Current', proficiency: 3, status: 'Active' },
    { skill: 'Playwright Automation', experience: 'Building', lastUsed: 'Current', proficiency: 2, status: 'Learning' },
  ],
};
