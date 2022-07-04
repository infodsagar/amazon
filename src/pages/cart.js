import { CartPart1 } from '../component/cart/cartPart1';
import { EmptyCart } from '../component/cart/emptyCart';
import { useCart } from '../hooks/useCart';

export const Cart = () => {
  const { itemCount } = useCart();

  return <>{itemCount > 0 ? <CartPart1 /> : <EmptyCart />}</>;
};
