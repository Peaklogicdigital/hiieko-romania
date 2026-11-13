const STORAGE_KEY = 'hiieko-cookie-consent';

interface ConsentState {
  // Single accept/decline covers both GA4 and, when configured, the Google
  // Ads tag — there's one banner and one consent decision, not separate
  // categories, so this one flag gates both.
  analytics: boolean;
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

function loadGoogleTag(measurementId: string, adsId: string): void {
  if ((!measurementId && !adsId) || document.getElementById('ga4-script')) return;

  // Consent Mode v2: define dataLayer/gtag, record the pre-consent default
  // (everything denied) immediately followed by the update that reflects
  // the Accept click that triggered this call, then load gtag.js and
  // configure whichever IDs are set — all inline, before the external
  // script tag, so the very first gtag.js network request already carries
  // granted consent.
  const inline = document.createElement('script');
  inline.id = 'ga4-inline-config';
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied'
    });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
    gtag('js', new Date());
    ${measurementId ? `gtag('config', '${measurementId}');` : ''}
    ${adsId ? `gtag('config', '${adsId}');` : ''}
  `;
  document.head.appendChild(inline);

  const loader = document.createElement('script');
  loader.id = 'ga4-script';
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId || adsId}`;
  document.head.appendChild(loader);
}

function disableGoogleTag(measurementId: string, adsId: string): void {
  // gtag.js itself can't be unloaded client-side once it's run — this is
  // Google's documented opt-out flag, checked before every hit, so it's
  // the closest equivalent to "turn tracking off" available in-browser.
  // Removing the <script> tags below stops anything queued from firing
  // again on this page, but a hit already sent before Decline was clicked
  // can't be recalled.
  [measurementId, adsId].forEach((id) => {
    if (id) (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = true;
  });
  document.getElementById('ga4-script')?.remove();
  document.getElementById('ga4-inline-config')?.remove();
}

// Shared by any component that wants to fire a GA4 event (ContactForm,
// Calculator, ...). `gtag` only ever exists on `window` once
// loadGoogleTag() above has run, which only happens after analytics
// consent — so this existence check doubles as the consent gate. Callers
// don't need their own localStorage/consent check.
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// Delegated listener (one for the whole document) rather than binding to
// every individual tel:/mailto: link, so it still covers links added later
// by any other script and doesn't need to run again per page section.
// trackEvent() already no-ops when gtag isn't loaded, so this is safe to
// call unconditionally regardless of consent state.
export function initClickTracking(): void {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const link = target?.closest('a[href^="tel:"], a[href^="mailto:"]') as HTMLAnchorElement | null;
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const pagePath = window.location.pathname;

    if (href.startsWith('tel:')) {
      trackEvent('phone_click', { phone: href.slice(4), page_path: pagePath });
    } else if (href.startsWith('mailto:')) {
      trackEvent('email_click', { email: href.slice(7).split('?')[0], page_path: pagePath });
    }
  });
}

export function initCookieConsent(): void {
  const banner = document.getElementById('cookie-consent-banner') as HTMLElement | null;
  const acceptBtn = document.getElementById('cookie-consent-accept') as HTMLButtonElement | null;
  const declineBtn = document.getElementById('cookie-consent-decline') as HTMLButtonElement | null;
  if (!banner || !acceptBtn || !declineBtn) return;

  const measurementId = banner.dataset.gaId || '';
  const adsId = banner.dataset.adsId || '';

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
    loadGoogleTag(measurementId, adsId);
  }

  acceptBtn.addEventListener('click', () => {
    writeConsent(true);
    loadGoogleTag(measurementId, adsId);
    hideBanner();
  });

  declineBtn.addEventListener('click', () => {
    const previous = readConsent();
    writeConsent(false);
    if (previous?.analytics) {
      disableGoogleTag(measurementId, adsId);
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
