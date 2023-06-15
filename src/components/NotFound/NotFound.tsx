import { useNavigate } from "react-router";
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();
  
  const onClick = () => {
    navigate("/");
  };

  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <h2 className="title">
          Not found
        </h2>

        <button
          className="btn"
          onClick={onClick}
        >
          Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;