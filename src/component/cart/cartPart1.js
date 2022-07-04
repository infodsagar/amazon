import { useCart } from '../../hooks/useCart';
import { CartItem } from './cartItem';

export const CartPart1 = () => {
  const { cartItems, itemCount, total } = useCart();

  return (
    <div style={{ margin: '0 0 100px 0' }}>
      <div className='cart-container'>
        <div className='cart-title'>
          <span className='cart-title-text'>Shopping Cart</span>
          <span className='cart-title-price'>price</span>
        </div>
        <div className='line'>
          <hr />
        </div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
        <div className='line'>
          <hr />
        </div>
        <div className='cart-sub-total'>
          Subtotal ({itemCount ? itemCount : 0}
          items):{' '}
          <span style={{ fontWeight: 'bolder', paddingRight: '10px' }}>
            ${total}
          </span>
        </div>
      </div>
      <div className='empty-cart-blank-box'></div>
    </div>
  );
};
