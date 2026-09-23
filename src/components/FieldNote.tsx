import type { ReactNode } from "react";
/** A Field Note row — the signature editorial format.
 *  Real sequential numbering (07, 08, 09), never a decorative number.
 *  The title is a first-person sentence stating what was ATTEMPTED, set in
 *  Instrument Serif italic. Metadata in mono. Failure is content: "Le rendu
 *  tient. Le rig, non." is a perfectly good note. */
export function FieldNoteRow({
  href, number, title, meta,
}: { href: string; number: string; title: string; meta: string }) {
  return (
    <a href={href}
       className="grid grid-cols-1 md:grid-cols-[110px_1fr] lg:grid-cols-[120px_1fr_200px]
                  gap-2 md:gap-[32px] items-baseline py-6 md:py-[30px]
                  border-t border-white/10 last:border-b group">
      <span className="font-mono text-[13px] text-night-ink-2/60">{number}</span>
      <span className="serif text-[24px] md:text-[30px] lg:text-[34px] leading-[1.2] text-night-ink group-hover:text-night-serif">{title}</span>
      <span className="font-mono text-[12px] text-night-ink-2/60 md:col-start-2 lg:col-start-3 lg:text-right">{meta}</span>
    </a>
  );
}

/** The "folder" panel — a cardboard file tab. Used for notes, build logs and
 *  archives. Keep it simple: one tab, one title, one line of metadata. */
export function Folder({
  tab, title, children, variant = "note",
}: { tab: string; title: string; children?: ReactNode; variant?: "note" | "log" | "experiment" }) {
  const tabStyle = {
    note: "bg-cyan text-ink border-cyan",
    log: "bg-ink text-paper border-ink",
    experiment: "bg-transparent text-night-ink border-dashed border-ink-3",
  }[variant];
  return (
    <div className="relative mt-[28px] rounded-[0_16px_16px_16px] border border-white/10 bg-white/[0.03] p-[20px_22px]">
      <span className={`mono absolute -top-[27px] -left-px px-[12px] py-[6px]
        rounded-t-[10px] border border-b-0 font-medium ${tabStyle}`}>{tab}</span>
      <h3 className="display text-[22px] m-0 text-night-ink">{title}</h3>
      {children}
    </div>
  );
}
