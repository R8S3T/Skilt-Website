// Zentrale Links für Skilt Campus auf der Webseite.
// Hier kannst du Store-Links und den Button für Ausbildungsbetriebe ändern,
// ohne die Seiten selbst anzufassen.

// Store-Links für die Skilt Campus App.
// Solange hier "" steht, wird der Store-Button ausgegraut mit "demnächst" angezeigt.
export const CAMPUS_APP_STORE_URL = "";
export const CAMPUS_GOOGLE_PLAY_URL = "";

// Button im Abschluss-Bereich der Seite für Ausbildungsbetriebe.
// Später für Stripe einfach label und href ersetzen, z. B.:
//   label: "Jetzt Lizenzen kaufen",
//   href: "https://buy.stripe.com/...",
export const TEAM_CTA = {
  label: "Test anfragen",
  href:
    "mailto:info@skilt.app?subject=" +
    encodeURIComponent("Testzugang Skilt Campus Team"),
};
