import { useState } from 'react';

// Shows a dark gradient block if the image file is missing, so layouts never break.
export default function ImageWithFallback({ src, alt, className = '', ...rest }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-inverse-surface to-primary-container/60 ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
