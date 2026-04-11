import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

// import NewsletterPopup from "../pages/Newsletter"; // Newsletter auskommentiert

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

    return (
        <footer className="footer">
        <div className="footer-nav">
            <button onClick={handleStartClick} className="footer-link">Start</button>
            <a href="mailto:info@skilt.app" className="footer-link">Kontakt</a>
            <a href="/impressum" className="footer-link">Impressum</a>
            <a href="/datenschutz" className="footer-link">Datenschutzerklärung</a>
            <a href="/agb" className="footer-link">AGBs</a>
        </div>

        <div className="footer-socials">
            <a href="https://www.instagram.com/skilt.app/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Instagram">
            <FaInstagram size={22} />
            </a>
            <a href="https://www.tiktok.com/@skilt_lernapp" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="TikTok">
            <FaTiktok size={22} />
            </a>
            <a href="https://www.youtube.com/@SkiltApp" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="YouTube">
            <FaYoutube size={22} />
            </a>
        </div>
        </footer>
    );
};

export default Footer;
