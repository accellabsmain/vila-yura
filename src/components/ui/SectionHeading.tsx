import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "text-center items-center" : "text-left items-start", className)}>
      {subtitle && <span className="text-olive uppercase tracking-widest text-sm font-medium">{subtitle}</span>}
      <h2 className="text-h2 font-heading">{title}</h2>
    </div>
  );
}
