/** Strates Digitales Lab. Martin creates; Mooods, the mascot, narrates. */

export const BRAND = {
  name: "Strates Digitales Lab",
  human: "Martin Lisen",
  narrator: "Mooods",
  what: "Les explorations de Martin Lisen, racontées par Mooods, la mascotte du labo.",
  idea: "Mon humain a encore eu une idée.",
  ideaEn: "My human has another idea.",
  threeWords: "Explore. Build. Share.",
  taglines: [
    "Same curiosity, different worlds.",
    "Explorer. Construire. Partager.",
    "Des idées d'aujourd'hui pour des mondes de demain.",
  ],
  handles: { author: "@nftmooods", agent: "@nftM3ods" },
} as const;

/** The five entry points. Technical subjects are tags, never sections. */
export const VERBS = [
  { id: "explore",  label: "Explore",  question: "ce qui m'intéresse", body: "Idées, références, questions, pistes." },
  { id: "build",    label: "Build",    question: "ce que je construis", body: "Projets, prototypes, scènes, outils, objets." },
  { id: "play",     label: "Play",     question: "ce que je teste", body: "Expériences, détours, curiosités. Sans résultat final obligatoire." },
  { id: "discover", label: "Discover", question: "ce que j'apprends", body: "Découvertes, résultats, erreurs, observations." },
  { id: "show",     label: "Show",     question: "ce que je partage", body: "Images finales, créations, publications." },
] as const;

/** Content types. Exactly these six carry colour; subject tags stay neutral. */
export type TagKind =
  | "field-note"  // cyan   — editorial content, discovery, observation
  | "build-log"   // ink    — construction journal of a project
  | "experiment"  // dashed — a test or prototype, result not guaranteed
  | "archive"     // grey   — older content, kept for the record
  | "wip"         // orange — work in progress, published as is
  | "live"        // glow   — active, playable or online
  | "subject";    // neutral — 3D, IA, JEU, IMAGE, OBJET, BLENDER…

export const CHARACTERS = {
  nook: {
    role: "Mooods — mascotte et narrateur de Strates Digitales Lab (asset historique nommé nook)",
    always: "En train de faire quelque chose : observer, chercher, lire, dessiner, construire, manipuler, tester, réparer, regarder un résultat.",
    never: "Se présenter comme Martin ou comme le créateur des projets. Mooods raconte ce que son humain fait.",
    look: "Cheveux bruns en pointes à reflets cyan, yeux bleus, goggles orange à verres cyan, veste cuir ambre sur hoodie rouge, gant tech bleu, sac à dos à module lumineux.",
  },
  m3ods: {
    role: "L'agent — bot IA de l'atelier",
    always: "En train d'écrire, publier, classer, vérifier, répondre. Signé « — M3ODS ». Voix mono, en lignes de journal.",
    never: "Dire « je » à la place de Mooods, donner un avis sur l'art ou les idées, robot menaçant, chrome miroir.",
    look: "Version robot de Nook : tête métal patiné, mêmes goggles orange, antenne à boule orange, yeux lentilles Glow, mains mécaniques. Tagline : Classic design · Modern intelligence.",
  },
} as const;

export const VOICE = {
  do: ["Tutoiement partout", "Familier et complice", "Phrases parlées, mots simples", "Petites remarques amusées de la mascotte", "Martin fait, Mooods raconte", "Pas de résultats ou d’anecdotes inventés"],
  words: ["Explore","Build","Play","Discover","Show","Field Notes","Workshop","Experiment","Prototype","Build Log","Archive","Sketch","Test","Make"],
  sparingly: ["Protocol","System","Quest","Level","Lore","Cyber","Hacker","NFT"],
  yes: "Martin, c’est mon humain. Il a l’air sérieux en formation, mais au labo, c’est un artiste. Viens, je te montre ce qu’il bricole.",
  no: "Voici la meilleure façon d'utiliser l'IA pour créer en 3D.",
} as const;
