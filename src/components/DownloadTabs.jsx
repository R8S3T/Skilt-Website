import React from "react";
import "../styles/DownloadTabs.css";

const DownloadTabs = ({ filterKey }) => {
  const options = [
            {
        key: "trial",
        label: "Kostenlose Testversion",
        badges: [
            {
        
            href: "https://apps.apple.com/de/app/skiltshkbasic/id6744090814",
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
                href: "https://apps.apple.com/de/app/formel-guide-shk/id6747951535",
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
            {
            key: "gp1",
            label: "Jetzt erhältlich für 12,99 €",
            badges: [
                {
                href: "https://apps.apple.com/de/app/id6758403565",
                src: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
                alt: "App Store",
                },
                {
                href: "https://play.google.com/store/apps/details?id=com.rst83.Skilt_GP1_SHK",
                src: "/images/GetItOnGooglePlay_Badge_Web_color_German.png",
                alt: "Google Play",
                },
            ],
            },
            {
                key: "gp2",
                label: "Jetzt erhältlich für 14,99 €",
                badges: [
                    {
                    href: "https://apps.apple.com/de/app/skilt-shk-gp2/id6761331238",
                    src: "/images/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
                    alt: "App Store",
                    },
                    {
                    href: "https://play.google.com/store/apps/details?id=com.Skilt_GP2_SHK&hl=de&gl=DE",
                    src: "/images/GetItOnGooglePlay_Badge_Web_color_German.png",
                    alt: "Google Play",
                    },
                ],
            }

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
                {badges.map(({ href, src, alt, disabled, note }, i) => (
                <div key={i} className={`badge-wrapper ${disabled ? "disabled" : ""}`}>
                    {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={alt} />
                    </a>
                    ) : (
                    <img src={src} alt={alt} />
                    )}
                    {note && <div className="badge-note">{note}</div>}
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>
    );
};

export default DownloadTabs;

