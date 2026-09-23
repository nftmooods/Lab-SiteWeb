/** Mooods brand constants. Import these instead of retyping strings. */

export const BRAND = {
  name: "Mooods",
  what: "L'atelier personnel d'un créateur qui explore la 3D, l'IA, l'art, le jeu et les nouvelles façons de construire des mondes.",
  idea: "Je construis des choses pour voir jusqu'où elles peuvent aller.",
  ideaEn: "I build things to see what happens.",
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
    role: "L'explorateur — avatar de Mooods, aussi PFP",
    always: "En train de faire quelque chose : observer, chercher, lire, dessiner, construire, manipuler, tester, réparer, regarder un résultat.",
    never: "Pose héroïque, sourire mascotte, expression kawaii, esthétique gaming générique, première personne à la place de Mooods.",
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
  do: ["Curieux avant expert", "Concret", "Court", "Chaleureux, pas cute", "Observateur, jamais gourou"],
  words: ["Explore","Build","Play","Discover","Show","Field Notes","Workshop","Experiment","Prototype","Build Log","Archive","Sketch","Test","Make"],
  sparingly: ["Protocol","System","Quest","Level","Lore","Cyber","Hacker","NFT"],
  yes: "J'ai testé cette méthode pour voir si l'IA pouvait m'aider à construire la scène.",
  no: "Voici la meilleure façon d'utiliser l'IA pour créer en 3D.",
} as const;
