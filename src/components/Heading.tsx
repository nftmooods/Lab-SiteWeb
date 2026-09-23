import type { ReactNode } from "react";

/** Section heading. The accent phrase goes in `accent` and renders in
 *  Instrument Serif italic — the dream/exploration half of the sentence.
 *  ONE accent phrase per heading; never set a whole heading in serif. */
export function Heading({
  children, accent, level = 2, className = "",
}: { children: ReactNode; accent?: ReactNode; level?: 1 | 2 | 3; className?: string }) {
  const Tag = (`h${level}` as unknown) as "h2";
  const size = level === 1 ? "text-hero" : level === 2 ? "text-h2" : "text-h3";
  return (
    <Tag className={`display ${size} m-0 text-night-ink ${className}`}>
      {children}
      {accent ? <> <span className="serif">{accent}</span></> : null}
    </Tag>
  );
}

/** Mono eyebrow. Only for information that is genuinely "system":
 *  a section role, a count, a status. If removing it loses nothing, drop it. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mono m-0 text-night-ink-2/70">{children}</p>;
}
