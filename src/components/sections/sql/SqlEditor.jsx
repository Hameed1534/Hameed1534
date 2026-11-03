import Icon from '../../ui/Icon';
import { tokenize, sqlRules } from '../../../utils/highlight';
import { sqlEditor } from '../../../data/sql';

const tokenClasses = {
  keyword: 'text-[#ff7b72]',
  string: 'text-[#a5d6ff]',
  number: 'text-[#79c0ff]',
};

export default function SqlEditor({ onRun }) {
  const lines = sqlEditor.sql.split('\n');
  const lineCount = Math.max(10, lines.length);

  return (
    <section
      aria-labelledby="editor-title"
      className="flex flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface shadow-sm xl:col-span-8"
    >
      <div className="flex items-center justify-between gap-2 border-b border-outline-variant bg-surface-container-high px-6 py-3">
        <h2
          id="editor-title"
          className="flex min-w-0 items-center gap-2 font-label-caps text-label-caps text-on-surface-variant"
        >
          <Icon name="code" className="!text-[18px]" />
          <span className="truncate">{sqlEditor.fileName}</span>
        </h2>
        <button
          type="button"
          onClick={onRun}
          className="flex shrink-0 items-center gap-2 rounded bg-primary px-3 py-1 font-label-caps text-label-caps text-on-primary transition-colors hover:opacity-90"
        >
          <Icon name="play_arrow" className="!text-[16px]" />
          RUN QUERY
        </button>
      </div>

      <div className="custom-scrollbar min-h-[320px] flex-grow overflow-x-auto bg-inverse-surface p-6 font-code text-code leading-6">
        <div className="flex gap-4">
          <div
            aria-hidden="true"
            className="select-none border-r border-outline-variant/10 pr-4 text-right text-outline-variant/30"
          >
            {Array.from({ length: lineCount }, (_, index) => (
              <div key={index}>{String(index + 1).padStart(2, '0')}</div>
            ))}
          </div>

          <pre className="m-0 font-code text-on-primary-container">
            <code>
              {lines.map((line, index) => (
                <div key={index}>
                  {tokenize(line, sqlRules).map((token, tokenIndex) => (
                    <span key={tokenIndex} className={token.type ? tokenClasses[token.type] : undefined}>
                      {token.text}
                    </span>
                  ))}
                  {line === '' && '\u200b'}
                  {index === lines.length - 1 && (
                    <span className="ml-1 inline-block h-4 animate-pulse border-r-2 border-primary align-middle" />
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-outline-variant bg-surface px-6 py-4 text-body-sm text-on-surface-variant">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {sqlEditor.status}
          </span>
          <span className="text-outline">{sqlEditor.executionTime}</span>
        </div>
        <span className="text-outline">{sqlEditor.rowCount}</span>
      </div>
    </section>
  );
}
