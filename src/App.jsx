import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartSection from "./components/StartSection";
import TikTokSection from "./components/TikTokSection";
import AboutSection from "./components/AboutSection";
import AppsSection from "./components/AppsSection";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import ThankYouSection from "./pages/ThankYouSection";
import ErrorPage from "./pages/ErrorPage";
import Foerderung from "./pages/Foerderung";

const App = () => {
  return (
    <Router>
      <div>
        {/* Main Sections */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <StartSection />
                <AppsSection/>
                <TikTokSection />
                <AboutSection />
              </>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/danke" element={<ThankYouSection />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/foerderung" element={<Foerderung />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

