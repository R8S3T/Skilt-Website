import React, { useState } from "react";
import "../styles/AboutSection.css";
import { Link } from "react-router-dom";
import NewsletterPopup from "../pages/Newsletter";

const AboutSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <section className="about-section">
            <h2 className="heading">Über Skilt</h2>
            <div className="divider"></div>

            <div className="text-box">
                <p className="text">
                    Unsere Mission ist es, die theoretischen Inhalte der handwerklichen Ausbildung in Lern Apps 
                    anschaulich aufzubereiten und zeitgemäß zugänglich zu machen.
                </p>
                <p className="text">
                    Mit kompakten Lerneinheiten, interaktiven Übungen und intuitiven Funktionen
                    gestalten wir Lerninhalte so, dass sie sich nahtlos in deinen Alltag integrieren
                    lassen.
                </p>
                <p className="text">
                    Unsere Lern-Apps richten sich an Auszubildende im Beruf Anlagenmechaniker*in SHK
                    und werden künftig auch für weitere Handwerksberufe verfügbar sein.
                </p>

                <div className="funding-project">
                    <h3>Gefördertes Projekt</h3>

                    <p className="text">
                        Wir entwickeln unser digitales Lernangebot weiter: Mit Unterstützung
                        der Europäischen Union und des Landes Brandenburg entsteht eine neue
                        Lernplattform für die handwerkliche Ausbildung.
                    </p>

                    <Link to="/foerderung" className="funding-link">
                        Mehr über das geförderte Vorhaben →
                    </Link>
                </div>

                <p className="text">
                    Du möchtest ein gemeinsames Projekt mit uns starten oder hast eine Idee
                    für eine Zusammenarbeit? Schreib uns gerne unter 
                    <strong> info@skilt.app</strong>.
                </p>

                {/* Presseartikel */}
                <div className="article-box">
                    <h3 className="article-heading">Skilt wurde in folgenden Fachmedien vorgestellt:</h3>
                    <ul className="article-list">
                        <li>
                            <a
                                href="https://www.handwerksblatt.de/betriebsfuehrung/lern-app-skilt-fuer-die-ausbildung-zum-anlagenmechaniker-im-sanitaer-heizungs-und-klimatechnik-handwerk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lern-App „Skilt“ für die Ausbildung im SHK-Handwerk – handwerksblatt.de
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.haustec.de/management/it/digitale-lernhilfen-fuer-shk-anlagenmechaniker-skilt-lernapp-und-formel-guide-im"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Digitale Lernhilfen für SHK-Anlagenmechaniker – haustec.de
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
