import { useState } from 'react';

export const Part1 = (props) => {
  const { images } = props.item;

  const [imgIndex, setImgIndex] = useState(0);
  const imgChanger = (index) => {
    setImgIndex(index);
  };
  return (
    <>
      <div className='img-details-box'>
        <div>
          {images.map((img, index) => {
            return (
              <img
                src={img}
                className='img-thumbnail'
                onMouseOver={() => imgChanger(index)}
                key={index}
                alt='small thumb'
              />
            );
          })}
        </div>
        <div>
          <img src={images[imgIndex]} className='img-main' alt='small img' />
        </div>
      </div>
    </>
  );
};
