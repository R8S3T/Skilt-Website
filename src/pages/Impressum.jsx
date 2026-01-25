import React from "react";
import Header from "../components/Header";
import "../styles/Impressum.css";

const Impressum = () => {
    return (
        <>
            <Header /> {/* Add the Header component here */}
            <div className="impressum-container">
                <div className="impressum-frame">
                    <p className="impressum-text">
                        Skilt wird von Skilt Studio betrieben.
                    </p>
                    <p className="impressum-text">
                        Verantwortlich für den Inhalt:
                    </p>
                    <p className="impressum-text">
                        Rebecca Stelter
                    </p>
                    <p className="impressum-text">Gubener Str. 36A, 03149 Forst (Lausitz)</p>
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

