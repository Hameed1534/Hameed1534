// TODO: every value below is placeholder content copied from the Stitch design.
// Replace it with your real, verifiable information before publishing.

export const aboutHero = {
  eyebrow: 'Professional Profile',
  heading: 'Methodical Precision in Software Quality Assurance',
  summary:
    'A dedicated QA Engineer with 3 years of hands-on experience driving quality excellence across high-stakes industries. Specializing in end-to-end automation and API reliability, I transform complex testing requirements into scalable, resilient frameworks.',
  domains: [
    { label: 'E-Commerce', icon: 'shopping_cart' },
    { label: 'Fintech', icon: 'payments' },
    { label: 'SaaS', icon: 'cloud_done' },
  ],
  badgeValue: '3+',
  badgeLabel: 'Years Experience',
  image: '/images/profile.jpg',
  imageAlt: 'Portrait of the QA engineer',
};

export const sdlc = {
  title: 'SDLC & STLC Integration',
  description:
    'Deep integration of testing phases within the Software Development Life Cycle. From Requirement Analysis to Test Closure, ensuring that quality is not an afterthought but a continuous thread.',
  // Add more phases here (e.g. Defect Lifecycle, Regression & Smoke/Sanity); the grid adapts.
  phases: [
    { label: 'Phase 01', title: 'Requirement Analysis' },
    { label: 'Phase 02', title: 'Test Design & Execution' },
  ],
};

export const agile = {
  title: 'Agile Champion',
  description:
    'Active participant in Scrum ceremonies. Proficient in Jira for sprint planning, bug tracking, and grooming sessions to maintain a healthy velocity.',
  footerLabel: 'Continuous Feedback',
};

export const specialization = {
  title: 'API & Automation',
  items: [
    'RESTful API testing with Postman/RestAssured',
    'Scalable E2E frameworks with Cypress & Playwright',
    'CI/CD integration via GitHub Actions',
  ],
};

export const credential = {
  eyebrow: 'Credentials',
  title: 'ISTQB® Certified Tester',
  description: 'Foundation Level (CTFL) - Validation of core testing principles.',
};

export const experience = [
  {
    period: '2022 - PRESENT',
    role: 'Senior QA Automation Engineer',
    company: 'FinTech Innovators',
    description:
      'Spearheaded the migration from manual regression to 85% automated coverage for a global payments gateway. Implemented performance testing using JMeter.',
  },
  {
    period: '2021 - 2022',
    role: 'Software QA Analyst',
    company: 'MarketScale E-Commerce',
    description:
      'Focused on cross-browser compatibility and user journey validation for high-traffic retail platforms. Reduced critical production bugs by 40% through early bug detection.',
  },
  {
    period: '2020 - 2021',
    role: 'Junior QA / Intern',
    company: 'SaaS StartUp Lab',
    description:
      'Foundational experience in manual test execution, bug reporting via Jira, and learning the basics of Selenium WebDriver.',
  },
];

export const skillGroups = [
  { name: 'Automation Frameworks', level: 'Advanced', percent: 90, tools: ['Cypress', 'Playwright', 'Selenium'] },
  { name: 'API Testing', level: 'Advanced', percent: 85, tools: ['Postman', 'RestAssured', 'GraphQL'] },
  { name: 'Cloud & DevOps', level: 'Intermediate', percent: 65, tools: ['GitHub Actions', 'Jenkins', 'Docker'] },
  { name: 'Performance & Security', level: 'Growing', percent: 45, tools: ['JMeter', 'OWASP ZAP', 'Lighthouse'] },
];