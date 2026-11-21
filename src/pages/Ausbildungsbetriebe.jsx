import React, { useEffect } from "react";
import { FaEnvelopeOpenText, FaChartBar, FaClipboardList } from "react-icons/fa";
import Header from "../components/Header";
import { TEAM_CTA } from "../data/campusLinks";
import "../styles/Ausbildungsbetriebe.css";

// Darstellung der drei Funktionen:
//   false = drei Karten nebeneinander mit großem Symbol (aktuell)
//   true  = großer Aufbau mit Screenshot, abwechselnd Bild links/rechts
// Zum Zurückwechseln: Screenshots nach public/images legen, unten bei "image"
// den Pfad eintragen (z. B. "/images/campus-team-lizenzen.webp") und hier true setzen.
const SHOW_SCREENSHOTS = false;

const blocks = [
  {
    title: "Lizenzen verteilen",
    text: "Du holst dir Lizenzen für deinen Betrieb und lädst deine Azubis per E-Mail ein.",
    icon: FaEnvelopeOpenText,
    image: null,
  },
  {
    title: "Lernstände sehen",
    text: "Du siehst, wie weit jeder Azubi ist und wo du noch unterstützen kannst.",
    icon: FaChartBar,
    image: null,
  },
  {
    title: "Aufgaben zuweisen",
    text: "Gib deinen Azubis gezielt Inhalte aus der App als Aufgabe.",
    icon: FaClipboardList,
    image: null,
  },
];

function CardIcon({ icon: Icon }) {
  return (
    <span className="team-card__icon" aria-hidden="true">
      <Icon />
    </span>
  );
}

// Aktuelle Darstellung: drei Karten nebeneinander, auf dem Handy untereinander.
function FeatureCards() {
  return (
    <ul className="team-cards">
      {blocks.map((block) => (
        <li className="team-card" key={block.title}>
          <CardIcon icon={block.icon} />
          <h2>{block.title}</h2>
          <p>{block.text}</p>
        </li>
      ))}
    </ul>
  );
}

// Spätere Darstellung mit Screenshots (SHOW_SCREENSHOTS = true).
// Fehlt bei einem Block noch das Bild, wird stattdessen das Symbol gezeigt.
function FeatureScreenshots() {
  return blocks.map((block) => (
    <article className="team-block" key={block.title}>
      <div className="team-block__visual">
        {block.image ? (
          <img
            src={block.image}
            alt={`Skilt Campus Ausbilder-Zugang: ${block.title}`}
            loading="lazy"
          />
        ) : (
          <CardIcon icon={block.icon} />
        )}
      </div>
      <div className="team-block__text">
        <h2>{block.title}</h2>
        <p>{block.text}</p>
      </div>
    </article>
  ));
}

const Ausbildungsbetriebe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="team-page">
        <section className="team-hero">
          <div className="team-inner">
            <p className="team-eyebrow">Skilt Campus Team</p>
            <h1>Skilt Campus für Ausbildungsbetriebe</h1>
            <p className="team-hero__lead">
              Deine Azubis bekommen die komplette Lern-App. Du bekommst einen eigenen Zugang, mit
              dem du sie durch die Ausbildung begleitest.
            </p>
          </div>
        </section>

        <section className="team-blocks team-inner" aria-label="Funktionen für Ausbildende">
          {SHOW_SCREENSHOTS ? <FeatureScreenshots /> : <FeatureCards />}

          <p className="team-note">
            Deine Azubis lernen mit allen Inhalten und Funktionen von Skilt Campus: Fachtheorie,
            Formeln, Prüfungsfragen, Quizze und Duelle.
          </p>
        </section>

        <section className="team-cta" aria-labelledby="team-cta-title">
          <div className="team-inner">
            <h2 id="team-cta-title">Jetzt kostenlos testen</h2>
            <p>
              Skilt Campus Team startet bald. Du willst es schon jetzt mit deinem Betrieb
              ausprobieren? Schreib uns an <a href="mailto:info@skilt.app">info@skilt.app</a>.
            </p>
            <p className="team-cta__price">
              Ab Start: 6,99 € netto pro Azubi-Lizenz und Monat, jährlich abgerechnet.
            </p>
            {/* Button-Text und Link stehen in src/data/campusLinks.js (TEAM_CTA). */}
            <a className="team-cta__button" href={TEAM_CTA.href}>
              {TEAM_CTA.label}
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Ausbildungsbetriebe;
