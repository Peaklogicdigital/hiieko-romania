export function countUp(el: Element, target: number, duration = 900): void {
  const start = performance.now();
  function tick(now: number) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(p * target));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function initCountUpStats(): void {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseInt(el.getAttribute('data-count') || '0', 10);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(el, target);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
  });
}
