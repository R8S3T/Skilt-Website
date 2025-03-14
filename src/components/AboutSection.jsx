import React, { useState } from "react";
import "../styles/AboutSection.css";
import NewsletterPopup from "../pages/Newsletter";

const AboutSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <section className="about-section">
            {/* Heading */}
            <h2 className="heading">Über Skilt</h2>
            <div className="divider"></div>

            {/* Text Content */}
            <div className="text-box">
                <p className="text">
                    Skilt macht theoretische Inhalte der Handwerks-Ausbildung verständlich
                    und zugänglich.
                </p>
                <p className="text">
                    Die kurzen Wissenshäppchen und interaktiven Quizzes erleichtern das
                    Lernen und sind optimal auf die Bedürfnisse der digitalen Generation
                    abgestimmt.
                </p>
                <p className="text">
                    Skilt SHK wird <strong>im März 2025</strong> im Google Play Store verfügbar sein.
                    Die App richtet sich an Auszubildende im Beruf Anlagenmechaniker*in SHK und wird künftig auch für weitere Handwerksberufe verfügbar sein. 
                    <span> Melde dich <strong className="clickable" onClick={handleOpenPopup}>hier</strong> an, wenn du über das genaue Veröffentlichungsdatum informiert werden möchtest.</span>
                </p>
            </div>

            {/* Newsletter Popup */}
            {isPopupOpen && <NewsletterPopup onClose={handleClosePopup} />}
        </section>
    );
};

export default AboutSection;
