// Projects page content. Everything comes from the resume (Wonder Worth Solutions Pvt Ltd).
// TODO: add your own images (never show real patient data) via the `image` fields.

export const projectsHeader = {
  eyebrow: 'Project Showcase',
  title: 'Project Experience',
  description:
    'Live healthcare and SaaS applications I have tested at Wonder Worth Solutions Pvt Ltd, covering functional, regression, API and performance testing in Agile/Scrum teams.',
};

export const flagshipProject = {
  title: 'BM – US Medical Billing Application',
  passRate: 'Zero critical defects post-release',
  methodology: 'Agile / Scrum',
  image: '',
  imageAlt: 'US medical billing application',
  facts: [
    { label: 'DOMAIN', value: 'Healthcare / RCM' },
    { label: 'ROLE', value: 'Software Tester' },
    { label: 'TESTING', value: 'Functional · API · Performance' },
    { label: 'METHODOLOGY', value: 'Agile / Scrum' },
  ],
  responsibilitiesTitle: 'Responsibilities & Implementation',
  responsibilities: [
    'Tested end-to-end revenue cycle management workflows: insurance verification, claim processing, auditing and AR follow-up.',
    'Ran functional, API and performance test suites across complex multi-step billing transactions.',
    'Validated data accuracy to meet US healthcare standards, with zero critical defects after release.',
  ],
  techStackLabel: 'TECH STACK',
  techStack: ['Postman', 'JMeter', 'JIRA', 'Agile / Scrum'],
};

export const testingVolume = {
  title: 'Testing Volume',
  icon: 'bug_report',
  rows: [
    { label: 'Test cases executed', value: '200+' },
    { label: 'API endpoints validated', value: '55+' },
    { label: 'Defects managed in JIRA', value: '60+' },
  ],
  note: 'Across 3 live production web applications.',
};

export const testingTypes = {
  title: 'Testing Types',
  icon: 'fact_check',
  items: ['Functional', 'Regression', 'Smoke', 'Sanity', 'Compatibility', 'API', 'Performance', 'UAT'],
};

export const toolbox = {
  title: 'Toolbox',
  icon: 'handyman',
  items: ['Postman', 'JIRA', 'JMeter', 'Playwright', 'Git', 'MS Excel'],
};

// Shown in the wide card under the first project.
export const bankingProject = {
  eyebrow: 'HEALTHCARE · ESIGNATURE',
  title: 'Nexus – Provider / Patient / Physician Application',
  challengesTitle: 'Challenges',
  challenges:
    'Making sure each of the three user roles (provider, patient and physician) can only reach the documents and actions meant for them, while eSignature, order creation and referral workflows keep working across multiple sprint releases.',
  toolsTitle: 'Testing Focus',
  tools: ['Role-Based Access Control', 'eSignature Workflows', 'Functional Testing', 'Regression Testing'],
  audit: {
    title: 'Coverage Areas',
    columns: ['Coverage Area', 'Test Type', 'Status'],
    rows: [
      { domain: 'Role-based access (3 roles)', method: 'Functional', status: 'Covered' },
      { domain: 'eSignature workflow', method: 'Functional', status: 'Covered' },
      { domain: 'Order creation & referrals', method: 'Regression', status: 'Covered' },
    ],
  },
  compliance: {
    value: '3',
    title: 'User Roles Validated',
    description: 'Provider, patient and physician access checked to prevent unauthorised document access.',
    cta: '',
    url: '',
  },
};

export const otherProjects = [
  {
    icon: 'view_kanban',
    eyebrow: 'SAAS · WEB',
    title: 'Neutix – Project Management Application',
    description:
      'Functional and API testing of the task-tracking and workflow management modules, verifying end-to-end reliability across all key user journeys.',
    stats: [
      { label: 'TESTING', value: 'Functional + API', valueClassName: '' },
      { label: 'PERFORMANCE', value: 'GraphQL / JMeter', valueClassName: '' },
    ],
    challengeLabel: 'KEY OUTCOME',
    challenge:
      '“Established pre-deployment load benchmarks by running GraphQL API performance tests in JMeter: response time, throughput and stability.”',
  },
  {
    icon: 'language',
    eyebrow: 'MARKETING · PUBLIC WEBSITE',
    title: 'WWS Corporate Website',
    description:
      'End-to-end functional testing of the public website (Home, Who We Are, Services, Pricing, Resources and Contact), validated against approved UI/UX designs and business requirements.',
    stats: [
      { label: 'COVERAGE', value: 'Cross-browser', valueClassName: '' },
      { label: 'RESPONSIVE', value: 'Desktop + Mobile', valueClassName: '' },
    ],
    challengeLabel: 'KEY CHECKS',
    challenge:
      '“Newsletter subscription form, CAPTCHA validation, service CTAs and partner and testimonial sections behaved as the acceptance criteria defined.”',
  },
];
