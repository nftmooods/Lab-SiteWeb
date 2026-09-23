# Fonts — all four load from Google Fonts

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500..800&family=Instrument+Serif:ital@0;1&family=Onest:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">
```

| Role | Family | Weights | Where |
|---|---|---|---|
| Display | **Bricolage Grotesque** (variable, `wdth` 75-100) | 600-800 | headings, wordmark, buttons. `wdth` 85-92 tightened for big titles. Never body copy. |
| Accent | **Instrument Serif** italic | 400 | ONE accent phrase inside a heading — the exploration / dream half of the sentence. |
| Body | **Onest** | 400 / 600 | body, narration, UI. 60-65 characters per line, line-height 1.55-1.65. |
| Mono | **JetBrains Mono** | 400 / 500 | metadata, tags, versions, statuses. Uppercase, letter-spacing .16em for labels. |

Fallback stacks are declared in `tokens.css`; keep them, exported PDFs and PNGs render the fallback.
