import { Dropdown } from '../../hooks/dropdown';
import { useCart } from '../../hooks/useCart';

const data = [
  { id: 0, label: '1' },
  { id: 1, label: '2' },
  { id: 2, label: '3' },
  { id: 3, label: '4' },
];

export const CartItem = (props) => {
  const { removeProduct, increase } = useCart();

  const { thumbnail, brand, title, id, price, discountPercentage, stock, qty } =
    props.item;

  return (
    <>
      <div key={id} className='cart-item'>
        <img src={thumbnail} alt='thumbnail' />
        <div className='cart-item-part2'>
          <span className='title-text' style={{ display: 'flex' }}>
            <div>{brand}</div>
            <div style={{ paddingLeft: '10px' }}>{title}</div>
          </span>
          <span
            style={{ paddingTop: '15px', fontSize: '16px', color: '#007600' }}
          >
            {stock > 0 ? 'In Stock.' : 'Sorry Out of Stock'}
          </span>

          <span style={{ fontSize: '18px', paddingTop: 5 }}>Color: red</span>
          <div className='cart-item-part2-flex'>
            <Dropdown
              key={id}
              data={data}
              qty={qty}
              increase={increase}
              item={props.item}
            />
            <span className='pipe'>|</span>
            <button
              type='button'
              className='cart-delete-btn'
              onClick={() => removeProduct(props.item)}
            >
              Delete
            </button>
          </div>
        </div>
        <span className='cart-item-price' style={{ marginLeft: 'auto' }}>
          ${Math.round(price - (price * discountPercentage) / 100)}
        </span>
      </div>
    </>
  );
};
