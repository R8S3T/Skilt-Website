// SecondSection.jsx

import React from "react";
import "../styles/SecondSection.css";
import Slider from "./Slider";
import DownloadTabs from "./DownloadTabs";

const SecondSection = () => {
    return (
    <section className="second-section">
    {/* Text Content */}
    <div className="text-box">
        <h2 className="heading">Skilt Lernapp für SHK</h2>
        <p className="text">
        Skilt macht die theoretischen Inhalte aus deiner Ausbildung <strong>Anlagenmechaniker*in (SHK)</strong> einfach zugänglich – wie du sie aus dem Buch kennst, aber im App-Format.
        </p>
        <p className="text">
        Über <strong>1200 kurze Lerneinheiten</strong> erklären die Inhalte verständlich und praxisnah – klar gegliedert nach Lehrjahren und Lernfeldern.
        </p>
        <p className="text">
            <strong>Quizfragen</strong> zwischen den Einheiten helfen dir dabei, das Gelernte direkt anzuwenden und zu festigen <em>(perfekt für die Prüfungsvorbereitung!).</em>
            </p>
        <p className="text">
        Alle Inhalte sind <strong>offline</strong> verfügbar, sodass du jederzeit und überall lernen kannst.
        </p>

        <DownloadTabs />

    </div>


    {/* Image Content */}
      <div className="image-box">
        <Slider
          slides={[
            { src: "/images/skilt_website_mockup_homescreen.png", text: "Alle 15 Lernfelder der Ausbildung - kompakt in einer App" },
            { src: "/images/skilt_website_mockup_lehrjahre.png", text: "Jedes Lernfeld ist in kleine, gut strukturierte Kapitel gegliedert" },
            { src: "/images/skilt_website_mockup_slide_start.png", text: "Kurze Kapitel mit klaren Texten und anschaulichen Inhalten" },
            { src: "/images/skilt_website_mockup_slide_2.png", text: "Über 350 Grafiken erklären Bauteile und Abläufe Schritt für Schritt" },
            { src: "/images/skilt_website_mockup_slide_3.png", text: "Komplexe Themen einfach erklärt" },
            { src: "/images/skilt_website_mockup_quiz.png", text: "Mit kleinen Quizzen zwischendurch das Gelernte vertiefen" },
            { src: "/images/skilt_website_mockup_lernkarte_frage.png", text: "Über 1.000 Lernkarten ..." },
            { src: "/images/skilt_website_mockup_lernkarte_antwort.png", text: "... zum Selbsttesten" },
            { src: "/images/skilt_website_mockup_mathemodul.png", text: "Technische Mathematik anschaulich und verständlich" },
            { src: "/images/skilt_website_mockup_suche.png", text: "Mit der Suchfunktion direkt zur passenden Erklärung" },
          ]}
        />
      </div>
    </section>

    );
};

export default SecondSection;
