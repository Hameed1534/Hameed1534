// SQL page. Your resume lists SQL (skills) and "MySQL Basics" (Great Learning).
// Everything here is SAMPLE data to show how data is validated; none of it is real.
// The PRD asks for at least 10 real SQL queries: replace or extend these with your own.

export const sqlHeader = {
  eyebrow: 'Data Integrity Layer',
  title: 'SQL & Database Testing',
  description:
    'SQL checks used to validate the data behind the UI and APIs: joins, filters and validation queries. All tables and rows on this page are sample data.',
  dbContext: { label: 'DB CONTEXT', value: 'Sample MySQL schema' },
};

export const sqlEditor = {
  fileName: 'SQL_VALIDATOR.SQL',
  sql: `SELECT u.id, u.username, p.transaction_id, p.amount
FROM users u
INNER JOIN payments p ON u.id = p.user_id
WHERE p.status = 'COMPLETED'
AND p.created_at >= NOW() - INTERVAL 24 HOUR
ORDER BY p.amount DESC
LIMIT 100;`,
  status: 'Sample query',
  executionTime: 'Run against sample data',
  rowCount: 'Rows: 4',
};

export const tableVerification = {
  title: 'Table Verification',
  tables: [
    { name: 'users', meta: 'id, username, email' },
    { name: 'payments', meta: 'transaction_id, user_id, amount, status' },
    { name: 'audit_logs', meta: 'event, user_id, created_at' },
  ],
  cta: '',
};

export const queryResult = {
  title: 'Query Result Set',
  columns: ['ID', 'USERNAME', 'TRANSACTION_ID', 'AMOUNT', 'STATUS', 'VALIDATION'],
  rows: [
    { id: '10928', username: 'j.doe_dev', transactionId: 'TXN_9921_A', amount: 450, status: 'Completed', validation: 'Match' },
    { id: '10929', username: 's.miller_test', transactionId: 'TXN_9922_B', amount: 120.5, status: 'Completed', validation: 'Match' },
    { id: '10930', username: 'a.wilson', transactionId: 'TXN_9923_C', amount: 0, status: 'Mismatch', validation: 'Integrity Fail' },
    { id: '10931', username: 'k.thompson', transactionId: 'TXN_9924_D', amount: 1200, status: 'Completed', validation: 'Match' },
  ],
};

// Calculated from the rows above, so the cards always match the table.
const sampleRows = queryResult.rows;
const matches = sampleRows.filter((row) => row.validation === 'Match').length;
const matchRate = sampleRows.length ? Math.round((matches / sampleRows.length) * 1000) / 10 : 0;
const concepts = ['INNER JOIN', 'WHERE', 'ORDER BY', 'LIMIT'];

export const sqlStats = {
  consistency: {
    label: 'MATCH RATE',
    value: `${matchRate}%`,
    percent: matchRate,
    note: `${matches} of ${sampleRows.length} sample rows match`,
  },
  drift: {
    label: 'SAMPLE ROWS',
    value: String(sampleRows.length),
    note: 'Returned by the query above',
    icon: 'table_rows',
    noteClassName: 'text-on-surface-variant',
  },
  suites: { label: 'SQL CONCEPTS', value: String(concepts.length), tags: concepts },
};

export const sqlBanner = {
  title: 'Accurate Data Behind Every Screen',
  description:
    'What the UI and the APIs show should match what is stored. SQL validation closes that gap.',
  image: '/images/server-room.jpg',
};
