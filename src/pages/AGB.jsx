// src/pages/AGB.tsx
import React from "react";
import Header from "../components/Header";
import "../styles/AGB.css";

const AGB = () => {
    return (
        <>
            <Header />
            <div className="agb-container">
                <div className="agb-frame">
                    <h1 className="agb-title">Nutzungsbedingungen (AGB)</h1>
                    <p className="agb-text">
                        Skilt Studio ist Betreiber der Lernplattform-App Skilt für die Handwerks-Ausbildung. [...]
                        Skilt Studio ist Betreiber der Lernplattform- App Sklit für die Handwerks-Ausbildung. Die Sklit App richtet sich an Auszubildende im Beruf Anlagenmechaniker*in in SHK. Nutzer können in mehreren Modulen, Ihr Wissen im Bereich erweitern.
                    </p>
                    <p className="agb-text">
                        <strong>1. Geltungsbereich</strong>
                    </p>

                    <p className="agb-text">1.1. Diese Nutzungsbedingungen gelten für das Vertragsverhältnis zwischen Skilt Studio, Gubener Str. 36A, 03149 Forst (Lausitz) und den Nutzern der Sklit- App (nachfolgend „Sklit“ genannt) im Rahmen der privaten Nutzung des Dienstleistungsangebotes. Eine gewerbliche Nutzung des Dienstleistungsangebotes ist ausdrücklich ausgeschlossen. Ergänzend zu den vorliegenden Nutzungsbedingungen finden auf den Download der Sklit App die Regelungen der jeweiligen Vertriebsplattformen (z.B. Google Play für Android Endgeräte) Anwendung. Es kommt kein Nutzungsvertrag mit der jeweiligen Vertriebsplattform zustande. Sklit und nicht die Vertriebsplattform sind für die Sklit App verantwortlich. Dies gilt auch in Hinblick auf den etwaigen Support oder der Wartung oder für den Fall, dass Sklit und/ oder dieser Nutzungsvertrag Rechte Dritter verletzen. Die Verantwortlichkeit von Sklit erstreckt sich auf sämtliche Ansprüche des Nutzers aus dem Nutzungsvertrag, insbesondere aber nicht abschließend betreffend Mängelgewährleistung oder sonstige Leistungsstörungsrechte sowie Beanstandungen jeglicher Art betreffend die Erfüllung gesetzlicher oder behördlicher Anforderungen.
                    </p>
                    <p className="agb-text">1.2. Diese Nutzungsbedingungen gelten für alle Bestellvorgänge für Dienste, die Du im Rahmen einer Vertriebsplattform, online, per E-Mail oder anderweitig durchgeführt hast und zwischen Dir und Skilt Studio vereinbart werden (nachfolgend „Bestellung“ genannt). Diese Nutzungsbedingungen werden Bestandteil jeder vereinbarten Bestellung.
                    </p>
                    <p className="agb-text">1.3. Es gelten ausschließlich diese Nutzungsbedingungen. Abweichende, ergänzende oder widersprechende Nutzungsbedingungen gelten nur insoweit, als Skilt Studio diesen ausdrücklich schriftlich zugestimmt hat. 
                    </p>
                    <p className="agb-text">1.4. Soweit nichts anderes bestimmt ist, sind alle Erklärungen und Mitteilungen, die Du gegenüber Skilt Studio abgibst in Textform abzugeben (E-Mail ausreichend).
                    </p>

                    <p className="agb-text">
                        <strong>2. Dienstleistungsangebot</strong>
                    </p>
                    <p className="agb-text">2.1. Das Dienstleistungsangebot von Skilt Studio beinhaltet den Zugang zu einer Lernsoftware. Die Lernsoftware setzt sich aus verschiedenen Modulen zusammen und bietet eine strukturierte Aufbereitung theoretischer Inhalte für die Ausbildung im SHK-Handwerk (Sanitär, Heizung, Klima).

                    🔹 Lernfelder: Zugriff auf 15 Lernfelder der SHK-Ausbildung, abgestimmt auf das jeweilige Lehrjahr.
                    🔹 Lernkarten: Interaktive Fragen zur Wiederholung und Festigung des Wissens.
                    🔹 Fachmathematik: Grundlagen der Mathematik für das SHK-Handwerk zum Üben und Anwenden.
                    🔹 Offline-Nutzung: Alle Inhalte sind jederzeit auch ohne Internetverbindung verfügbar.
                    🔹 Fortschrittsanzeige: Kapitelweise Bearbeitung und Nachverfolgung des Lernfortschritts.

                    Testversion: Skilt Studio stellt Nutzern eine kostenfreie Testversion der Sklit App mit eingeschränktem Funktionsumfang zur Verfügung. Diese Testversion dient ausschließlich der Erprobung und dem Kennenlernen der Lerninhalte und Funktionen. Ein vollständiger Zugang zu sämtlichen Diensten ist nur nach Erwerb einer kostenpflichtigen Lizenz gemäß Ziffer 2.2 möglich.
                    </p>
                    <p className="agb-text">2.2. Der entsprechende Umfang wird in der Bestellung detailliert aufgeführt (nachfolgend „Dienste“ genannt). Die von Skilt Studio angebotenen Dienste werden nur gegen Zahlung einer Gebühr bereitgestellt. Der Umfang der angebotenen Dienste kann nach eigenem Ermessen durch Skilt Studio und aus triftigen Gründen geändert (insbesondere aus Gründen der Benutzerfreundlichkeit, der technischen Funktionsfähigkeit oder geänderter Nutzerbedürfnisse und Verhaltensweisen) werden. Auch kann der Zugang zu bestimmten Diensten eingestellt werden. Skilt Studio wird Dich innerhalb einer angemessenen Frist vor dem Wirksamwerden der Änderungen informieren und Dich über die zur Verfügung stehenden Rechtsbehelfe sowie der Möglichkeit zur vorzeitigen Beendigung des Vertragsverhältnisses informieren.
                    </p>
                    <p className="agb-text">2.3. Skilt Studio steht es frei neue Versionen, Upgrades oder sonstige Änderungen der Dienste zu implementieren. Dies betrifft insbesondere, aber nicht abschließend technische Spezifikationen, Anpassung der Betriebsweise, Features, das Design. Soweit diese Änderungen in Übereinstimmung mit dem geltendem Recht zur Einhaltung gesetzlicher Vorschriften, Verbesserung der Benutzerfreundlichkeit, des Betriebs der Dienste oder anderen wirtschaftlichen, rechtlichen oder technischen Gründen erforderlich sind, können diese jederzeit umgesetzt werden.
                    </p>

                    <p className="agb-text">
                        <strong>3. Vertragsschluss</strong>
                    </p>
                    <p className="agb-text">3.1. Der Vertrag über die Nutzung der Dienste von Skilt Studio kommt zustande, wenn Du auf der entsprechenden Vertriebsplattform die „Herunterladen“ – bzw. „Installieren“ und nach Auswahl innerhalb der jeweiligen Vertriebsplattform angebotenen Bezahlfunktion die „Kaufen“ – Schaltfläche klickst und diesen Nutzungsbedingungen zustimmst.
                    </p>
                    <p className="agb-text">3.2. Du erhältst eine E-Mail zur Bestätigung des Vertragsschlusses, in der der Vertragsinhalt wiedergegeben ist.
                    </p>
                    <p className="agb-text">3.3. Die Vornahme einer Bestellung ist nur mit Vollendung des 16. Lebensjahres möglich.
                    </p>
                    <p className="agb-text">3.4. Die Dienste von Skilt Studio stellen kein verbindliches Angebot dar. Mit Betätigen des „Kaufen“ Buttons gibst Du ein verbindliches Angebot zum Abschluss einer Bestellung ab.
                    </p>

                    <p className="agb-text">
                        <strong>4. Nutzungsrechte</strong>
                    </p>
                    <p className="agb-text">4.1. Skilt Studio gewährt Dir nach Maßgabe der jeweiligen Bestellung ein einfaches, nicht übertragbares, nicht unterlizenzierbares, örtlich unbeschränktes Recht, die Dienste ausschließlich zu privaten Zwecken zu nutzen (nachfolgend „Lizenz“ genannt). Die Dienste werden so angeboten wie sie jeweils aktuell auf der Website und/ oder der App bzw. während des Bestellvorgangs bereitgestellten Informationen beschrieben sind.
                    </p>
                    <p className="agb-text">4.2. Du darfst die Dienste von Skilt Studio Dritten weder entgeltlich oder unentgeltlich überlassen. Auch ist es Dir untersagt, die Dienste zu veröffentlichen, zu lizenzieren, zu verkaufen oder anderweitig kommerziell zu verwerten. Es dürfen auch keine Rechte an den Diensten vermietet, verpachtet oder anderweitig eingeräumt oder übertragen werden.
                    </p>
                    <p className="agb-text">4.3. Du darfst die Dienste nicht ändern, anpassen, übersetzen, abgeleitete Arbeiten daraus erstellen, die Dienste zurück entwickeln, zu disassemblieren oder anderweitig zu versuchen, den Quellcode abzuleiten. Hiervon unberührt bleiben gesetzliche Befugnisse. Verboten ist auch jede Manipulation der Dienste des Programmcodes, etwa durch Viren, Trojaner oder andere schädliche Programmcodes oder andere Aktionen oder Werkzeuge, die zu Schäden der Dienste führen können.
                    </p>
                    <p className="agb-text">4.4. Du darfst den Inhalt der Dienste nicht ohne die schriftliche Zustimmung von Skilt Studio vervielfältigen, verarbeiten, teilen, öffentlich wiedergeben, es sei denn dies wird durch die Funktionen, welche in den Diensten integriert sind, ausdrücklich gestattet.
                    </p>
                    <p className="agb-text">4.5. Du darfst die Dienste nur wie in der Dokumentation beschrieben nutzen.
                    </p>
                    <p className="agb-text">4.6. Skilt Studio steht es zu, Deine Nutzung zu untersagen und/ oder sperren, wenn Skilt Studio der Auffassung ist, dass Du gegen vorgenannte Reglungen verstößt.
                    </p>

                    <p className="agb-text">
                        <strong>5. Eigentumsrechte</strong>
                    </p>
                    <p className="agb-text">5.1. Skilt Studio bleibt Eigentümer aller Eigentumsrechte. Dies gilt auch für Urheberrechte, Datenbankrechte, Patente, Geschäftsgeheimnisse, Marken und alle anderen geistigen Eigentumsrechte im Zusammenhang mit den Diensten. Dir werden nach einer Bestellung keine Eigentumsrechte an den Diensten verschafft.
                    </p>
                    <p className="agb-text">5.2. Die Rechte der von Dir angegebenen Nutzerdaten verbleiben bei Dir. Du gewährst Skilt Studio ein einfaches, nicht übertragbares, unterlizenzierbares, örtlich unbeschränktes Nutzungsrecht, die Nutzerdaten ausschließlich in Verbindung mit der Erbringung der Dienste zu nutzen. Sofern erforderlich kann Skilt Studio Deine Nutzerdaten gemäß der Datenschutzerklärung sowie unter Beachtung der jeweiligen Regelungen der Vertriebsplattformen (z. B. Google Play oder Apple App Store) an Drittanbieter weitergeben.
                    </p>

                    <p className="agb-text">
                        <strong>6. Nutzerpflichten</strong>
                    </p>
                    <p className="agb-text">6.1. Du bist alleinverantwortlich, Deine Zugangsdaten (Nutzername, Passwort) geheim zu halten und somit Dritten keinen Zugang zu Deinem Nutzerkonto zu gewähren. Vor allem ist es Dir untersagt, einem Dritten den Zugang zu Deinem Konto zu gewähren, um anfallende Gebühren zu umgehen. Du bist in der Pflicht, umgehend eine E-Mail an info@sklit.app zu schicken, falls es Anhaltspunkte gibt, dass sich ein Dritter Zugang zu Deinem Konto verschafft, hat bzw. es Hinweise auf einen Missbrauch Deines Kontos gibt. Skilt Studio behält sich vor bei auffälligen Aktivitäten Dein Konto zu sperren bzw. zu löschen.
                    </p>
                    <p className="agb-text">6.2. Für die Inhalte aller Daten, die von Dir über die Dienste angezeigt, hochgeladen und/ oder gespeichert werden, bist Du allein verantwortlich. Eine Prüfung durch Skilt Studio der von Dir übermittelten Informationen findet nicht statt und gewährleistet insofern auch nicht die Richtigkeit dieser Informationen. 
                    </p>
                    <p className="agb-text">6.3. Du bist verantwortlich, Dir die technischen Voraussetzungen und damit zusammenhängende zusätzlichen Dienste, die für die Verbindung mit, den Zugriff auf oder sonstige Nutzung der Dienste erforderlich sind, auf eigene Kosten instand zu halten bzw. zu beschaffen. Dies umfasst insbesondere, aber nicht abschließend die Hard- und Software, Internetverbindungen und Netzwerke. Soweit sich die Anforderungen zur Nutzung der Dienste ändert, können diese in der aktuellen Fassung auf der Webseite von Skilt Studio eingesehen werden. 
                    </p>

                    <p className="agb-text">
                        <strong>7. Support und Wartung</strong>
                    </p>
                    <p className="agb-text">7.1.  Skilt Studio bietet Support- Und Wartungsdienstleistungen an. Als Support wird die Verpflichtung bezeichnet, marktübliche Anstrengungen zu unternehmen, um auf Deine Supportanfragen in angemessener Zeit zu reagieren. Diesbezüglich wird Skilt Studio an der Fehleridentifikation mitwirken und Unterstützung leisten. Als Wartung wird die Verpflichtung bezeichnet, Aktualisierungen und Upgrades bereitzustellen sowie Störungen und sogenannte Bugs zu beheben. 
                    </p>
                    <p className="agb-text">7.2. Den Support von Skilt Studio erreichst Du über folgende E-Mail info@sklit.app. Der Support erfolgt von Montag bis Freitag während der regulären Geschäftszeiten.
                    </p>
                    <p className="agb-text">7.3. Skilt Studio übernimmt angemessene Anstrengungen, die Dienste entsprechend der geltenden Industriestandards zu Warten, damit Störungen und Unterbrechungen der Dienste reduziert werden. Störungen kannst Du per E-Mail an info@sklit.app melden . Caslisma übernimmt angemessene Anstrengungen, die gemeldeten Störungen rechtzeitig zu beheben. Dies ist nur möglich, wenn Du Skilt Studio eine detaillierte Beschreibung der Störung und seiner Reproduzierbarkeit übermittelst und dies abhängig von der Priorisierung der Störung erfolgt, welche von Skilt Studio nach eigenem Ermessen bestimmt wird. 
                    </p>


                    <p className="agb-text">
                        <strong>8. Verfügbarkeit</strong>
                    </p>
                    <p className="agb-text">8.1. Skilt Studio übernimmt angemessene Anstrengungen, Dir die Dienste über das Internet nicht weniger als neunundneunzig Komma fünf Prozent (99,5 %) des Kalenderjahres zur Verfügung zu stellen, basierend auf einem Verfügbarkeitsplan und vierundzwanzig (24) Stunden pro Tag und sieben (7) Tagen pro Woche. Hiervon ausgenommen sind vorübergehende Nichtverfügbarkeiten wegen planmäßigen oder außerplanmäßigen Wartungsarbeiten sowie Nichtverfügbarkeit, auf die Skilt Studio keinen Einfluss hat. Skilt Studio unternimmt angemessene Anstrengungen, um planmäßige Unterbrechungen der Dienste vorzeitig anzukündigen. 
                    </p>
                    <p className="agb-text">8.2. Skilt Studio haftet nicht für Ausfälle Deiner Internetverbindung oder Deines Systems. 
                    </p>

                    <p className="agb-text">
                        <strong>9. Gebühren/ Zahlungsbedingungen</strong>
                    </p>
                    <p className="agb-text">9.1. Für die Inanspruchnahme der Dienste bist Du verpflichtet, die in der Bestellung aufgeführten Gebühren zu zahlen. 
                    </p>
                    <p className="agb-text">9.2. Die Zahlung der Gebühr wird über die jeweilige Vertriebsplattform abgewickelt. Hierfür gelten die Nutzungs- und Zahlungsbedingungen der jeweiligen Vertriebsplattform in Ergänzung zu diesen Nutzungsbedingungen. Im Fall von Widersprüchen zwischen den Nutzungs- und Zahlungsbedingungen der jeweiligen Vertriebsplattform und diesen Nutzungsbedingungen haben die Nutzungs- und Zahlungsbedingungen der jeweiligen Vertriebsplattform Vorrang. 
                    </p>
                    <p className="agb-text">9.3. Du stehst gegenüber Skilt Studio für die vertretenden Stornierungen oder Belastungen, z. B. wegen mangelnder Kontodeckung, ein. Die hieraus entstehenden Kosten sind von Dir zu tragen. Du hast das Recht nachzuweisen, dass ein Schaden nicht oder nicht in der geforderten Höhe entstanden ist.
                    </p>
                    <p className="agb-text">
                        <strong>10. Vertragslaufzeit</strong>
                    </p>
                    <p className="agb-text">10.1. Die Laufzeit der Lizenz wird auf Lebenszeit gewährt. Sie endet mit Deinem Lebensende oder wenn Skilt Studio die Erbringung der Dienste insgesamt einstellt oder der Geschäftsbetrieb insgesamt eingestellt wird. 
                    </p>
                    <p className="agb-text">10.2. Die einmalige Lizenz gilt nur für die in der jeweiligen Bestellung beschriebenen Dienste zum Zeitpunkt des Vertragsschlusses und erstreckt sich nicht auf etwaige zukünftige Dienste. 
                    </p>
                    <p className="agb-text">10.3. Für Änderungen und Updates gelten die unter Ziffer 14.2. aufgeführten Regelungen. Eine Änderung durch Skilt Studio darf nur insoweit erfolgen als dies unter Berücksichtigung Deiner berechtigten Interessen zumutbar ist.
                    </p>
                    <p className="agb-text">10.4. Eine ordentliche Kündigung ist ausgeschlossen. Eine außerordentliche Kündigung bleibt hiervon unberührt. 
                    </p>

                    <p className="agb-text">
                        <strong>11. Widerrufsrecht</strong>
                    </p>
                    <p className="agb-text">11.1. Dir steht gesetzlich folgendes Widerrufsrecht zu
                    Widerrufsbelehrung
                    Du hast das Recht, binnen vierzehn (14) Tagen ohne Angaben von Gründen diesen Vertrag zu widerrufen.
                    Die Widerrufsfrist beträgt vierzehn (14) Tage ab dem Tag des Abschlusses des Vertrages. 
                    Um Dein Widerrufsrecht auszuüben, musst Du uns Skilt Studio, Gubener Str. 36A, 03149 Forst (Lausitz), E-Mail: info@sklit.app mittels einer eindeutigen Erklärung (z.B. ein mit Post versandter Brief, Telefax oder E-Mail) über Deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Dazu kannst Du das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                    Zur Wahrung der Widerrufsfrist reicht es aus, dass Du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest. 

                    Folgen des Widerrufs
                    Wenn Du den Vertrag widerrufst, haben wir Dir alle Zahlungen, die  wir von Dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Du eine andere Art der Lieferung als die von uns angebotene, günstige Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn (14) Tagen ab dem Tag zurückzuzahlen, an die Mitteilung über Deinen Widerruf dieses Vertrages bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit Dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Dir wegen dieser Rückzahlung Entgelte berechnet. 

                    Muster-Widerrufsformular
                    (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)
                    –
                    An Skilt Studio, Gubener Str. 36A, 03149 Forst (Lausitz), info@sklit.app
                    –
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)
                    –
                    Bestellt am (*)/erhalten am (*)
                    –
                    Name des/der Verbraucher(s)
                    –
                    Anschrift des/der Verbraucher(s)
                    –
                    Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
                    –
                    Datum

                    (*) Unzutreffendes streichen.

                    Ende der Widerrufsbelehrung
                    Besondere Hinweise zum Widerrufsrecht
                    Dein Widerrufsrecht erlischt vorzeitig bei Verträgen über Dienstleistungen (im Sinne des gesetzlichen Widerrufsrechts nach anwendbarem Recht): Bei entgeltlichen Dienstleistungen mit der vollständigen Erbringung der Dienstleistungen, wenn Du auf einem dauerhaften Datenträger ausdrücklich zugestimmt hast, dass Skilt Studio mit der Ausführung des Vertrages vor Ende der Widerrufsfrist beginnen soll und Du zur Kenntnis genommen hast, dass Du durch Deine Zustimmung Dein Widerrufsrecht bei vollständiger Ausführung des Vertrages verlierst. Wenn Du eine Bestellung von Dienstleistungen vor Ablauf der Widerrufsfrist widerrufst, musst Du Skilt Studio ggf. den Wert der bis zum Widerruf erbrachten Leistungen vergüten.  
                    Sind Dir anlässlich des Widerrufs Gebühren oder Kosten wegen Beauftragung Dritter (z.B. Banken, Zahlungsdienstleister) entstanden, übernimmt Skilt Studio solche Kosten nicht.  
                    </p>

                    <p className="agb-text">
                        <strong>12. Haftungsbeschränkung</strong>
                    </p>
                    <p className="agb-text">12.1. Skilt Studio haftet nicht für Schäden, die aus einer Verletzung nicht wesentlicher Pflichten bei einfacher Fahrlässigkeit durch Skilt Studio, ihrer gesetzlichen Vertreter oder eines Erfüllungsgehilfen entstehen. Die Haftung von Skilt Studio für einfache Fahrlässigkeit ist beschränkt auf die Verletzung von wesentlichen Pflichten (d.h. eine elementare Pflicht die das Wesen der Bestellung ausmachen und auf deren Erfüllung Du vertrauen darfst) die die ordnungsgemäße Durchführung der Bestellung erst möglich machen, deren Verletzung die Erreichung des Zwecks der Bestellung gefährden würde und auf deren Einhaltung Du nach normalen Umständen vertrauen darfst. 
                    </p>
                    <p className="agb-text">12.2. Im Falle der Verletzung einer solchen wesentlichen Pflicht haftet Skilt Studio nur für den vorhersehbaren, vertragstypischen Schaden. Diese Beschränkung gilt auch für Pflichtverletzungen der gesetzlichen Vertreter oder Erfüllungsgehilfen von Skilt Studio. Die persönliche Haftung der gesetzlichen Vertreter, Erfüllungsgehilfen und Mitarbeitenden von Skilt Studio für durch diese durch leichte Fahrlässigkeit verursachten Schäden ist ausgeschlossen. 
                    </p>
                    <p className="agb-text">12.3. Vorbehaltlich der zuvor genannten Regelungen ist die gesamte Haftung von Skilt Studio für Schäden aus oder im Zusammenhang mit einer Bestellung, sei es aus Vertrag, Delikt oder aus anderen Gründen, in jedem Fall beschränkt auf den Betrag von einhundertzehn (110) Prozent der Summe der von Dir gezahlten oder zahlbaren Gebühren unter der betroffenen Bestellung. 
                    </p>
                    <p className="agb-text">12.4. Die genannten Beschränkungen dieses Abschnittes gelten nicht bei Verletzung des Lebens, des Körpers, der Gesundheit, im Falle von Skilt Studio übernommenen vertraglichen Garantien oder im Falle einer Haftung nach dem Produkthaftungsgesetz. 
                    </p>
                    <p className="agb-text">12.5. Skilt Studio übernimmt keine Garantie, Gewährleistung oder Zusicherung für einem bestimmten Lern-/ Ausbildungserfolg bzw. Lernfortschritt, die durch die Nutzung der Dienste erfolgen.  
                    </p>
                    <p className="agb-text">12.6. Skilt Studio übernimmt im Falle eines Datenverluste Kosten der Widerherstellung bis zur Höhe der typischen Wiederherstellungskosten, die bei ordnungsgemäßer und regelmäßiger Datensicherung anfallen würden. 
                    </p>
                    <p className="agb-text">12.7. Soweit Verzögerungen oder Leistungsstörungen im Rahmen der Bestellung auf höhere Gewalt zurückzuführen sind, d.h. auf Umstände, die außerhalb des Einflussbereiches einer Partei liegen und ohne deren Verschulden oder Fahrlässigkeit eintreten, übernehmen Skilt Studio als auch Du keine Haftung. 
                    </p>

                    <p className="agb-text">
                        <strong>13. Salvatorische Klausel</strong>
                    </p>
                    <p className="agb-text">13.1. Die Nutzungsbedingungen und die Bestellung stellen die vollständige Vereinbarung zwischen Dir und Skilt Studio dar. Sie ersetzt alle vorherigen schriftlichen als auch mündlichen Vereinbarungen, Verhandlungen in Bezug auf den Vertragsgegenstand und schließt diese aus.
                    </p>
                    <p className="agb-text">13.2. Sollte eine Regelung einer Bestellung einschließlich dieser Bedingungen, ganz oder teilweise unwirksam oder nichtig sein oder werden, so wird die Wirksamkeit der übrigen Regelungen davon nicht berührt. An die Stelle der unwirksamen oder nichtigen Regelung tritt in diesem Fall eine Regelung, die in gesetzlich zulässiger Weise dem Sinn und Zweck der ursprünglichen Regelung am nächsten kommt. Beruht die Unwirksamkeit oder Nichtigkeit einer Regelung auf einem darin festgelegten Maß der Leistung oder der Zeit (Frist oder Termin), so tritt an deren Stelle eine Regelung mit einem dem ursprünglichen Umfang am nächsten kommenden rechtlich zulässigen Umfang. Das Vorstehende gilt auch für eine etwaige unbeabsichtigte Regelungslücke in der Bestellung einschließlich dieser Bedingungen.
                    </p>
                    <p className="agb-text">13.3. Vorbehaltlich des nachstehenden Abschnittes bedürfen Änderungen oder Ergänzungen einer Bestellung der Textform (E-Mail ausreichend), um wirksam zu werden. Gleiches gilt für Abweichungen oder der vollständige Verzicht von diesem Schriftformerfordernis.  
                    </p>

                    <p className="agb-text">
                        <strong>14. Änderung der Nutzungsbedingungen</strong>
                    </p>
                    <p className="agb-text">14.1. Die Grundlage des Nutzungsvertrages bilden immer die bei der Bestellung geltenden Nutzungsbedingungen. 
                    </p>
                    <p className="agb-text">14.2. Skilt Studio behält sich das Recht vor, die Nutzungsbedingungen für bestehende Bestellungen mit Wirkung für die Zukunft zu ändern und/ oder zu aktualisieren, wenn dies aus rechtlichen, technischen und wirtschaftlichen Gründen erforderlich ist. Die Benachrichtigung über geplante Änderungen erfolgt per E-Mail. Jede Änderung dieser Bedingungen wird Dir in einer angemessenen Weise, z. B. durch einen deutlichen Hinweis mit der Bitte um Deine Zustimmung innerhalb der Dienste oder durch Zusendung einer E-Mail mindestens sechs (6) Wochen vor ihrem beabsichtigten Wirksamwerden angekündigt. Du kannst jeder Änderung vor dem Tag ihres beabsichtigen Wirksamwerdens zustimmen oder widersprechen. 
                    </p>
                    <p className="agb-text">14.3. Falls Du den Änderungen vor dem Tag des beabsichtigen Wirksamwerdens nicht widersprichst, gilt Dein Schweigen als Zustimmung der Änderungen. Über diese Folgen wird Dich Skilt Studio in der entsprechenden Ankündigung ausdrücklich informieren. 
                    </p>


                    <p className="agb-text">
                        <strong>15. Geltendes Recht/ Verbraucherschlichtungsstelle</strong>
                    </p>
                    <p className="agb-text">15.1. Alle Streitigkeiten oder Ansprüche, die durch oder in Verbindung mit der Bestellung oder deren Gegenstand oder deren Abschluss entstehen, unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss der kollisionsrechtlichen Bestimmungen. 
                    </p>
                    <p className="agb-text">15.2. Die Anwendung des Übereinkommens der Vereinten Nationen über Verträge über den internationalen Warenkauf (CISG) wird ausgeschlossen.
                    </p>
                    <p className="agb-text">15.3. Skilt Studio ist nicht dazu verpflichtet, an einem Streitbeilegungsverfahren vor oder der Schiedsstelle der Europäischen Kommission oder vor einer anderen Verbraucherschlichtungsstelle teilzunehmen und ist dazu auch nicht bereit.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AGB;
