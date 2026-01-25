// Slider.jsx

import React, { useState, useEffect } from "react";
import "../styles/Slider.css";

const Slider = ({ slides = [], autoplayInterval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const length = slides.length;

  const next = () => setCurrent((current + 1) % length);
  const prev = () => setCurrent((current - 1 + length) % length);
  const goTo = (idx) => setCurrent(idx);

  useEffect(() => {
    if (length < 2 || autoplayInterval <= 0) return;
    const timer = setInterval(() => {
      if (!isPaused) next();
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [current, isPaused, autoplayInterval, length]);

  if (length === 0) return null;

  const slide = slides[current];

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {length > 1 && (
        <button className="arrow left" onClick={prev} aria-label="Zurück">
          ‹
        </button>
      )}

      <div className="slide-content">
        {slide.content ? (
          slide.content
        ) : (
          <>
            <img
              src={slide.src}
              className="slider-image"
              alt={slide.text || `Slide ${current + 1}`}
            />
            {slide.text && <div className="slide-text">{slide.text}</div>}
          </>
        )}
      </div>

      {length > 1 && (
        <button className="arrow right" onClick={next} aria-label="Weiter">
          ›
        </button>
      )}

      <div className="dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Gehe zu Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
