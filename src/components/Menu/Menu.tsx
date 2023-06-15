import AdditionalBar from "../AdditionalBar/AdditionalBar";
import Navbar from "../Navbar/Navbar";
import './Menu.scss';

type Props = {
  isMenu: boolean;
}

const Menu: React.FC<Props> = ({ isMenu }) => {
  return (
    <div
      className="menu"
      style={{ transform: `translateX(${isMenu ? '0' : '100%'})` }}
    >
      <Navbar />

      <AdditionalBar />
  </div>
  );
};

export default Menu;