import React from "react";
import "../styles/Newsletter.css";

const NewsletterPopup = ({ onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>
                    ×
                </button>
                <iframe
                    src="https://1de47af3.sibforms.com/serve/MUIFAEicIxg_YJZHjm_NWLdSYRuBidkm9h5C91h2T-VfE6SEsOoq87j69QlgdX7TowFSGu9W5RXf7Fm4zh81redIvEpkSBPu1uprcaFWC7OVtBSmr_nsEtFstKXuRcMxlh6ndxToQJeW61DnK-mWGCaqSMZP3e02NzQ-eWPgRaY0Vxe_G4RTdWBaKlk89wFws-DfJqxhaVzSnnvo"
                    width="100%"
                    height="500"
                    style={{ border: "none" }}
                    title="Newsletter Anmeldung"
                ></iframe>
            </div>
        </div>
    );
};

export default NewsletterPopup;
