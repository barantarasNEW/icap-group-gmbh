import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import './AdditionalBar.scss';

const AdditionalBar = () => {
  return (
    <nav className="additional-bar">
      <ul className="additional-bar__list">
        <li className='additional-bar__item'>
          <DarkMode />
        </li>

        <li className="additional-bar__item">
          <Link
            to="https://calendly.com/icapgroup/start"
            className="btn"
            target="_blank"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdditionalBar;