# Style « Carnet » — la direction retenue

La page alterne deux natures qui se déchirent l'une dans l'autre : des **scènes 3D pleine
largeur** (le monde exploré) et des **pages de carnet en papier crème** (l'atelier où on
note ce qu'on a vu). Ce n'est pas un site sombre avec des sections claires : c'est un carnet
d'exploration dont les pages sont posées sur le monde.

## Les deux natures

**Bandes SCÈNE** — la 3D en pleine largeur, hauteur 620-920 px. Le contenu est posé dessus,
à gauche, avec un voile dégradé. Une rangée d'icônes de ligne peut courir en bas.

**Bandes CARNET** — papier crème, texture fibreuse très légère. Portent : un numéro de
chapitre en orange, un grand titre display, une phrase manuscrite, un paragraphe, un lien
texte fléché — et à côté, une **photo polaroid** légèrement pivotée, du **dessin au trait
au crayon** en fond très pâle, parfois un **objet** posé (boussole, carnet, lunettes).

## Les bords déchirés

C'est la signature de la mise en page : la transition entre une bande scène et une bande
carnet est un **bord de papier arraché**, irrégulier, jamais une ligne droite. Deux bords
consécutifs ne sont jamais identiques. Techniquement : un SVG en `path` ondulé placé en
haut et en bas de chaque bande carnet, rempli de la couleur du papier, avec une ombre
portée douce (`drop-shadow(0 -6px 12px rgba(0,0,0,.25))`) pour que le papier semble
décollé du fond.

## Le feuillage de premier plan

Des feuilles et des branches sombres débordent des coins des bandes, par-dessus la
déchirure, comme si on regardait la scène depuis un buisson. Deux ou trois par section,
jamais symétriques, toujours en superposition sur le bord d'une bande — c'est ce qui donne
la profondeur et la sensation d'être *dans* le monde plutôt que devant.

## Les annotations manuscrites

Une par section, en écriture script crème, posée en marge et légèrement inclinée, suivie
d'une **petite flèche-boucle dessinée à la main**. Elles ne répètent pas le titre : elles
commentent, comme une note dans une marge. « Des univers à explorer », « Idées Expériences
Progrès », « Échanger Apprendre Grandir Ensemble », « Une curiosité qui n'a pas de limites ».
Police : Caveat, 22-34 px, rotation -3 à -6 degrés.

## Les polaroids

Photos avec bordure blanche épaisse (12-14 px), coin légèrement pivoté (-4 à +3 degrés),
ombre portée nette. Elles se chevauchent parfois en éventail. Une légende manuscrite peut
courir à côté. Jamais une grille régulière de vignettes — c'est un tas de photos sur une
table, pas une galerie.

## Chapitres numérotés

Les bandes carnet sont numérotées **01, 02, 03, 04** en orange, en mono, suivies d'un petit
filet horizontal. C'est légitime ici : ce sont les chapitres d'un parcours, dans un ordre
qui compte — le lecteur descend un chemin. La règle générale reste valable : pas de
numérotation sur ce qui n'est pas une séquence.

## Palette — le papier devient chaud

Le monde clair passe du gris-bleu froid au **papier crème**. C'est le changement de token le
plus important : tout l'effet carnet en dépend.

```css
--paper:       #F2EBDD;  /* papier crème, remplace le #F3F6F9 froid */
--paper-2:     #E8DFCD;  /* papier plus dense, ombres de pli */
--paper-ink:   #241B12;  /* texte sur papier : brun très foncé, pas du noir */
--paper-ink-2: #5A4A3A;  /* texte secondaire sur papier */
--pencil:      #9A8C7A;  /* dessin au trait, filets, sketchs de fond */
```

Le monde sombre ne change pas (`--night` #0B1826). L'orange `--goggle` #F28C1E reste
l'accent d'action et sert aussi aux numéros de chapitre. Le cyan reste dans la 3D et les
lueurs, pas dans l'interface papier.

## Ce qui ne change pas

Le wordmark à goggles, les quatre polices, Nook toujours en action, le couple cyan × orange,
un seul bouton d'action fort par écran, les images qui gardent leur nuit, et les cinq
questions avant de publier.
