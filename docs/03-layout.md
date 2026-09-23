# Layout, rhythm and motion

The brand rules say what Mooods looks like. These say how a page is COMPOSED —
this is where a design stops feeling generic.

## Canvas

| | Desktop (reference) | Laptop | Tablet | Phone |
|---|---|---|---|---|
| Width | 1440 | 1024-1439 | 768-1023 | 390-767 |
| Page gutter | 120px | 80px | 48px | 24px |
| Reading gutter (centred text blocks) | 200px | 120px | 48px | 24px |
| Card grid | 3 columns (2 for projects) | 2 | 2 | 1 |
| Grid gap | 24px | 24px | 20px | 16px |

Max measure for running text: **65 characters**. A lead paragraph stops at `34em`.
A paragraph that spans the full 1440 is a bug, not a choice.

## Vertical rhythm

Sections breathe. `--section-y` is **160px** on desktop, 96px on tablet, 72px on phone.
Inside a section: 48px between the header block and the content, 24px between siblings,
10px inside a card's text stack. Air is the main tool — before adding a divider, add space.

## Section anatomy

Every section follows the same four beats, and any of the first three can be dropped:

1. **Eyebrow** — mono, uppercase, `.16em`. Only if it carries information (a role, a count,
   a status). "Ce que Mooods est" earns it; "Section" does not.
2. **Heading** — display, with ONE accent phrase in Instrument Serif italic. The serif half
   is the dream half of the sentence: *comprendre*, *jusqu'où elles peuvent aller*,
   *dans l'atelier*, *découvert en chemin*.
3. **Lead** — one paragraph, `34em` max, saying what the section is for.
4. **Content** — cards, a list, an image band, a form.

Never two headings in a row. Never an eyebrow immediately followed by another label.

## The alternation rule

**Never two consecutive card grids.** Between two grids there must be something of a
different nature: a full-bleed image band, an editorial list, a centred manifesto, a
two-column text block. A page that is nothing but rows of cards is the failure mode this
brand exists to avoid — it reads as a template, and it kills the feeling of exploring.

A good page alternates: dark scene → centred text → wide image → grid → list → two panels → scene.

## Heroes

One hero per page, **sized to what it holds** (the home hero is 920px, not `100vh`).
The 3D scene is the argument; the copy is one sentence plus one action. The veil over the
scene is `.veil-side` on the home (text sits left) or `.veil-up` when text sits at the
bottom. Two buttons maximum, one of them orange.

On a project or a note page the hero is smaller: 420-560px, image plus title plus metadata.

## Images

Images are **windows into the night world**: they keep their dark background even on a
light page. Radius 20-28px, `object-fit: cover`, soft ink-tinted shadow. A card image is
280-340px tall; a full-bleed band 560-640px. Never a hard-cropped square grid of
thumbnails — that is a gallery, and Mooods is not a gallery.

## Density and hierarchy

Border, fill, radius and shadow each say "separate object": spend them by role. Lift the
one thing that matters instead of stamping the same radius and shadow on every block.
Big-number tiles only if the figures are the point of the page — Mooods almost never has
figures worth a tile, so no fake stats, no "12 projets · 3 ans · ∞ idées".

Maximum 3 cards per row, 2 for projects. If there are more than 6 items, it is a list,
not a grid.

## Motion — the page is alive, but nothing is random

Three families, and nothing outside them. Everything respects `prefers-reduced-motion:
reduce` (which disables parallax, drift and pulses, and turns reveals into plain fades).

### 1. Parallax — depth, not spectacle

The page reads as layers at different distances. On scroll:

| Layer | Speed | Notes |
|---|---|---|
| 3D scene background | `0.15-0.25` of scroll | moves UP slower than the page, so it lags behind |
| Content on a scene | `1.0` | never parallaxed — text must stay readable |
| Torn paper edges | `1.0` | pinned to their band, otherwise the tear breaks |
| Polaroids, props, sketches | `0.35-0.5` | drift a little faster than the paper they sit on |
| Foreground foliage | `0.4-0.6` | fastest, so the frame opens as you descend |

