/** The goggles mark — the brand's signature object.
 *  Lives on its own as favicon, avatar, stamp, loader; and inside the wordmark
 *  in place of the first two "o" of Mooods. It is what makes Mooods recognisable
 *  WITHOUT Nook. Never add a gradient, an outline or a rotation. */
export function GogglesMark({
  height = 20,
  frame = "var(--orange)",
  lens = "var(--cyan)",
  eyes = false,
}: { height?: number; frame?: string; lens?: string; eyes?: boolean }) {
  return (
    <svg viewBox="0 0 220 100" style={{ height, width: "auto" }} aria-hidden="true">
      <g fill="none" stroke={frame} strokeWidth={12} strokeLinejoin="round">
        <rect x="8" y="14" width="88" height="72" rx="22" />
        <rect x="124" y="14" width="88" height="72" rx="22" />
        <path d="M96 50h28" />
      </g>
      <rect x="20" y="26" width="64" height="48" rx="14" fill={lens} />
      <rect x="136" y="26" width="64" height="48" rx="14" fill={lens} />
      {eyes && (
        <>
          <circle cx="52" cy="50" r="12" fill="var(--ink)" opacity="0.85" />
          <circle cx="168" cy="50" r="12" fill="var(--ink)" opacity="0.85" />
          <circle cx="46" cy="42" r="4" fill="#fff" />
          <circle cx="162" cy="42" r="4" fill="#fff" />
        </>
      )}
    </svg>
  );
}

/** The wordmark. The goggles replace the first two "o".
 *  Minimum 90px wide on screen, 20mm in print — below that, the mark alone.
 *  Clear space around it: the height of one "o". Never sits on top of Nook. */
export function Wordmark({ size = 24, mono = false }: { size?: number; mono?: boolean }) {
  return (
    <span
      className="font-display inline-flex items-center font-extrabold"
      style={{ fontSize: size, letterSpacing: "-0.04em", lineHeight: 1 }}
    >
      M
      <GogglesMark
        height={size * 0.78}
        frame={mono ? "currentColor" : "var(--orange)"}
        lens={mono ? "transparent" : "var(--cyan)"}
        eyes={!mono}
      />
      ods
    </span>
  );
}
