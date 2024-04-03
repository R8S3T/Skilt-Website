import React from 'react';
import Header from './components/Header.tsx';
import Landing from './components/Landing.tsx';
import DemoSection from './components/DemoSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import BackgroundContainer from './components/BackgroundContainer.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <BackgroundContainer>
        <Landing />
        <div id="features"><DemoSection /></div>
        <div id="about"><AboutSection /></div>
        <div id="contact"><ContactSection /></div>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default App;

