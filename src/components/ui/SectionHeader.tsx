interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} mb-12`}>
      {eyebrow && (
        <div
          className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-white" : "text-red-700"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-red-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-red-100" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
