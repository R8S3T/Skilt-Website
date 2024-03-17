import React from 'react';
import Header from './Header.tsx';
import Landing from './Landing.tsx';
import DemoSection from './DemoSection.tsx';
import Footer from './Footer.tsx';

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
