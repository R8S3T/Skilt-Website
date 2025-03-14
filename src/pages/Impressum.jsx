import React from "react";
import Header from "../components/Header";
import "../styles/Impressum.css"; // Import der CSS-Datei

const Impressum = () => {
    return (
        <>
            <Header /> {/* Add the Header component here */}
            <div className="impressum-container">
                <div className="impressum-frame">
                    <p className="impressum-text">
                        Skilt wird von Calisma betrieben.
                    </p>
                    <p className="impressum-text">
                        Verantwortlich für den Inhalt:
                    </p>
                    <p className="impressum-text">
                        Rebecca Stelter
                    </p>
                    <p className="impressum-text">Wattstr. 8, 12459 Berlin</p>
                    <p className="impressum-text">
                        Kontakt:{" "}
                        <a href="mailto:info@skilt.app" className="impressum-link">
                            info@skilt.app
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Impressum;

