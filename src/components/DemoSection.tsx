import React, { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/DemoSection.css';

const DemoSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    // Setting up swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (window.innerWidth <= 768) {
                setCurrentIndex(c => (c + 1) % 6); // Assuming there are 6 slides (0-5)
                setIsAutoScrolling(false); // Stop auto scrolling on swipe
            }
        },
        onSwipedRight: () => {
            if (window.innerWidth <= 768) {
                setCurrentIndex(c => (c - 1 + 6) % 6);
                setIsAutoScrolling(false); // Stop auto scrolling on swipe
            }
        },
        trackMouse: true,
        onSwiping: (event) => {
            event.event.preventDefault(); // Prevent default to disable page scroll during swipe
        }
    });

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    useEffect(() => {
        if (window.innerWidth > 768) { // Only apply automatic scrolling on wider screens
            if (isAutoScrolling) {
                const scrollContainer = scrollContainerRef.current;
                if (!scrollContainer) return;

                scrollContainer.innerHTML += scrollContainer.innerHTML; // Duplicate content

                let requestID;
                const speed = 2; // Speed of the scroll

                const step = () => {
                    scrollContainer.scrollLeft += speed;
                    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                        scrollContainer.innerHTML += scrollContainer.innerHTML; // Ensure infinite content
                    }
                    requestID = requestAnimationFrame(step);
                };

                requestID = requestAnimationFrame(step);
                return () => {
                    cancelAnimationFrame(requestID);
                    scrollContainer.scrollLeft = 0; // Reset on component unmount
                };
            }
        }
    }, [isAutoScrolling]);

    return (
        <section id="demo" className="demo-section" {...swipeHandlers}>
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






