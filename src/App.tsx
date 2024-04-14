// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Landing from './components/Landing.tsx';
import DemoSection from './components/DemoSection.tsx';
import Features from './components/Features.tsx';
import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import Impressum from './components/Impressum.tsx';
import BackgroundContainer from './components/BackgroundContainer.tsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <BackgroundContainer> {/* Wrap only intended components */}
              <Landing />
              <DemoSection />
              <Features />
              <AboutSection />
              <ContactSection />
            </BackgroundContainer>
          } />
          <Route path="/datenschutzerklaerung" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


