import React from 'react';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="about-section my-16">
            <div className="about-column-left">
                <h2 className="about-title text-blue-200">Über Skilt</h2>
            </div>
            <div className="about-column-main">
            <div className="about-text text-blue-200">
                <p>Skilt macht komplexe Themen aus der SHK-Ausbildung leicht verständlich und zugänglich.</p>
                <p>Die kurzen Wissenshäppchen und interaktiven Quizzes gestalten das Lernen nicht nur effektiver, sondern sind auch optimal an die Bedürfnisse der digitalen Generation angepasst.</p>
                <p>Die App ist ein zuverlässiger Begleiter während der Ausbildung um das Gelernte zu vertiefen und zu festigen.</p>
            </div>
            </div>
        </section>
    );
};

export default AboutSection;
