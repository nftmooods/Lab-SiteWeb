# Prompt — one-page Mooods, style « Carnet », textes en lorem ipsum

À coller dans Claude Design (ou Lovable) avec le dossier `mooods-design-system` attaché.

---

Construis la **page d'accueil one-page de Mooods**, l'atelier personnel d'un créateur qui
explore la 3D, l'IA, l'art, le jeu et les nouvelles façons de construire des mondes.
Sensation cible : curiosité, univers, rêve, test. Le visiteur doit avoir envie de descendre
pour voir ce qu'il y a plus loin.

## Le principe de mise en page — un carnet posé sur un monde

La page **alterne deux natures** qui se déchirent l'une dans l'autre :

- des **bandes SCÈNE** : une image 3D en pleine largeur, le monde exploré ;
- des **bandes CARNET** : du papier crème, la page où l'on note ce qu'on a vu.

La transition entre les deux est **toujours un bord de papier arraché**, irrégulier, jamais
une ligne droite : un `path` SVG ondulé en haut et en bas de chaque bande carnet, rempli de
la couleur du papier, avec une ombre portée douce pour que le papier semble décollé du fond.
Deux déchirures consécutives ne se ressemblent pas.

Des **feuilles et branches sombres** débordent des coins, par-dessus les déchirures, deux ou
trois par section, jamais symétriques : c'est ce qui donne la profondeur et la sensation
d'être dans le monde plutôt que devant.

Lis `STYLE-carnet.md` pour le détail de ce langage (polaroids, annotations, objets posés,
palette chaude du papier), `LAYOUT.md` pour le rythme et le motion, `README.md` pour l'ADN
de marque, `ANTI-BRIEF.md` pour ce qui est refusé. Les couleurs viennent des tokens, aucune
n'est écrite en dur.

## Palette

Monde sombre : `--night` #0B1826. Papier : **crème #F2EBDD**, papier dense #E8DFCD, texte
sur papier brun très foncé #241B12, secondaire #5A4A3A, crayon #9A8C7A. Accent d'action et
numéros de chapitre : orange #F28C1E. Le cyan #2FD3E6 vit dans la 3D et les lueurs, jamais
dans l'interface papier. Un seul bouton d'action fort par écran.

## Typographie

Titres en **Bricolage Grotesque** 700-800. **Une seule phrase d'accent en Instrument Serif
italique** par titre. Corps en **Onest**. Numéros de chapitre, métadonnées et libellés
d'icônes en **JetBrains Mono**. Annotations en marge en **Caveat**, 22-34 px, inclinées de
-3 à -6 degrés, suivies d'une petite flèche-boucle dessinée à la main.

## Motion — la page est vivante

**Parallaxe au scroll** : l'image de scène défile à 0,2 de la vitesse de la page (prévois
15-20 % de hauteur en trop pour que le décalage ne révèle pas de bord), les polaroids et les
objets à 0,4, le feuillage de premier plan à 0,5. Le texte et les bords déchirés ne
parallaxent jamais. Sur le hero, ajoute une parallaxe souris de ±8 px sur le personnage et
le feuillage.

**Apparitions**, une seule fois, depuis un état déjà peint : les blocs de texte montent de
24 px en fondu (0,7 s, décalés de 0,08 s dans l'ordre numéro → titre → annotation → corps →
lien) ; les polaroids arrivent en `scale 0.94 → 1` et `rotate -8deg → -4deg` sur 0,8 s ;
l'annotation manuscrite apparaît puis **sa flèche se dessine** en animant
`stroke-dashoffset` sur 0,9 s ; les dessins au crayon en fond montent de 0 à 0,35
d'opacité ; les rangées d'icônes sont décalées de 0,06 s.

**Vie dans les images** : chaque scène fait un Ken Burns de `scale 1.0 → 1.06` sur **24 s**,
en alternant le sens d'une section à l'autre ; les modules cyan du personnage et les verres
des goggles pulsent en opacité 0,75 → 1 sur 3 s, via un calque masqué posé sur l'image et
non un filtre global ; une brume dupliquée et masquée dérive de 40 px sur 60 s dans la scène
des îles ; 8 à 12 poussières de 1-2 px montent lentement sur 20-30 s dans l'atelier et la
scène de nuit, à 15-30 % d'opacité.

Transformations et opacités uniquement, 3 calques de parallaxe maximum par section, un Ken
Burns par scène. Rien qui bouge plus vite qu'une respiration lente. Pas de scintillement,
pas de reflets de lentille, pas de dégradé animé, pas de carrousel. Tout respecte
`prefers-reduced-motion`.

## Règle sur les textes

Les textes de contenu sont en **lorem ipsum**, mais la maquette doit rester jugeable.

