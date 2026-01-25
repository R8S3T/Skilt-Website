// ThirdSection.jsx

import React from "react";
import "../styles/ThirdSection.css";
import Slider from "./Slider";
import DownloadTabs from "./DownloadTabs";

const ThirdSection = () => {
    return (
        <section className="third-section">
        {/* Desktop: Bild zuerst */}
        <div className="image-box desktop-only">
{/*             <div className="announcement">
            Neu im App Store &amp; bei Google Play
            </div> */}
            <Slider
            slides={[
                { src: "/images/skilt_website_mockup_formel_guide_start.png", text: "Alle wichtigen SHK-Formeln in einer App" },
                { src: "/images/skilt_mockup_formel_guide_kategorie.png", text: "Formeln übersichtlich nach Themen sortiert" },
                { src: "/images/skilt_mockup_formel_guide_formel_start.png", text: "Jede Formel zeigt dir, wo sie angewendet wird," },
                { src: "/images/skilt_mockup_formel_guide_formel_Erklaerung.png", text: "was ihre Symbole und Einheiten bedeuten," },
                { src: "/images/skilt_mockup_formel_guide_formel_Rechenbeispiel.png", text: "und liefert ein kurzes Rechenbeispiel." },
                { src: "/images/skilt_mockup_formel_guide_AZ_Suche.png", text: "Alphabetisches Verzeichnis aller Formeln von A bis Z" },
                { src: "/images/skilt_mockup_formel_guide_suche.png", text: "Gib einen Begriff ein und finde die Formel sofort" },
            ]}
            />
        </div>

        {/* Textbox danach */}
        <div className="text-box">
            <h2 className="heading">Formel Guide SHK</h2>
            <p className="text">
            Mit dem <strong>Formel Guide SHK</strong> hast du über <strong>200 wichtige Formeln</strong> für die <strong>Vorbereitung auf die Gesellen- und Meisterprüfung</strong> in der Ausbildung Anlagenmechaniker*innen (SHK) immer griffbereit.
            </p>

            <div className="image-box mobile-slider">
{/*             <div className="announcement">
                Neu im App Store &amp; bei Google Play
            </div> */}
            <Slider
                slides={[
                { src: "/images/skilt_website_mockup_formel_guide_start.png", text: "Alle wichtigen SHK-Formeln in einer App" },
                { src: "/images/skilt_mockup_formel_guide_kategorie.png", text: "Formeln übersichtlich nach Themen sortiert" },
                { src: "/images/skilt_mockup_formel_guide_formel_start.png", text: "Jede Formel zeigt dir, wo sie angewendet wird," },
                { src: "/images/skilt_mockup_formel_guide_formel_Erklaerung.png", text: "was ihre Symbole und Einheiten bedeuten," },
                { src: "/images/skilt_mockup_formel_guide_formel_Rechenbeispiel.png", text: "und liefert ein kurzes Rechenbeispiel." },
                { src: "/images/skilt_mockup_formel_guide_AZ_Suche.png", text: "Alphabetisches Verzeichnis aller Formeln von A bis Z" },
                { src: "/images/skilt_mockup_formel_guide_suche.png", text: "Gib einen Begriff ein und finde die Formel sofort" },
                ]}
            />
            </div>

            <p className="text">
            Alle Formeln sind übersichtlich in Fachkategorien gegliedert und lassen sich sowohl <strong>alphabetisch (A–Z)</strong> als auch über die integrierte <strong>Suchfunktion</strong> blitzschnell finden.
            </p>
            <p className="text">
            Zu jeder Formel gibt es eine klare <strong>Anwendungsbeschreibung</strong>, eine verständliche Erklärung der <strong>Formelbestandteile</strong> und ein ausführliches <strong>Rechenbeispiel</strong>, das die Praxis direkt trainiert.
            </p>

            {/* Download-Badges für Formel Guide – ohne Tabs */}
            <div className="download-tabs">
                <div className="option-card">
                    <div className="option-header">Jetzt erhältlich für 4,99 €</div>
                    <div className="badges">
                    <a
                        href="https://apps.apple.com/us/app/formel-guide-shk/id6747951535"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg"
                        alt="App Store"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.skilt.formelguideshk.neu&hl=de"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                        src="/images/GetItOnGooglePlay_Badge_Web_color_German.png"
                        alt="Google Play"
                        />
                    </a>
                    </div>
                </div>
            </div>

        </div>
        </section>

    );
};

export default ThirdSection;