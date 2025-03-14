import React from "react";
import Header from "../components/Header";
import "../styles/ThankYouSection.css";

const ThankYouSection = () => {
    const handleStartClick = () => {
        window.location.href = "/"; // Navigiert zur Startseite
    };

    return (
        <>
            <Header /> {/* Header einfügen */}
            <div className="thankyou-container">
                <div className="thankyou-frame">
                    <p className="thankyou-text">
                        Vielen Dank für deine Anmeldung!
                    </p>
                    <p className="thankyou-text">
                        Du hast deine Anmeldung erfolgreich bestätigt. Wir informieren dich, sobald die <strong>Skilt App</strong> im Google Play Store verfügbar ist.
                    </p>
                    <button onClick={handleStartClick} className="thankyou-button">
                        Start
                    </button>
                </div>
            </div>
        </>
    );
};

export default ThankYouSection;
