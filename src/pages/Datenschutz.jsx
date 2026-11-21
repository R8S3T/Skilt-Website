import React from "react";
import Header from "../components/Header";
import { CAMPUS_PRIVACY } from "../data/campusLinks";
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
                    Diese Website wird bei der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, gehostet.
                    Beim Aufruf der Website verarbeitet IONOS in unserem Auftrag automatisch Daten, die Ihr
                    Browser übermittelt: IP-Adresse in anonymisierter Form, Datum und Uhrzeit des Zugriffs,
                    aufgerufene Seite, Browsertyp und Betriebssystem. Das ist nötig, um die Website sicher und
                    stabil bereitzustellen.
                </p>
                <p className="ds-text">
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im
                    sicheren und fehlerfreien Betrieb der Website. Mit IONOS besteht ein Vertrag zur
                    Auftragsverarbeitung nach Art. 28 DSGVO. Die Logfiles werden höchstens acht Wochen
                    gespeichert und danach gelöscht.
                </p>

                <p className="ds-heading">Kontaktaufnahme per E-Mail</p>
                <p className="ds-text">
                    Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu
                    bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage mit einem
                    Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, sonst Art. 6 Abs. 1 lit. f DSGVO
                    (berechtigtes Interesse an der Beantwortung). Wir löschen die Daten, sobald die Anfrage
                    erledigt ist, außer gesetzliche Aufbewahrungspflichten stehen dem entgegen.
                </p>

                <p className="ds-heading">Skilt Campus</p>
                <p className="ds-text">
                    Für die App Skilt Campus gelten eigene Datenschutzhinweise. Diese Website verarbeitet
                    selbst keine Daten aus der App.
                </p>
                <p className="ds-text ds-links">
                    Skilt Campus Solo:{" "}
                    <a href={CAMPUS_PRIVACY.solo}>{CAMPUS_PRIVACY.solo}</a>
                    <br />
                    Skilt Campus Team:{" "}
                    <a href={CAMPUS_PRIVACY.team}>{CAMPUS_PRIVACY.team}</a>
                </p>

                <p className="ds-heading">Links zu anderen Anbietern</p>
                <p className="ds-text">
                    Unsere Website enthält Links zum Apple App Store, zu Google Play, zu Instagram, TikTok und
                    YouTube sowie zu Presseartikeln. Daten werden erst übertragen, wenn Sie einen Link
                    anklicken. Dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
                </p>

                <p className="ds-heading">Cookies und Tracking</p>
                <p className="ds-text">
                    Es werden keine Tracking- oder Analyse-Tools eingesetzt.
                </p>

                <p className="ds-heading">Ihre Rechte</p>
                <p className="ds-text">
                    Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung
                    (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20).
                    Wenden Sie sich dafür an info@skilt.app.
                </p>

                <p className="ds-heading">Widerspruchsrecht</p>
                <p className="ds-text">
                    Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, können Sie aus
                    Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen
                    (Art. 21 DSGVO).
                </p>

                <p className="ds-heading">Beschwerderecht</p>
                <p className="ds-text">
                    Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für uns
                    zuständig ist die Landesbeauftragte für den Datenschutz und für das Recht auf
                    Akteneinsicht Brandenburg, Stahnsdorfer Damm 77, 14532 Kleinmachnow.
                </p>

                <p className="ds-text">Stand: November 2026</p>

            </div>
        </>
    );
};

export default Datenschutz;
