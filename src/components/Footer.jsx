import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Footer.css"; // Import the separated styles
import NewsletterPopup from "../pages/Newsletter";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleStartClick = () => {
        if (location.pathname === "/") {
            // Use a ref or scroll directly to the StartSection if on the main page
            const startSection = document.querySelector(".start-section");
            if (startSection) {
                startSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Navigate to the main page and then scroll to the StartSection
            navigate("/", { replace: true });
        }
    };

    const handleOpenNewsletter = () => {
        setIsPopupOpen(true);
    };

    const handleCloseNewsletter = () => {
        setIsPopupOpen(false);
    };

    return (
        <footer className="footer">
            <nav>
                {/* Start Link */}
                <button onClick={handleStartClick} className="footer-link">
                    Start
                </button>

                {/* Kontakt - Email Link */}
                <a href="mailto:info@skilt.app" className="footer-link">
                    Kontakt
                </a>

                {/* Impressum Link */}
                <a href="/impressum" className="footer-link">
                    Impressum
                </a>

                {/* Newsletter Link */}
                <button onClick={handleOpenNewsletter} className="footer-link">
                    Newsletter
                </button>
            </nav>

            {/* Newsletter Popup */}
            {isPopupOpen && <NewsletterPopup onClose={handleCloseNewsletter} />}
        </footer>
    );
};

export default Footer;
