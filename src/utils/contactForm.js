/* eslint-disable no-control-regex */
// Validation, sanitising and spam protection helpers for the contact form.
// Pure functions: nothing here touches the page, so they are easy to test.

export const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  subject: { min: 3, max: 120 },
  message: { min: 10, max: 2000 },
};

// Client-side rate limit: at most 3 messages per hour and 30 seconds apart.
export const RATE_LIMIT = { minGapMs: 30000, maxPerHour: 3, windowMs: 3600000 };
const STORAGE_KEY = 'contact-submissions';

const EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const HTML_TAGS = /<[^>]*>/g;

export function isValidEmail(value) {
  return (
    value.length <= LIMITS.email.max &&
    !value.includes('..') &&
    EMAIL_PATTERN.test(value) &&
    /\.[A-Za-z]{2,}$/.test(value)
  );
}

// Single-line fields: no HTML, no line breaks (also blocks email header injection).
export function sanitizeSingleLine(value, max) {
  return String(value ?? '')
    .replace(HTML_TAGS, '')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(CONTROL_CHARS, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, max);
}

// Message: keeps line breaks, removes HTML and control characters.
export function sanitizeMultiLine(value, max) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(HTML_TAGS, '')
    .replace(CONTROL_CHARS, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

export function cleanValues(values) {
  return {
    name: sanitizeSingleLine(values.name, LIMITS.name.max),
    email: sanitizeSingleLine(values.email, LIMITS.email.max),
    subject: sanitizeSingleLine(values.subject, LIMITS.subject.max),
    message: sanitizeMultiLine(values.message, LIMITS.message.max),
  };
}

// Returns an object like { email: 'message' } for every invalid field (empty = valid).
export function validate(values) {
  const v = cleanValues(values);
  const errors = {};

  if (!v.name) errors.name = 'Please enter your full name.';
  else if (v.name.length < LIMITS.name.min)
    errors.name = `Your name should be at least ${LIMITS.name.min} characters.`;

  if (!v.email) errors.email = 'Please enter your email address.';
  else if (!isValidEmail(v.email))
    errors.email = 'Please enter a valid email address, like name@company.com.';

  if (!v.subject) errors.subject = 'Please enter a subject.';
  else if (v.subject.length < LIMITS.subject.min)
    errors.subject = `The subject should be at least ${LIMITS.subject.min} characters.`;

  if (!v.message) errors.message = 'Please write a message.';
  else if (v.message.length < LIMITS.message.min)
    errors.message = `Your message should be at least ${LIMITS.message.min} characters.`;

  return errors;
}

function getStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function readTimes(storage, now) {
  try {
    const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed)
      ? parsed.filter((t) => typeof t === 'number' && now - t < RATE_LIMIT.windowMs)
      : [];
  } catch {
    return [];
  }
}

export function checkRateLimit(now = Date.now(), storage = getStorage()) {
  const times = readTimes(storage, now);
  if (times.length === 0) return { allowed: true, waitMs: 0 };

  const sinceLast = now - Math.max(...times);
  if (sinceLast < RATE_LIMIT.minGapMs) {
    return { allowed: false, waitMs: RATE_LIMIT.minGapMs - sinceLast };
  }
  if (times.length >= RATE_LIMIT.maxPerHour) {
    return { allowed: false, waitMs: RATE_LIMIT.windowMs - (now - Math.min(...times)) };
  }
  return { allowed: true, waitMs: 0 };
}

export function recordSubmission(now = Date.now(), storage = getStorage()) {
  try {
    const times = readTimes(storage, now);
    times.push(now);
    storage.setItem(STORAGE_KEY, JSON.stringify(times));
  } catch {
    // Storage can be blocked (private mode); the limit is then simply not enforced.
  }
}

export function formatWait(ms) {
  const seconds = Math.max(1, Math.ceil(ms / 1000));
  if (seconds < 90) return `${seconds} second${seconds === 1 ? '' : 's'}`;
  return `${Math.ceil(seconds / 60)} minutes`;
}

// Fallback when no form service is configured: opens the visitor's email app.
export function buildMailto(to, values) {
  const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
  return `mailto:${to}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
}