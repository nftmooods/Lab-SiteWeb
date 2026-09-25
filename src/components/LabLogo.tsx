/** The supplied PNGs include a large transparent canvas. The viewBox frames
 *  the original artwork without modifying or distorting the source files. */
export function LabLogo({ onPaper = false }: { onPaper?: boolean }) {
  return (
    <a className="lab-logo" href="#accueil" aria-label="Strates Digitales Lab — accueil">
      <svg className="lab-logo-art" viewBox="40 38 400 125" aria-hidden="true">
        <image
          href={`/assets/logo/strates-logo-${onPaper ? "blanc" : "fonce"}.png`}
          width="1440"
          height="600"
        />
      </svg>
      <span className="lab-logo-label">Le labo</span>
    </a>
  );
}
