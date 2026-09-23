import type { Config } from "tailwindcss";

/** Mooods — Tailwind mapped onto tokens.css. Never hardcode a hex in a component. */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "paper-ink": "var(--paper-ink)", "paper-ink-2": "var(--paper-ink-2)", pencil: "var(--pencil)",
        paper: "var(--paper)", "paper-2": "var(--paper-2)",
        ink: "var(--ink)", "ink-2": "var(--ink-2)", "ink-3": "var(--ink-3)",
        line: "var(--line)",
        cyan: "var(--cyan)", "cyan-deep": "var(--cyan-deep)",
        orange: "var(--orange)", "orange-deep": "var(--orange-deep)",
        red: "var(--red)", glow: "var(--glow)", amber: "var(--amber)",
        night: "var(--night)", "night-2": "var(--night-2)",
        "night-line": "var(--night-line)",
        "night-ink": "var(--night-ink)", "night-ink-2": "var(--night-ink-2)",
        "night-serif": "var(--night-serif)",
      },
      fontFamily: {
        display: "var(--font-display)",
        serif: "var(--font-serif)",
        sans: "var(--font-body)",
        mono: "var(--font-mono)",
        hand: "var(--font-hand)",
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        h2: ["var(--text-h2)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        lead: ["var(--text-lead)", { lineHeight: "1.55" }],
        label: ["var(--text-label)", { letterSpacing: "0.16em" }],
      },
      borderRadius: {
        s: "var(--radius-s)", m: "var(--radius-m)",
        l: "var(--radius-l)", xl: "var(--radius-xl)", pill: "var(--radius-pill)",
      },
      boxShadow: { soft: "var(--shadow)", night: "var(--shadow-night)" },
      maxWidth: { reading: "65ch" },
    },
  },
} satisfies Config;
