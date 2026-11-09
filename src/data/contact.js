// Text shown on the Contact page. Email, phone and social links come from profile.js.

export const contactContent = {
  eyebrow: 'GET IN TOUCH',
  title: "Let's build reliable software together.",
  intro:
    "Looking for a software tester for functional, API or performance testing on web applications? I'd be glad to talk about how I can help your team release with confidence.",
  fields: {
    name: { label: 'FULL NAME', placeholder: 'John Doe' },
    email: { label: 'EMAIL ADDRESS', placeholder: 'john@company.com' },
    subject: { label: 'SUBJECT', placeholder: 'QA Infrastructure Inquiry' },
    message: {
      label: 'MESSAGE',
      placeholder: 'Describe your project goals and quality requirements...',
    },
  },
  submitLabel: 'Send Secure Message',
  status: { label: 'CURRENT STATUS', value: 'Open for Opportunities' }, // TODO: keep only if true
  precision: {
    title: 'Methodical Precision',
    text: "I test live healthcare and SaaS applications in Agile/Scrum teams, validating workflows, APIs and performance before every release. I'm now growing into Playwright automation to widen regression coverage and reduce manual effort.",
  },
};
