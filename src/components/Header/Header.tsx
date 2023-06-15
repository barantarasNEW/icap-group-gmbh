import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import AdditionalBar from "../AdditionalBar/AdditionalBar";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import './Header.scss';

type Props = {
  isMenu: boolean;
  onClick: () => void;
}

const Header: React.FC<Props> = ({ isMenu, onClick }) => {
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
  
          <button className="additional-bar__btn" onClick={onClick}>
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