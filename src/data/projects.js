// TODO: everything below is placeholder content copied from the Stitch design.
// Replace with your real projects. Never publish numbers you cannot back up.

export const projectsHeader = {
  eyebrow: 'Project Showcase',
  title: 'Enterprise Project Experience',
  description:
    'A comprehensive record of architectural quality assurance across high-stakes enterprise environments, demonstrating methodological precision and technical maturity.',
};

export const flagshipProject = {
  title: 'Global E-Commerce Platform',
  passRate: '99.8% Pass Rate',
  methodology: 'Agile Methodology',
  image: '/images/project-ecommerce.png',
  imageAlt: 'Mobile devices showing an e-commerce checkout',
  facts: [
    { label: 'DOMAIN', value: 'Retail / FinTech' },
    { label: 'TEAM SIZE', value: '24 Members' },
    { label: 'DURATION', value: '18 Months' },
    { label: 'METHODOLOGY', value: 'Agile / Scrum' },
  ],
  responsibilitiesTitle: 'Responsibilities & Implementation',
  responsibilities: [
    'Engineered end-to-end automated test suites for multi-currency checkout flows using Cypress.',
    'Led visual regression testing for 500+ SKU pages across 12 localized regions.',
    'Integrated Jenkins pipelines for smoke tests on every PR, reducing deployment failures by 35%.',
  ],
  techStackLabel: 'TECH STACK',
  techStack: ['Cypress', 'TypeScript', 'Jenkins', 'Percy.io', 'Jira'],
};

export const defectDensity = {
  title: 'Defect Density',
  criticalFixed: { label: 'Critical Bugs Fixed', value: '142', percent: 85 },
  resolution: { label: 'Time to Resolution', value: '4.2 Hours' },
  note: 'Metrics derived from Q3 2023 Sprint Cycle.',
};

export const sprintVelocity = {
  title: 'Sprint Velocity',
  sprints: [
    { label: 'S12', height: 40 },
    { label: 'S13', height: 65 },
    { label: 'S14', height: 90, active: true },
    { label: 'S15', height: 75 },
    { label: 'S16', height: 85 },
  ],
};

export const pipelineCard = {
  title: 'CI/CD Pipeline',
  image: '/images/cicd-pipeline.png',
  imageAlt: 'Isometric illustration of a CI/CD pipeline',
  badges: ['BUILD: PASS', 'TEST: PASS'],
};

export const bankingProject = {
  eyebrow: 'FINANCIAL SERVICES',
  title: 'Tier-1 Digital Banking Application',
  challengesTitle: 'Challenges',
  challenges:
    'Managing high-security compliance (PCI-DSS) while maintaining rapid deployment cycles. Ensuring 0-latency synchronization across distributed ledger systems during high-volume periods.',
  toolsTitle: 'Tools Used',
  tools: ['Selenium Grid', 'JMeter', 'Appium', 'SQL Server'],
  audit: {
    title: 'Audit History & Coverage',
    columns: ['Security Domain', 'Method', 'Status'],
    rows: [
      { domain: 'Transaction Integrity', method: 'Stress Test', status: 'Pass' },
      { domain: 'Biometric Auth', method: 'Functional', status: 'Pass' },
      { domain: 'Data Encryption', method: 'Compliance', status: 'Pending Audit' },
    ],
  },
  compliance: {
    value: '100%',
    title: 'Security Compliance',
    description: 'Verified through automated penetration testing and manual audit trails.',
    cta: 'View Audit Logs',
    url: '', // TODO: link to your audit log / sample report (e.g. '/files/audit-log.pdf')
  },
};

export const healthcareProject = {
  icon: 'medical_services',
  eyebrow: 'HEALTHCARE SAAS',
  title: 'Patient Records Management',
  description:
    'Designed the QA framework for a HIPAA-compliant SaaS platform serving 50+ clinics. Focused on data interoperability (HL7) and accessibility (WCAG 2.1).',
  stats: [
    { label: 'TEAM SIZE', value: '12', valueClassName: '' },
    { label: 'QA SCORE', value: '9.4/10', valueClassName: 'text-emerald-600' },
  ],
  challengeLabel: 'CORE CHALLENGE',
  challenge:
    '“Maintaining zero data-loss during complex database migrations involving multi-terabyte legacy patient records.”',
  image: '/images/healthcare-saas.png',
  imageAlt: 'Tablet showing a patient records dashboard in an operating room',
};
