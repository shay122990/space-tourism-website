import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logoImg from '../../assets/shared/logo.svg'
import IconClose from '../../assets/shared/icon-close.svg';
import IconMenu from '../../assets/shared/icon-hamburger.svg';


const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  return (
    <nav className="navbar">
      <img className="logo-image" src={logoImg} alt="logo-image"/>
      <hr className="nav-lane"/>
      <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <li>
          <Link to='/'><strong>00 </strong> Home</Link>
        </li>
        <li>
          <Link to='/destination'><strong>01 </strong> Destination</Link>
        </li>
        <li>
          <Link to='/crew'><strong>02 </strong> Crew</Link>
        </li>
        <li>
          <Link to='/technology'><strong>03 </strong> Technology</Link>
        </li>
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
         {mobile ? <img src={IconClose} alt="Close Menu" /> : <img src={IconMenu} alt="Open Menu" />}
      </button>

    </nav>

  );
};

export default Navbar;
