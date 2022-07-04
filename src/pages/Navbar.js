import logo from '../images/logo.PNG';
import cart from '../images/cart.png';
import { useCart } from '../hooks/useCart';

export const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <>
      <div className='nav-box'>
        <a href='/'>
          {' '}
          <img src={logo} alt='logo' className='img-logo' />
        </a>
        <div className='cart-box'>
          <a href='/cart'>
            <img src={cart} alt='logo' className='img-cart' />
          </a>
          <h1 className='cart-count'>{itemCount}</h1>
        </div>
      </div>
    </>
  );
};
