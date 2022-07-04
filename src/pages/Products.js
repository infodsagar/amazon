import star1 from '../images/star1.PNG';
import star2 from '../images/star2.PNG';
import star3 from '../images/star3.PNG';
import star35 from '../images/star35.PNG';
import star45 from '../images/star45.PNG';
import star4 from '../images/star4.PNG';
import star5 from '../images/star5.PNG';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export const Products = () => {
  let navigate = useNavigate();

  const { data, error, isPending } = useFetch('https://dummyjson.com/products');

  return (
    <div className='products-box'>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {data &&
        data.products.map((item) => {
          const {
            id,
            thumbnail,
            description,
            title,
            discountPercentage,
            price,
            rating,
          } = item;
          return (
            <div
              key={id}
              className='item-box'
              onClick={() => {
                navigate(`/item/${id}`);
              }}
            >
              <div className='img-box' key={id}>
                <img src={thumbnail} className='item-image' key={id} alt='' />
              </div>
              <p className='item-description' key={id}>
                {description}
              </p>
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
                alt='rating'
              />
              <p key={id}>{title}</p>
              <div className='price-box' key={id}>
                <p className='percentage'>{Math.round(discountPercentage)}%</p>
                <p className='price-disc'>
                  ${Math.round(price - (price * discountPercentage) / 100)}
                </p>
                <p className='price'>${price}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
