import { useEffect, useRef } from "react";

/** Native touch scrolling, mouse dragging and centre-based paper transforms. */
export function usePolaroidRail() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rail = ref.current;
    if (!rail) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let inertia = 0;
    let down = false;
    let dragged = false;
    let start = 0;
    let last = 0;
    let time = 0;
    let velocity = 0;
    let origin = 0;
    const paint = () => {
      frame = 0;
      const centre = rail.scrollLeft + rail.clientWidth / 2;
      rail.querySelectorAll<HTMLElement>(".photo-polaroid").forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre);
        const focus = Math.max(0, 1 - distance / (rail.clientWidth * .55));
        const edge = Math.max(0, Math.min(1, (distance / (rail.clientWidth / 2) - .38) / .62));
        card.style.setProperty("--paper-blur", `${edge * 3.5}px`);
        card.style.setProperty("--paper-opacity", String(1 - edge * .65));
        card.style.setProperty("--paper-scale", String(reduced.matches ? 1 : .86 + focus * .24));
        card.style.setProperty("--paper-rise", `${reduced.matches ? 0 : -focus * 16}px`);
        card.style.setProperty("--paper-angle", `${(index % 2 ? 3 : -4) * (1 - focus * .55)}deg`);
      });
      const range = rail.scrollWidth - rail.clientWidth;
      rail.parentElement?.style.setProperty("--rail-progress", `${range > 0 ? rail.scrollLeft / range * 100 : 100}%`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const stop = () => { cancelAnimationFrame(inertia); inertia = 0; };
    const onDown = (event: PointerEvent) => {
      stop();
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      down = true;
      dragged = false;
      start = last = event.clientX;
      origin = rail.scrollLeft;
      time = performance.now();
      velocity = 0;
    };
    const onMove = (event: PointerEvent) => {
      if (!down) return;
      const now = performance.now();
      if (Math.abs(event.clientX - start) > 5) {
        dragged = true;
        rail.classList.add("is-dragging");
      }
      if (dragged) {
        event.preventDefault();
        velocity = (last - event.clientX) / Math.max(8, now - time);
        rail.scrollLeft = origin + start - event.clientX;
      }
      last = event.clientX;
      time = now;
    };
    const release = () => {
      if (!down) return;
      down = false;
      rail.classList.remove("is-dragging");
      if (!dragged || reduced.matches || performance.now() - time > 100) return;
      let previous = performance.now();
      const coast = (now: number) => {
        const dt = Math.min(32, now - previous);
        previous = now;
        velocity *= Math.pow(.92, dt / 16.67);
        const before = rail.scrollLeft;
        rail.scrollLeft += velocity * dt;
        if (Math.abs(velocity) > .015 && Math.abs(rail.scrollLeft - before) > .1) inertia = requestAnimationFrame(coast);
      };
      inertia = requestAnimationFrame(coast);
    };
    const click = (event: MouseEvent) => {
      if (dragged && event.detail !== 0) { event.preventDefault(); event.stopPropagation(); dragged = false; }
    };
    const preventDrag = (event: DragEvent) => event.preventDefault();
    rail.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    rail.addEventListener("click", click, true);
    rail.addEventListener("dragstart", preventDrag);
    rail.addEventListener("scroll", schedule, { passive: true });
    rail.addEventListener("wheel", stop, { passive: true });
    const resize = new ResizeObserver(schedule);
    resize.observe(rail);
    paint();
    return () => {
      stop(); cancelAnimationFrame(frame); resize.disconnect();
      rail.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      rail.removeEventListener("click", click, true);
      rail.removeEventListener("dragstart", preventDrag);
      rail.removeEventListener("scroll", schedule);
      rail.removeEventListener("wheel", stop);
    };
  }, []);
  return ref;
}
