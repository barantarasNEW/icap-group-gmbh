import './Move.scss';

const Move = () => {
  const onClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div className='move'>
      Back to top

      <button className='move__btn' onClick={onClick}>
        <img
          className="move__icon"
          src="/assets/icons/arrow.svg"
          alt="icon"
        />
      </button>
    </div>
  );
};

export default Move;