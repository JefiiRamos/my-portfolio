type SectionProps = {
  id?: string;
  number: string;
  tag: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  number,
  tag,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-block ${className}`.trim()}>
      <div className="section-block__header">
        <div className="section-block__meta">
          <span className="section-number">{number}</span>
          <p className="section-tag">{tag}</p>
        </div>
        <h2 className="section-title">{title}</h2>
        {description ? (
          <p className="section-lead">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
