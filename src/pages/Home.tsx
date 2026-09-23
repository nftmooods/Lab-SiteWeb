import { Nav } from "../components/Nav";
import { Heading, Eyebrow } from "../components/Heading";
import { Button } from "../components/Button";
import { GogglesMark } from "../components/GogglesMark";
import { ProjectCard } from "../components/ProjectCard";
import { FieldNoteRow } from "../components/FieldNote";
import { CharacterCard } from "../components/CharacterCard";
import { BRAND, VERBS } from "../lib/brand";

/** Reference page: the mooodsstudio.xyz home, one page, links out to projects.
 *  Anatomy — hero (dark world, full-bleed 3D scene) / manifesto (centred, breathing)
 *  / workshop image with a glass card / the three territories / projects in progress
 *  / field notes as an editorial list / the inhabitants / closing invitation.
 *  Sections are separated by ~160px of vertical air. No section is a wall of cards. */
export default function Home() {
  return (
    <main className="bg-night text-night-ink">

      {/* HERO — the dark world. The scene is the argument; the copy is one sentence. */}
      <section className="relative h-[620px] md:h-[760px] lg:h-[920px] overflow-hidden flex flex-col">
        <img src="/assets/scenes/hero-islands.jpg"
             alt="Nook et son robot, de dos, face à des îles flottantes au coucher du soleil"
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 veil-side" />
        <Nav />
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-[200px] pb-12 md:pb-[88px] gap-5 md:gap-[26px]">
          <Eyebrow>Atelier personnel · 3D · IA · jeu · art · mondes</Eyebrow>
          <Heading level={1} accent="jusqu'où elles peuvent aller."
                   className="max-w-[1000px]">Je construis des choses pour voir</Heading>
          <p className="lead m-0">
            Mooods est un atelier d&apos;exploration. On cherche, on teste, on apprend,
            et on partage ce qu&apos;on découvre en chemin — les réussites comme les ratés.
          </p>
          <div className="flex flex-wrap items-center gap-[14px] mt-[6px]">
            <Button as="a" href="#build" icon>Explorer l&apos;atelier</Button>
            <Button as="a" href="#notes" variant="glass">Lire les field notes</Button>
          </div>
        </div>
      </section>

      {/* MANIFESTO — centred, three lines, each with its serif accent. */}
      <section className="relative py-20 md:py-28 lg:py-[150px] px-6 md:px-12 lg:px-[200px] flex flex-col items-center gap-7 md:gap-[36px] text-center">
        <div className="absolute inset-0 halo-cyan pointer-events-none" />
        <Eyebrow>Ce que Mooods est</Eyebrow>
        <h2 className="display text-[34px] md:text-[48px] lg:text-[64px] leading-[1.12] m-0 max-w-[1000px] relative">
          Explorer pour <span className="serif">comprendre.</span><br />
          Construire pour <span className="serif">apprendre.</span><br />
          Partager pour <span className="serif">faire vivre l&apos;expérience.</span>
        </h2>
        <p className="relative m-0 text-lead text-night-ink-2/80 max-w-[620px]">
          Pas un portfolio. Pas un studio qui vend des livrables. Un terrain
          d&apos;expérimentation où les projets sont montrés pendant qu&apos;ils se font.
        </p>
      </section>

      {/* THE THREE TERRITORIES — Explore / Build / Play, one image each. */}
      <section id="explore" className="px-6 md:px-12 lg:px-[120px] pb-20 md:pb-28 lg:pb-[160px] flex flex-col gap-8 md:gap-[48px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 lg:gap-[40px]">
          <Heading accent="d'explorer.">Trois façons</Heading>
          <p className="m-0 text-[16px] text-night-ink-2/70 max-w-[380px]">
            Le site suit ces gestes. Ce qu&apos;on cherche, ce qu&apos;on fabrique,
            ce qu&apos;on essaie juste pour voir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[24px]">
          {VERBS.slice(0, 3).map((v) => (
            <a key={v.id} href={`#${v.id}`} className="glass lift zoom rounded-xl overflow-hidden flex flex-col">
              <div className="h-[220px] lg:h-[280px] overflow-hidden">
                <img src={`/assets/scenes/${v.id}.jpg`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-[28px_30px_32px] flex flex-col gap-[10px]">
                <span className="mono text-cyan">{v.label}</span>
                <h3 className="display text-h3 m-0">{v.question}</h3>
                <p className="m-0 text-[15px] text-night-ink-2/80">{v.body}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PROJECTS — mid-build, honest about what does not work yet. */}
      <section id="build" className="relative px-6 md:px-12 lg:px-[120px] pb-20 md:pb-28 lg:pb-[160px] flex flex-col gap-8 md:gap-[48px]">
        <div className="absolute inset-0 halo-orange pointer-events-none" />
        <div className="relative flex justify-between items-end">
          <Heading accent="dans l'atelier.">En cours</Heading>
          <a href="/projets" className="mono text-night-ink-2/60 py-2 inline-block">Tous les projets →</a>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px]">
          <ProjectCard href="/projets/ruinator" image="/assets/scenes/city.jpg"
            alt="Une ville sur plusieurs niveaux" status="WIP · v0.3" statusKind="wip"
            kicker="Addon Blender · Geometry Nodes" title="Ruinator"
            body="Un générateur de ruines. Les murs se fissurent bien, les portes traversent encore le sol."
            subjects={["3D", "BLENDER"]} />
          <ProjectCard href="/projets/pxgrove" image="/assets/scenes/sunset.jpg"
            alt="Nook au bord d'une falaise devant un coucher de soleil" status="LIVE" statusKind="live"
            kicker="Jeu web · pixels" title="PxGrove"
            body="Un jeu où on plante des pixels et on regarde ce qui pousse. Jouable, pas encore de multi."
            subjects={["JEU", "WEB"]} />
        </div>
      </section>

      {/* FIELD NOTES — an editorial list, not cards. */}
      <section id="notes" className="px-6 md:px-12 lg:px-[200px] pb-20 md:pb-28 lg:pb-[160px] flex flex-col gap-9 md:gap-[56px]">
        <div className="flex flex-col gap-[16px] items-center text-center">
          <Eyebrow>Field notes</Eyebrow>
          <Heading accent="découvert en chemin.">Ce que j&apos;ai</Heading>
        </div>
        <div className="flex flex-col">
          <FieldNoteRow href="/notes/09" number="Note 09" meta="blender · 2 soirées"
            title="J'ai essayé de construire une scène sans commencer par le personnage." />
          <FieldNoteRow href="/notes/08" number="Note 08" meta="IA image → 3D · ouvert"
            title="Je voulais voir si une IA pouvait dessiner un monde avant que je sache ce que c'était." />
          <FieldNoteRow href="/notes/07" number="Note 07" meta="3D · raté utile"
            title="Le rendu tient. Le rig, non." />
        </div>
      </section>

      {/* THE INHABITANTS */}
      <section id="play" className="px-6 md:px-12 lg:px-[120px] pb-20 md:pb-28 lg:pb-[160px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px]">
        <CharacterCard portrait="/assets/characters/nook.jpg" alt="Nook" role="L'explorateur" name="Nook"
          body="L'avatar de Mooods. Toujours en train de lire, réparer, tester ou regarder un résultat. Ses goggles voient les couches cachées des choses ; son gant fabrique." />
        <CharacterCard portrait="/assets/characters/m3ods.jpg" alt="M3ODS" role="L'agent" name="M3ODS"
          body="Le bot de l'atelier. Il tient le journal, publie les avancées sur X et répond quand Mooods construit. Il rapporte, il n'explore pas." />
      </section>

      {/* CLOSING — an invitation to follow the build, not a sales pitch. */}
      <section className="px-6 md:px-12 lg:px-[120px] pb-20 md:pb-[120px]">
        <div className="frame relative h-[440px] md:h-[560px] flex items-center justify-center text-center">
          <img src="/assets/scenes/tablet.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,24,38,0.35)_0%,rgba(11,24,38,0.85)_75%)]" />
          <div className="relative flex flex-col items-center gap-5 md:gap-[24px] max-w-[760px] px-6 md:px-[40px]">
            <GogglesMark height={34} />
            <Heading accent="des mondes de demain.">Des idées d&apos;aujourd&apos;hui pour</Heading>
            <p className="m-0 text-[17px] text-night-ink-2/80 max-w-[520px]">
              Suis le build pendant qu&apos;il se fait. Les nouvelles notes et les versions
              en cours arrivent d&apos;abord sur X.
            </p>
            <div className="flex flex-wrap justify-center gap-[14px] mt-[6px]">
              <Button as="a" href={`https://x.com/${BRAND.handles.agent.slice(1)}`}>Suivre {BRAND.handles.agent}</Button>
              <Button as="a" href="#notes" variant="glass">Toutes les field notes</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 lg:px-[120px] pb-12 md:pb-[60px] flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center text-[13px] text-night-ink-2/50">
        <span>© 2026 Mooods · {BRAND.threeWords}</span>
        <nav className="flex gap-[28px]"><a href="/x" className="py-3">X</a><a href="/notes" className="py-3">Field notes</a><a href="/contact" className="py-3">Contact</a></nav>
      </footer>
    </main>
  );
}
