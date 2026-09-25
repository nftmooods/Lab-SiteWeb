import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../content/site";

type WorkshopFilter = "TOUT" | "3D" | "IA" | "JEU" | "IMAGE";
type WorkshopItem = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string;
  filters: WorkshopFilter[];
};

const ITEMS: WorkshopItem[] = [
  ...PROJECTS.map((project): WorkshopItem => ({
    id: project.slug,
    title: project.title,
    label: project.kicker,
    description: project.slug === "ruinator" ? "Des bâtiments qui deviennent des ruines." : "Des pixels à planter, juste pour voir.",
    image: project.image,
    filters: project.slug === "ruinator" ? ["3D"] : ["JEU"],
  })),
  { id: "mondes", title: "Mondes flottants", label: "IA · Image", description: "Des images pour trouver le début d’un monde.", image: "/assets/scenes/hero-islands.jpg", filters: ["IA", "IMAGE"] },
  { id: "croquis", title: "Croquis & recherches", label: "Image · 3D", description: "Tout commence sur un coin de carnet.", image: "/assets/scenes/explore.jpg", filters: ["IMAGE", "3D"] },
  { id: "atelier-visuel", title: "L’atelier visuel", label: "IA · 3D", description: "Des idées passent de l’écran à la scène.", image: "/assets/scenes/build.jpg", filters: ["IA", "3D"] },
];

const FILTERS: WorkshopFilter[] = ["TOUT", "3D", "IA", "JEU", "IMAGE"];

export function WorkshopCarousel() {
  const [filter, setFilter] = useState<WorkshopFilter>("TOUT");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const visibleItems = useMemo(() => filter === "TOUT" ? ITEMS : ITEMS.filter(item => item.filters.includes(filter)), [filter]);

  useEffect(() => setActive(0), [filter]);
  useEffect(() => {
    if (paused || visibleItems.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % visibleItems.length), 4600);
    return () => window.clearInterval(timer);
  }, [paused, visibleItems.length]);

  const move = (direction: number) => setActive(index => (index + direction + visibleItems.length) % visibleItems.length);
  const offsetFor = (index: number) => {
    let offset = index - active;
    const half = visibleItems.length / 2;
    if (offset > half) offset -= visibleItems.length;
    if (offset < -half) offset += visibleItems.length;
    return offset;
  };

  return (
    <div className="workshop-gallery" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="carousel-stage" role="region" aria-roledescription="carrousel" aria-label="Créations et explorations du labo">
        {visibleItems.map((item, index) => {
          const offset = offsetFor(index);
          const shown = Math.abs(offset) <= 2;
          return (
            <button
              type="button"
              className={`workshop-card${offset === 0 ? " is-active" : ""}`}
              key={item.id}
              data-offset={offset}
              aria-label={`${item.title} — ${item.description}`}
              aria-current={offset === 0 ? "true" : undefined}
              aria-hidden={!shown}
              tabIndex={shown ? 0 : -1}
              onClick={() => setActive(index)}
              data-cursor-label={offset === 0 ? "Voir" : "Ouvrir"}
            >
              <img src={item.image} alt="" loading="lazy" />
              <span className="workshop-card-shade" />
              <span className="workshop-card-copy"><small>{item.label}</small><strong>{item.title}</strong><span>{item.description}</span></span>
            </button>
          );
        })}
        {visibleItems.length > 1 && <>
          <button className="carousel-arrow is-prev" type="button" onClick={() => move(-1)} aria-label="Voir la création précédente" data-cursor-label="Avant">←</button>
          <button className="carousel-arrow is-next" type="button" onClick={() => move(1)} aria-label="Voir la création suivante" data-cursor-label="Après">→</button>
        </>}
      </div>
      <div className="carousel-status" aria-live="polite"><span>{String(active + 1).padStart(2, "0")}</span> / {String(visibleItems.length).padStart(2, "0")}</div>
      <div className="workshop-filters" aria-label="Filtrer les créations">
        <span className="filter-label">Filtrer :</span>
        {FILTERS.map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)} data-cursor-label="Filtrer">{item}</button>)}
      </div>
    </div>
  );
}
