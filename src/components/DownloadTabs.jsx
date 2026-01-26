import React from "react";
import "../styles/DownloadTabs.css";

const DownloadTabs = ({ filterKey }) => {
  const options = [
            {
        key: "trial",
        label: "Kostenlose Testversion",
        badges: [
            {
            href: "https://apps.apple.com/app/id6744090814",
            src: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
            alt: "TestFlight",
            },
            {
            href: "https://play.google.com/store/apps/details?id=com.skilt.shk.trial",
            src: "/images/GetItOnGooglePlay_Badge_Web_color_German.png",
            alt: "Google Play Test",
            },
        ],
        },
        {
        key: "buy",
        label: "Kaufen (19,99 €)",
        badges: [
            {
            href: "https://apps.apple.com/de/app/id6743942886",
            src: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
            alt: "App Store",
            },
            {
            href: "https://play.google.com/store/apps/details?id=com.skilt.shk",
            src: "/images/GetItOnGooglePlay_Badge_Web_color_German.png",
            alt: "Google Play",
            },
        ],
        },
        {
            key: "formelguide",
            label: "Jetzt erhältlich für 4,99 €",
            badges: [
                {
                href: "https://apps.apple.com/us/app/formel-guide-shk/id6747951535",
                src: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
                alt: "App Store",
                },
                {
                href: "https://play.google.com/store/apps/details?id=com.skilt.formelguideshk.neu&hl=de",
                src: "/images/GetItOnGooglePlay_Badge_Web_color_German.png",
                alt: "Google Play",
                },
            ],
            },
    ];

      const filteredOptions = filterKey
    ? options.filter((o) => o.key === filterKey)
    : options;

    return (
        <div className="download-tabs">
        {filteredOptions.map(({ key, label, badges }) => (
            <div key={key} className="option-card">
            <div className="option-header">{label}</div>
            <div className="badges">
                {badges.map(({ href, src, alt }, i) => (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={src} alt={alt} />
                </a>
                ))}
            </div>
            </div>
        ))}
        </div>
    );
};

export default DownloadTabs;

