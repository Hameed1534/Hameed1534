// SAMPLE test cases. The structure and the areas (billing, access control, eSignature,
// API, website forms) match the work in your resume, but the individual cases, results
// and ticket numbers are illustrative. Replace them with your own (sanitised) cases.
// A row with a `details` object becomes clickable and fills the "Active Investigation" panel.
// The summary cards below are calculated from these rows, so they always match the table.

export const testHeader = {
  eyebrow: 'Sample Test Cases',
  title: 'Test Execution Summary',
  lastRun: 'Illustrative sample data',
};

const rows = [
  {
    id: 'TC-1001',
    module: 'Billing',
    scenario: 'Create a claim with valid patient and insurance details',
    description: 'Positive: all mandatory fields are filled with valid data.',
    expected: "Claim is saved with the status 'Submitted'.",
    status: 'Pass',
    details: {
      preconditions: ['User is logged in as a billing user.', 'A patient with active insurance exists.'],
      steps: [
        { text: 'Open the New Claim form.' },
        { text: 'Select the patient and insurance.' },
        { text: 'Enter a valid billed amount and click Submit.' },
        { text: 'Open the claim list and find the new claim.' },
      ],
      expected: "Claim is saved with the status 'Submitted'.",
      actual: "Claim saved with the status 'Submitted'.",
    },
  },
  {
    id: 'TC-1002',
    module: 'Billing',
    scenario: 'Boundary: billed amount of 0.00 is rejected, 0.01 is accepted',
    description: 'Boundary value check on the billed amount field.',
    expected: 'A validation message for 0.00; the claim is saved for 0.01.',
    status: 'Pass',
    details: {
      preconditions: ['User is logged in as a billing user.', 'A patient with active insurance exists.'],
      steps: [
        { text: 'Open the New Claim form.' },
        { text: 'Enter a billed amount of 0.00 and click Submit.' },
        { text: 'Check that a validation message is shown.' },
        { text: 'Change the amount to 0.01 and click Submit.' },
      ],
      expected: 'A validation message for 0.00; the claim is saved for 0.01.',
      actual: 'Validation message shown for 0.00; claim saved for 0.01.',
    },
  },
  {
    id: 'TC-1003',
    module: 'Billing',
    scenario: 'Claim moves from Submitted to Under Review to Paid',
    description: 'Positive: status changes follow the defined workflow.',
    expected: 'Each status change is saved and shown in the claim history.',
    status: 'Pass',
  },
  {
    id: 'TC-1004',
    module: 'Billing',
    scenario: 'Boundary: patient name with 1 character and with 80 characters',
    description: 'Field length limits on the patient name.',
    expected: '1 character is rejected; 80 characters are accepted.',
    status: 'Pass',
  },
  {
    id: 'TC-1005',
    module: 'Access Control',
    scenario: "Provider opens documents of their own patients",
    description: 'Positive: provider role sees only assigned patients.',
    expected: 'Documents of assigned patients open correctly.',
    status: 'Pass',
  },
  {
    id: 'TC-1006',
    module: 'Access Control',
    scenario: "Negative: physician cannot open another provider's document",
    description: 'Role-based access control on a direct document link.',
    expected: 'Access is denied and the document is not shown.',
    status: 'Fail',
    details: {
      preconditions: [
        'Two providers each own one document.',
        'The physician account is linked to Provider A only.',
      ],
      steps: [
        { text: 'Log in as the physician.' },
        { text: "Open the link of a document owned by Provider B." , failed: true },
        { text: 'Check the page that is shown.' },
      ],
      expected: 'Access is denied and the document is not shown.',
      actual: 'The document opened and its contents were visible.',
      bug: {
        label: 'Open Bug Ticket',
        key: 'BUG-102',
        note: 'Linked to TC-1006. See the sample defect in Bug Reports.',
        cta: '',
        url: '',
      },
    },
  },
  {
    id: 'TC-1007',
    module: 'Access Control',
    scenario: 'Patient sees only their own documents',
    description: 'Positive: patient role is limited to personal records.',
    expected: 'Only documents that belong to the patient are listed.',
    status: 'Pass',
  },
  {
    id: 'TC-1008',
    module: 'eSignature',
    scenario: 'Signed document is locked for further edits',
    description: 'Positive: document state after signing.',
    expected: 'The edit options are disabled once the document is signed.',
    status: 'Pass',
  },
  {
    id: 'TC-1009',
    module: 'eSignature',
    scenario: 'Negative: signing link cannot be used twice',
    description: 'Link reuse after a document has been signed.',
    expected: "The link shows an 'already signed' message.",
    status: 'Pass',
  },
  {
    id: 'TC-1010',
    module: 'API',
    scenario: 'GET list endpoint returns 200 and the expected fields',
    description: 'Positive: status code and response body check in Postman.',
    expected: 'Status 200 and every required field is present.',
    status: 'Pass',
  },
  {
    id: 'TC-1011',
    module: 'API',
    scenario: 'Negative: POST with a missing required field returns 400',
    description: 'Error handling for an incomplete request body.',
    expected: 'Status 400 with a clear validation message.',
    status: 'Fail',
    details: {
      preconditions: ['A valid authentication token is available.', 'The Postman collection is loaded.'],
      steps: [
        { text: "Send a POST request with the required 'name' field removed." },
        { text: 'Check the response status code.', failed: true },
        { text: 'Check the error message in the response body.' },
      ],
      expected: 'Status 400 with a clear validation message.',
      actual: 'Status 500 Internal Server Error.',
      bug: {
        label: 'Open Bug Ticket',
        key: 'BUG-105',
        note: 'Linked to TC-1011. See the sample defect in Bug Reports.',
        cta: '',
        url: '',
      },
    },
  },
  {
    id: 'TC-1012',
    module: 'API',
    scenario: 'Negative: request without a token returns 401',
    description: 'Authentication check on a protected endpoint.',
    expected: 'Status 401 and no data in the response.',
    status: 'Pass',
  },
  {
    id: 'TC-1013',
    module: 'Website',
    scenario: 'Negative: newsletter form rejects an invalid email',
    description: "Email format validation (for example 'abc@').",
    expected: 'An inline error is shown and nothing is submitted.',
    status: 'Pass',
  },
  {
    id: 'TC-1014',
    module: 'Website',
    scenario: 'CAPTCHA must be completed before the form is submitted',
    description: 'Positive and negative path on the contact form.',
    expected: 'Submission is blocked until the CAPTCHA is solved.',
    status: 'Pass',
  },
  {
    id: 'TC-1015',
    module: 'Compatibility',
    scenario: 'Layout renders correctly on Safari for iOS',
    description: 'Responsive check at mobile width.',
    expected: 'No overlapping elements and the navigation works.',
    status: 'Blocked',
  },
];

