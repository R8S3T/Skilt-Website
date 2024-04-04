import React from 'react';
import '../styles/ContactSection.css'; // Make sure this CSS file exists

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-title">Kontakt</h2>
                <p className="contact-info">
                Wenn du mehr wissen willst oder mitmachen möchtest – ob als Einzelperson oder mit deinem Unternehmen – schreib uns einfach an:
                </p>
                <a href="mailto:info@skiltapp.com" className="contact-email">info@skiltapp.com</a>
            </div>
        </section>
    );
};

export default ContactSection;
