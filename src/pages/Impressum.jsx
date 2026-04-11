import React from "react";
import Header from "../components/Header";
import "../styles/Impressum.css";

const Impressum = () => {
    return (
        <>
            <Header />
            <div className="impressum-container">
                <div className="impressum-frame">

                    <p className="impressum-text">
                        Skilt Studio ist eine Marke der Skilt Technical UG (haftungsbeschränkt).
                    </p>

                    <p className="impressum-text">
                        Angaben gemäß § 5 TMG:
                    </p>

                    <p className="impressum-text">
                        Skilt Technical UG (haftungsbeschränkt)
                    </p>
                    <p className="impressum-text">
                        Gubener Str. 36A
                    </p>
                    <p className="impressum-text">
                        03149 Forst (Lausitz)
                    </p>

                    <p className="impressum-text">
                        Vertreten durch:
                    </p>
                    <p className="impressum-text">
                        Geschäftsführerin Rebecca Stelter
                    </p>

                    <p className="impressum-text">
                        Kontakt:
                    </p>
                    <p className="impressum-text">
                        <a href="mailto:info@skilt.app" className="impressum-link">
                            info@skilt.app
                        </a>
                    </p>

                    <p className="impressum-text">
                        Registereintrag:
                    </p>
                    <p className="impressum-text">
                        HRB 19564
                    </p>

                    <p className="impressum-text">
                        Streitbeilegung:
                    </p>
                    <p className="impressum-text">
                        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                </div>
            </div>
        </>
    );
};

export default Impressum;

