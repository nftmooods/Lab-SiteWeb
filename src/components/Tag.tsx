import type { ReactNode } from "react";
import type { TagKind } from "../lib/brand";

/** The content family. Exactly six types carry colour — subject tags stay neutral,
 *  so a card never lights up in more than one place. Editorial before "gaming". */
const kinds: Record<TagKind, { className: string; dot?: boolean }> = {
  "field-note": { className: "bg-cyan text-ink" },
  "build-log":  { className: "bg-ink text-paper" },
  experiment:   { className: "bg-transparent text-night-ink border border-dashed border-ink-3" },
  archive:      { className: "bg-paper-2 text-ink-3" },
  wip:          { className: "bg-orange text-ink" },
  live:         { className: "bg-glow text-white", dot: true },
  subject:      { className: "bg-white/10 text-night-ink-2" },
};

export function Tag({ kind = "subject", children }: { kind?: TagKind; children: ReactNode }) {
  const k = kinds[kind];
  return (
    <span className={`font-mono text-[11.5px] font-medium tracking-[0.06em] rounded-s
      px-[10px] py-[5px] inline-flex items-center gap-[6px] ${k.className}`}>
      {k.dot && <span className="w-[7px] h-[7px] rounded-full bg-white inline-block" />}
      {children}
    </span>
  );
}
