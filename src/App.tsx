import React from 'react';
import Header from './components/Header.tsx';
import Landing from './components/Landing.tsx';
import DemoSection from './components/DemoSection.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Landing />
      <DemoSection />
      <Footer />
    </div>
  );
};


export default App;
