// AppsSection.jsx
import React, { useState, useEffect } from "react";
import "../styles/AppsSection.css";
import Slider from "./Slider";
import { skiltSlides, formelguideSlides } from "./skiltSlides";
import DownloadTabs from "./DownloadTabs";

const AppsSection = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const [showDemo, setShowDemo] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [showFormelSlider, setShowFormelSlider] = useState(false);

  // Desktop-Pair: 0 => zeigt Cards 0+1, 2 => zeigt Cards 2+3
  const [pairStart, setPairStart] = useState(0);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48rem)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      <section className="apps-section">
        <div className="apps-header">
                    <div className="apps-divider" />
          <h2 className="apps-title">Unsere Apps</h2>
        </div>

      <div className="apps-stage">
        <button
          type="button"
          className={`slider-arrow slider-arrow-left ${pairStart === 0 ? "disabled" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            if (pairStart === 0) return;
            setPairStart(0);
            setFlippedIndex(null);
          }}
        >
          ‹
        </button>

        <button
          type="button"
          className={`slider-arrow slider-arrow-right ${pairStart === 2 ? "disabled" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            if (pairStart === 2) return;
            setPairStart(2);
            setFlippedIndex(null);
          }}
        >
          ›
        </button>

        <div className="card-slider">
          {/* Pair 0: Cards 0 + 1 */}
          <div className={`card-pair ${pairStart === 0 ? "active" : ""}`}>
            {/* Card 0 */}
            <div
              className={`test-card ${flippedIndex === 0 ? "flipped" : ""}`}
              onClick={() => handleFlip(0)}
            >
              <div className="test-card-front">
                <img
                  src="/images/logo_gp1.png"
                  alt="SHK GP1 Logo"
                  className="test-front-logo"
                />

                <div className="test-front-body">
                  <div className="test-front-hero">
                    <h3>SHK GP1</h3>
                    <h4>Die Lernapp für deine Gesellenprüfung Teil 1</h4>
                  </div>
                  <p className="test-front-text">
                    Das Grundlagenmodul bietet dir über{" "}
                    <strong style={{ fontWeight: "bold" }}>
                      600 interaktive Quizze
                    </strong>{" "}
                    zum Wiederholen der Lernfelder 1–6. In der{" "}
                    <strong style={{ fontWeight: "bold" }}>
                      Prüfungssimulation
                    </strong>{" "}
                    kannst du dein Wissen anschließend mit{" "}
                    <strong>300 prüfungsähnlichen Fragen</strong> testen.
                    <br />
                    <br />
                    <div className="test-downloadtabs">
                      <DownloadTabs filterKey="gp1" />
                    </div>

                  </p>
                </div>
                <div className="test-front-footer">
                  <div className="test-front-link">
                    Jetzt kostenlos testen →
                  </div>
                </div>
              </div>

              <div className="test-card-back">
                <div className="test-back-body">
                  <img
                    src="/images/GP1_Screenshot.png"
                    alt="GP1 Vorschau"
                    className="test-back-image"
                  />
                </div>
                <div
                  className="test-back-footer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDemo(true);
                  }}
                >
                  <button className="test-back-link">Jetzt testen</button>
                </div>
              </div>
            </div>

            {/* Card 1 */}
            <div
              className={`test-card ${flippedIndex === 1 ? "flipped" : ""}`}
              onClick={() => handleFlip(1)}
            >
              <div className="test-card-front">
                {/* Logo oben rechts */}
                <img
                  src="/images/Skilt_Lernapp_Logo.png"
                  alt="Skilt Lernapp Logo"
                  className="test-front-logo"
                />

                {/* Text mittig */}
                <div className="test-front-body">
                  <div className="test-front-hero">
                    <h3>Skilt Lernapp SHK</h3>
                    <h4>
                      Die Lern-App für die Ausbildung Anlagenmechaniker*in SHK
                    </h4>
                  </div>
                  <p className="test-front-text">
                    Wir haben die <strong>Fachtheorie</strong> aus allen{" "}
                    <strong>15 Lernfeldern</strong> verständlich aufbereitet und
                    in eine App gepackt.
                  </p>

                  <div className="test-downloadtabs">
                    <DownloadTabs filterKey="buy" />
                    <DownloadTabs filterKey="trial" />
                  </div>
                </div>

                {/* Footer unten */}
                <div className="test-front-footer">
                  <div className="test-front-link">Mehr Infos →</div>
                </div>
              </div>

              <div className="test-card-back">
                <div className="test-back-body">
                  <img
                    src="/images/skilt_screenshot.png"
                    alt="Skilt Vorschau"
                    className="test-back-image"
                  />
                </div>
                <div
                  className="test-back-footer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSlider(true);
                  }}
                >
                  <button className="test-back-link">App-Vorschau</button>
                </div>
              </div>
            </div>
          </div>

          {/* Pair 1: Cards 2 + 3 */}
          <div className={`card-pair ${pairStart === 2 ? "active" : ""}`}>
            {/* Card 2 */}
            <div
              className={`test-card ${flippedIndex === 2 ? "flipped" : ""}`}
              onClick={() => handleFlip(2)}
            >
              <div className="test-card-front">
                {/* Logo oben rechts */}
                <img
                  src="/images/formelguide_logo.png"
                  alt="Formel Guide Logo"
                  className="test-front-logo"
                />

                {/* Text mittig */}
                <div className="test-front-body">
                  <div className="test-front-hero">
                    <h3>Formel Guide SHK</h3>
                    <h4>Alle wichtigen Formeln für deine Ausbildung</h4>
                  </div>
                  <p className="test-front-text">
                    Der unserer digitale Formelsammlung enthält über{" "}
                    <strong>200 Formeln</strong> für die{" "}
                    <strong>Gesellen- und Meisterprüfung</strong>.<br />
                    Übersichtlich sortiert und schnell per Suchfunktion
                    auffindbar.
                  </p>
                  <div className="test-downloadtabs">
                    <DownloadTabs filterKey="formelguide" />
                  </div>
                </div>

                {/* Footer unten */}
                <div className="test-front-footer">
                  <div className="test-front-link">App-Vorschau →</div>
                </div>
              </div>

              <div className="test-card-back">
                <div className="test-back-body">
                  <img
                    src="/images/formelguide_screenshot.png"
                    alt="Formel Guide Vorschau"
                    className="test-back-image"
                  />
                </div>
                <div
                  className="test-back-footer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFormelSlider(true);
                  }}
                >
                  <button className="test-back-link">
                    App-Vorschau starten
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="test-card">
              <div className="test-card-front">
                <img
                  src="/images/gp2_logo.png"
                  alt="GP2 Logo"
                  className="test-front-logo"
                />

                <div className="test-front-body">
                  <div className="test-front-hero">
                    <h3>SHK GP2</h3>
                    <h4>Die Lernapp für deine Gesellenprüfung Teil 2</h4>
                  </div>
                  <p className="test-front-text">
                    Mit über <strong>1400 interaktiven Quizzen</strong> wiederholst du die Inhalte
                    der Lernfelder 7–15 Schritt für Schritt.
                    <br />
                    <br />
                    Im{" "}
                    <strong style={{ fontWeight: "bold" }}>
                      Prüfungsmodus
                    </strong>{" "}
                    testest du dein Wissen mit{" "}
                    <strong>600 prüfungsnahen Fragen</strong>.
                    <br />
                  </p>
                  <div className="test-downloadtabs">
                    <DownloadTabs filterKey="gp2" />
                  </div>
                </div>

                <div className="test-front-footer"></div>
              </div>

              <div className="test-card-back">
                <div className="test-back-body">
                  <img
                    src="/images/GP1_Screenshot.png"
                    alt="GP1 Vorschau"
                    className="test-back-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {showDemo && (
        <div className="demo-overlay" onClick={() => setShowDemo(false)}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="demo-frame"
              src="/gp1_demo/index.html"
              title="GP1 Demo"
            />
            <button className="demo-close" onClick={() => setShowDemo(false)}>
              Demo-App schließen
            </button>
          </div>
        </div>
      )}

      {showSlider && (
        <div className="demo-overlay" onClick={() => setShowSlider(false)}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <Slider slides={skiltSlides} autoplayInterval={4000} />
            <button className="demo-close" onClick={() => setShowSlider(false)}>
              Vorschau schließen
            </button>
          </div>
        </div>
      )}

      {showFormelSlider && (
        <div
          className="demo-overlay"
          onClick={() => setShowFormelSlider(false)}
        >
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <Slider slides={formelguideSlides} autoplayInterval={4000} />
            <button
              className="demo-close"
              onClick={() => setShowFormelSlider(false)}
            >
              Vorschau schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppsSection;
