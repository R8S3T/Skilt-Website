import React from 'react';
import '../styles/Impressum.css';

const Impressum: React.FC = () => {
    return (
        <div className="impressum-container">
            <h2 className="impressum-heading">Impressum</h2>
            <div className="impressum-details">
                <p>Angaben gemäß § 5 Telemediengesetz:</p>
                <div className="impressum-address">
                <p>Calisma</p>
                <p>Wattstr. 8</p>
                <p>12459 Berlin</p>
                <p>Deutschland</p>
                </div>
                <p>Vertreten durch:</p>
                <p>Rebecca Stelter</p>
                <p>Kontakt:</p>
                <p className="impressum-contact">info@skilt.app</p>
            </div>
        </div>
    );
};

export default Impressum;