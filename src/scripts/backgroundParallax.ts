export function initBackgroundParallax(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const bgGrid = document.getElementById('bgGrid');
  const bgTrace = document.getElementById('bgTrace');

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (bgGrid) bgGrid.style.transform = `translateY(${y * 0.04}px)`;
      if (bgTrace) bgTrace.style.transform = `translateY(${y * 0.08}px)`;
    },
    { passive: true },
  );
}
