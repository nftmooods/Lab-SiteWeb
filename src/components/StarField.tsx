import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; tw: number };
type ShootingStar = { x: number; y: number; vx: number; vy: number; life: number };

/** Twinkling night sky with occasional shooting stars, drawn on a canvas. */
export function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const stars: Star[] = Array.from({ length: 110 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.8,
      r: Math.random() * 1.3 + 0.3,
      tw: Math.random() * Math.PI * 2,
    }));
    const shootingStars: ShootingStar[] = [];
    let frame = 0;
    let lastTime = 0;
    let sinceLastShot = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();

    const draw = (time: number) => {
      const dt = lastTime ? Math.min(48, time - lastTime) : 16;
      lastTime = time;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        if (!reduced.matches) star.tw += 0.018;
        const glow = 0.35 + Math.sin(star.tw) * 0.3 + 0.25;
        ctx.beginPath();
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${glow})`;
        ctx.fill();
      });

      if (!reduced.matches) {
        sinceLastShot += dt;
        if (sinceLastShot > 3200 && Math.random() > 0.4) {
          sinceLastShot = 0;
          shootingStars.push({
            x: Math.random() * 0.6 + 0.15,
            y: Math.random() * 0.25,
            vx: 0.009 + Math.random() * 0.01,
            vy: 0.0035 + Math.random() * 0.004,
            life: 1,
          });
        }
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const shot = shootingStars[i];
          shot.x += shot.vx;
          shot.y += shot.vy;
          shot.life -= 0.012;
          if (shot.life <= 0) { shootingStars.splice(i, 1); continue; }
          const hx = shot.x * canvas.width;
          const hy = shot.y * canvas.height;
          const gradient = ctx.createLinearGradient(hx - 90 * dpr, hy - 20 * dpr, hx, hy);
          gradient.addColorStop(0, "rgba(255,255,255,0)");
          gradient.addColorStop(1, `rgba(190,220,255,${shot.life})`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5 * dpr;
          ctx.beginPath();
          ctx.moveTo(hx - 90 * dpr, hy - 20 * dpr);
          ctx.lineTo(hx, hy);
          ctx.stroke();
        }
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="star-field" aria-hidden="true" />;
}
