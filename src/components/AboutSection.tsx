import React from 'react';
import '../styles/AboutSection.css'
const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="about-title">Über Skilt</h2>
                <p className="about-text">
                    Unsere Mission begann mit einer persönlichen Erkenntnis: Digitale Lernmittel müssen
                    komplexe Themen einfach und zugänglich erklären können. Inspiriert von den Herausforderungen,
                    mit denen Auszubildende und Umschüler im SHK-Bereich konfrontiert sind, entwickelten wir
                    Skilt - eine maßgeschneiderte Plattform, die Fachwissen in klare, leicht verständliche
                    Lerneinheiten übersetzt. Unser Ziel ist es, eine interaktive und intuitive Umgebung zu
                    schaffen, die nicht nur das Lernerlebnis verbessert, sondern es auch spannend und
                    motivierend gestaltet. Mit Skilt werden komplexe Inhalte in kompakte, leicht zugängliche
                    Module umgewandelt, die ein flexibles Lernen – jederzeit und überall – ermöglichen und
                    echte Fortschritte in der Theorieausbildung fördern.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
