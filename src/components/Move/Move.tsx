import './Move.scss';

const Move = () => {
  const { pathname } = useLocation();
  const onClick = () => {
    window.scrollTo({ top: 0 });
  };
  
  return (
    <div className='move'>
      Back to top

      <button className='move__btn' onClick={onClick}>
        <img
          className="icon move__icon"
          src={`${process.env.PUBLIC_URL}/assets/icons/arrow.svg`}
          alt="icon"
        />
      </button>
    </div>
  );
};

export default Move;