const count = (status) => rows.filter((row) => row.status === status).length;
const passed = count('Pass');
const failed = count('Fail');
const blocked = count('Blocked');
const executed = rows.length - blocked;
const passRate = executed ? Math.round((passed / executed) * 1000) / 10 : 0;

export const testKpis = [
  { id: 'pass', label: 'Pass Rate', value: `${passRate}%`, icon: 'check_circle', iconClassName: 'text-primary', progress: passRate },
  { id: 'executed', label: 'Executed', value: `${executed} / ${rows.length}`, icon: 'play_circle', iconClassName: 'text-secondary', note: `${blocked} not executed` },
  { id: 'blocked', label: 'Blocked', value: String(blocked), icon: 'block', iconClassName: 'text-tertiary', note: 'Device not available' },
  {
    id: 'defects',
    label: 'Defects Found',
    value: String(failed),
    icon: 'bug_report',
    iconClassName: 'text-error',
    note: 'Logged in the sample bug reports',
    noteClassName: 'text-error',
    accent: true,
  },
];

export const executionTable = {
  title: 'Execution Details',
  searchPlaceholder: 'Search by Scenario or ID',
  newTestLabel: 'New Test',
  entriesTotal: rows.length,
  rows,
};

export const regressionHealth = {
  title: 'Sample Pass Rate',
  percent: Math.round(passRate),
  note: 'Share of executed sample cases that passed.',
};

export const statusFilters = ['All', 'Pass', 'Fail', 'Blocked'];
