import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import { Solution } from "../../types/Solution";
import './SolutionsList.scss';

type Props = {
  solutions: Solution[];
};

const SolutionsList: React.FC<Props> = ({ solutions }) => {
  return (
    <ul className="solutions-list">
      {solutions.map(({
        id,
        img,
        url,
        title,
        quote,
        rating
      }) => (
        <li key={id} className="solutions-list__item">
          <img
            className="solutions-list__img"
            src={img}
            alt=""
          />

          <div className="solutions-list__description">
            <h2 className="solutions-list__title">
              {title}
            </h2>

            <p className="solutions-list__quote">
              {quote}
            </p>

            <Rating rating={rating} />
          </div>

          <Link
            to={url}
            className="solutions-list__link"
            target="_blank"
          >
            Read more
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SolutionsList;