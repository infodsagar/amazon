import kettle from '../../images/kettle.svg';

export const EmptyCart = () => {
  const handleClick = () => {
    window.open('./', '_self');
  };

  return (
    <div>
      <div className='empty-cart-box'>
        <img src={kettle} alt='empty-cart' />
        <div className='empty-cart-part2'>
          <span className='title-text'>Your Amazon Cart is empty</span>
          <a href='/' style={{ fontSize: '18px', color: '#007185' }}>
            Shop today's deals
          </a>
          <div className='empty-cart-btn-box'>
            <button
              type='button'
              className=' empty-cart-btn1'
              onClick={() => handleClick()}
            >
              Bring me back to home
            </button>
            <button
              type='button'
              className=' empty-cart-btn2'
              onClick={() => handleClick()}
            >
              Click here home
            </button>
          </div>
        </div>
      </div>
      <div className='empty-cart-blank-box'></div>
    </div>
  );
};
