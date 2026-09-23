/** REAL content. The single biggest cause of generic output is invented copy:
 *  use these facts, and leave anything marked [À COMPLÉTER] bracketed on the page
 *  rather than fabricating a number, a date, a price or a quote. */

export const AUTHOR = {
  name: "Mooods",
  who: "Je construis des choses pour voir jusqu'où elles peuvent aller. 3D, IA, jeux, images, objets — surtout des choses que je ne sais pas encore faire.",
  elsewhere: "Mon activité professionnelle (formation et conseil en IA) vit ailleurs. Ici, c'est l'atelier.",
  channels: [
    { label: "X — le build", handle: "@nftM3ods", url: "https://x.com/nftM3ods", note: "publié par M3ODS, en anglais" },
    { label: "X — la discussion", handle: "@nftmooods", url: "https://x.com/nftmooods" },
    { label: "Site", handle: "mooodsstudio.xyz", url: "https://mooodsstudio.xyz" },
  ],
} as const;

export type Project = {
  slug: string; title: string; kicker: string; status: "wip" | "live" | "archive";
  version?: string; pitch: string; works: string[]; broken: string[];
  next: string; subjects: string[]; image: string; action?: { label: string; href: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "ruinator",
    title: "Ruinator",
    kicker: "Addon Blender · Geometry Nodes",
    status: "wip",
    version: "v0.3",
    pitch: "Un générateur de ruines en Geometry Nodes : on prend un bâtiment, on décide à quel point le temps est passé dessus.",
    works: ["Les murs se fissurent proprement", "Les paramètres tiennent d'une version de Blender à l'autre"],
    broken: ["Les portes traversent encore le sol", "Les toits ne sont pas commencés"],
    next: "Les toits.",
    subjects: ["3D", "BLENDER"],
    image: "/assets/scenes/city.jpg",
    action: { label: "Télécharger la version en cours", href: "[À COMPLÉTER — lien de la build gratuite]" },
  },
  {
    slug: "pxgrove",
    title: "PxGrove",
    kicker: "Jeu web · pixels",
    status: "live",
    pitch: "Un jeu où on plante des pixels et on regarde ce qui pousse. Pensé pour quelqu'un qui n'a jamais touché à la blockchain.",
    works: ["Jouable dans le navigateur", "Sauvegardes locales"],
    broken: ["Pas encore de multijoueur", "L'équilibrage des variétés est à refaire"],
    next: "[À COMPLÉTER]",
    subjects: ["JEU", "WEB"],
    image: "/assets/scenes/sunset.jpg",
    action: { label: "Jouer", href: "[À COMPLÉTER — url du jeu]" },
  },
];

export type Note = {
  number: string; slug: string; title: string; meta: string;
  takeaway: string; project?: string;
};

/** Field notes: real sequential numbering. The title says what was ATTEMPTED. */
export const NOTES: Note[] = [
  {
    number: "09", slug: "atelier-avant-personnage",
    title: "J'ai essayé de construire une scène sans commencer par le personnage.",
    meta: "blender · geometry nodes · 2 soirées · résultat : partiel",
    takeaway: "Le décor raconte plus que je ne pensais. Prochain test : une scène complète sans Nook du tout.",
  },
  {
    number: "08", slug: "monde-avant-de-savoir",
    title: "Je voulais voir si une IA pouvait dessiner un monde avant que je sache ce que c'était.",
    meta: "IA image → 3D · 6 itérations · ouvert",
    takeaway: "Deux images gardées, une qui a fini en île flottante. Partir du flou marche mieux que partir d'un brief.",
  },
  {
    number: "07", slug: "le-rig-non",
    title: "Le rendu tient. Le rig, non.",
    meta: "3D · raté utile",
    takeaway: "J'ai posé le personnage avant de comprendre comment il devait bouger. À refaire dans l'autre sens.",
    project: "ruinator",
  },
];

/** Empty and error states, written in the voice. Never "No items found". */
export const STATES = {
  emptyIndex: "Rien ici pour l'instant. C'est aussi un résultat.",
  emptyFilter: "Aucune note sur ce sujet — pas encore.",
  notFound: "Ce chemin ne mène nulle part. Ça arrive quand on explore.",
} as const;
