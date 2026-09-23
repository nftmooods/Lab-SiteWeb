# Page inventory

The site is a workshop you walk into: a one-page home that opens the doors, then real
pages behind it. Each page type below has a fixed anatomy — extend it, don't reinvent it.

## 1. Home — `/`

One page, links out. Anatomy in `src/pages/Home.tsx`:
hero (dark scene) → manifesto (centred, 3 lines) → workshop image band with a glass card →
the three territories (Explore / Build / Play) → projects in progress (2 cards) →
field notes (editorial list of 3) → the inhabitants (Nook, M3ODS) → closing invitation → footer.

The home never shows everything. It shows enough to make you click.

## 2. Project — `/projets/<slug>`

The page of a thing being built. **Honest about what does not work yet** — that is the
whole point of publishing mid-build.

- Hero: 420-560px image, status tag (WIP / LIVE / ARCHIVE), title, one-sentence pitch,
  subject tags, and the action (download, play, view on Superhive).
- **Où ça en est** — two short lists side by side: *ce qui marche* / *ce qui casse encore*.
  This block is mandatory and is what makes the page Mooods rather than a product page.
- **Build log** — reverse-chronological entries, each with a version, a date and 1-3 lines.
  Uses the `Folder` component with the `log` variant.
- Gallery — 2-4 images or a video, in frames.
- Linked field notes at the bottom, and "prochaine étape" in one sentence.

No pricing table, no feature comparison, no testimonial section. If a project is sold
(a Blender addon), a single line links out to where it is sold.

## 3. Field note — `/notes/<number>`

The editorial format. Reads like a page from a research notebook.

- Tab: `FIELD NOTE · 09` (real sequential number).
- Title: a first-person sentence stating what was ATTEMPTED, in Instrument Serif italic,
  full width, no image above it.
- Metadata line in mono: tools, time spent, outcome (`résultat : partiel`, `ouvert`, `raté utile`).
- The account: 3-6 short paragraphs, images inline in frames, measure capped at 65ch.
- **Ce que j'en retiens** — one closing observation block on `--paper-2` / `--night-2`.
- Links: the project it belongs to, the previous and next note.

## 4. Index — `/projets`, `/notes`, `/archive`

A filterable list, not a grid of hero cards. Filters are the subject tags (3D, IA, JEU,
IMAGE, OBJET, BLENDER), plus the content type. Sorted newest first. Rows carry number,
title, metadata — the same shape as `FieldNoteRow`. The archive is the same page with
`ARCHIVE` items, and it is a feature: old attempts are kept on purpose.

## 5. À propos — `/a-propos`

Who Mooods is, in the first person, short. Then: *ce que c'est / ce que ce n'est pas*
(the two-panel block from the brand book), the inhabitants (Nook and M3ODS with their
roles), the channels, and one line separating this from the professional identity —
training and consulting live elsewhere and are not sold here.

## 6. Empty and error states

Written in the voice, never generic. An index with no results says
"Rien ici pour l'instant. C'est aussi un résultat." — not "No items found".
A 404 says something an explorer would say about a wrong turn. One sentence, one way back.

## Navigation

The nav is the five verbs (Explore, Build, Play, Field notes) plus the agent's handle.
Subjects are filters INSIDE a section, never nav items. The footer carries the channels
and nothing else — no sitemap wall, no newsletter form unless there is a newsletter.
