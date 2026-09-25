import { useEffect, useState } from "react";
import { usePolaroidRail } from "../components/usePolaroidRail";
import { CreationDialog, type CreationPhoto } from "../components/CreationDialog";
import { NOTES } from "../content/site";
import { GogglesMark } from "../components/GogglesMark";
import { LabLogo } from "../components/LabLogo";
import { CustomCursor } from "../components/CustomCursor";
import "../styles/journal.css";

const Arrow = () => <span aria-hidden="true">↗</span>;
function Chapter({ number, children }: { number: string; children: string }) {
  return <p className="chapter"><span className="chapter-number">{number}</span><i aria-hidden="true" /><span className="chapter-label">{children}</span></p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<CreationPhoto | null>(null);
  const photoRailRef = usePolaroidRail();

  useEffect(() => {
    let frame = 0;
    const paint = () => {
      frame = 0;
      setScrolled(window.scrollY > 32);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    window.addEventListener("scroll", schedule, { passive: true });
    paint();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, []);

  useEffect(() => {
    if (!selectedPhoto) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedPhoto(null); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selectedPhoto]);

  const photos = [
    { src: "/assets/scenes/explore.jpg", alt: "Croquis et recherches sur un carnet", caption: "Les premières idées", tag: "CROQUIS" },
    { src: "/assets/scenes/city.jpg", alt: "Une ville imaginaire sur plusieurs niveaux", caption: "La ville en strates", tag: "UNIVERS" },
    { src: "/assets/scenes/sunset.jpg", alt: "Mooods contemple un coucher de soleil au-dessus des nuages", caption: "Au-dessus des nuages", tag: "PAYSAGE" },
    { src: "/assets/scenes/build.jpg", alt: "Le laboratoire de création de Mooods", caption: "Dans le laboratoire", tag: "ATELIER" },
    { src: "/assets/scenes/play.jpg", alt: "Mooods et son compagnon regardent un ciel étoilé", caption: "La prochaine idée", tag: "EXPÉRIENCE" },
    { src: "/assets/scenes/tablet.jpg", alt: "Une création affichée sur une tablette", caption: "Du croquis à l’écran", tag: "IMAGE" },
  ];
  const scrollPhotos = (direction: -1 | 1) => photoRailRef.current?.scrollBy({ left: direction * Math.min(window.innerWidth * .72, 760), behavior: "smooth" });
  return (
    <div className="journal-site">
      <CustomCursor />
      <a className="skip-link" href="#carnet">Aller au journal</a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <LabLogo />
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Fermer" : "Menu"}</button>
        <nav id="main-nav" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale">
          <a href="#explorer" onClick={() => setMenuOpen(false)}>Explorer</a><a href="#atelier" onClick={() => setMenuOpen(false)}>L’atelier</a><a href="#carnet" onClick={() => setMenuOpen(false)}>Le journal</a><a className="nav-invitation" href="#a-propos" onClick={() => setMenuOpen(false)}>Faire connaissance <Arrow /></a>
        </nav>
      </header>
      <main>
        <section id="accueil" className="scene hero-scene" aria-labelledby="hero-title">
          <img className="scene-image" src="/assets/scenes/hero-islands.jpg" alt="Mooods, lunettes orange et sac à dos, observe un monde d’îles flottantes." />
          <div className="hero-shade" />
          <div className="hero-copy"><p className="eyebrow">Strates Digitales Lab</p><h1 id="hero-title">Mon humain a<br />encore eu <em>une idée.</em></h1><p className="hero-intro">Des mondes, des jeux, des essais. Viens voir.</p><a className="journal-button" href="#explorer" data-cursor-label="Go">Commencer l’exploration <Arrow /></a></div>
          <a className="explorer-indicator" href="#a-propos" aria-label="Continuer à explorer" data-cursor-label="Go"><span>Explorer</span><i className="explorer-line"><b /></i></a>
        </section>
        <section id="a-propos" className="paper intro-paper" aria-labelledby="intro-title"><div className="paper-inner intro-layout">
          <figure className="intro-character"><img src="/assets/characters/mooods-typewriter.png" alt="Mooods écrit les notes du laboratoire sur une machine à écrire" /></figure>
          <div className="intro-copy"><Chapter number="01">Salut !</Chapter><h2 id="intro-title">Moi, c’est <em>Mooods.</em></h2><p>Mon humain, c’est Martin Lisen. Sérieux en formation, artiste au labo. Ses créations, ses tests, ses ratés : je te montre ?</p></div>
        </div></section>
        <section id="explorer" className="scene explore-scene" aria-labelledby="explore-title">
          <img className="scene-image" src="/assets/scenes/hero-islands.jpg" alt="Des cités perchées sur des îles au-dessus des nuages" loading="lazy" /><div className="scene-shade" />
          <div className="scene-copy"><Chapter number="02">Les explorations</Chapter><h2 id="explore-title">Explore des créations<br />qui n’attendent <em>que toi.</em></h2><p>Fais glisser. Ouvre celles qui t’appellent.</p></div>
          <div className="photo-carousel">
            <div ref={photoRailRef} className="photo-rail" aria-label="Créations du laboratoire à faire défiler">
              {photos.map(photo => <button type="button" className="polaroid photo-polaroid" key={photo.src} onClick={() => setSelectedPhoto(photo)} data-cursor-label="Ouvrir"><img src={photo.src} alt={photo.alt} loading="lazy" /><span className="polaroid-caption"><strong>{photo.caption}</strong><small>{photo.tag}</small></span></button>)}
            </div>
            <div className="photo-carousel-footer"><p>Glisse pour en voir plus <span aria-hidden="true">→</span></p><div className="photo-carousel-controls"><button type="button" onClick={() => scrollPhotos(-1)} aria-label="Voir les créations précédentes" data-cursor-label="Avant">←</button><button type="button" onClick={() => scrollPhotos(1)} aria-label="Voir les créations suivantes" data-cursor-label="Après">→</button></div></div>
          </div>
        </section>
        <section id="atelier" className="scene workshop-scene" aria-labelledby="workshop-title">
          <img className="scene-image" src="/assets/scenes/workshop.jpg" alt="L’atelier éclairé par des lampes chaudes, avec ses carnets, ses outils et son écran de création 3D" loading="lazy" /><div className="workshop-shade" />
          <div className="scene-copy"><Chapter number="03">Dans l’atelier</Chapter><h2 id="workshop-title">Et si on <em>essayait ?</em></h2><p>De la 3D, des jeux, de l’IA. Et les mains dedans.</p></div>
          <div className="workshop-games">
            <iframe src="/atelier-jeux.html" title="Les jeux du labo : RPG, plante, OXO et puzzle de code" sandbox="allow-scripts" loading="lazy" />
          </div>
        </section>
        <section className="scene closing-scene" aria-labelledby="closing-title"><img className="scene-image" src="/assets/scenes/play.jpg" alt="Mooods et son compagnon robot regardent le ciel étoilé" loading="lazy" /><div className="closing-shade" /><div className="scene-copy"><h2 id="closing-title">On se retrouve<br /><em>à la prochaine idée ?</em></h2><a className="journal-button" href="https://x.com/nftmooods" target="_blank" rel="noopener noreferrer">Discuter avec Martin <Arrow /></a></div><p className="handwritten closing-note">Le carnet est juste en dessous ↓</p></section>
        <section id="carnet" className="paper notebook-section" aria-labelledby="notebook-title"><div className="paper-inner">
          <div className="notebook-header"><div><Chapter number="04">Le journal</Chapter><h2 id="notebook-title">Mes notes <em>du labo.</em></h2></div><p className="handwritten">Pour les curieux.<span aria-hidden="true">⤵</span></p></div>
          <div className="journal-entries">{NOTES.map(note => <details className="journal-entry" key={note.number} id={`note-${note.number}`}><summary><span className="note-number">NOTE<span>{note.number}</span></span><span className="note-main"><span className="note-meta">{note.meta}</span><span className="note-title">{note.title}</span></span><span className="note-open" aria-hidden="true">+</span></summary><div className="note-body"><p>{note.takeaway}</p><p className="handwritten">Bon, ça, c’est noté. — Mooods</p></div></details>)}</div>
          <div className="notebook-footer"><GogglesMark height={24} /><span className="handwritten">— Mooods</span></div>
        </div></section>
      </main>
      {selectedPhoto && <CreationDialog photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
      <footer className="journal-footer"><LabLogo /><p>Martin Lisen bidouille.<br />Moi, Mooods, je te raconte.</p><nav aria-label="Pied de page"><a href="#carnet">Le journal</a><a href="#a-propos">À propos</a><a href="https://x.com/nftmooods" target="_blank" rel="noopener noreferrer">X <Arrow /></a></nav><small>© {new Date().getFullYear()} Strates Digitales Lab</small></footer>
    </div>
  );
}
