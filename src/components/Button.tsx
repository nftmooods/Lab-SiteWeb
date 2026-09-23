import type { ReactNode } from "react";

/** ONE orange button per screen. Everything else is secondary, glass or ghost. */
type Variant = "primary" | "secondary" | "glass" | "ghost";

const styles: Record<Variant, string> = {
  primary:   "bg-orange text-ink hover:bg-orange-deep",
  secondary: "bg-night-ink text-night hover:opacity-90",
  glass:     "glass text-night-ink hover:bg-white/5",
  ghost:     "text-night-ink-2 hover:text-night-ink",
};

export function Button({
  children, variant = "primary", as = "button", href, icon = false,
}: { children: ReactNode; variant?: Variant; as?: "button" | "a"; href?: string; icon?: boolean }) {
  const Tag = as === "a" ? "a" : "button";
  return (
    <Tag
      href={href}
      className={`font-display font-bold text-[15px] rounded-pill px-[26px] py-[15px]
        inline-flex items-center gap-[10px] cursor-pointer transition-transform
        hover:-translate-y-[2px] ${styles[variant]}`}
    >
      {children}
      {icon && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"
             strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )}
    </Tag>
  );
}
