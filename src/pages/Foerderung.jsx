//src/pages/Foerderung.jsx

import React from "react";
import "../styles/Foerderung.css";

const Foerderung = () => {
  return (
    <main className="foerderung-page">
      <section className="foerderung-content">
        <h1>Gefördertes Vorhaben</h1>

        <h2>Digitale Lernlösung für Bildungseinrichtungen</h2>

        <p>
          Wir entwickeln eine digitale Lernplattform für die handwerkliche
          Ausbildung, die Lernen einfacher und übersichtlicher machen soll.
        </p>

        <p>
          Auszubildende können damit selbstständig lernen, üben und sich auf
          Prüfungen vorbereiten. Gleichzeitig kann die Plattform in den
          Unterricht eingebunden werden und macht das Lernen durch Challenges
          und Quizze interaktiver und spannender. Ausbildende erhalten zudem
          einen besseren Überblick darüber, welche Inhalte bereits bearbeitet
          wurden und wo noch Unterstützung gebraucht wird.
        </p>

        <p>
          Die Plattform soll in Ausbildungsbetrieben und Bildungseinrichtungen
          eingesetzt werden und den Ausbildungsalltag dort sinnvoll ergänzen.
        </p>

        <h2>Ziel und erwartetes Ergebnis</h2>

        <p>
          Ziel ist es, digitales Lernen stärker in die handwerkliche Ausbildung
          einzubinden und Auszubildende beim Lernen und bei der
          Prüfungsvorbereitung zu unterstützen. Gleichzeitig soll die Plattform
          Ausbildenden neue Möglichkeiten bieten, Lerninhalte in den Unterricht
          einzubinden und Lernfortschritte zu begleiten.
        </p>

        <p>
          Im Rahmen des Projekts entsteht dafür eine gemeinsame Lernplattform für
          Auszubildende und Ausbildende, die verschiedene Lernangebote
          zusammenführt und neue Möglichkeiten zum Lernen und Üben bietet.
        </p>

        <div className="foerderung-hinweis">
          <p>
            Das Vorhaben wird aus Mitteln der Europäischen Union und des Landes
            Brandenburg gefördert.
          </p>

          <img
            src="/images/eu-kofinanziert.png"
            alt="Kofinanziert von der Europäischen Union"
            className="eu-logo"
          />
        </div>
      </section>
    </main>
  );
};

export default Foerderung;