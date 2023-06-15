import { createPortal } from "react-dom";
import './Loader.scss'

const Loader = () => {
  return (
    <>
      {createPortal(
        (
          <div className="lds-dual-ring" />
        ),
        document.getElementById("portal") as HTMLElement
      )}
    </>
  );
};

export default Loader;