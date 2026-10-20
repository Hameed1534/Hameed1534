export default function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="mb-10 border-l-4 border-primary pl-4 text-h2">
      {children}
    </h2>
  );
}