import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartSection from "./components/StartSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import ThankYouSection from "./pages/ThankYouSection";

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
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <AboutSection />
              </>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/danke" element={<ThankYouSection />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

