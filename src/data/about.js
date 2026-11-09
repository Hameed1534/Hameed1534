// About page content. Facts come from the resume.
import { experience } from './profile';

export const aboutHero = {
  eyebrow: 'Professional Profile',
  heading: 'Detail-Driven Quality Assurance for Healthcare & SaaS Applications',
  summary: `Junior Software Tester with ${experience.sentence} of hands-on experience in functional, regression, API and performance testing on live healthcare and SaaS web applications. I work in Agile/Scrum teams, validate REST and GraphQL APIs with Postman, load-test with JMeter, manage defects in JIRA, and I am building Playwright (JavaScript) automation.`,
  domains: [
    { label: 'Healthcare', icon: 'medical_services' },
    { label: 'SaaS', icon: 'cloud_done' },
    { label: 'Corporate Web', icon: 'language' },
  ],
  badgeValue: experience.badgeValue,
  badgeLabel: experience.badgeLabel,
  image: '/images/profile.jpg', // TODO: add your own square photo
  imageAlt: 'Portrait of Hameed Khan Z',
};

export const sdlc = {
  title: 'SDLC & STLC Integration',
  description:
    'Testing is built into every sprint: reviewing requirements and acceptance criteria, designing test cases, executing functional, regression, smoke and sanity suites, and tracking each defect to closure.',
  phases: [
    { label: 'Phase 01', title: 'Requirement Analysis' },
    { label: 'Phase 02', title: 'Test Design & Execution' },
    { label: 'Phase 03', title: 'Defect Lifecycle in JIRA' },
    { label: 'Phase 04', title: 'Regression, Smoke & Sanity' },
  ],
};

export const agile = {
  title: 'Agile / Scrum Practitioner',
  description:
    'Works in sprint cycles with developers and business stakeholders: reviews requirements, aligns test coverage with acceptance criteria and supports timely, compliant releases.',
  footerLabel: 'Sprint-Aligned Testing',
};

export const specialization = {
  title: 'API & Automation',
  items: [
    'REST and GraphQL API testing with Postman',
    'Performance testing with JMeter',
    'Playwright (JavaScript) automation with Page Object Model, in progress',
  ],
};

export const credential = {
  eyebrow: 'Credentials',
  title: 'Certified in Testing, API & Performance',
  description:
    'Udemy: Software Testing with Jira & Agile, JMeter Performance Testing, REST & GraphQL API Testing with Postman. Great Learning: MySQL Basics.',
};

export const experienceTimeline = [
  {
    period: 'JULY 2024 - PRESENT',
    role: 'Junior Software Tester',
    company: 'Wonder Worth Solutions Pvt Ltd, Vellore',
    description:
      'Testing live healthcare and SaaS web applications in an Agile/Scrum team: 200+ test cases executed, 55+ API endpoints validated and 60+ defects managed in JIRA. Currently building Playwright (JavaScript) automation to expand regression coverage.',
  },
  {
    period: 'MAY 2024',
    role: 'B.Tech, Information Technology',
    company: 'Veltech Multitech Dr. Rangarajan Dr. Sakunthala Engineering College, Avadi',
    description: 'Graduated with a CGPA of 7.53.',
  },
];

// The bars show the level named in your resume, not a measured score:
// Proficient = 80, Working knowledge = 60, Building = 50, Learning = 25.
export const skillGroups = [
  { name: 'Functional & Regression Testing', level: 'Proficient', percent: 80, tools: ['Smoke', 'Sanity', 'Compatibility', 'UAT'] },
  { name: 'API Testing', level: 'Proficient', percent: 80, tools: ['Postman', 'REST', 'GraphQL'] },
  { name: 'Performance Testing', level: 'Proficient', percent: 80, tools: ['JMeter'] },
  { name: 'Test Automation', level: 'Building', percent: 50, tools: ['Playwright', 'JavaScript', 'POM'] },
  { name: 'Cloud & Data', level: 'Learning', percent: 25, tools: ['Azure Data Factory', 'Resource Groups'] },
];
