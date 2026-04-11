import React from "react";
import Header from "../components/Header";
import "../styles/Datenschutz.css";

const Datenschutz = () => {
    return (
        <>
            <Header />
            <div className="ds-container">

                <h1 className="ds-title">Datenschutzerklärung</h1>

                <p className="ds-text">
                    Skilt Studio ist eine Marke der Skilt Technical UG (haftungsbeschränkt).
                </p>

                <p className="ds-text">
                    Verantwortlicher:
                </p>

                <p className="ds-text">
                    Skilt Technical UG (haftungsbeschränkt)<br />
                    Gubener Str. 36A<br />
                    03149 Forst (Lausitz)
                </p>

                <p className="ds-text">
                    Kontakt: info@skilt.app
                </p>

                <p className="ds-heading">Allgemeine Hinweise</p>
                <p className="ds-text">
                    Die Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
                </p>

                <p className="ds-heading">Hosting und Server-Logfiles</p>
                <p className="ds-text">
                    Beim Besuch dieser Website werden automatisch Informationen durch den Hostinganbieter erfasst.
                    Dies umfasst insbesondere IP-Adresse, Datum und Uhrzeit, Browsertyp und Betriebssystem.
                </p>

                <p className="ds-heading">Kontaktaufnahme</p>
                <p className="ds-text">
                    Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
                </p>

                <p className="ds-heading">Cookies und Tracking</p>
                <p className="ds-text">
                    Es werden keine Tracking- oder Analyse-Tools eingesetzt.
                </p>

                <p className="ds-heading">Ihre Rechte</p>
                <p className="ds-text">
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.
                </p>

            </div>
        </>
    );
};

export default Datenschutz;