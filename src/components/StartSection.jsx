import React from "react";
import "../styles/StartSection.css";
import Header from "./Header"; // Import the Header component

const StartSection = () => {
    return (
        <section className="start-section" id="start-section">
            {/* Header */}
            <Header /> {/* Replace the logo with the Header component */}

            {/* Content */}
            <div className="content">
                {/* Image */}
                <div className="imageBox">
                    <img src="/images/website_start.png" alt="Ein Smartphone mit der Startseite der Skilt Lern-App für die SHK-Ausbildung. Zu sehen sind die Kategorien 'Start', 'Fachmathematik' und 'Lernkarten' – entwickelt, um Auszubildende als Anlagenmechaniker*in SHK optimal zu unterstützen." />
                </div>

                {/* Text */}
                <div className="textBox">
                    <h1>Lernen im Handwerk neu definiert.</h1>
                    <p>Jetzt im Playstore für Android – sichere dir die App zum Einführungspreis!</p>

                    {/* Playstore Link mit Bild */}
                    <a href="https://play.google.com/store/apps/details?id=com.skilt.shk" target="_blank" rel="noopener noreferrer">
                        <img src="/images/GetItOnGooglePlay_Badge_Web_color_German.png" 
                                alt="Jetzt auf Google Play herunterladen" 
                                className="playstore-image" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StartSection;
