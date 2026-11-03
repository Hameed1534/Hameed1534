// TODO: placeholder content copied from the Stitch design.
// Replace repo names, descriptions, star/fork counts and links with your real GitHub work.
// An empty `url` renders the link as inactive; fill it in when the target exists
// (a GitHub URL, or a file placed in the `public/` folder such as '/docs/master-test-plan.pdf').

export const docsHeader = {
  eyebrow: 'REPOSITORIES & ARTIFACTS',
  title: 'QA Infrastructure & Documentation',
  description:
    'Comprehensive view of automation frameworks, CI/CD pipelines, and strategic quality documentation generated during the software development lifecycle.',
};

export const featuredRepos = {
  title: 'Featured Repositories',
  icon: 'terminal',
  items: [
    {
      category: 'FRAMEWORK',
      badge: { label: 'STABLE', icon: 'check_circle', className: 'bg-emerald-100 text-emerald-700' },
      title: 'Selenium-TestNG-Java',
      description:
        'Hybrid Data-Driven framework for Enterprise E-commerce platform testing. Includes Page Object Model, ExtentReports, and Apache POI for Excel integration.',
      tags: ['Java', 'Selenium 4', 'TestNG'],
      stars: 24,
      forks: 12,
      url: '',
    },
    {
      category: 'API TESTING',
      badge: { label: 'ACTIVE', icon: 'check_circle', className: 'bg-emerald-100 text-emerald-700' },
      title: 'Rest-Assured-Automation',
      description:
        'Robust API validation suite for microservices. Implements JSON Schema validation, authentication handling (OAuth2), and CI/CD integration via GitHub Actions.',
      tags: ['RestAssured', 'Jackson', 'Maven'],
      stars: 18,
      forks: 5,
      url: '',
    },
    {
      category: 'MOBILE',
      badge: { label: 'MAINTAINED', icon: 'build', className: 'bg-blue-100 text-blue-700' },
      title: 'Appium-Mobile-Suite',
      description:
        'Cross-platform mobile automation using Appium and Python for iOS and Android native applications. Focuses on gesture testing and offline mode behavior.',
      tags: ['Appium', 'Python', 'Pytest'],
      stars: 31,
      forks: 8,
      url: '',
    },
  ],
};

export const logicPreview = {
  title: 'Logic Preview: Test Class Implementation',
  icon: 'code',
  fileName: 'PurchaseWorkflowTest.java',
  code: `@Test(priority = 1, description = "Validate successful checkout flow")
public void testCheckoutWorkflow() {
    // Initialize Page Objects
    HomePage home = new HomePage(driver);
    CartPage cart = new CartPage(driver);

    // Execute Test Steps
    home.searchProduct("MacBook Pro")
        .addToCart()
        .proceedToCheckout();

    // Assert Outcomes
    Assert.assertTrue(cart.isCartHeaderVisible(), "Cart header missing");
    Assert.assertEquals(cart.getItemCount(), 1, "Incorrect item count in cart");

    // Log results for ExtentReports
    Logger.info("Checkout flow validated successfully");
}`,
};

export const documentation = {
  title: 'QA Documentation & Strategy',
  icon: 'description',
  items: [
    {
      icon: 'picture_as_pdf',
      title: 'Master Test Plan',
      description: 'Strategic scope, environment details, and risk assessment.',
      cta: 'Preview PDF',
      ctaIcon: 'visibility',
      url: '',
    },
    {
      icon: 'table_chart',
      title: 'Traceability Matrix',
      description: 'Requirement-to-TestCase mapping for 100% coverage.',
      cta: 'Open Sheet',
      ctaIcon: 'open_in_new',
      url: '',
    },
    {
      icon: 'bug_report',
      title: 'Defect Analysis',
      description: 'Regression RCA and high-severity bug report samples.',
      cta: 'Read Report',
      ctaIcon: 'history_edu',
      url: '',
    },
    {
      icon: 'rule',
      title: 'API Spec Docs',
      description: 'Postman collections and Swagger validation criteria.',
      cta: 'View Schema',
      ctaIcon: 'schema',
      url: '',
    },
  ],
};
