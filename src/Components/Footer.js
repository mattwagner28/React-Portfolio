
function Footer() {
  return (
    <footer id="contact">
      <h2 className="sectiontitle">CONTACT</h2>
      <p className="info-text">
        E-Mail:{" "}
        <a href="matthewwagner@outlook.com">matthewwagner@outlook.com</a> |
        Phone: 773-510-0932
      </p>
      <div id="socialmedia-icons">
        <a href="https://github.com/mattwagner28">
          <img
            src="../GitHub-Mark.png"
            width="50px"
            height="50px"
            alt="GitHub"
          />
        </a>
        <a href="https://www.linkedin.com/in/matthewtwagner">
          <img
            src="../../public/linkedin-mark.png"
            width="50px"
            height="50px"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.instagram.com/matt_wagner_/">
          <img
            src="../Instagram_icon.png.webp"
            width="50px"
            height="50px"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
