import Icon from './Icon';

export default function IconHeading({ id, icon, children }) {
  return (
    <h2 id={id} className="mb-6 flex items-center gap-2 text-h2 text-on-surface">
      <Icon name={icon} className="text-primary" />
      {children}
    </h2>
  );
}
