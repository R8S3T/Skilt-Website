import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CAMPUS_TERMS } from "../data/campusLinks";

// Alte Adressen wie /agb/campus-team leiten auf die gültige Fassung auf campus.skilt.app weiter.
// Unbekannte Adressen landen auf der AGB-Übersicht.
export default function AppTerms() {
  const { kind } = useParams();

  useEffect(() => {
    const terms = CAMPUS_TERMS.find((entry) => entry.kind === kind);
    window.location.replace(terms ? terms.url : "/agb");
  }, [kind]);

  return null;
}
