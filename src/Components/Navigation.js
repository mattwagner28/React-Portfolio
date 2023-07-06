function Navigation({ setSection }) {
  
  const handleClick = (selectedSection) => {
    setSection(selectedSection);
  };

  return (
    <header>
      <h1>matthew wagner | developer</h1>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleClick("about")} href="#about">
              about
            </a>
          </li>
          <li>
            <a onClick={() => handleClick("portfolio")} href="#portfolio">
              portfolio
            </a>
          </li>
          <li>
            <a onClick={() => handleClick("contact")} href="#contact">
              contact
            </a>
          </li>
          <li>
            <a onClick={() => handleClick("resume")} href="#resume">
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
