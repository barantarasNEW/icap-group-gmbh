import { Link } from "react-router-dom";
import { nets } from "./constants";
import './Nets.scss';

const Nets = () => {
  return (
    <ul className="nets__list">
      {nets.map(({ href, icon }) => (
        <li key={href} className="nets__item">
          <Link
            to={href}
            className="nets__link"
            target="_blank"
          >
            <img
              className="nets__icon"
              src={icon}
              alt="icon"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nets;