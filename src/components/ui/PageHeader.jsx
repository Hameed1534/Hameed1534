const eyebrowStyles = {
  pill: 'inline-block rounded-full bg-primary/10 px-3 py-1 font-label-caps text-label-caps uppercase text-primary',
  text: 'mb-2 block font-label-caps text-label-caps uppercase tracking-widest text-primary',
  muted: 'mb-1 block font-label-caps text-label-caps uppercase text-outline',
};

// Page title block used by every dashboard-style page.
// `children` is an optional right-hand slot (buttons, chips...).
export default function PageHeader({
  eyebrow,
  title,
  description,
  eyebrowStyle = 'text',
  descriptionClassName = 'max-w-2xl',
  className = 'mb-10',
  children,
}) {
  return (
    <header
      className={`flex flex-col gap-6 ${
        children ? 'xl:flex-row xl:items-end xl:justify-between' : ''
      } ${className}`}
    >
      <div className="min-w-0">
        <span className={eyebrowStyles[eyebrowStyle]}>{eyebrow}</span>
        <h1 className={`text-h1 text-on-surface ${eyebrowStyle === 'pill' ? 'mt-4' : ''}`}>{title}</h1>
        {description && (
          <p className={`mt-2 text-body-lg text-on-surface-variant ${descriptionClassName}`}>
            {description}
          </p>
        )}
      </div>
      {children}
    </header>
  );
}
