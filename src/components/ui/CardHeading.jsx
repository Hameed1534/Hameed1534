import Icon from './Icon';

export default function CardHeading({ id, eyebrow, title, icon, className = '' }) {
  return (
    <div className={className}>
      <span className="mb-1 block font-label-caps text-label-caps text-on-surface-variant">
        {eyebrow}
      </span>
      <h3 id={id} className="flex items-center gap-2 text-h3 text-on-surface">
        <Icon name={icon} className="text-primary" />
        {title}
      </h3>
    </div>
  );
}
