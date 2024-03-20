import React from 'react';
import '../styles/DemoSection.css';

const DemoSection: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-white" style={{ backgroundImage: "url('images/background2.png')"}}>
            <h3 className="text-3xl text-blue-900 font-bold mb-6">App Prototype Demo</h3>
            <div className="overflow-hidden relative w-full max-w-4xl h-96"> {/* Container for the scrolling effect */}
                <div className="demo-scrolling"> {/* This will have the scrolling animation */}
                    {/* Repeat the image block for as many screenshots as you have */}
                    <img src="../images/Slide1.png" alt="Demo Screen 1" className="inline-block mx-4" />
                    <img src="../images/Slide1.png" alt="Demo Screen 2" className="inline-block mx-4" />
                    <img src="../images/Slide1.png" alt="Demo Screen 3" className="inline-block mx-4" />
                    <img src="../images/Slide1.png" alt="Demo Screen 4" className="inline-block mx-4" />
                    <img src="../images/Slide1.png" alt="Demo Screen 5" className="inline-block mx-4" />
                    {/* Duplicate the images to create a seamless effect */}
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
