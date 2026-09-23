import { Tag } from "./Tag";
import type { TagKind } from "../lib/brand";

/** A project card. The image is a window into the night world; the status tag
 *  sits on the image; subjects stay neutral underneath. Published mid-build —
 *  a broken version is legitimate content, so say what does not work yet. */
export function ProjectCard({
  href, image, alt, status, statusKind = "wip", kicker, title, body, subjects = [],
}: {
  href: string; image: string; alt: string;
  status?: string; statusKind?: TagKind;
  kicker: string; title: string; body: string; subjects?: string[];
}) {
  return (
    <a href={href} className="glass lift zoom rounded-xl overflow-hidden flex flex-col">
      <div className="relative h-[220px] md:h-[280px] lg:h-[340px] overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        {status && <span className="absolute top-[18px] left-[18px]"><Tag kind={statusKind}>{status}</Tag></span>}
      </div>
      <div className="p-6 md:p-[28px_30px_32px] flex flex-col gap-[10px]">
        <div className="flex items-center justify-between">
          <span className="mono text-night-ink-2/60">{kicker}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor"
               strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
               className="text-night-ink-2/60" aria-hidden="true">
            <path d="M5 13L13 5M7 5h6v6" />
          </svg>
        </div>
        <h3 className="display text-h3 m-0 text-night-ink">{title}</h3>
        <p className="m-0 text-[15px] text-night-ink-2/80">{body}</p>
        {subjects.length > 0 && (
          <div className="flex gap-[8px] flex-wrap mt-[10px]">
            {subjects.map((s) => <Tag key={s}>{s}</Tag>)}
          </div>
        )}
      </div>
    </a>
  );
}
