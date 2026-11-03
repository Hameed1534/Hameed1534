// TODO: placeholder content copied from the Stitch design.
// The PRD asks for at least 10 real SQL queries (basic, JOIN and validation queries).
// Replace the query below with one of yours; the editor highlights it automatically.

export const sqlHeader = {
  eyebrow: 'Data Integrity Layer',
  title: 'SQL & Database Testing',
  description:
    'Validation of persistence layers through automated query execution, schema verification, and state transition testing.',
  dbContext: { label: 'DB CONTEXT', value: 'PostgreSQL-Cluster-01' },
};

export const sqlEditor = {
  fileName: 'SQL_VALIDATOR.SQL',
  sql: `SELECT u.id, u.username, p.transaction_id, p.amount
FROM users u
INNER JOIN payments p ON u.id = p.user_id
WHERE p.status = 'COMPLETED'
AND p.created_at >= NOW() - INTERVAL '24 hours'
ORDER BY p.amount DESC
LIMIT 100;`,
  status: 'Connected',
  executionTime: 'Execution time: 42ms',
  rowCount: 'Rows: 128',
};

export const tableVerification = {
  title: 'Table Verification',
  tables: [
    { name: 'users', meta: '24 columns • 1.2M rows' },
    { name: 'payments', meta: '12 columns • 850k rows' },
    { name: 'audit_logs', meta: '8 columns • 12M rows' },
  ],
  cta: 'Analyze Constraints',
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

export const sqlStats = {
  consistency: { label: 'CONSISTENCY RATE', value: '99.2%', percent: 99.2, note: '12,400 keys validated' },
  drift: { label: 'SCHEMA DRIFT', value: 'None', note: 'Synchronized with Production' },
  suites: { label: 'ACTIVE TEST SUITES', value: '14', tags: ['ETL', 'MIGRATION', 'CRUD'] },
};

export const sqlBanner = {
  title: 'Precision Testing Architecture',
  description:
    'Ensuring that the bedrock of your application remains immutable and high-performing under any load.',
  image: '/images/server-room.jpg',
};
