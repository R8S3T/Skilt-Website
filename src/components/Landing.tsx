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
            return "url('images/background6.png')";
        }
    };

    return (
        <main className="landing flex flex-col justify-center items-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: getBackgroundImage(), // Using the function to set the background image
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom'
            }}>
            <h2 className="text-6xl text-my-heading text-center font-bold mb-4">
                Lernen im Handwerk <br />
                neu definiert
            </h2>
            <p className="text-xl text-my-heading text-center">
                Effektive Lernhäppchen und Übungen in einer App, <br />
                die perfekt in Deinen Alltag passen
            </p>
            <button className="mt-8 bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">
                Get Started
            </button>
        </main>
    );
};

export default Landing;

