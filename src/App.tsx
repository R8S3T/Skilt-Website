import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Landing from './components/Landing.tsx';
import DemoSection from './components/DemoSection.tsx';
import Features from './components/Features.tsx';
import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import BackgroundContainer from './components/BackgroundContainer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <BackgroundContainer>
              <Landing />
              <div id="demo"><DemoSection /></div>
              <div id="features"><Features /></div>
              <div id="about"><AboutSection /></div>
              <div id="contact"><ContactSection /></div>
            </BackgroundContainer>
            } />
            <Route path="/datenschutzerklaerung" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

