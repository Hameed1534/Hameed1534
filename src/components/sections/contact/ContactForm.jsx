import { useId, useRef, useState } from 'react';
import { profile } from '../../../data/profile';
import { contactContent } from '../../../data/contact';
import {
  LIMITS,
  buildMailto,
  checkRateLimit,
  cleanValues,
  formatWait,
  recordSubmission,
  validate,
} from '../../../utils/contactForm';

// Set VITE_CONTACT_ENDPOINT in a .env file (for example a Formspree URL) to send
// messages directly. Without it the form opens the visitor's email app instead.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const MIN_FILL_MS = 2000; // humans cannot fill the form faster than this
const EMPTY = { name: '', email: '', subject: '', message: '' };

const statusStyles = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  mailto: 'border-blue-200 bg-blue-50 text-blue-800',
  error: 'border-red-200 bg-red-50 text-red-800',
};

const inputClass = (invalid) =>
  `w-full rounded-lg border bg-surface-container-low px-4 py-3 text-body-md text-on-surface outline-none transition placeholder:text-outline focus:ring-2 ${
    invalid
      ? 'border-error focus:ring-error/20'
      : 'border-outline-variant focus:border-primary focus:ring-primary/20'
  }`;

function Field({ id, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-label-caps text-label-caps uppercase text-on-surface"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-body-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const uid = useId();
  const formRef = useRef(null);
  const [openedAt] = useState(() => Date.now());
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const { fields } = contactContent;
  const sending = status.type === 'sending';

  const setFieldError = (name, message) =>
    setErrors((previous) => {
      const next = { ...previous };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Once a field showed an error, re-check it while the visitor fixes it.
    if (errors[name]) setFieldError(name, validate(next)[name]);
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value.trim()) return; // required-field errors appear on submit
    setFieldError(name, validate(values)[name]);
  };

  const finishSuccess = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent. I will get back to you as soon as possible.',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    // 1. Mandatory fields and email format
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    // 2. Bot traps: a hidden field only bots fill in, and impossibly fast submissions.
    //    Bots get a fake "success" so they learn nothing.
    const honeypot = String(new FormData(event.currentTarget).get('_gotcha') ?? '');
    if (honeypot || Date.now() - openedAt < MIN_FILL_MS) {
      finishSuccess();
      return;
    }

    // 3. Client-side rate limit
    const limit = checkRateLimit();
    if (!limit.allowed) {
      setStatus({
        type: 'error',
        message: `You sent a message a moment ago. Please wait ${formatWait(limit.waitMs)} before sending another.`,
      });
      return;
    }

    // 4. Send sanitised values only
    const clean = cleanValues(values);

    if (ENDPOINT) {
      setStatus({ type: 'sending', message: '' });
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);
      try {
        const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(clean),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        recordSubmission();
        finishSuccess();
      } catch {
        setStatus({
          type: 'error',
          message: `Your message could not be sent. Please try again, or email me directly at ${profile.email}.`,
        });
      } finally {
        clearTimeout(timer);
      }
      return;
    }

    recordSubmission();
    setStatus({
      type: 'mailto',
      message: `Your email app should open with the message ready to send. If nothing happens, write to ${profile.email}.`,
    });
    window.location.href = buildMailto(profile.email, clean);
  };

  const fieldProps = (name) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    placeholder: fields[name].placeholder,
    required: true,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-error` : undefined,
    className: inputClass(Boolean(errors[name])),
  });

  return (
    <section
      aria-labelledby="contact-title"
      className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-12 xl:col-span-8"
    >
      <span className="mb-2 block font-label-caps text-label-caps uppercase text-primary">
        {contactContent.eyebrow}
      </span>
      <h1 id="contact-title" className="mb-4 text-h1 text-on-background">
        {contactContent.title}
      </h1>
      <p className="mb-12 max-w-3xl text-body-lg text-on-surface-variant">{contactContent.intro}</p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field id={`${uid}-name`} label={fields.name.label} error={errors.name}>
            <input
              {...fieldProps('name')}
              type="text"
              autoComplete="name"
              maxLength={LIMITS.name.max}
            />
          </Field>
          <Field id={`${uid}-email`} label={fields.email.label} error={errors.email}>
            <input
              {...fieldProps('email')}
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={LIMITS.email.max}
            />
          </Field>
        </div>

        <Field id={`${uid}-subject`} label={fields.subject.label} error={errors.subject}>
          <input
            {...fieldProps('subject')}
            type="text"
            autoComplete="off"
            maxLength={LIMITS.subject.max}
          />
        </Field>

        <Field id={`${uid}-message`} label={fields.message.label} error={errors.message}>
          <textarea
            {...fieldProps('message')}
            rows={5}
            maxLength={LIMITS.message.max}
            className={`${inputClass(Boolean(errors.message))} min-h-[9rem] resize-y`}
          />
        </Field>

        {/* Honeypot: invisible to people, tempting for bots. Must stay empty. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor={`${uid}-gotcha`}>Leave this field empty</label>
          <input id={`${uid}-gotcha`} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" defaultValue="" />
        </div>

        {status.message && (
          <div
            role={status.type === 'error' ? 'alert' : 'status'}
            className={`rounded-lg border px-4 py-3 text-body-sm ${statusStyles[status.type]}`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-lg bg-primary px-8 py-4 text-body-lg font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {sending ? 'Sending...' : contactContent.submitLabel}
        </button>
      </form>
    </section>
  );
}