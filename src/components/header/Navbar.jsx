import { Link } from "react-router-dom";
import './Navbar.css'
import logoImg from '../../assets/shared/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img className="logo-image" src={logoImg} alt="logo-image"/>
      <hr className="nav-lane"/>
      <ul className="nav-items">
        <li>
          <Link to='/' className="nav-links"><span>00 </span> Home</Link>
        </li>
        <li>
          <Link to='/destination' className="nav-links"><span>01 </span> Destination</Link>
        </li>
        <li>
          <Link to='/crew' className="nav-links"><span>02 </span> Crew</Link>
        </li>
        <li>
          <Link to='/technology' className="nav-links"><span>03 </span> Technology</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
