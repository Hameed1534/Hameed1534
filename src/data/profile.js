// Single source of truth for personal details. Facts come from the resume.
// TODO: add your LinkedIn and GitHub addresses (the resume has no URLs).

// Experience is calculated from your start date, so it never goes out of date.
// Edit START_DATE if it changes. (Months are counted from 0: July = 6.)
const START_DATE = new Date(2024, 6, 14); // 14 July 2024

function monthsSince(start, now = new Date()) {
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  return Math.max(0, months);
}

const totalMonths = monthsSince(START_DATE);
const years = Math.floor(totalMonths / 12);

export const experience = {
  years,
  months: totalMonths,
  badgeValue: years >= 1 ? `${years}+` : String(totalMonths),
  badgeLabel: years >= 1 ? 'Years Experience' : 'Months Experience',
  text: years >= 1 ? `${years}+ YEARS EXPERIENCE` : `${totalMonths} MONTHS EXPERIENCE`,
  sentence: years >= 1 ? `${years}+ years` : `${totalMonths} months`,
};

export const profile = {
  brand: 'HAMEED_KHAN',
  sidebarTitle: 'QA Portfolio',
  sidebarSubtitle: 'Junior Software Tester',

  name: 'Hameed Khan Z',
  role: 'Junior Software Tester',
  location: 'Tamil Nadu, India',
  workPreference: 'Full Time | On-site (Chennai) / Remote / Hybrid',

  summary:
    'Delivering quality assurance for live healthcare and SaaS web applications through functional, regression, API and performance testing. I work in Agile/Scrum teams, validate REST and GraphQL APIs with Postman, load-test with JMeter and manage defects in JIRA.',

  skillTags: ['Manual Testing', 'API Testing', 'Postman', 'JMeter', 'JIRA', 'Playwright', 'Agile / Scrum', 'SQL'],

  resumeUrl: '/resume.pdf', // put your PDF at public/resume.pdf
  resumeFileName: 'Hameed_Khan_Z_Resume.pdf',

  email: 'Hameedkhan032002@gmail.com',
  phone: '+91 87547 71534',
  linkedin: '#', // TODO: https://www.linkedin.com/in/your-handle
  github: '#', // TODO: https://github.com/your-username

  footerText: 'Software Tester Portfolio',
  availability: 'Availability: Open', // TODO: change if you are not looking right now
};
