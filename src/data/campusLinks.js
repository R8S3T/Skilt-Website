// Zentrale Links für Skilt Campus auf der Webseite.
// Hier kannst du Store-Links und den Button für Ausbildungsbetriebe ändern,
// ohne die Seiten selbst anzufassen.

// Store-Links für die Skilt Campus App.
// Solange hier "" steht, wird der Store-Button ausgegraut mit "demnächst" angezeigt.
export const CAMPUS_APP_STORE_URL = "https://apps.apple.com/de/app/skilt-campus/id6814094253";
export const CAMPUS_GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.skilt.campus";

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

// Gültige Nutzungsbedingungen liegen auf campus.skilt.app (dieselben, die App und Stores verlinken).
// Reihenfolge = Reihenfolge auf /agb. "kind" ist auch der alte Pfad /agb/<kind>, der weiterleitet.
export const CAMPUS_TERMS = [
  {
    kind: "ausbildungs-apps",
    title: "Skilt Ausbildungs-Apps – Einmalkauf und Lizenzversionen",
    url: "https://campus.skilt.app/agb/ausbildungs-apps",
  },
  {
    kind: "campus-solo",
    title: "Skilt Campus Solo",
    url: "https://campus.skilt.app/agb/campus-solo",
  },
  {
    kind: "campus-team",
    title: "Skilt Campus Team",
    url: "https://campus.skilt.app/agb/campus-team",
  },
];

// Datenschutzhinweise der App Skilt Campus (verlinkt in der Datenschutzerklärung der Webseite).
export const CAMPUS_PRIVACY = {
  solo: "https://campus.skilt.app/datenschutzhinweise/campus-solo",
  team: "https://campus.skilt.app/datenschutzhinweise",
};
