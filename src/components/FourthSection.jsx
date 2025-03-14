import React from "react";
import "../styles/FourthSection.css";

const FourthSection = () => {
  return (
    <section className="fourth-section">
      {/* Image Area */}
      <div className="imageArea">
        <div className="frame">
          <img
            src="/images/website_section_4.png"
            alt="Zwei Screenshots aus der Skilt Lern-App: Die Übersicht der Mathethemen zeigt grundlegende Inhalte für die SHK-Ausbildung, ergänzt durch ein Beispiel-Slide zum Thema Kreisbogen. Ideal als Nachhilfe und Unterstützung für Auszubildende in mathematischen Grundlagen."
            className="image"
          />
        </div>
      </div>

      {/* Text Area */}
      <div className="textArea">
        <div className="textBox">
          <h2 className="heading">Mathe-Grundlagen auffrischen</h2>
          <p className="text">
            Das Mathemodul hilft dir, grundlegende mathematische Konzepte und
            fachspezifisches Wissen zu wiederholen.
          </p>
        </div>
      </div>
        {/* Divider Line */}
        <div className="divider"></div>
    </section>
  );
};

export default FourthSection;

