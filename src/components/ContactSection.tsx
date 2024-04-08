import React from 'react';
import '../styles/ContactSection.css';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-title">Kontakt</h2>
                <div className="sprite-wrapper">
                    <img src="../images/rebecca.png" alt="Rebecca" className="rebecca-sprite"/>
                    <img src="../images/flori.png" alt="Florian" className="flori-sprite"/>
                </div>
                <a href="mailto:info@skilt.app" className="contact-email">info@skilt.app</a>
                <p className="contact-info">
                    Wenn du mehr wissen willst oder mitmachen möchtest – ob als Einzelperson oder mit deinem Unternehmen – schreib uns einfach an.
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
