type SectionHeadingProps = {
  description: string;
  eyebrow: string;
  id: string;
  title: string;
};

export default function SectionHeading({
  description,
  eyebrow,
  id,
  title,
}: SectionHeadingProps) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
