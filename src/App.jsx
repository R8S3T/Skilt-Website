import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartSection from "./components/StartSection";
import TiktokSection from "./components/TiktokSection";
import AboutSection from "./components/AboutSection";
import AppsSection from "./components/AppsSection";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import ThankYouSection from "./pages/ThankYouSection";
import ErrorPage from "./pages/ErrorPage";

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
                <TiktokSection />
                <AboutSection />
              </>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/danke" element={<ThankYouSection />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

