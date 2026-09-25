# Strates Digitales Lab — identité actuelle

La direction confirmée en septembre 2026 remplace le cadrage historique ci-dessous :

- **Strates Digitales Lab** est le nom du site et du laboratoire.
- **Martin Lisen** est l’humain qui crée, explore et expérimente.
- **Mooods** est uniquement la mascotte et le narrateur de son journal de bord.
- Le « je » est celui de Mooods ; Martin est « mon humain », « Martin » ou « il ».
- L’asset historiquement nommé `nook.jpg` représente maintenant Mooods sur la home.
- La référence visuelle est un carnet : scènes immersives, papier crème déchiré,
  polaroids, annotations manuscrites. Pas de communauté, chiffres ou résultats inventés.

Exemple : « Mon humain a encore eu une idée. Viens, je te raconte. »

### Ajustements du 25 septembre 2026

Mooods tutoie le lecteur et parle familièrement, avec complicité : « Salut, moi…
c’est Mooods. Et je te présente mon humain. » Martin donne des formations et accompagne
des entreprises ; au labo, c’est son côté artiste que Mooods raconte. Les essais,
créations et échecs sont racontés simplement, sans inventer de nouveaux faits.

Les vrais logos Strates Digitales sont fournis en PNG dans `public/assets/logo/`.
`fonce` porte du texte clair pour les fonds sombres ; `blanc` du texte sombre pour
les fonds clairs. Le composant `LabLogo` cadre le dessin dans sa grande toile transparente.

Emprunts ciblés à `strates-digitales-charte-v3.html` : orange #F78312, turquoise
#068296 (version profonde #045B6B pour les petits textes sur papier), charbon
#232525, cyan signal #5FE0D0 pour les interactions sur sombre, Fragment Mono pour
les métadonnées. Chapitres : numéro en étiquette à rayon 4 px, filet gradué, libellé
en capitales espacées. Le papier crème, les paysages et les titres éditoriaux restent
propres au journal du labo.

### Densité de la home

La home invite à découvrir : un titre court, une phrase par section, priorité aux
images. Garder la présentation de Martin et Mooods très brève. Le journal vient en
bas de page, juste avant le footer ; les récits et détails restent repliés jusqu’au
clic. Éviter les longs discours, les signatures et les invitations répétées.

### Interactions de découverte

La navigation reste visible et devient un bandeau sombre translucide au défilement.
Sur ordinateur, un petit curseur blanc devient une pastille verbale sur les actions
principales (« Go », « Ouvrir »). L’indicateur « Explorer » invite à descendre sans
ajouter de texte. La présentation place Mooods et sa machine à écrire à gauche, puis
son introduction courte à droite, sans cadre polaroid.

Le coin des bricolages utilise une galerie en profondeur : trois créations au maximum
sont visibles, la sélection tourne automatiquement et les catégories sont présentées
comme de vrais filtres activables. Les contenus ajoutés en démonstration restent nommés
comme des recherches ou explorations, jamais comme des projets livrés.

## Cadrage historique (rôles remplacés par ceux ci-dessus)

Mooods is the **personal workshop of a creator who explores 3D, AI, art, games and
new ways of building worlds.** It is not a portfolio, not an agency site, not a game
studio, not an NFT gallery. It is a workshop open to the public: visitors should want
to poke around, click, discover, and understand how things are made.

Core idea: **"I build things to see what happens."**
Three words: **Explore. Build. Share.**
Territory: personal explorer x digital workshop x 3D storytelling.

## Brand architecture — five roles, kept separate

| Role | Name | What it is |
|---|---|---|
| The author | **Mooods** | The person behind the universe. The voice, the ideas, the work. |
| The avatar | **Nook** | The character that represents Mooods visually (also the social PFP). Represents Mooods, never replaces him. |
| The agent | **M3ODS** | The workshop's AI bot: a robot version of Nook. Keeps the log, publishes progress on X, reports. Never speaks for Mooods. |
| The ground | **Workshop** | The studio, the research notebook, the lab. |
| The story | **Field Notes / Builds / Experiments** | The content. What worked, what broke, what was discovered. |

The mystery of the brand comes from the CONTENT, never from invented lore. There is no
fictional mythology, no numbered secret protocol, no fantasy world-building for its own sake.

## Content architecture

Five verbs are the site's entry points. Technical subjects (3D, AI, game, image, object,
Blender) are neutral TAGS, never sections.

