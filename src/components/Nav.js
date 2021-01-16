import Logo from "../images/logo_symbol.svg";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={"navbar"}>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <img src={Logo} alt="logo" className={"logo"} />
      </ul>
    </nav>
  );
};

export default Navbar;
