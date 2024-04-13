import React from 'react';
import '../styles/DemoSection.css';

const DemoSection: React.FC = () => {

    return (
        <section className="demo-section">
            <div className="slide-container">
                <div className="demo-slides-container">
                    <div className="demo-slides">
                        <img src="../images/Slide1.png" alt="Demo Screen 1" className="slide" />
                        <img src="../images/Slide2.png" alt="Demo Screen 2" className="slide" />
                        <img src="../images/Slide3.png" alt="Demo Screen 3" className="slide" />
                        <img src="../images/Slide4.png" alt="Demo Screen 4" className="slide" />
                        <img src="../images/Slide5.png" alt="Demo Screen 5" className="slide" />
                        <img src="../images/Slide6.png" alt="Demo Screen 6" className="slide" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;

