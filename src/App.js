import React, { useState } from 'react';
import './App.css';
import './Style.css';
import BodyContent from './Components/BodyContent';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [section, setSection] = useState("about");

  return (
  <>
    <div>
      <Header setSection={setSection} />
      <BodyContent section={section} />
    </div>

    <Footer />
  </>
  );
}

export default App;
