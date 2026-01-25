import React from "react";
import Slider from "./Slider";
import "../styles/TiktokSection.css";

const TiktokSection = () => {
  const slides = [
    {
      content: (
            <video
            controls
              src="/videos/tiktok_28_04_Druckminderer.mp4"
              poster="/images/Druckminderer_Poster.png"
              style={{ width: "100%", borderRadius: "1rem" }}
          />
      ),
    },
    {
      content: (
          <video
            controls
            src="/videos/tiktok_06_04_Massestrom.mp4"
            poster="/images/Berechnungen_Poster.png"
            style={{ width: "100%", borderRadius: "1rem" }}
          />
      ),
    },
    {
      content: (
          <video
            controls
            src="/videos/tiktok_27_04_quiz_schutzleiter.mp4"
            poster="/images/quiz_Poster.png"
            style={{ width: "100%", borderRadius: "1rem" }}
          />

      ),
    },
    {
      content: (
        <a href="https://www.tiktok.com/@skilt_lernapp" target="_blank" rel="noopener noreferrer">
          <img src="/images/tiktok_Poster.png" alt="TikTok Lernhäppchen" className="slider-image" />
        </a>
      ),
    },
  ];


  return (
    <div className="outer-wrapper">
      <section className="tiktok-section">
        <div className="text-box">
          <h2>Du willst sofort loslernen?</h2>
          <p>Schau dir unsere Lernhäppchen auf TikTok an.</p>
        </div>
        <div className="slider-box tiktok-slider">
          <Slider
            slides={slides}
            autoplayInterval={null}
          />
        </div>
      </section>
    </div>
  );
};

export default TiktokSection;
