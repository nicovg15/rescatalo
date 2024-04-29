import React, { useState } from 'react'
import { stateContext } from './components/context/context'
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import FirstDivision from './components/FirstDivision';
import HowItWorks from './components/HowItWorks/HowItWorks';
import SecondDivision from './components/SecondDivision'
import WhySave from './components/WhySave/WhySave';
import ThirstDivision from './components/ThirstDivision'
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import ContactPopUp from './components/ContactPopUp';
import VideoDemo from './components/VideoDemo';
import FFDivision from './components/FFDivision';

function App() {
  const [contactPopUp, setContactPopUp] = useState(false)

  return (
    <div>
      <stateContext.Provider value={{contactPopUp, setContactPopUp}}>
        <Navbar />
        <Home />
        <FFDivision />
        <VideoDemo />
        <FirstDivision />
        <HowItWorks />
        <SecondDivision />
        <WhySave />
        <ThirstDivision />
        <DownloadApp />
        {contactPopUp ? <ContactPopUp /> : null}
        <Footer />
      </stateContext.Provider>
    </div>
  );
}

export default App;
