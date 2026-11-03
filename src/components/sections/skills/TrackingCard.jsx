import { useState } from 'react';
import BentoCard from '../../ui/BentoCard';
import CardHeading from '../../ui/CardHeading';
import { tracking } from '../../../data/skills';

export default function TrackingCard() {
  const [showImage, setShowImage] = useState(true);

  return (
    <BentoCard className="relative overflow-hidden xl:col-span-12" aria-labelledby="tracking-title">
      {showImage && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-64 opacity-10">
          <img
            src={tracking.backgroundImage}
            alt=""
            aria-hidden="true"
            onError={() => setShowImage(false)}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="relative z-10">
        <CardHeading
          id="tracking-title"
          eyebrow={tracking.eyebrow}
          title={tracking.title}
          icon={tracking.icon}
          className="mb-6"
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {tracking.stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-4 text-center"
            >
              <span className="block text-h1 text-primary xl:text-display">{value}</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
