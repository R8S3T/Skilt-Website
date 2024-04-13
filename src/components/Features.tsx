import React, { useEffect, useRef } from 'react';
import '../styles/Features.css';

const Features: React.FC = () => {
    const featuresRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const featuresSection = featuresRef.current;
        if (!featuresSection) return;

        let observer: IntersectionObserver;

        const startAnimation = () => {
            const images = document.querySelectorAll('.feature-image');

            images.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add('spin-animation');
                }, index * 1000); // Adjust the delay as needed
            });
        };

        const stopAnimation = () => {
            const images = document.querySelectorAll('.feature-image');
            images.forEach((image) => {
                image.classList.remove('spin-animation');
            });
        };

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAnimation();
                } else {
                    stopAnimation();
                }
            });
        });

        observer.observe(featuresSection);

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="features-container" ref={featuresRef}>
            <div className="max-width-container">
                {/* Row 1 */}
                <div className="flex flex-wrap justify-between items-center mb-12">
                    {/* Feature 1 */}
                    <div className="feature-item">
                        <img src="../images/bullet1.png" alt="Expert-led video" className="feature-image" style={{ animationDelay: '0s' }} />
                        <div className="feature-text text-my-heading">
                            <h3>Praxisnahes Lernen</h3>
                            <p>Die Inhalte von Skilt orientieren sich an den Lehrplänen der Berufsschulen und schaffen so eine nahtlose Verbindung zum Unterricht.</p>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="feature-item">
                        <img src="../images/bullet2.png" alt="In-demand topics" className="feature-image" style={{ animationDelay: '2s' }} />
                        <div className="feature-text text-my-heading">
                            <h3>Kurze Lerneinheiten</h3>
                            <p>Skilt bietet kurze, inhaltsreiche Lerneinheiten, die komplexe Themen einfach vermitteln und sich perfekt in den Alltag integrieren lassen.</p>
                        </div>
                    </div>
                </div>
                {/* Horizontal Divider */}
                <div className="horizontal-divider"></div>
                {/* Row 2 */}
                <div className="flex flex-wrap justify-between items-center">
                    {/* Feature 3 */}
                    <div className="feature-item">
                        <img src="../images/bullet3.png" alt="Segment learning" className="feature-image" style={{ animationDelay: '4s' }} />
                        <div className="feature-text text-my-heading">
                            <h3>Offline nutzbar</h3>
                            <p>Mit der Offline-Funktion wird sichergestellt, dass überall gelernt werden kann. Und es werden nur notwendige Daten gespeichert</p>
                        </div>
                    </div>
                    {/* Feature 4 */}
                    <div className="feature-item">
                        <img src="../images/bullet4.png" alt="Interactive learning" className="feature-image" style={{ animationDelay: '6s' }} />
                        <div className="feature-text text-my-heading">
                            <h3>Quizzes und Prüfungsvorbereitung</h3>
                            <p>Durch Übungen und Quizzes wird das Gelernte gefestigt und bereitet mit dem Prüfungsmodul optimal auf Prüfungen vor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;




