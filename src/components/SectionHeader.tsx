interface SectionHeaderProps {
  num: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  num,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <span className="font-mono text-[0.7rem] font-bold text-accent tracking-[0.25em] uppercase">
        Section {num}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mt-2 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
