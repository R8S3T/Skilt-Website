import React, { useEffect, useRef } from 'react';
import '../styles/DemoSection.css';

const DemoSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        // Initial duplication to ensure there is enough content to start with
        scrollContainer.innerHTML += scrollContainer.innerHTML;

        let requestID;
        const speed = 2; // Speed of the scroll

        const step = () => {
            if (!scrollContainer) return;

            // Move the scroll position
            scrollContainer.scrollLeft += speed;

            // Check if we need to append more slides
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                // Append additional slides to continue the illusion of infinite scrolling
                scrollContainer.innerHTML += scrollContainer.innerHTML;
            }

            requestID = requestAnimationFrame(step);
        };

        requestID = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(requestID);
            scrollContainer.scrollLeft = 0; // Reset on component unmount
        };
    }, []);

    return (
        <section id="demo" className="demo-section">
            <div className="slide-container">
                <div className="demo-slides-container">
                    <div className="demo-slides" ref={scrollContainerRef}>
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

