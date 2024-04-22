import React, { useState, useEffect, FC } from 'react';
import '../styles/Landing.css';

const Landing: FC = () => {
    // Determine if the display is in landscape mode
    const [isLandscape, setIsLandscape] = useState<boolean>(window.innerWidth > window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setIsLandscape(window.innerWidth > window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getBackgroundImage = (): string => {
        return isLandscape ? "url('/images/background8.png')" : "url('/images/mobile-background1.png')";
    };

    return (
        <div className="background-wrapper">
            <main
                className="landing"
                style={{
                    backgroundImage: getBackgroundImage(),
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }}
            >
                <h2 className="text-6xl text-my-heading text-center font-bold mb-4">
                    Lernen im Handwerk <br />
                    neu definiert
                </h2>
                <p className="text-xl text-my-heading text-center">
                    Effektive Lernhäppchen und Übungen für die Ausbildung {!isLandscape && <br />}
                    in einer App, {!isLandscape && <br />}
                    die perfekt in Deinen Alltag passen
                </p>

                <a href="#features">
                    <button className="mt-8 bg-my-blue text-white font-bold py-2 px-4 rounded hover:bg-orange-500 active:bg-orange-700">
                        Erfahre mehr
                    </button>
                </a>
            </main>
        </div>
    );
};

export default Landing;

