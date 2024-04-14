import React from 'react';
import '../styles/Impressum.css';

const Impressum: React.FC = () => {
    return (
        <div className="impressum-page-container"> {/* New wrapper div */}
            <div className="impressum-container">
                <h2 className="impressum-heading">Impressum</h2>
                <div className="impressum-details">
                    <p>Angaben gemäß § 5 Telemediengesetz:</p>
                    <p><strong>Calisma</strong><br />
                        Wattstr. 8<br />
                        12459 Berlin<br />
                        Deutschland</p>
                    <p><strong>Vertreten durch:</strong><br />
                    Rebecca Stelter</p>
                    <p><strong>Kontakt:</strong><br />
                    <span className="impressum-contact">info@skilt.app</span></p>
                </div>
            </div>
        </div>
    );
};

export default Impressum;

