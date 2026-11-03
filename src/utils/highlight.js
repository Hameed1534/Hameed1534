// Tiny syntax highlighter (no dependencies). Each rule is { type, regex }.
// Rule regexes must not contain capturing groups: use (?:...) instead.
export function tokenize(text, rules) {
  const pattern = new RegExp(rules.map((rule) => `(${rule.regex.source})`).join('|'), 'gi');
  const tokens = [];
  let last = 0;
  let match = pattern.exec(text);

  while (match !== null) {
    if (match.index > last) tokens.push({ type: null, text: text.slice(last, match.index) });
    const ruleIndex = match.slice(1).findIndex((group) => group !== undefined);
    tokens.push({ type: rules[ruleIndex].type, text: match[0] });
    last = match.index + match[0].length;
    if (match[0].length === 0) pattern.lastIndex += 1;
    match = pattern.exec(text);
  }

  if (last < text.length) tokens.push({ type: null, text: text.slice(last) });
  return tokens;
}

export const sqlRules = [
  { type: 'string', regex: /'[^']*'/ },
  { type: 'string', regex: /\bNOW\(\)/ },
  { type: 'number', regex: /\bINTERVAL\b/ },
  {
    type: 'keyword',
    regex:
      /\b(?:INNER JOIN|LEFT JOIN|RIGHT JOIN|FULL JOIN|ORDER BY|GROUP BY|INSERT INTO|SELECT|FROM|JOIN|ON|WHERE|AND|OR|HAVING|LIMIT|OFFSET|DESC|ASC|VALUES|UPDATE|SET|DELETE|AS|IN|NOT|NULL|IS|DISTINCT|COUNT|SUM|AVG|MIN|MAX|LIKE|BETWEEN|UNION|CASE|WHEN|THEN|ELSE|END)\b/,
  },
  { type: 'number', regex: /\b\d+(?:\.\d+)?\b/ },
];

export const javaRules = [
  { type: 'comment', regex: /\/\/.*/ },
  { type: 'string', regex: /"(?:[^"\\]|\\.)*"/ },
  { type: 'annotation', regex: /@\w+/ },
  { type: 'keyword', regex: /\b(?:public|private|protected|static|final|void|new|class|return|import|package|int|boolean)\b/ },
  { type: 'method', regex: /\btest[A-Za-z0-9_]*(?=\()/ },
];
