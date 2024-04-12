import React from 'react';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => {
    return (
        <section className="about-section my-16">
            <div className="about-column-left">
                <h2 className="about-title text-blue-200">Über Skilt</h2>
            </div>
            <div className="about-column-main">
                <p className="about-text text-blue-200">
                    Skilt ist eine Lernapp für Auszubildende im Handwerk, die komplexes Wissen in einfache und verständliche Lerneinheiten aufbricht. Durch interaktive Quizzes und kurze Wissenshäppchen wird das Lernen nicht nur effektiver, sondern auch persönlicher gestaltet. So können Nutzer jederzeit und überall auf die Inhalte zugreifen und in ihrem eigenen Tempo lernen.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
