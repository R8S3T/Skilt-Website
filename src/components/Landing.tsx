import React from 'react';

const Landing: React.FC = () => {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-cover bg-center" 
            style={{ 
                backgroundImage: "url('images/background.png')", 
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
