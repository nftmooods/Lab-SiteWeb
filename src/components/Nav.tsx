import { Wordmark } from "./GogglesMark";
import { Button } from "./Button";

/** Floating glass pill over the hero imagery. The five verbs are the nav.
 *  Subjects (3D, IA, jeu) are filters inside a section, never nav items. */
export function Nav() {
  return (
    <div className="relative z-20 py-5 px-4 md:py-[28px] md:px-[64px] flex justify-center">
      <div className="glass rounded-pill w-full max-w-[1040px] pl-[22px] pr-[14px] py-[12px]
                      flex items-center justify-between">
        <div className="flex items-center gap-[36px]">
          <a href="/" className="py-2 flex items-center"><Wordmark size={24} /></a>
          <nav className="hidden lg:flex gap-[28px] text-[14px] font-medium text-night-ink/80">
            <a href="#explore">Explore</a>
            <a href="#build">Build</a>
            <a href="#play">Play</a>
            <a href="#notes">Field notes</a>
          </nav>
        </div>
        <div className="flex items-center gap-[10px]">
          <a href="https://x.com/nftM3ods" className="hidden sm:inline text-[14px] font-medium text-night-ink/80 px-[12px]">@nftM3ods</a>
          <Button as="a" href="#build" variant="glass">Entrer dans l&apos;atelier</Button>
        </div>
      </div>
    </div>
  );
}
