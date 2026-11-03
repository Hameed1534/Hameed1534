import Icon from './Icon';

// Small status label. Pass colours, shape and size through `className`.
export default function Pill({ icon, filled = false, iconClassName = '!text-[14px]', className = '', children }) {
  return (
    <span className={`inline-flex w-fit items-center gap-1 ${className}`}>
      {icon && <Icon name={icon} filled={filled} className={iconClassName} />}
      {children}
    </span>
  );
}
