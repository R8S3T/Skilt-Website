import React from 'react';
import '../styles/DemoSection.css';

const DemoSection: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative">
            {/* This div represents the first third with your custom background color */}
            <div className="absolute top-0 left-0 w-full" style={{ height: '33.333%', backgroundColor: '#yourHexCode' }}></div>

            <h3 className="text-3xl text-blue-900 font-bold mb-6 z-10">App Prototype Demo</h3>
            <div className="overflow-hidden relative w-full max-w-4xl h-96"> {/* Container for the scrolling effect */}
                <div className="demo-scrolling"> {/* This will have the scrolling animation */}
                    {/* Repeat the image block for as many screenshots as you have */}
                    <img src="../images/Slide1.png" alt="Demo Screen 1" className="inline-block mx-4" />
                    <img src="../images/Slide2.png" alt="Demo Screen 2" className="inline-block mx-4" />
                    <img src="../images/Slide3.png" alt="Demo Screen 3" className="inline-block mx-4" />
                    <img src="../images/Slide4.png" alt="Demo Screen 4" className="inline-block mx-4" />
                    <img src="../images/Slide5.png" alt="Demo Screen 5" className="inline-block mx-4" />
                    {/* Duplicate the images to create a seamless effect */}
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
