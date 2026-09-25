# Strates Digitales Lab — Le journal de Mooods

## Direction actuelle — septembre 2026

Le site est **Strates Digitales Lab**, le laboratoire de **Martin Lisen**.
**Mooods est uniquement la mascotte et le narrateur** : il tient le journal des
explorations de son humain. Le nom `nook` de certains fichiers est un héritage,
pas un second personnage dans la nouvelle page.

La home utilise désormais des scènes pleine largeur, des bandes de papier texturé
aux bords déchirés, des polaroids et des annotations manuscrites. Les projets et
notes s’ouvrent sur place. Leur contenu provient de `src/content/site.ts`.
Les styles de cette version sont dans `src/styles/journal.css`.

Cette direction remplace l’ancienne répartition des rôles dans les documents
historiques ci-dessous. Le site local n’est pas automatiquement publié.

## Cadrage historique

Le site et le design system de **Mooods**, l'atelier personnel d'un créateur qui explore
la 3D, l'IA, l'art, le jeu et les nouvelles façons de construire des mondes.

> **Je construis des choses pour voir jusqu'où elles peuvent aller.**
> Explore. Build. Share.

Ce n'est pas un portfolio, pas une vitrine d'agence, pas un studio de jeux. C'est un
atelier ouvert au public : on y montre les projets pendant qu'ils se font, avec ce qui
marche et ce qui casse.

## Démarrer

```bash
npm install
npm run dev        # serveur de développement sur http://localhost:5173
npm run build      # typecheck + build de production dans dist/
npm run preview    # sert le build de production
npm run typecheck  # types seuls
```

Node 18+ requis. Aucune variable d'environnement n'est nécessaire à ce stade.

## Déploiement

Le site est un build statique hébergé chez Hostinger sur `mooodsstudio.xyz`.
Après `npm run build`, le contenu de `dist/` va dans
`domains/mooodsstudio.xyz/public_html/` via le gestionnaire de fichiers hPanel.
Penser à **vider le cache** (hPanel → Tableau de bord du site → Cache) après remplacement,
sinon l'ancienne page reste servie.

## Structure

```
docs/           la marque et les règles de design — à lire avant de dessiner quoi que ce soit
prompts/        prompts prêts à coller dans Claude Design / Lovable
public/assets/  logo, glyphes, personnages, scènes 3D
src/styles/     tokens.css (tout le système) + base.css (classes de base)
src/lib/        constantes de marque
src/content/    le contenu réel du site (projets, field notes)
src/components/ le vocabulaire de composants — l'étendre plutôt qu'en inventer
src/pages/      les pages
```

## Le design system en trois règles

1. **Aucune couleur écrite en dur.** Tout vient de `src/styles/tokens.css`, exposé à
   Tailwind dans `tailwind.config.ts`.
2. **Un seul accent chaud et un seul accent froid par écran**, un seul bouton orange par
   page. Le couple identitaire est cyan × orange.
3. **Une seule phrase d'accent en Instrument Serif italique par titre** — la moitié
   « rêve » de la phrase, jamais le titre entier.

## Documentation

| Fichier | Contenu |
|---|---|
| [`docs/01-brand.md`](docs/01-brand.md) | ADN de marque : les cinq rôles (Mooods, Nook, M3ODS, Workshop, Field Notes), les cinq verbes, la voix, les cinq questions avant de publier |
| [`docs/02-style-carnet.md`](docs/02-style-carnet.md) | Le style « Carnet » : bandes scène / bandes papier, bords déchirés, polaroids, annotations manuscrites |
| [`docs/03-layout.md`](docs/03-layout.md) | Composition, rythme vertical, règle d'alternance, parallaxe et motion, paires de contraste, breakpoints |
| [`docs/04-pages.md`](docs/04-pages.md) | Inventaire des pages et anatomie de chacune |
| [`docs/05-anti-brief.md`](docs/05-anti-brief.md) | Les rejets concrets, copy et structure, avec la bonne version en face |
| [`docs/06-fonts.md`](docs/06-fonts.md) | Les quatre familles et leur rôle |

## Contenu

Le contenu réel vit dans `src/content/site.ts`. Les champs marqués `[À COMPLÉTER]`
attendent une vraie information (lien de téléchargement, URL du jeu, prochaine étape) :
ils restent visibles sur la page tant qu'ils ne sont pas remplis — c'est voulu, mieux
vaut un trou marqué qu'une information inventée.

## État

`src/pages/Home.tsx` est la **maquette v1** de la home : structure et composants
fonctionnels, textes issus des échanges de cadrage. La direction visuelle validée est le
style « Carnet » décrit dans `docs/02` — elle n'est pas encore implémentée dans cette
page. Voir `prompts/onepage.md` pour la relancer dans ce style.

## Vérifié

Build et typecheck passent. Rendu contrôlé à 1440, 768 et 390 px : aucun débordement
horizontal, aucune image cassée, aucune erreur console, toutes les cibles tactiles au
moins à 40 px.
