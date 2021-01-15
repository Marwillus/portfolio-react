import Logo from "../images/logo_symbol.svg";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={"navbar"}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <img src={Logo} alt="logo" className={"logo"} />
      </ul>
    </nav>
  );
};

export default Navbar;
