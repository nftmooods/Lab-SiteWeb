/** REAL content. The single biggest cause of generic output is invented copy:
 *  use these facts, and leave anything marked [À COMPLÉTER] bracketed on the page
 *  rather than fabricating a number, a date, a price or a quote. */

export const AUTHOR = {
  name: "Martin Lisen",
  narrator: "Mooods",
  lab: "Strates Digitales Lab",
  who: "Martin Lisen, c’est mon humain. Formateur et accompagnateur d’entreprises quand il a l’air sérieux, artiste quand il est au labo. Moi, Mooods, je te raconte ses tests, ses créations et ses ratés.",
  elsewhere: "Ici, c’est le labo. Installe-toi, je te montre ce que Martin bricole.",
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
    pitch: "Martin fabrique un outil Blender pour transformer des bâtiments en ruines. Tu choisis à quel point ils ont vieilli, et les murs se fissurent. Bon, pour les portes, il reste un peu de boulot.",
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
    pitch: "Là, il fait pousser des pixels. Oui, oui. Tu plantes, tu regardes ce qui pousse, et tu joues directement dans ton navigateur. Pas besoin d’y connaître quoi que ce soit en blockchain.",
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
    title: "Cette fois, Martin a commencé par le décor. Pas par moi.",
    meta: "blender · geometry nodes · 2 soirées · résultat : partiel",
    takeaway: "D’habitude, il commence par le personnage. Là, il a attaqué le décor. Et tu sais quoi ? Ça raconte déjà pas mal de choses sans moi au milieu. Il veut même tenter une scène où je n’apparais pas du tout. Bon. Je vais essayer de ne pas le prendre personnellement.",
  },
  {
    number: "08", slug: "monde-avant-de-savoir",
    title: "Il ne savait pas quoi dessiner. Alors il a demandé à l’IA.",
    meta: "IA image → 3D · 6 itérations · ouvert",
    takeaway: "Six essais, deux images gardées, et l’une a fini en île flottante. Il ne savait pas vraiment où il allait au départ. Pour une fois, ça l’a bien aidé. Comme quoi, on n’est pas obligé d’avoir tout prévu avant de se lancer.",
  },
  {
    number: "07", slug: "le-rig-non",
    title: "Le rendu tient. Le rig, non.",
    meta: "3D · raté utile",
    takeaway: "Sur l’image, tout va bien. Dès qu’il faut faire bouger le personnage, ça se complique. Martin avait préparé la pose avant de régler le rig, le squelette qui permet de l’animer. La prochaine fois, on fait ça dans l’autre sens. Je le note, histoire qu’il n’oublie pas.",
    project: "ruinator",
  },
];

/** Empty and error states, written in the voice. Never "No items found". */
export const STATES = {
  emptyIndex: "Rien ici pour l'instant. C'est aussi un résultat.",
  emptyFilter: "Aucune note sur ce sujet — pas encore.",
  notFound: "Ce chemin ne mène nulle part. Ça arrive quand on explore.",
} as const;
