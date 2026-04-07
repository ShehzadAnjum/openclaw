interface CodeBlockProps {
  title?: string;
  lang?: string;
  children: string;
}

export default function CodeBlock({
  title,
  lang = "bash",
  children,
}: CodeBlockProps) {
  return (
    <div className="my-4 rounded-xl border border-border overflow-hidden">
      {title && (
        <div className="px-4 py-2 bg-surface-2 border-b border-border flex items-center gap-2">
          <span className="font-mono text-[0.7rem] text-accent-light font-bold uppercase tracking-wider">
            {lang}
          </span>
          <span className="text-dim text-xs">— {title}</span>
        </div>
      )}
      <pre className="bg-surface p-4 overflow-x-auto">
        <code className="font-mono text-[0.82rem] leading-relaxed text-muted whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}
