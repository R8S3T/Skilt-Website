import React from 'react';
import '../styles/Landing.css';

const Landing: React.FC = () => {
    // Function to determine which background image to use
    const getBackgroundImage = () => {
        // Using window.innerWidth to get the screen width
        const screenWidth = window.innerWidth;

        // Condition to decide which image to use based on screen width
        if (screenWidth <= 768) { // For mobile devices
            return "url('images/mobile-background1.png')";
        } else { // For tablets and desktops
            return "url('images/background8.png')";
        }
    };

    return (
        <main
        className="landing"
        style={{
            backgroundImage: getBackgroundImage(),
            backgroundPosition: 'center bottom'
        }}
    >
            <h2 className="text-6xl text-my-heading text-center font-bold mb-4">
                Lernen im SHK-Handwerk <br />
                neu definiert
            </h2>
            <p className="text-xl text-my-heading text-center">
                Effektive Lernhäppchen und Übungen für die Ausbildung in einer App, <br />
                die perfekt in Deinen Alltag passen
            </p>
            <a href="#features">
                <button className="mt-8 bg-my-blue text-white font-bold py-2 px-4 rounded hover:bg-orange-500 active:bg-orange-700">
                    Erfahre mehr
                </button>
            </a>
        </main>
    );
};

export default Landing;

