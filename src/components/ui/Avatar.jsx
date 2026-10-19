import { useState } from 'react';

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');

export default function Avatar({ src, name, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={name}
        className={`flex items-center justify-center bg-primary-fixed font-bold text-primary ${className}`}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} headshot`}
      width="48"
      height="48"
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}