Give the scene image 15-20% extra height so the lag never reveals an edge. Use
`transform: translate3d(0, y, 0)` on a `will-change: transform` layer, driven by one
shared scroll listener (passive) or `useScroll` — never one listener per element.
On the hero, add a `±8px` mouse-parallax on the character and foliage layers, eased over
0.6s, disabled on touch.

### 2. Reveals — things arrive as you get to them

Fired once, `viewport: { once: true, margin: "-100px" }`, always from a state that is
already painted (never parked at `opacity: 0` for a thumbnail or a shared link).

- **Text blocks**: fade-up, `y 24 → 0`, 0.7s `easeOut`, staggered 0.08s (number → title →
  handwritten line → body → link).
- **Polaroids**: `opacity 0 → 1`, `scale 0.94 → 1`, `rotate -8deg → -4deg`, 0.8s — they land
  on the table.
- **Handwritten annotations**: the text fades in, then the little loop-arrow **draws itself**
  — SVG `stroke-dasharray` / `stroke-dashoffset` animated over 0.9s `easeInOut`, 0.2s after
  the text.
- **Pencil sketches** in the background: `opacity 0 → 0.35` over 1.2s, no movement.
- **Icon rows**: stagger 0.06s per item, fade-up 16px.
- **Torn edges**: never animate. They are the page's structure.

### 3. Living images — slow enough that you feel it before you see it

- **Ken Burns**: each scene scales `1.0 → 1.06` over **24s**, `ease-in-out`, alternating
  direction between sections so two neighbours never breathe in sync.
- **Glow pulses**: the character's cyan modules and the goggles lenses pulse
  `opacity 0.75 → 1` over 3s. Done as a masked overlay layer on top of the image, never by
  filtering the whole photo.
- **Drifting mist**: in the island scenes, one duplicated, masked cloud layer translates
  horizontally 40px over 60s, at 25% opacity. One layer, one section — not everywhere.
- **Dust motes**: 8 to 12 particles maximum, only in the workshop and night scenes, 1-2px,
  drifting up over 20-30s at 15-30% opacity. If you can count them at a glance there are
  too few; if you notice them immediately there are too many.
- **Never**: video-speed loops, sparkles, lens flares, animated gradients across a whole
  section, anything that moves faster than a slow breath.

### Interaction

Card hover: lift `-4px` (0.4s) plus a slow image zoom to `1.04` (0.8s). Buttons lift `-2px`
and go to their `-deep` token. Polaroid hover: straighten toward `0deg` and lift `-6px`.
Links: the arrow slides `4px` right.

### Budget

Parallax and Ken Burns on **transform and opacity only** — never on `top`, `width`,
`background-position` or a filter. At most 3 parallax layers per section and one Ken Burns
per scene. Target 60fps on a laptop; if a section drops frames, remove the mist before
touching the reveals.

## Legal colour pairs

| Foreground | Background | Use |
|---|---|---|
| `--ink` | `--orange` | primary button (7.6:1) |
| `--ink` | `--cyan` | field-note tag (9.4:1) |
| `--cyan` | `--ink` / `--night` | link or label on dark (9.4:1) |
| `--night-ink` | `--night` | body on dark |
| `--night-serif` | `--night` | the serif accent phrase on dark |
| `--cyan-deep` | `--paper` | short cyan label on light (3.4:1 — labels only, never body) |
| `--orange-deep` | `--paper` | short orange label on light |

Illegal: `--cyan` or `--orange` as text on `--paper`; `--night-ink-2` below 60% opacity for
anything that must be read; white text on `--cyan`.

## Touch and focus

Hit targets never below **44px** on any screen. Focus is a 3px `--glow` ring with 2px
offset, always visible, never removed. Anything interactive must look interactive.
