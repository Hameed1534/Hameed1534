import Icon from '../../ui/Icon';
import { profile } from '../../../data/profile';
import { contactContent } from '../../../data/contact';

const isRealUrl = (url) => typeof url === 'string' && url.startsWith('http');

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
        <Icon name={icon} />
      </div>
      <div className="min-w-0">
        <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">{label}</p>
        {children}
      </div>
    </div>
  );
}

function SocialLink({ icon, label, url }) {
  const content = (
    <>
      <Icon name={icon} className="!text-[20px]" />
      {label}
    </>
  );
  const className = 'flex items-center gap-2 text-body-lg font-semibold text-on-surface';

  // Links that are not filled in yet (profile.js) are shown as plain text.
  if (!isRealUrl(url)) return <span className={className}>{content}</span>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} transition-colors hover:text-primary`}
    >
      {content}
    </a>
  );
}

export default function ContactInfo() {
  const { status, precision } = contactContent;

  return (
    <aside aria-label="Contact details" className="flex flex-col gap-gutter xl:col-span-4">
      {/* Availability */}
      <div className="flex items-center justify-between gap-4 rounded-xl border border-outline-variant bg-surface-container-low p-6">
        <div>
          <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
            {status.label}
          </p>
          <p className="text-body-lg font-semibold text-on-surface">{status.value}</p>
        </div>
        <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
      </div>

      {/* Details */}
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 md:p-8">
        <div className="space-y-8">
          <InfoRow icon="mail" label="Email">
            <a
              href={`mailto:${profile.email}`}
              className="block break-words text-body-lg font-semibold text-on-surface transition-colors hover:text-primary"
            >
              {profile.email}
            </a>
          </InfoRow>

          <InfoRow icon="smartphone" label="Phone">
            <a
              href={`tel:${(profile.phone ?? '').replace(/[^\d+]/g, '')}`}
              className="block text-body-lg font-semibold text-on-surface transition-colors hover:text-primary"
            >
              {profile.phone}
            </a>
          </InfoRow>

          <InfoRow icon="link" label="Socials">
            <div className="mt-1 space-y-2">
              <SocialLink icon="share" label="LinkedIn" url={profile.linkedin} />
              <SocialLink icon="code" label="GitHub" url={profile.github} />
            </div>
          </InfoRow>
        </div>

        <div className="mt-8 border-t border-outline-variant pt-8">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-on-background py-4 text-body-md font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Icon name="download" />
            Download Full Resume
          </a>
        </div>
      </div>

      {/* Approach */}
      <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-on-primary md:p-8">
        <div className="relative z-10">
          <h2 className="mb-4 text-h3">{precision.title}</h2>
          <p className="text-body-md leading-relaxed opacity-90">{precision.text}</p>
        </div>
        <Icon
          name="verified"
          className="pointer-events-none absolute -bottom-4 -right-4 !text-[120px] opacity-10"
        />
      </div>
    </aside>
  );
}