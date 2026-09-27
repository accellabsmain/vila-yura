import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface VillaGridProps {
  children: ReactNode;
  className?: string;
}

export function VillaGrid({ children, className }: VillaGridProps) {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 lg:gap-y-16",
        "[&>*:nth-child(4n+1)]:xl:col-span-2 [&>*:nth-child(4n+4)]:xl:col-span-2",
        className
      )}
    >
      {children}
    </div>
  );
}
