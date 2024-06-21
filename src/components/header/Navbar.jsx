import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../assets/shared/logo.svg";
import IconClose from "../../assets/shared/icon-close.svg";
import IconMenu from "../../assets/shared/icon-hamburger.svg";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          <img className="logo-image" src={logoImg} alt="logo-image" />
        </NavLink>
        <hr className="nav-lane" />
        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <NavLink to="/" className="nav-link">
              <strong>00 </strong> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className="nav-link">
              <strong>01 </strong> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="nav-link">
              <strong>02 </strong> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className="nav-link">
              <strong>03 </strong> Technology
            </NavLink>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <img src={IconClose} alt="Close Menu" />
          ) : (
            <img src={IconMenu} alt="Open Menu" />
          )}
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
