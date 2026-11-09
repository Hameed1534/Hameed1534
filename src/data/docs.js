// QA Docs page.
// TODO: add your real GitHub repositories to `featuredRepos.items` (the PRD makes a GitHub
// link mandatory) and links to your documents in `documentation.items[].url`.
// Cards without a link simply show no button.
// Do not publish company documents or any patient data.

export const docsHeader = {
  eyebrow: 'REPOSITORIES & ARTIFACTS',
  title: 'QA Documentation & Code Samples',
  description:
    'Test documentation and automation code samples that show how I plan, design and execute testing.',
};

// Example of an item:
// {
//   category: 'AUTOMATION',
//   badge: { label: 'IN PROGRESS', icon: 'build', className: 'bg-blue-100 text-blue-700' },
//   title: 'playwright-pom-practice',
//   description: 'Playwright (JavaScript) tests using the Page Object Model.',
//   tags: ['JavaScript', 'Playwright', 'POM'],
//   stars: 0,
//   forks: 0,
//   url: 'https://github.com/your-username/playwright-pom-practice',
// }
export const featuredRepos = {
  title: 'Featured Repositories',
  icon: 'terminal',
  emptyMessage: 'My GitHub repositories will appear here.',
  items: [],
};

export const logicPreview = {
  title: 'Logic Preview: Playwright Test with Page Object Model',
  icon: 'code',
  fileName: 'login.spec.js',
  // An example of the pattern. TODO: replace with a script from your own project.
  code: `import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('shows an error for an invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Act: use the page object, not raw locators
    await loginPage.login('qa.user@example.com', 'wrong-password');

    // Assert: the error message is shown
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Invalid');
  });
});`,
};

export const documentation = {
  title: 'QA Documentation & Strategy',
  icon: 'description',
  items: [
    {
      icon: 'picture_as_pdf',
      title: 'Test Plan',
      description: 'Scope, approach, environments and risks for a sprint release.',
      cta: 'Preview PDF',
      ctaIcon: 'visibility',
      url: '',
    },
    {
      icon: 'table_chart',
      title: 'Test Cases',
      description: 'Positive, negative and boundary scenarios with expected results.',
      cta: 'Open Sheet',
      ctaIcon: 'open_in_new',
      url: '',
    },
    {
      icon: 'bug_report',
      title: 'Defect Reports',
      description: 'Written like JIRA tickets: steps, severity, priority and environment.',
      cta: 'Read Report',
      ctaIcon: 'history_edu',
      url: '',
    },
    {
      icon: 'rule',
      title: 'Postman Collection',
      description: 'REST and GraphQL requests with status-code and response checks.',
      cta: 'View Collection',
      ctaIcon: 'schema',
      url: '',
    },
  ],
};