- **EXPLORE** — what interests me: ideas, references, questions, leads.
- **BUILD** — what I'm building: projects, prototypes, scenes, tools, objects.
- **PLAY** — what I'm testing: experiments, detours, curiosities, no final result required.
- **DISCOVER** — what I'm learning: findings, results, mistakes, observations.
- **SHOW** — what I share: finished images, creations, publications.

**Field Notes** are the signature editorial format: a tab (type + real sequential number),
a first-person title stating what was attempted, a line of mono metadata, a short account,
one observation. Failure is content.

## Two worlds (this is narrative, not an accessibility setting)

- **Light world** — `--paper` / `--ink` / `--cyan`. The workshop: site, text, navigation,
  Field Notes. You read here.
- **Dark world** — `--night` / `--cyan` / `--orange`. The explored universe: hero,
  large 3D scenes, transitions, discoveries. You enter here.

You drop into the dark for an image or an experience and come back to the light to read.
A fully dark page is an event, not a default. Images always keep their night background:
they are windows into the page (radius 20-28px, soft ink-tinted shadow).

## Colour discipline

Identity pair is **cyan x orange**. Every colour has ONE role and they are never all used
at once. One warm accent and one cool accent per screen; one orange button per screen;
red and glow stay under 5% of the surface. Light cyan and light orange never carry text on
`--paper` — use `--cyan-deep` / `--orange-deep` for short labels only.

## Typography

- **Bricolage Grotesque** 600-800, `wdth` 75-100 — headings, identity, buttons. Never body copy.
- **Instrument Serif** italic — the dream/exploration words inside a heading
  (`comprendre`, `jusqu'ou elles peuvent aller`, `dans l'atelier`). One accent phrase per
  heading, never a whole heading.
- **Onest** 400/600 — body, narration, UI.
- **JetBrains Mono** 400/500 — metadata, tags, versions, statuses. It must carry a real
  function; if removing it loses no information it was decoration.

## Voice

Curious before expert. Concrete. Short. Warm, not cute. **An observer, never a guru.**
First person, action verbs: "j'ai teste", "je voulais voir si". Never "voici la meilleure
facon de". Words to use: Explore, Build, Play, Discover, Show, Field Notes, Workshop,
Experiment, Prototype, Build Log, Archive, Sketch, Test, Make. Words to use sparingly and
never as identity: Protocol, System, Quest, Level, Lore, Cyber, Hacker, NFT.

Three voices: Mooods writes the Field Notes and talks to people (FR); M3ODS reports the
build in log lines (EN, on X); Nook does not speak, he acts.

## Five questions before shipping any design

1. Does it feel personal?
2. Could it belong to any game studio? If yes: simplify and personalise.
3. Is Nook used as a character or as a mascot? Prefer the character.
4. Does the technology serve the content, or is it decorative? Prefer function.
5. **Does it make you want to explore?** This is the main test.

## Anti-patterns

Never: mascot poses (thumbs up, wink at camera), kawaii expressions, generic gaming
aesthetics, cyberpunk decor, purple-blue gradient heroes, emoji as section markers,
decorative mono, one radius and one shadow stamped on every block, invented lore or
mysterious numbering used as ornament.

## Read these too

- **`LAYOUT.md`** — composition, vertical rhythm, section anatomy, the alternation rule,
  image treatment, motion spec, legal colour pairs, breakpoints. This is what stops a
  page from reading as a template.
- **`PAGES.md`** — the page inventory: home, project, field note, index, about, empty
  states — with the fixed anatomy of each.
- **`ANTI-BRIEF.md`** — concrete rejections, copy and layout, with the right version
  beside each wrong one.
- **`src/content/site.ts`** — the real content. Use these facts; never invent a project,
  a number, a date or a testimonial. Anything marked `[À COMPLÉTER]` stays bracketed
  until Mooods fills it in.

## What lives where

- `src/styles/tokens.css` — the whole colour, type, radius and shadow system.
- `src/styles/base.css` — resets, type classes, the glass surface, image frames.
- `src/lib/brand.ts` — brand constants: taglines, the five verbs, tag types, vocabulary.
- `src/components/*` — the real component vocabulary. Extend these rather than inventing.
- `assets/logo` — wordmark and goggles mark. `assets/glyphs` — the no-Nook secondary system.
- `assets/characters`, `assets/scenes` — Nook, M3ODS and the 3D world references.
