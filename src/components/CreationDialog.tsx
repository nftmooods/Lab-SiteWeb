import { useEffect, useRef } from "react";

export type CreationPhoto = { src: string; caption: string; alt: string; tag: string };

const notes: Record<string, string> = {
  CROQUIS: "Un carnet, quelques traits… et une idée qui commence à prendre forme. Je garde la page, on ne sait jamais.",
  UNIVERS: "Il y a toujours un autre étage à explorer. Mon humain imagine la ville, moi je me perds dans les détails.",
  PAYSAGE: "Là, je pose le sac. Certaines vues méritent qu’on s’arrête deux minutes.",
  ATELIER: "Une idée dans les mains, et plein de questions derrière. Allez, on essaie ?",
  EXPÉRIENCE: "Je crois qu’il prépare déjà la suite. En attendant, on profite de la vue.",
  IMAGE: "Du carnet à l’écran, l’idée change de forme. Moi, je regarde ce qu’elle devient.",
};

export function CreationDialog({ photo, onClose }: { photo: CreationPhoto; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, []);
  return <dialog ref={ref} className="creation-dialog" aria-labelledby="creation-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="creation-panel">
      <div className="creation-image"><img src={photo.src} alt={photo.alt} /><span>{photo.tag}</span></div>
      <div className="creation-copy">
        <h2 id="creation-title">{photo.caption}</h2>
        <p className="creation-handwritten">Une petite échappée dans le labo.</p>
        <p className="creation-description">{notes[photo.tag]}</p>
        <p className="creation-signature">— Mooods</p>
        <button className="creation-close-action" onClick={onClose} data-cursor-label="Fermer">Fermer</button>
      </div>
      <button className="creation-close" onClick={onClose} aria-label="Fermer l’image" data-cursor-label="Fermer">×</button>
    </div>
  </dialog>;
}
