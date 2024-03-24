import React from 'react';
import '../styles/DemoSection.css';

const DemoSection: React.FC = () => {
    return (
        <section className="demo-section" style={{ backgroundImage: "url('/images/background3.png')"}}>

            <div className="slide-container">
                <h3 className="demo-title">App Prototype Demo</h3>
                <div className="demo-slides-container">
                    <div className="demo-slides">
                        {/* Your slides */}
                        <img src="../images/Slide1.png" alt="Demo Screen 1" className="slide" />
                        <img src="../images/Slide2.png" alt="Demo Screen 1" className="slide" />
                        <img src="../images/Slide3.png" alt="Demo Screen 1" className="slide" />
                        <img src="../images/Slide4.png" alt="Demo Screen 1" className="slide" />
                        <img src="../images/Slide5.png" alt="Demo Screen 1" className="slide" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
