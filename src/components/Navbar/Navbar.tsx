import { NavLink } from "react-router-dom";
import { links } from "./constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
   <nav className="navbar">
      <ul className="navbar__list">
        {links.map(({ href, name }) => (
          <li key={href} className="navbar__item">
            <NavLink to={href} className="navbar__link">
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
   </nav> 
  );
};

export default Navbar;