import { useEffect, useState } from 'react';
import IconHeading from '../../ui/IconHeading';
import { tokenize, javaRules } from '../../../utils/highlight';
import { logicPreview as preview } from '../../../data/docs';

const tokenClasses = {
  comment: 'text-outline-variant',
  string: 'text-tertiary-fixed',
  annotation: 'text-primary-fixed-dim',
  keyword: 'text-inverse-primary',
  method: 'text-surface-container-highest',
};

export default function LogicPreview() {
  const [copied, setCopied] = useState(false);
  const lines = preview.code.split('\n');

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(preview.code);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked by the browser; nothing else to do.
    }
  };

  return (
    <section aria-labelledby="preview-title" className="mb-16">
      <IconHeading id="preview-title" icon={preview.icon}>
        {preview.title}
      </IconHeading>

      <div className="overflow-hidden rounded-xl border border-outline shadow-lg">
        <div className="flex items-center justify-between gap-3 border-b border-outline bg-surface-container-low px-4 py-2">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="min-w-0 truncate font-code text-body-sm text-on-surface-variant">
            {preview.fileName}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="shrink-0 text-body-sm font-semibold text-primary hover:underline"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="custom-scrollbar overflow-x-auto bg-inverse-surface p-6">
          <pre className="m-0 font-code text-code leading-6 text-white">
            <code>
              {lines.map((line, index) => (
                <div key={index}>
                  {tokenize(line, javaRules).map((token, tokenIndex) => (
                    <span key={tokenIndex} className={token.type ? tokenClasses[token.type] : undefined}>
                      {token.text}
                    </span>
                  ))}
                  {line === '' && '\u200b'}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
