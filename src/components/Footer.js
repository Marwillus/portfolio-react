import "./styles/footer.css";
import { FaGithub, FaCodepen, FaLinkedin, FaSoundcloud } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id={"footer"}>
      <p>© 2021 by Marcus Will</p>
      <div className="social-links">
        <a href="https://github.com/Marwillus" target="_blank" rel="noreferrer">
          <FaGithub size="3rem" className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-will-256789203/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="3rem" className="icons" />
        </a>
        <a href="https://codepen.io/marwillus" target="_blank" rel="noreferrer">
          <FaCodepen size="3rem" className="icons" />
        </a>
        <a
          href="https://soundcloud.com/user-856030650-396764688"
          target="_blank"
          rel="noreferrer"
        >
          <FaSoundcloud size="3rem" className="icons" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