**Restent en vrai texte** : la navigation (Explorer · Créer · Partager · Communauté), les
libellés de boutons (« Rejoindre », « Explorer maintenant », « Voir la vidéo », « Découvrir
les mondes », « Rejoindre la communauté »), les libellés d'icônes (3D & Prototypes, Jeux,
Création, Apprentissage), les numéros de chapitre, les **annotations manuscrites** (elles
portent l'émotion, il faut les voir en vrai), le wordmark et le pied de page.

**Passent en lorem ipsum**, avec ces longueurs pour un rendu réaliste : titre de chapitre
1 à 3 mots ; sous-titre de chapitre 4 à 7 mots dont 2 ou 3 en serif italique ; corps de
chapitre environ 120 caractères ; lead du hero environ 180 caractères ; libellé d'icône
2 à 3 mots. Fais varier les longueurs d'un bloc à l'autre. Ne remplis jamais un bloc de
lorem pour combler un vide — un vide se règle avec l'espace et la composition.

## Structure de la page

1. **HERO — scène.** `assets/scenes/hero-islands.jpg` en pleine largeur, 920 px. Nav en
   haut : wordmark à gauche, liens au centre, bouton pilule blanc « Rejoindre → » à droite,
   sur fond transparent. À gauche : le wordmark Mooods en très grand, puis la tagline
   manuscrite sur deux lignes « Même curiosité. / Des mondes différents. » avec sa
   flèche-boucle, un lead en lorem, et deux actions — une pilule blanche « Explorer
   maintenant » et un bouton lecture en cercle « Voir la vidéo ». En haut à droite,
   l'annotation manuscrite « Des idées d'aujourd'hui pour les mondes de demain ».
   Une branche feuillue déborde en bas à gauche.
2. **CHAPITRE 01 — carnet.** Papier crème, déchirure en haut et en bas. À gauche : « 01 » en
   orange avec son filet, titre, sous-titre à accent serif, corps, lien fléché « Découvrir
   les mondes → ». À droite : un **polaroid** de `assets/scenes/sunset.jpg` pivoté de -4°,
   du dessin au crayon très pâle en fond (une île, un croquis de personnage), et une
   **boussole** posée en haut à droite qui dépasse de la déchirure. Annotation manuscrite
   « Des univers à explorer » entre les deux colonnes.
3. **CHAPITRE 02 — scène.** `assets/scenes/workshop.jpg` en pleine largeur, 720 px, voile
   dégradé à gauche. Contenu à gauche : « 02 », titre, sous-titre, corps. En bas, une
   **rangée de quatre icônes de ligne** avec leurs libellés : 3D & Prototypes, Jeux,
   Création, Apprentissage. Annotation manuscrite « Idées / Expériences / Progrès » à
   droite, sur trois lignes décalées. Poussières qui montent.
4. **CHAPITRE 03 — carnet.** Papier, déchirures. Titre et corps à gauche, une **rangée de
   quatre ou cinq avatars ronds qui se chevauchent** avec un bouton « + » à la fin, puis un
   bouton pilule « Rejoindre la communauté ». À droite, un polaroid de la scène du drapeau
   (`assets/scenes/city.jpg` ou la scène de communauté) pivoté de +3°. Annotation manuscrite
   « Échanger / Apprendre / Grandir / Ensemble » sur quatre lignes. Feuillage dans les deux
   coins bas.
5. **CHAPITRE 04 — scène.** `assets/scenes/sunset.jpg` en pleine largeur, 820 px, la plus
   contemplative. « 04 », titre sur deux lignes, corps court, une pilule blanche « Explorer
   maintenant ». Annotation manuscrite « Une curiosité qui n'a pas de limites » à droite.
   Ken Burns le plus lent de la page.
6. **PIED DE PAGE — nuit profonde.** Fond bleu nuit très sombre avec une planète en bas,
   à peine visible. Wordmark à gauche avec la tagline manuscrite « Same curiosity. /
   Different worlds. », les liens de nav au centre, les icônes sociales à droite. Une ligne
   de bas : mention de copyright à gauche, « Explore. Build. Play. Learn. Share. » à droite.

## Responsive

Desktop 1440 en référence, puis 1024, 768, 390. Sur mobile : les bandes carnet passent en
une colonne avec le polaroid sous le texte, les déchirures s'aplatissent un peu (amplitude
divisée par deux), le feuillage de premier plan se réduit à un élément par section, la
parallaxe passe à 0,1 et le Ken Burns est conservé, la nav devient un bouton de menu, le
hero descend à 620 px. Cibles tactiles jamais sous 44 px.

## À ne pas faire

Rien de la liste de `ANTI-BRIEF.md`. En particulier : pas de ligne droite entre une bande
scène et une bande carnet, pas de section « features », pas de témoignages, pas de tarifs,
pas de faux chiffres ni de tuiles de statistiques, pas de grille régulière de vignettes
(les photos sont un tas de polaroids, pas une galerie), pas de dégradé violet-bleu, pas
d'emoji, pas de hero en `100vh`.

## Livrable

Une seule page, avec les sections dans l'ordre ci-dessus, les images du dossier référencées
par leur chemin, et la parallaxe pilotée par un seul écouteur de scroll passif partagé.
Montre-moi la version desktop d'abord.
