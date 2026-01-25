import React from "react";
import "../styles/StartSection.css";
import Header from "./Header"; // Import the Header component

const StartSection = () => {
    return (
        <section className="start-section" id="start-section">
            {/* Header */}
            <Header />

            {/* Content */}
            <div className="content">
                {/* Image */}
                <div className="imageBox">
                    <img 
                        src="/images/website_start.png" 
                        alt="Ein Smartphone mit der Startseite der Skilt Lern-App für die SHK-Ausbildung. Zu sehen sind die Kategorien 'Start', 'Fachmathematik' und 'Lernkarten' – entwickelt, um Auszubildende als Anlagenmechaniker*in SHK optimal zu unterstützen." 
                    />
                </div>

                {/* Text */}
                <div className="textBox">
                    <h1>Lernen im Handwerk neu definiert.</h1>
                    <p>  SHK-Theorie to go –<br/>
  für Ausbildung und Prüfung</p>
                </div>

            </div>
        </section>
    );
};

export default StartSection;
