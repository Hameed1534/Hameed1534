// TODO: all values are placeholders copied from the Stitch design.
// Replace with your real skills, years and numbers.

export const skillsHeader = {
  badge: 'CORE COMPETENCIES',
  updatedLabel: 'Last Audited: Oct 2026',
  title: 'Technical Skills Dashboard',
  description:
    'Comprehensive overview of my engineering toolset and quality assurance proficiency across the full SDLC.',
};

export const automation = {
  eyebrow: 'ENGINEERING',
  title: 'Automation Frameworks',
  icon: 'smart_toy',
  badge: 'Expert',
  bars: [
    { label: 'Selenium WebDriver (Java/C#)', percent: 95 },
    { label: 'TestNG / JUnit', percent: 90 },
    { label: 'Cypress.io / Playwright', percent: 85 },
  ],
  tags: ['Page Object Model', 'Data Driven Testing', 'Behavior Driven Development', 'Parallel Execution'],
};

export const apiServices = {
  eyebrow: 'INTERFACES',
  title: 'API & Web Services',
  icon: 'api',
  tools: [
    { icon: 'send', name: 'Postman', description: 'Collections & Environment Scripting' },
    { icon: 'integration_instructions', name: 'REST Assured', description: 'Java-based API Automation' },
    { icon: 'settings_ethernet', name: 'SoapUI', description: 'WSDL & SOAP Validation' },
  ],
  quote: '“Expert in JSON/XML schema validation and OAuth2.0 authentication flows.”',
};

export const manualTesting = {
  eyebrow: 'METHODOLOGY',
  title: 'Manual Testing',
  icon: 'fact_check',
  items: ['Exploratory Testing', 'Regression Analysis', 'User Acceptance (UAT)', 'Boundary Value Analysis'],
};

export const dataFlow = {
  eyebrow: 'DATA & FLOW',
  title: 'Database & CI/CD',
  icon: 'database',
  columns: [
    {
      heading: 'DATABASE SYSTEMS',
      bars: [
        { label: 'SQL / MySQL', percent: 90 },
        { label: 'MongoDB / NoSQL', percent: 75 },
      ],
    },
    {
      heading: 'VERSION CONTROL & CI',
      bars: [
        { label: 'Git / GitHub', percent: 95 },
        { label: 'Jenkins / CI Pipelines', percent: 80 },
      ],
    },
  ],
};

export const tracking = {
  eyebrow: 'TRACKING',
  title: 'JIRA & Test Management',
  icon: 'bug_report',
  backgroundImage: '/images/jira-dashboard.png', // optional decoration, 10% opacity
  stats: [
    { value: '150+', label: 'BUGS DOCUMENTED' },
    { value: '45', label: 'EPICS MANAGED' },
    { value: '98%', label: 'BUG RESOLUTION RATE' },
    { value: '5/5', label: 'SPRINT VELOCITY' },
  ],
};

export const maturity = {
  title: 'Skill Maturity Matrix',
  description: 'Detailed breakdown of years of experience and environment applicability.',
  rows: [
    { skill: 'Selenium WebDriver', experience: '5 Years', lastUsed: 'Current', proficiency: 5, status: 'Pass' },
    { skill: 'REST API Testing', experience: '4 Years', lastUsed: 'Current', proficiency: 4, status: 'Pass' },
    { skill: 'SQL Server / MySQL', experience: '3 Years', lastUsed: '2 Months ago', proficiency: 3, status: 'Pending' },
  ],
};
