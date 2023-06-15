import { useContext } from "react";
import AdditionalBar from "../AdditionalBar/AdditionalBar";
import Navbar from "../Navbar/Navbar";
import { MenuContext } from "../../contexts/MenuContext";
import './Menu.scss';

const Menu = () => {
  const { isMenu } = useContext(MenuContext);
  
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