export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  variant = "dark",
  maxWidth = "max-w-3xl",
}) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left";
  const labelColor = variant === "light" ? "text-gray-400" : "text-brand-gray";
  const dotColor = variant === "light" ? "bg-brand-primary" : "bg-brand-dark";
  const titleColor = variant === "light" ? "text-white" : "text-brand-dark";
  const descColor = variant === "light" ? "text-gray-400" : "text-brand-gray";

  return (
    <div className={`${maxWidth} ${alignClass} flex flex-col`}>
      <div
        className={`inline-flex items-center gap-2 text-sm font-semibold mb-4 ${labelColor} ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className={`w-2 h-2 rounded-full ${dotColor}`} />
        {label}
      </div>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-medium leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 sm:mt-5 text-base sm:text-lg ${descColor} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
