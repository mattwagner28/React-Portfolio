import GitHubIcon from './GitHub-Mark.png';
import LinkedInIcon from './linkedin-mark.png';
import InstagramIcon from './Instagram_icon.png.webp';

function Footer() {
  return (
    <footer>
      <p className="info-text">
        E-Mail:{" "}
        <a href="matthewwagner@outlook.com">matthewwagner@outlook.com</a> |
        Phone: 773-510-0932
      </p>
      <div id="socialmedia-icons">
        <a href="https://github.com/mattwagner28">
          <img
            src={GitHubIcon}
            width="30px"
            height="30px"
            alt="GitHub"
          />
        </a>
        <a href="https://www.linkedin.com/in/matthewtwagner">
          <img
            src={LinkedInIcon}
            width="30px"
            height="30px"
            alt="LinkedIn"
          />
        </a>
        <a href="https://www.instagram.com/matt_wagner_/">
          <img
            src={InstagramIcon}
            width="30px"
            height="30px"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
