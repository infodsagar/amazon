import { useCart } from '../../hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../../hooks/dropdown';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const data = [
  { id: 0, label: '1' },
  { id: 1, label: '2' },
  { id: 2, label: '3' },
];

export const Part3 = (props) => {
  const { price, discountPercentage, stock, id } = props.item;
  const { addProduct } = useCart();
  const [qty, setQty] = useState({ ...props.item, quantity: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(qty);
    window.open('/cart', '_self');
  };

  return (
    <>
      <span
        className='price-disc-part3'
        style={{ paddingTop: '40px', color: '#B12704' }}
      >
        ${Math.round(price - (price * discountPercentage) / 100)}
      </span>
      <span style={{ paddingTop: '15px' }}>
        No Import Fees Deposit & $20.34 Shipping to Australia Details{' '}
      </span>
      <span style={{ paddingTop: '15px' }}>
        <span style={{ color: '#1196AB', fontSize: '20px' }}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </span>{' '}
        Sales taxes may apply at checkout
      </span>
      <span style={{ paddingTop: '15px', fontSize: '20px', color: '#007600' }}>
        {stock > 0 ? 'In Stock.' : 'Sorry Out of Stock'}
      </span>
      <form className='add-cart' onSubmit={(e) => handleSubmit(e)}>
        <Dropdown data={data} key={id} setQty={setQty} item={qty} />
        <button type='submit' className='partition3-btn-addcart'>
          Add to cart
        </button>
        <button type='button' className='partition3-btn-buynow'>
          Buy Now
        </button>
      </form>
    </>
  );
};
