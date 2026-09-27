"use client";

import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  return (
    <span className={cn("text-xs font-medium tracking-wider text-gold/90 uppercase px-2 py-1 rounded bg-white/5 border border-gold/20", className)}>
      ID
    </span>
  );
}
