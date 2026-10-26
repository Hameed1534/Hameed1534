export default function BentoCard({ className = '', children, ...rest }) {
  return (
    <section
      className={`rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-md md:p-8 ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}