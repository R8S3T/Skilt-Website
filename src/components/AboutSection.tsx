import React from 'react';
import '../styles/AboutSection.css'

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-column-left">
                <h2 className="about-title">Über Skilt</h2>
            </div>
            <div className="about-column-middle">
                <p className="about-text">
                Skilt entstand aus der Vision, digitales Lernen im Handwerk zu revolutionieren. Wir haben es uns zur Aufgabe gemacht, theoretisches Wissen in verständliche, lebensnahe Lernmodule umzuwandeln – perfekt zugeschnitten auf die Bedürfnisse von Lehrlingen und Berufsumsteigern. Mit unserer Plattform wird Lernen nicht nur vereinfacht, sondern auch in den digitalen Alltag integriert.

Unsere Inhalte sind klar formuliert und jederzeit zugänglich, selbst offline. Durch regelmäßige Quizzes festigen Nutzer ihr Wissen. Datenschutz ist uns dabei sehr wichtig; wir sammeln nur essentielle Daten, um eine sichere Lernatmosphäre zu garantieren. Skilt ist ideal sowohl für Einzelpersonen als auch für kleine Betriebe, die nach hochwertigen Bildungsressourcen suchen.

Die Entwicklung von Skilt wird durch unsere Erfahrungen als Ausbilder und durch das Wissen um die Kraft digitaler Bildung vorangetrieben. Wir arbeiten daran, Skilt bald einem breiten Publikum vorzustellen.
                </p>
            </div>
            <div className="about-column-right">
                {/* This can be left empty if it's just for the background color */}
            </div>
        </section>
    );
};

export default AboutSection;
