import './Rating.scss';

type Props = {
  rating: number;
}

const Rating: React.FC<Props> = ({ rating }) => {
  return (
    <ul className="rating__list">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="rating__item">
          <img
            className='rating__icon'
            src={`./assets/icons/${i + 1 <= rating
              ? "star-y.svg"
              : "star-b.svg"}`
            }
            alt="icon"
          />
        </li>
      ))}
    </ul>
  );
};

export default Rating;