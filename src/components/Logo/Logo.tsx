import { Link } from "react-router-dom";
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img
        className="logo__icon"
        src={`${process.env.PUBLIC_URL}/assets/icons/logo.svg`} 
        alt="logo"
      />

      <p className="logo__text">
        IGG
      </p>
    </Link>
  );
};

export default Logo;