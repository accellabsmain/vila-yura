import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-bone px-3 py-1 text-xs font-semibold text-black uppercase tracking-wider",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
