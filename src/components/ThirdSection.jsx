import React from "react";
import "../styles/ThirdSection.css";

const ThirdSection = () => {
    return (
        <section className="third-section">
            {/* Frame Box */}
            <div className="frame">
                {/* Subheading */}
                <h2 className="heading">Fachtheorie verständlich erklärt</h2>

                {/* Image Content */}
                <div className="imageBox">
                    <img
                        src="/images/website_section_3.png"
                        alt="Zwei Smartphone-Bildschirme mit der Skilt Lern-App für die SHK-Ausbildung: Einer zeigt eine Erklärung zum Thema Druckminderer, der andere eine technische Zeichnung und Infos zu Übergangsstücken. Fachtheorie anschaulich und verständlich für Anlagenmechaniker*innen SHK erklärt."
                        className="image"
                    />
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
