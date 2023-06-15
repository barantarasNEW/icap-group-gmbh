import { useContext } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import AdditionalBar from "../AdditionalBar/AdditionalBar";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import { MenuContext } from '../../contexts/MenuContext';
import './Header.scss';

const Header = () => {
  const { isMenu, toggleMenu } = useContext(MenuContext);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__top">
          <Logo />

          <Navbar />

          <AdditionalBar />
        </div>

        <div className="header__menu">
          <Logo />
  
          <button className="header__menu-btn" onClick={toggleMenu}>
            {!isMenu
              ? <AiOutlineMenu size={27} />
              : <RxCross1 size={27} />}
          </button>
        </div>

        <div className="header__bottom">
          <div className="container">
            <BreadCrumbs />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;