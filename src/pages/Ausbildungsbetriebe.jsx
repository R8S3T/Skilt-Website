import React, { useEffect } from "react";
import { FaEnvelopeOpenText, FaChartBar, FaClipboardList } from "react-icons/fa";
import Header from "../components/Header";
import { TEAM_CTA } from "../data/campusLinks";
import "../styles/Ausbildungsbetriebe.css";

// Sobald Bilder aus dem Ausbilder-Zugang da sind: Datei nach public/images legen
// und bei "image" den Pfad eintragen, z. B. "/images/campus-team-lizenzen.webp".
const blocks = [
  {
    title: "Lizenzen verteilen",
    text: "Du kaufst Lizenzen für deinen Betrieb und lädst deine Azubis per E-Mail ein.",
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

const steps = [
  "Lizenzen für deinen Betrieb holen",
  "Azubis per E-Mail einladen",
  "Azubis lernen in der App, du siehst die Fortschritte",
];

function BlockVisual({ title, icon: Icon, image }) {
  if (image) {
    return <img src={image} alt={`Skilt Campus Ausbilder-Zugang: ${title}`} loading="lazy" />;
  }
  return (
    <div className="team-block__placeholder" aria-hidden="true">
      <Icon />
      <span>Bild folgt</span>
    </div>
  );
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
          {blocks.map((block) => (
            <article className="team-block" key={block.title}>
              <div className="team-block__visual">
                <BlockVisual {...block} />
              </div>
              <div className="team-block__text">
                <h2>{block.title}</h2>
                <p>{block.text}</p>
              </div>
            </article>
          ))}

          <p className="team-note">
            Deine Azubis lernen mit allen Inhalten und Funktionen von Skilt Campus: Fachtheorie,
            Formeln, Prüfungsfragen, Quizze und Duelle.
          </p>
        </section>

        <section className="team-steps" aria-labelledby="team-steps-title">
          <div className="team-inner">
            <h2 id="team-steps-title">So funktioniert's</h2>
            <ol className="team-steps__list">
              {steps.map((step, index) => (
                <li key={step}>
                  <span className="team-steps__number" aria-hidden="true">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
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
