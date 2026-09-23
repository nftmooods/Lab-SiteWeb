/** Nook and M3ODS, presented as inhabitants of the workshop — never as mascots.
 *  The portrait is a circle (it doubles as the social avatar); the body copy says
 *  what the character DOES, not how cute it is. */
export function CharacterCard({
  portrait, alt, role, name, body,
}: { portrait: string; alt: string; role: string; name: string; body: string }) {
  return (
    <div className="glass rounded-xl p-7 md:p-[40px] flex flex-col sm:flex-row gap-6 md:gap-[32px] sm:items-center">
      <div className="w-[110px] h-[110px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shrink-0 bg-[#061220]">
        <img src={portrait} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="mono m-0 text-night-ink-2/60">{role}</p>
        <h3 className="display text-[34px] m-0 text-night-ink">{name}</h3>
        <p className="m-0 text-[15px] text-night-ink-2/80">{body}</p>
      </div>
    </div>
  );
}
