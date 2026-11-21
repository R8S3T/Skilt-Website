import React from "react";
import Header from "../components/Header";
import { CAMPUS_TERMS } from "../data/campusLinks";
import "../styles/AGB.css";

// Die gültigen Fassungen liegen auf campus.skilt.app (dieselben, die App und Stores verlinken).
// Die Webseite hält bewusst keine eigenen Kopien mehr.
export default function AGB() {
  return (
    <>
      <Header />
      <main className="agb-container">
        <div className="agb-frame">
          <h1>AGB und Nutzungsbedingungen</h1>
          <p>Wähle die Bedingungen für dein Angebot.</p>
          {CAMPUS_TERMS.map((terms) => (
            <p key={terms.kind}>
              <a href={terms.url}>{terms.title}</a>
            </p>
          ))}
          <p>
            <a href="/agb/archiv-2026-09-18">Bisherige App-Bedingungen</a>
          </p>
        </div>
      </main>
    </>
  );
}
