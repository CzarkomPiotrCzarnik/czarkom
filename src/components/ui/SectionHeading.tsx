interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-dark-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-3xl ${centered ? "mx-auto" : ""} ${
            light ? "text-dark-600" : "text-dark-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
