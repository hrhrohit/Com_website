import React, { useRef } from 'react';
import Desktop from './Components/Home/App';
import Footer from './Components/Home/Footer';
import Navbar from './Components/NavbarComponent/Navbar';
function App() {
  const contactRef = useRef(null);
  return (
    <>
      <Navbar contactRef={contactRef} />
      <Desktop contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;