import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function BodyContent({ section }) {
  return (
    <div>
      {section === "about" && <About />}
      {section === "portfolio" && <Portfolio />}
      {section === "contact" && <Contact />}
    </div>
  );
}

export default BodyContent;
