import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function BodyContent({ section }) {
  return (
    <div>
      {section === "about" && <About />}
      {section === "portfolio" && <Portfolio />}
      {section === "contact" && <Contact />}
      {section === "resume" && <Resume />}
    </div>
  );
}

export default BodyContent;
