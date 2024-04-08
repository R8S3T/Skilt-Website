import React from 'react';
import '../styles/AboutSection.css'

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-column-left">
                <h2 className="about-title text-blue-200">Über Skilt</h2>
            </div>
            <div className="about-column-middle">
                <p className="about-text">
                    Skilt wurde mit dem Ziel ins Leben gerufen, das digitale Lernen im Handwerksbereich völlig neu zu gestalten. Unser Anliegen ist es, komplexes theoretisches Wissen in praxisnahe, leicht verständliche Lernmodule zu verwandeln, die genau auf die Anforderungen von Auszubildenden und Quereinsteigern zugeschnitten sind.
                </p>
                <p className="about-text">
                    Unsere Plattform macht das Lernen nicht nur einfacher, sondern fügt es nahtlos in den digitalen Alltag ein. Die Lerninhalte sind direkt und jederzeit auch ohne Internetverbindung verfügbar. Durch wiederkehrende Quizze können unsere Nutzer ihr Wissen effektiv vertiefen.
                </p>
                <p className="about-text">
                    Der Schutz persönlicher Daten liegt uns am Herzen; deshalb erheben wir nur die notwendigsten Informationen, um eine sichere Lernumgebung zu gewährleisten.
                </p>
                <p className="about-text">
                    Unsere Erfahrungen als Ausbilder und unsere Überzeugung von der Macht digitaler Bildung treiben die Entwicklung von Skilt voran. Skilt eignet sich hervorragend für Einzelpersonen und kleinere Unternehmen, die Wert auf qualitativ hochwertige Bildungsmaterialien legen. Unsere App befindet sich noch in der Entwicklungsphase und wir bald in den Appstores verfügbar sein.
                </p>
            </div>
            <div className="about-column-right">
                {/* This can be left empty if it's just for the background color */}
            </div>
        </section>
    );
};

export default AboutSection;
