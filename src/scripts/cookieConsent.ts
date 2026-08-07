const STORAGE_KEY = 'hiieko-cookie-consent';

interface ConsentState {
  analytics: boolean;
  // Advertising isn't in use yet. When it is, add `advertising: boolean`
  // here, a corresponding button in CookieConsent.astro, and a
  // load/disable pair below mirroring the analytics ones — the storage
  // shape and the accept/decline wiring don't need to change.
  timestamp: number;
}

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean): void {
  const state: ConsentState = { analytics, timestamp: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadGoogleAnalytics(measurementId: string): void {
  if (!measurementId || document.getElementById('ga4-script')) return;

  const loader = document.createElement('script');
  loader.id = 'ga4-script';
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(loader);

  const inline = document.createElement('script');
  inline.id = 'ga4-inline-config';
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(inline);
}

function disableGoogleAnalytics(measurementId: string): void {
  // gtag.js itself can't be unloaded client-side once it's run — this is
  // Google's documented opt-out flag, checked before every hit, so it's
  // the closest equivalent to "turn tracking off" available in-browser.
  // Removing the <script> tags below stops anything queued from firing
  // again on this page, but a hit already sent before Decline was clicked
  // can't be recalled.
  if (measurementId) {
    (window as unknown as Record<string, boolean>)[`ga-disable-${measurementId}`] = true;
  }
  document.getElementById('ga4-script')?.remove();
  document.getElementById('ga4-inline-config')?.remove();
}

// Shared by any component that wants to fire a GA4 event (ContactForm,
// Calculator, ...). `gtag` only ever exists on `window` once
// loadGoogleAnalytics() above has run, which only happens after analytics
// consent — so this existence check doubles as the consent gate. Callers
// don't need their own localStorage/consent check.
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

export function initCookieConsent(): void {
  const banner = document.getElementById('cookie-consent-banner') as HTMLElement | null;
  const acceptBtn = document.getElementById('cookie-consent-accept') as HTMLButtonElement | null;
  const declineBtn = document.getElementById('cookie-consent-decline') as HTMLButtonElement | null;
  if (!banner || !acceptBtn || !declineBtn) return;

  const measurementId = banner.dataset.gaId || '';

  function showBanner(): void {
    banner!.classList.remove('hidden');
  }
  function hideBanner(): void {
    banner!.classList.add('hidden');
  }

  const stored = readConsent();
  if (stored === null) {
    showBanner();
  } else if (stored.analytics) {
    loadGoogleAnalytics(measurementId);
  }

  acceptBtn.addEventListener('click', () => {
    writeConsent(true);
    loadGoogleAnalytics(measurementId);
    hideBanner();
  });

  declineBtn.addEventListener('click', () => {
    const previous = readConsent();
    writeConsent(false);
    if (previous?.analytics) {
      disableGoogleAnalytics(measurementId);
    }
    hideBanner();
  });

  document.querySelectorAll('.cookie-preferences-trigger').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      showBanner();
    });
  });
}
