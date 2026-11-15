import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaChartLine } from "react-icons/fa";
import { CAMPUS_APP_STORE_URL, CAMPUS_GOOGLE_PLAY_URL } from "../data/campusLinks";
import "../styles/CampusAppSection.css";

// Drei Spalten mit je einem Screenshot. "center" ist das größere, mittlere Handy.
const columns = [
  {
    title: "Verständlich erklärt",
    image: "/images/campus-fachtheorie.webp",
    alt: "Skilt Campus: Lernkapitel „Druckminderer und Wasserzähler“ mit Schnittbild eines Druckminderers",
    points: [
      "Fachtheorie aus allen 15 Lernfeldern",
      "Grafiken und Schnittbilder zeigen, wie Bauteile funktionieren",
      "Schritt für Schritt durch jedes Kapitel",
    ],
  },
  {
    title: "Alles in einer App",
    image: "/images/campus-start.webp",
    alt: "Skilt Campus: Startbildschirm mit Wissens-Check, Fachtheorie, Formelsammlung, Sinnbildern und Quiz-Time",
    center: true,
    points: [
      "Über 200 Formeln mit Erklärung und Rechenbeispiel",
      "Über 900 prüfungsnahe Fragen für GP1 und GP2",
      "Technische Sinnbilder lernen",
    ],
  },
  {
    title: "Lernen mit Spaß",
    image: "/images/campus-rangliste.webp",
    alt: "Skilt Campus: wöchentliche Rangliste mit Punkten",
    points: [
      "Quizze und Duelle gegen andere Azubis",
      "Wöchentliche Rangliste mit deinen Freunden",
      "Badges sammeln und Erfolge sehen",
    ],
  },
];

const stores = [
  {
    name: "App Store",
    url: CAMPUS_APP_STORE_URL,
    badge: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
    alt: "Laden im App Store",
  },
  {
    name: "Google Play",
    url: CAMPUS_GOOGLE_PLAY_URL,
    badge: "/images/GetItOnGooglePlay_Badge_Web_color_German.png",
    alt: "Jetzt bei Google Play",
  },
];

function StoreButton({ name, url, badge, alt }) {
  if (url) {
    return (
      <a className="campus-app-store" href={url} target="_blank" rel="noopener noreferrer">
        <img src={badge} alt={alt} />
      </a>
    );
  }
  return (
    <span className="campus-app-store campus-app-store--soon" aria-label={`${name}: demnächst verfügbar`}>
      <img src={badge} alt="" />
      <small>demnächst</small>
    </span>
  );
}

export default function CampusAppSection() {
  const [azubiOpen, setAzubiOpen] = useState(false);

  return (
    <section className="campus-app" id="skilt-campus" aria-labelledby="campus-app-title">
      <div className="campus-app__inner">
        <header className="campus-app__intro">
          <p className="campus-app__eyebrow">Neu: Skilt Campus</p>
          <h2 id="campus-app-title">Deine ganze SHK&#8209;Ausbildung in einer App</h2>
          <p className="campus-app__lead">
            Fachtheorie, Formeln und Prüfungsvorbereitung für alle vier Lehrjahre, mit Quizzen,
            Duellen und deinem Lernstand immer im Blick.
          </p>
        </header>

        <ul className="campus-app-columns">
          {columns.map((col) => (
            <li
              key={col.title}
              className={`campus-app-col${col.center ? " campus-app-col--center" : ""}`}
            >
              <figure className="campus-app-col__phone">
                <img src={col.image} alt={col.alt} width="720" height="1419" loading="lazy" />
              </figure>
              <h3>{col.title}</h3>
              <ul className="campus-app-col__points">
                {col.points.map((point) => (
                  <li key={point}>
                    <FaCheck aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="campus-app__swipe-hint" aria-hidden="true">Wischen für mehr →</p>

        <div className="campus-app-progress">
          <span className="campus-app-progress__icon" aria-hidden="true"><FaChartLine /></span>
          <div>
            <h3>Immer wissen, wo du stehst</h3>
            <p>
              Dein Lernstand zeigt, wo du stark bist und wo du noch üben solltest. Falsch
              beantwortete Fragen kannst du gezielt wiederholen.
            </p>
          </div>
        </div>

        <p className="campus-app__note">
          Du kennst unsere Einzelapps? In Skilt Campus steckt alles drin, und noch mehr.
        </p>

        <div className="campus-app-choice">
          <button
            type="button"
            className={`campus-app-choice__button${azubiOpen ? " is-active" : ""}`}
            aria-expanded={azubiOpen}
            aria-controls="campus-app-azubi"
            onClick={() => setAzubiOpen((open) => !open)}
          >
            Für Azubis
          </button>
          <Link to="/ausbildungsbetriebe" className="campus-app-choice__button">
            Für Ausbildungsbetriebe
          </Link>
        </div>

        {azubiOpen && (
          <div className="campus-app-azubi" id="campus-app-azubi">
            <h3>7 Tage kostenlos testen (für Neukunden)</h3>
            <p className="campus-app-azubi__price">Danach 4,99 € im Monat</p>
            <div className="campus-app-azubi__stores">
              {stores.map((store) => (
                <StoreButton key={store.name} {...store} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
