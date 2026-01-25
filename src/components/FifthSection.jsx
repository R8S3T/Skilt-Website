import React from "react";
import "../styles/FifthSection.css";

const FifthSection = () => {
    return (
        <section className="fifth-section">
            {/* Text Area */}
            <div className="text-area">
                <div className="text-box">
                    <h2 className="heading">Interaktiv Lernen und Verstehen</h2>
                    <div className="divider"></div>
                    <p className="text">
                        Mit über <strong>1000 Lernkarten</strong> kannst du dein Wissen gezielt testen und
                        vertiefen.
                    </p>
                    <p className="text">
                        <strong>350 technische Illustrationen und Tabellen</strong> helfen dir, die komplexen
                        Inhalte anschaulich und verständlich zu vermitteln.
                    </p>
                    <p className="text">
                        Über die integrierte <strong>Suchfunktion</strong> kannst du schnell nach bestimmten Begriffen oder Themen suchen – ideal zum Nachschlagen.
                    </p>
                </div>
            </div>

            {/* Image Area */}
            <div className="image-area">
                <div className="frame">
                    <img
                        src="/images/website_section_5_1.png"
                        alt="Screenshot eines Handybildschirms aus der Skilt Lern-App: Eine Lernkarte mit einer Frage wird angezeigt, darunter zwei Buttons, um gewusste und nicht-gewusste Karten zu wiederholen. Perfekt für Auszubildende in der SHK-Ausbildung, um Wissen gezielt aufzufrischen."
                        className="image"
                    />
                </div>
                <div className="frame">
                    <img
                        src="/images/website_section_5_2.png"
                        alt="Screenshot eines Handybildschirms aus der Skilt Lern-App: Darstellung des Themas Rohrtrenner mit einer technischen Zeichnung. Ideal für Auszubildende in der SHK-Ausbildung, um fachspezifisches Wissen anschaulich und praxisnah zu vertiefen."
                        className="image"
                    />
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
