import React from "react";
import "../styles/SecondSection.css";

const SecondSection = () => {
    return (
      <section className="second-section">
        {/* Text Content */}
        <div className="text-box">
        <h2 className="heading">Deine Lern-App fürs SHK-Handwerk</h2>
        <p className="text">
            Skilt macht Lernen einfach und flexibel – mit Inhalten, die perfekt auf
            deinen Ausbildungsplan abgestimmt sind.
        </p>
        <p className="text">
            Alle Inhalte sind offline verfügbar, sodass du überall und
            zwischendurch lernen kannst.
        </p>
        </div>

        {/* Image Content */}
        <div className="image-box">
        <img
            src="/images/website_section_2.png"
            alt="Zwei Smartphones mit der Skilt Lern-App für die SHK-Ausbildung. Auf dem ersten Bildschirm sind die Lernfelder für Anlagenmechaniker*innen SHK zu sehen, auf dem zweiten die dazugehörigen Kapitel – perfekt strukturiert für Auszubildende"
            className="image"
        />
        </div>
    </section>
    );
};

export default SecondSection;
