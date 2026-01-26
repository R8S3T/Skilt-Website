// AppsSection.jsx
import React, { useState, useEffect } from "react";
import "../styles/AppsSection.css";
import Slider from "./Slider";
import { skiltSlides, formelguideSlides } from "./skiltSlides";
import DownloadTabs from "./DownloadTabs";

const AppsSection = () => {
  const apps = [
    {
      id: 1,
      title: "SHK GP1",
      subtitle: "Die Lernapp für deine Gesellenprüfung Teil 1",
      logo: "/images/logo_gp1.png",
    },
    {
      id: 2,
      title: "Skilt Lernapp SHK",
      subtitle: "Die Theorie-App für deine SHK-Ausbildung",
      logo: "/images/Skilt_Lernapp_Logo.png",
    },
    {
      id: 3,
      title: "Formel Guide SHK",
      subtitle: "Alle wichtigen Formeln für deine Ausbildung",
      logo: "/images/formelguide_logo.png",
    },
    {
      id: 4,
      title: "SHK GP2",
      subtitle: "Die Lernapp für deine Gesellenprüfung Teil 2",
      logo: "/images/gp2_logo.png",
    },
  ];

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
        <button
          type="button"
          className="slider-arrow slider-arrow-left"
          onClick={(e) => {
            e.stopPropagation();
            setPairStart(0);
            setFlippedIndex(null);
          }}
          aria-label="Zurück"
        >
          ‹
        </button>

        <button
          type="button"
          className="slider-arrow slider-arrow-right"
          onClick={(e) => {
            e.stopPropagation();
            setPairStart(2);
            setFlippedIndex(null);
          }}
          aria-label="Weiter"
        >
          ›
        </button>

        <div className="card-slider">
          {/* Pair 0: Cards 0 + 1 */}
          <div className={`card-pair ${pairStart === 0 ? "active" : ""}`}>
            {apps.slice(0, 2).map((app, localIndex) => {
              const index = localIndex; // 0 oder 1
              return (
                <div
                  key={app.id}
                  className={`app-card ${flippedIndex === index ? "flipped" : ""}`}
                  onClick={() => {
                    if (index !== 3) handleFlip(index);
                  }}
                >
                  <div className="card-front">
                    <img
                      src={app.logo}
                      alt={`${app.title} Logo`}
                      className="app-logo"
                    />

                    <div className="app-hero">
                      <h3>{app.title}</h3>
                      <h4>{app.subtitle}</h4>
                    </div>

                    {index === 0 ? (
                      <p className="app-description">
                        Wiederhole den Stoff aus den Lernfeldern 1–6
                        <br />
                        mit über{" "}
                        <strong className="highlight">
                          600 interaktiven Quizzen
                        </strong>
                        .
                        <br />
                        Prüfe dein Wissen mit insgesamt{" "}
                        <strong className="highlight">
                          300 prüfungsnahen Fragen
                        </strong>
                        .
                        <br />
                        Verfügbar Anfang Februar im App Store für einmalig
                        12,99 €.
                      </p>
                    ) : index === 1 ? (
                      <>
                        <p className="app-description">
                          Wir haben die <strong>Fachtheorie</strong> aus allen{" "}
                          <strong>15 Lernfeldern</strong> verständlich
                          aufbereitet und in eine App gepackt.
                          <br />
                        </p>
                          {index === 1 && (
                            <div className="downloadtabs-skilt">
                              <DownloadTabs filterKey="buy" />
                              <DownloadTabs filterKey="trial" />
                            </div>
                          )}
                      </>
                    ) : null}

                    {index !== 3 && (
                      <div className="app-link">
                        {index === 0
                          ? "Jetzt kostenlos testen →"
                          : "Mehr Infos →"}
                      </div>
                    )}
                  </div>

                  <div className="card-back">
                    {index === 0 ? (
                      <div className="app-preview-container">
                        <img
                          src="/images/GP1_Screenshot.png"
                          alt="GP1 Vorschau"
                          className="app-preview-image"
                          style={
                            isDesktop
                              ? { width: 280, height: "auto" }               // DESKTOP kleiner
                              : { width: "clamp(220px, 20vw, 340px)", height: "auto" } // MOBILE wie bisher
                          }
                        />
                        <div style={{ height: "2rem" }} />
                        <button
                          className="img-cta"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDemo(true);
                          }}
                        >
                          Jetzt testen
                        </button>
                      </div>
                    ) : index === 1 ? (
                      <div
                        className="app-preview-container"
                        style={{ position: "relative" }}
                      >
                        <button
                          className="img-cta small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowSlider(true);
                          }}
                        >
                          App-Vorschau
                        </button>

                        <img
                          src="/images/skilt_screenshot.png"
                          alt="Skilt Vorschau"
                          className="app-preview-image"
                          style={{
                            width: "clamp(250px, 22vw, 340px)",
                            height: "auto",
                            marginTop: "-3rem"
                          }}
                        />
                      </div>
                    ) : (
                      <p className="back-text">Weitere Infos folgen hier...</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pair 1: Cards 2 + 3 */}
          <div className={`card-pair ${pairStart === 2 ? "active" : ""}`}>
            {apps.slice(2, 4).map((app, localIndex) => {
              const index = localIndex + 2; // 2 oder 3
              return (
                <div
                  key={app.id}
                  className={`app-card ${flippedIndex === index ? "flipped" : ""}`}
                  onClick={() => {
                    if (index !== 3) handleFlip(index);
                  }}
                >
                  <div className="card-front">
                    <img
                      src={app.logo}
                      alt={`${app.title} Logo`}
                      className="app-logo"
                    />

                    <div className="app-hero">
                      <h3>{app.title}</h3>
                      <h4>{app.subtitle}</h4>
                    </div>

                    {index === 2 ? (
                      <>
                        <p className="app-description">
                          Der Formel Guide SHK enthält über{" "}
                          <strong>200 Formeln</strong> für die{" "}
                          <strong>Gesellen- und Meisterprüfung</strong>.
                          <br />
                          Übersichtlich sortiert und schnell per Suchfunktion
                          auffindbar.
                        </p>
                        {index === 2 && (
                          <DownloadTabs filterKey="formelguide" />
                        )}
                      </>
                    ) : index === 3 ? (
                      <>
                        <p className="app-description">
                          Wir arbeiten gerade an der <strong>GP2-App</strong> – mit noch mehr Fragen,
                          damit du <strong>bestens vorbereitet</strong> in die Abschlussprüfung gehst.
                        </p>

                        <p className="app-description">
                          Voraussichtlich ab <strong>März 2026</strong> in den App Stores verfügbar.
                        </p>
                        <div style={{ height: "7.5rem" }} />
                      </>
                    ) : null}

                    {index !== 3 && (
                      <div className="app-link">
                        {index === 0
                          ? "Jetzt kostenlos testen →"
                          : "Mehr Infos →"}
                      </div>
                    )}
                  </div>

                  <div className="card-back">
                    {index === 2 ? (
                      <div
                        className="app-preview-container"
                        style={{ position: "relative" }}
                      >
                        <button
                          className="img-cta small"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowFormelSlider(true);
                          }}
                        >
                          App-Vorschau
                        </button>

                        <img
                          src="/images/formelguide_screenshot.png"
                          alt="Formel Guide Vorschau"
                          className="app-preview-image"
                          style={{
                            width: "clamp(220px, 20vw, 340px)",
                            height: "auto",
                          }}
                        />
                      </div>
                    ) : (
                      <p className="back-text">Weitere Infos folgen hier...</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {showDemo && (
        <div className="demo-overlay" onClick={() => setShowDemo(false)}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <iframe className="demo-frame" src="/gp1_demo/index.html" title="GP1 Demo" />
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
        <div className="demo-overlay" onClick={() => setShowFormelSlider(false)}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <Slider slides={formelguideSlides} autoplayInterval={4000} />
            <button className="demo-close" onClick={() => setShowFormelSlider(false)}>
              Vorschau schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AppsSection;
