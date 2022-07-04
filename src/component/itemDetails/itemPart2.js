import star1 from '../../images/star1.PNG';
import star2 from '../../images/star2.PNG';
import star3 from '../../images/star3.PNG';
import star35 from '../../images/star35.PNG';
import star45 from '../../images/star45.PNG';
import star4 from '../../images/star4.PNG';
import star5 from '../../images/star5.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export const Part2 = (props) => {
  const {
    brand,
    title,
    price,
    discountPercentage,
    category,
    stock,
    description,
    rating,
  } = props.item;
  return (
    <>
      <span className='title-text'>
        {brand} {` `}
        {title}
      </span>
      <p>
        <img
          src={
            rating >= 5
              ? star5
              : rating >= 4.5
              ? star45
              : rating >= 4
              ? star4
              : rating >= 3.5
              ? star35
              : rating >= 3
              ? star3
              : rating >= 2
              ? star2
              : star1
          }
          alt='star'
        />
      </p>
      <div className='line'>
        <hr />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <span>
          List Price:{' '}
          <span className='price' style={{ paddingLeft: '1px' }}>
            ${price}
          </span>
        </span>
        <span>
          Price: {`  `}
          <span
            className='price-disc-part3'
            style={{ color: '#B12704', paddingLeft: '5px' }}
          >
            ${Math.round(price - (price * discountPercentage) / 100)}
          </span>
        </span>
        <span>
          You Save:{' '}
          <span style={{ color: '#B12704', paddingLeft: '5px' }}>
            ${Math.round((price * discountPercentage) / 100)}
            .00(
            {Math.round(discountPercentage)}%)
          </span>
        </span>
        <span>
          No Import Fees Deposit & $12.53 Shipping to Australia Details
        </span>
        <span>
          <span style={{ color: '#1196AB', fontSize: '20px' }}>
            <FontAwesomeIcon icon={faCircleInfo} />{' '}
          </span>
          Sales taxes may apply at checkout
        </span>
      </div>

      <div className='line'>
        <hr />
      </div>
      <div>
        <p>
          <span style={{ fontWeight: 'bold' }}>Brand</span> {brand}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Category</span> {category}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Stock</span> {stock}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Color</span> White
        </p>
      </div>
      <div className='line'>
        <hr />
      </div>
      <div>
        <p>
          <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
            About this Item
          </span>
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <li>{description}</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            labore consequuntur nisi atque nostrum, quibusdam accusamus
            excepturi expedita unde harum in culpa! Facere saepe ipsam
            reprehenderit temporibus cum quod atque.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            labore consequuntur nisi atque nostrum, quibusdam accusamus
            excepturi expedita unde harum in culpa! Facere saepe ipsam
            reprehenderit temporibus cum quod atque.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            labore consequuntur nisi atque nostrum, quibusdam accusamus
            excepturi expedita unde harum in culpa! Facere saepe ipsam
            reprehenderit temporibus cum quod atque.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            labore consequuntur nisi atque nostrum, quibusdam accusamus
            excepturi expedita unde harum in culpa! Facere saepe ipsam
            reprehenderit temporibus cum quod atque.
          </li>
        </ul>
      </div>
    </>
  );
};
