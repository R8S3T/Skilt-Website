import React from "react";
import "../styles/TikTokSection.css";
import Slider from "./Slider";

const TikTokSection = () => {
  const slides = [
    {
      content: (
        <video
          controls
          src="/videos/tiktok_28_04_Druckminderer.mp4"
          poster="/images/Druckminderer_Poster.png"
          className="tiktok-media"
        />
      ),
    },
    {
      content: (
        <video
          controls
          src="/videos/tiktok_06_04_Massestrom.mp4"
          poster="/images/Berechnungen_Poster.png"
          className="tiktok-media"
        />
      ),
    },
    {
      content: (
        <video
          controls
          src="/videos/tiktok_27_04_quiz_schutzleiter.mp4"
          poster="/images/quiz_Poster.png"
          className="tiktok-media"
        />
      ),
    },
    {
      content: (
        <a
          href="https://www.tiktok.com/@skilt_lernapp"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-linkSlide"
        >
          <img
            src="/images/tiktok_Poster.png"
            alt="TikTok Lernhäppchen"
            className="tiktok-media"
          />
        </a>
      ),
    },
  ];

  return (
    <section className="tiktok-section" aria-label="TikTok Bereich">
      <div className="tiktok-inner">
<div className="tiktok-text">
  <h2 className="tiktok-headline">Du willst sofort loslernen?</h2>
  <p className="tiktok-copy">Schau dir unsere Lernhäppchen auf TikTok an.</p>

  <a
    className="tiktok-cta"
    href="https://www.tiktok.com/@skilt_lernapp"
    target="_blank"
    rel="noopener noreferrer"
  >
  Mehr SHK Wissen auf TikTok →
  </a>
</div>


        <div className="tiktok-video">
          <div className="tiktok-videoFrame">
            <Slider slides={slides} autoplayInterval={null} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokSection;
